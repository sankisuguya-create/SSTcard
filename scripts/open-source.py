import sys,os,json,subprocess,termios
fd=sys.stdin.fileno();t=termios.tcgetattr(fd);t[3]&=~termios.ECHO;termios.tcsetattr(fd,termios.TCSANOW,t);print('Ready for credential JSON (hidden).',flush=True)
c=json.loads(sys.stdin.readline());os.chdir('/workspace/kokoro-cards');env=os.environ.copy();env.update(GIT_CONFIG_COUNT='1',GIT_CONFIG_KEY_0='http.extraHeader',GIT_CONFIG_VALUE_0='Authorization: Bearer '+c['token'],GIT_TERMINAL_PROMPT='0')
def run(args):
 p=subprocess.run(args,capture_output=True,text=True,env=env)
 if p.returncode:print(p.stderr.replace(c['token'],'[redacted]'));sys.exit(p.returncode)
 return p.stdout.strip()
run(['git','fetch','origin',c['branch']]);run(['git','merge','--ff-only','origin/'+c['branch']]);print(json.dumps({'commit_sha':run(['git','rev-parse','HEAD']),'checkout_path':os.getcwd()}))
