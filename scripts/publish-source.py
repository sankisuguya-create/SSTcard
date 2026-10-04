import sys,os,json,subprocess,termios,tarfile
fd=sys.stdin.fileno();t=termios.tcgetattr(fd);t[3]&=~termios.ECHO;termios.tcsetattr(fd,termios.TCSANOW,t)
print('Ready for credential JSON on stdin (input is hidden).',flush=True)
c=json.loads(sys.stdin.readline());os.chdir('/workspace/kokoro-cards')
def run(args,env=None):
 p=subprocess.run(args,capture_output=True,text=True,env=env)
 if p.returncode:
  print(p.stderr.replace(c['token'],'[redacted]'));sys.exit(p.returncode)
 return p.stdout.strip()
if not os.path.isdir('.git'):run(['git','init','-b',c['branch']])
run(['git','config','user.name','Codex']);run(['git','config','user.email','codex@openai.com'])
remotes=run(['git','remote']).splitlines()
run(['git','remote','set-url' if 'origin' in remotes else 'add','origin',c['remote_url']])
run(['git','add','.']);status=run(['git','status','--porcelain'])
if status:run(['git','commit','-m','Build interactive two-story social strategy card mock'])
sha=run(['git','rev-parse','HEAD'])
env=os.environ.copy();env['GIT_CONFIG_COUNT']='1';env['GIT_CONFIG_KEY_0']='http.extraHeader';env['GIT_CONFIG_VALUE_0']='Authorization: Bearer '+c['token'];env['GIT_TERMINAL_PROMPT']='0'
run(['git','push','-u','origin','HEAD:'+c['branch']],env)
remote=run(['git','ls-remote','origin','refs/heads/'+c['branch']],env).split()[0]
if remote!=sha:raise Exception('Remote source mismatch')
archive='/workspace/kokoro-cards.tar.gz'
with tarfile.open(archive,'w:gz') as tar:
 tar.add('.openai/hosting.json',arcname='.openai/hosting.json');tar.add('dist',arcname='dist')
print(json.dumps({'project_id':json.load(open('.openai/hosting.json'))['project_id'],'commit_sha':sha,'archive':archive}),flush=True)
