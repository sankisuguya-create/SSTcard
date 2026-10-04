from pathlib import Path
p=Path('/workspace/kokoro-cards/dist/engine.mjs')
s=p.read_text()
point=s.index('export const stories=')
cards=s[:point]
extra=r"""
export const categories={talk:{label:'話す',icon:'message'},face:{label:'立ち向かう',icon:'shield'},escape:{label:'逃げる',icon:'door'},think:{label:'考える',icon:'thought'},vent:{label:'愚痴る',icon:'cloud'},info:{label:'情報収集',icon:'search'}};
Object.assign(cards,{
 reflectFight:{title:'何が一番嫌だった？',cost:0,desc:'腹が立った理由を、自分に問い直す。',hint:'今の目的を、仮に決める',category:'think',inquiry:true},
 reflectSports:{title:'何が気になるんだろう',cost:0,desc:'運動会の何が心配か、自分に問い直す。',hint:'予想は、あとで変えてもいい',category:'think',inquiry:true},
 retort:{title:'「そっちが悪い！」',cost:1,desc:'自分の言い分を、強い言葉で押し返す。',hint:'相手も言い返すかもしれない',category:'face',risk:true},
 ventFight:{title:'ミナに愚痴をこぼす',cost:1,desc:'「勝手に外されて腹が立つ」と聞いてもらう。',hint:'気持ちを出す。解決とは別の一歩',category:'vent'},
 blame:{title:'みんなの前で責める',cost:1,desc:'班のみんなに、ハルが悪いと訴える。',hint:'味方がほしい。でも話が広がるかも',category:'face',risk:true},
 ignore:{title:'何も言わず無視する',cost:0,desc:'今は話したくない。返事をしないでおく。',hint:'気持ちは伝わる？ 誤解される？',category:'escape',risk:true},
 greet:{title:'今日は、あいさつから',cost:0,desc:'昨日のことが残っていても、声をかける。',hint:'話の入口をつくる小さな一手',category:'talk'},
 checkPromise:{title:'昨日の約束を確かめる',cost:1,desc:'動かす前に聞く約束を、一緒に確認する。',hint:'約束があるときに使える',category:'info'},
 retry:{title:'昨日の続きから話す',cost:1,desc:'一度止まった話を、落ち着いて始め直す。',hint:'今なら話せるか、確かめる',category:'talk'},
 holdGrudge:{title:'昨日のことを責め続ける',cost:1,desc:'まだ許せない気持ちを、何度もぶつける。',hint:'分かってほしい。でも相手の余裕は？',category:'vent',risk:true},
 safeSpace:{title:'別の席で考える',cost:0,desc:'場所を変えて、今日の関わり方を考える。',hint:'距離を取ってから、選び直せる',category:'escape'},
 ventSports:{title:'ソラに「嫌だなあ」',cost:0,desc:'うまく説明できなくても、気が重いと話す。',hint:'分かってもらえる部分はあるかな',category:'vent'},
 skipWorry:{title:'考えないことにする',cost:0,desc:'運動会の話を避け、今は別のことをする。',hint:'今は楽でも、準備は進まないかも',category:'escape',risk:true},
 overtrain:{title:'休まず、何度も走る',cost:2,desc:'たくさん練習すれば何とかなる、と続ける。',hint:'疲れや、苦手の理由も関係する',category:'face',risk:true},
 pretend:{title:'平気なふりをする',cost:0,desc:'先生に「大丈夫」と言って、困りごとを隠す。',hint:'心配はされない。でも支援は？',category:'escape',risk:true},
 force:{title:'つらくても全部出る',cost:2,desc:'途中で変えずに、全部やり切ろうとする。',hint:'今の負担に合うか、考えたい',category:'face',risk:true},
 disappear:{title:'何も伝えず持ち場を離れる',cost:0,desc:'その場から離れる。行き先は伝えない。',hint:'休めても、周りが探すかもしれない',category:'escape',risk:true},
 askRest:{title:'休むことを伝える',cost:0,desc:'先生に居場所を伝えて、休憩に移る。',hint:'当日でも助けを求められる',category:'talk'},
 checkBody:{title:'今の負担を確かめる',cost:0,desc:'体のサインを見て、参加のしかたを考える。',hint:'予想と今の状態を比べる',category:'think'}
});
const categoryMap={boundary:'face',ask:'info',distance:'escape',relocate:'talk',promise:'talk',effort:'talk',mina:'talk',repair:'talk',together:'talk',later:'escape',practice:'face',schedule:'info',sora:'talk',small:'face',private:'face',place:'escape',signal:'talk',notice:'talk',observe:'info',participate:'face',adjust:'talk',useSignal:'escape'};
for(const [id,c] of Object.entries(cards)){c.category??=categoryMap[id];c.kind=c.category;c.label=categories[c.category].label;c.icon=categories[c.category].icon;}
export const stories={
 fight:{title:'ふたりで作ったはずなのに',nav:'クラスの子とのケンカ',num:'01',goals:['自分の気持ちを伝えたい','作品を大切にしたい','まず距離を取って落ち着きたい','相手に謝ってほしい','関係をつなぎ直したい'],chapters:['図工の時間','どう伝えよう？','翌日の班活動'],locations:['教室・図工の時間','教室・片づけの前','教室・次の日']},
 sports:{title:'あと一週間、どうしよう',nav:'苦手な運動会',num:'02',goals:['動きを身につけたい','人の目への不安を軽くしたい','負担を減らす方法を探したい','まず理由を確かめたい'],chapters:['運動会まで7日','練習の日','運動会当日'],locations:['教室・帰りの会','校庭・練習の日','校庭・運動会当日']}
};
export const goalText=s=>s.goal===null?'まだ決めていない':stories[s.story].goals[s.goal];
export function initial(story='fight',seed=Date.now()%100000){const s={story,seed,context:{cause:['noise','judgment','movement'][seed%3]},stage:0,stress:story==='fight'?4:3,energy:story==='fight'?3:4,progress:0,goal:null,goalHistory:[],hand:[],discovered:[],used:[],usedStage:[],flags:{},clues:[],relations:[],growth:[],log:[],explored:[],rested:[],feedback:null,finished:false,reason:null,reflection:null,dealNotice:''};deal(s);return s;}
const add=(arr,v)=>{if(!arr.includes(v))arr.push(v)};
const eligible=(s,id)=>{if(s.story==='fight'){if(s.stage===2)return ['promise','effort','mina','repair'].includes(id);return true}if(s.stage===2)return ['place','useSignal','notice'].includes(id);return id!=='useSignal'};
function grant(s,id){add(s.discovered,id);if(eligible(s,id)&&!s.hand.includes(id))s.hand.push(id)}
function note(s,t){add(s.clues,t)}
function relation(s,t){add(s.relations,t)}
function growth(s,t){add(s.growth,t)}
export function deal(s){
 let base;
 if(s.story==='fight')base=s.stage===0?['boundary','ask','distance','reflectFight','retort','ventFight']:s.stage===1?['repair','together','later','blame','ignore','reflectFight']:['greet',s.flags.promise?'checkPromise':'retry','safeSpace','holdGrudge','reflectFight'];
 else base=s.stage===0?['practice','schedule','sora','reflectSports','skipWorry','ventSports']:s.stage===1?['small','observe','overtrain','pretend','reflectSports']:['participate','adjust',s.flags.signal?'useSignal':'askRest','force','disappear','checkBody'];
 const earned=s.discovered.filter(id=>eligible(s,id)&&!s.used.includes(id)&&!base.includes(id)).slice(-2);
 s.hand=[...base,...earned];s.usedStage=[];s.dealNotice=s.stage===0?'今の場面で選べる作戦':'場面が変わったので、手札を配り直した。発見した作戦はノートに残る。';
}
const thoughtOptions={fight:[['why','飾りを残したかったのかな','作品を大切にしたい'],['respect','勝手に決められたのが嫌だった？','自分の気持ちを伝えたい'],['feeling','頑張ったことを知ってほしい？','自分の気持ちを伝えたい'],['cool','今は関わるのがつらい？','まず距離を取って落ち着きたい'],['revenge','相手に謝ってほしいのかな','相手に謝ってほしい'],['connect','また一緒に作りたいのかな','関係をつなぎ直したい']],sports:[['movement','動き方が分からないのかな','動きを身につけたい'],['judgment','人に見られるのが心配かな','人の目への不安を軽くしたい'],['noise','音や人の多さがつらいのかな','負担を減らす方法を探したい'],['unknown','まだ、よく分からない','まず理由を確かめたい']]};
export function explorationOptions(s,type){if(type==='think')return thoughtOptions[s.story].map(([id,title,goal])=>({id,title,desc:'仮の目的：'+goal,disabled:s.explored.includes(s.stage+':'+id)}));const rows=s.story==='fight'?(s.stage===2?[['haru','ハルに、今の気持ちを聞く','昨日のあと、どう思っているか確かめる。'],['mina','ミナに、間に入ってもらえるか聞く','今日の話し方を相談する。']]:[['haru','ハルに、理由を聞く','何がじゃまだったのか、確かめる。'],['mina','ミナに、話を聞く','見ていた人の手がかりをもらう。']]):(s.stage===2?[['teacher','先生に、今の負担を伝える','当日の待つ場所や休み方を相談する。'],['friend','ソラに、応援のしかたを相談する','今、してほしいことを伝える。']]:[['teacher','先生に、過ごし方を相談する','予定や待つ場所を聞いてみる。'],['friend','ソラに、気持ちを話す','二人でできる工夫を相談する。']]);return rows.map(([id,title,desc])=>({id,title,desc,disabled:s.explored.includes(s.stage+':'+id)}))}
export function explore(s,key){
 if(s.finished||s.feedback)return null;const opt=[...explorationOptions(s,'think'),...explorationOptions(s,'talk')].find(x=>x.id===key);if(!opt||opt.disabled)return null;
 s.explored.push(s.stage+':'+key);const out={text:'',card:null,goal:null};
 const thoughts=thoughtOptions[s.story].map(x=>x[0]);if(thoughts.includes(key)){
  const map=s.story==='fight'?{why:[1,'relocate'],respect:[0,'promise'],feeling:[0,'effort'],cool:[2,s.stage===2?'safeSpace':'later'],revenge:[3,s.stage===2?'holdGrudge':'retort'],connect:[4,s.stage===2?'retry':'repair']}:{movement:[0,s.stage===2?'participate':'small'],judgment:[1,'notice'],noise:[2,s.stage===2?'askRest':'signal'],unknown:[3,s.stage===2?'checkBody':'observe']};
  const [goal,id]=map[key];s.reason=key;setGoal(s,goal,key);out.goal=goalText(s);out.card=id;out.text='「'+opt.title.replace('？','')+'」と考えた。\n今は「'+out.goal+'」を目指してみる。\nこれは仮の見立て。原因の予想や目指す方向は、試したあとで問い直せる。';growth(s,'仮の目的を「'+out.goal+'」と考えた。');
 }else if(key==='haru'){
  s.flags.reason=true;
  if(s.stage===2){out.text=s.flags.aggravated?'ハル「昨日、みんなの前で言われたのはつらかった。今日は落ち着いて話したい」':'ハル「昨日のこと、まだ話せていないところもあるよね」';note(s,'ハルは、今日あらためて話したいと言っていた。');out.card='repair'}else{note(s,'飾りがあると、ふたが閉まらなかった。');out.text='ハル「ふたが閉まらなくて、片づけの時間も近かったんだ」\n理由は分かった。でも、勝手に変えてよかったかは別の話。';out.card='relocate'}
 }else if(key==='mina'){s.flags.mina=true;out.text=s.stage===2?'ミナ「今日なら、一緒に昨日の続きの話を聞けるよ」':'ミナ「飾りは机に置いてあるよ。一緒に話そうか？」';note(s,s.stage===2?'ミナが、話に一緒に入れると言った。':'飾りは捨てられず、机に置いてある。');out.card='mina'}
 else if(key==='teacher'){s.flags.teacher=true;note(s,'先生と待つ場所や休憩の相談ができた。');out.text='先生「待つ場所は変えられるよ。つらくなったら、そこからでも声をかけてね」';out.card='place';if(s.stage<2)grant(s,'signal')}
 else if(key==='friend'){s.flags.sora=true;relation(s,'ソラに、運動会への気持ちの違いを伝えた。');out.text=s.stage===2?'ソラ「順位の話より、試したことを聞くね。自分の出番には、先生に声をかけてね」':'ソラ「二人で、タイムを計らず練習してみる？」';out.card=s.stage===2?'notice':'private'}
 if(out.card)grant(s,out.card);updateProgress(s);return out;
}
export function available(s){return s.hand.filter(id=>!s.usedStage.includes(id));}
export function canPlay(s,id){return !!cards[id]&&!s.finished&&!s.feedback&&available(s).includes(id)&&s.energy>=cards[id].cost&&!(s.stress>=6&&cards[id].cost>=2);}
// Stable per scene/card: undo compares strategies instead of rerolling for a lucky result.
export function riskRoll(s,id){let h=s.seed>>>0;for(const c of s.stage+':'+id)h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;return (h%1000)/1000;}
"""
oldplay=s[s.index('export function play('):s.index('function updateProgress')]
oldplay=oldplay.replace("if(!canPlay(s,id))return false;", "if(!canPlay(s,id)||cards[id].inquiry)return false;")
oldplay=oldplay.replace('s.used.push(id);','add(s.used,id);s.usedStage.push(id);')
oldplay=oldplay.replace("s.reason==='movement'","s.context.cause==='movement'").replace("s.reason==='noise'","s.context.cause==='noise'").replace("s.reason==='judgment'","s.context.cause==='judgment'")
start=oldplay.index("  if(id==='observe')")
end=oldplay.index("  if(id==='participate')",start)
oldplay=oldplay[:start]+"""  if(id==='observe'){const texts={noise:'放送が鳴ると、体がぎゅっとなった。走る前から音が負担だった。',movement:'人の少ない静かな場所でも、スタートの動きで迷っていた。',judgment:'一人のときより、見られたときに緊張が増えた。'};text=texts[s.context.cause];note(s,text);s.flags.observed=true;meaning=s.reason&&s.reason!==s.context.cause?'予想していた理由と、今見えたことが違う。目的も問い直せる。':'体験の手がかりが増えた。気持ちの理由を決めつけずに考えよう。';grant(s,s.context.cause==='noise'?'signal':s.context.cause==='movement'?'small':'notice');}
"""+oldplay[end:]
# Earlier conversations do not silently resolve a worsened relationship.
oldplay=oldplay.replace("if(id==='promise'){s.flags.promise=true;", "if(id==='promise'&&s.flags.aggravated){text='ハル「今は約束の前に、さっき責められたことを話したい」';meaning='頼み方だけでなく、直前のやり取りも影響する。';}else if(id==='promise'){s.flags.promise=true;")
oldplay=oldplay.replace("if(id==='relocate'){s.flags.fixed=true;", "if(id==='relocate'&&s.flags.aggravated){text='ハル「作品を直す前に、さっきの話をしたい」';meaning='よい提案でも、話す準備が整っていないことがある。';}else if(id==='relocate'){s.flags.fixed=true;")
oldplay=oldplay.replace("s.flags.repaired=true;", "s.flags.repaired=true;s.flags.aggravated=false;")
oldplay=oldplay.replace("if(s.flags.reason||s.flags.mediated||s.flags.promise)","if(!s.flags.aggravated&&(s.flags.reason||s.flags.mediated||s.flags.promise))")
insert="""
 const extra=extraOutcome(s,id);if(extra){text=extra.text;meaning=extra.meaning;}
 if(!text)throw new Error('Missing outcome: '+id);
"""
oldplay=oldplay.replace(" growth(s,'「'",insert+" growth(s,'「'")
oldplay=oldplay.replace("s.feedback={title:c.title", "s.feedback={risk:!!c.risk,goal:goalText(s),title:c.title")
rest=r"""
function extraOutcome(s,id){let text='',meaning='';const f=s.flags;const bad=riskRoll(s,id)<(id==='overtrain'&&s.context.cause==='movement'&&s.stress<=3?0.65:0.85);
 if(['retort','blame','holdGrudge'].includes(id)){
  if(bad){s.stress+=1;f.aggravated=true;relation(s,'強く責める言葉で、ハルとの話が止まった。');text=id==='blame'?'ハル「みんなの前で言わなくてもいいじゃん！」\n作品の話より、責められたことの言い合いになった。':id==='holdGrudge'?'ハル「何度も言われると、もう話したくなくなるよ」\n伝えたいことより、責める言葉が届いてしまった。':'ハル「そっちだって、ひどいって言ったじゃん！」\nお互いに言い返し、話が進まなかった。';meaning='分かってほしい気持ちがあっても、この言い方では相手も身構えやすい。'}
  else{s.stress--;text='ハルは黙って、いったん手を止めた。\n今は言い争いが止まったけれど、気持ちや次の約束は伝わっていない。';meaning='その場が止まることと、関係がよくなることは違う。'}
 }
 if(id==='ventFight'){s.stress--;text='ミナ「勝手に変えられたの、嫌だったんだね」\n聞いてもらえて、少し気持ちがゆるんだ。';meaning='愚痴で楽になることもある。ハルへの伝え方は、まだ選べる。';relation(s,'ミナに、腹が立った気持ちを聞いてもらった。')}
 if(id==='ignore'){f.ignored=true;s.stress--;text=bad?'ハル「返事もしてくれないんだ……」\n今は話さずに済んだが、ハルは理由が分からず離れていった。':'ハルは少し待つことにした。今は会話が止まった。';meaning='話さないことで負担は減っても、距離を取りたい理由は伝わらないことがある。';if(bad)relation(s,'返事をしない理由が伝わらず、すれ違いが残った。')}
 if(id==='greet'){f.greeted=true;text=f.aggravated?'ハル「……おはよう」\n短い返事があった。昨日の行き違いはまだ残っている。':'ハル「おはよう。今日はどこから作る？」\n会話の入口ができた。';meaning='あいさつは小さな一歩。昨日の問題を全部解決するわけではない。';relation(s,'翌日、あいさつから声をかけた。')}
 if(id==='checkPromise'){f.checked=true;text='ハル「うん。動かす前に聞くんだったね」\n昨日の約束を確かめて作業に入った。';meaning='決めた約束を、次の場面で使うことができた。';relation(s,'翌日も、動かす前に聞く約束を確かめた。')}
 if(id==='retry'){f.repaired=true;f.aggravated=false;text='「昨日、途中になった話をしてもいい？」\nハル「うん。今日は落ち着いて話そう」';meaning='一度止まった話も、時間や始め方を変えて再開できる。';relation(s,'翌日に、話をつなぎ直す機会をつくった。')}
 if(id==='safeSpace'){s.stress-=2;s.energy++;f.distance=true;text='別の席で少し考えた。今は近づかずに、自分の気持ちを整えた。';meaning='距離を取る選択もある。その後の関係は、あとで考えられる。'}
 if(id==='ventSports'){s.stress--;text='ソラ「嫌だなって思うんだね。自分は楽しみだけど、違う気持ちでもいいよ」';meaning='理由がはっきりしなくても、気持ちを聞いてもらえる。';relation(s,'ソラに、気が重いと聞いてもらった。')}
 if(id==='skipWorry'){s.stress--;f.avoided=true;text='運動会の話をやめて、別のことをした。\n今は少し楽になった。練習の日は近づいている。';meaning='気をそらすと休めることもある。ただ、予定や対処の準備はまだ増えていない。'}
 if(id==='overtrain'){f.overtrained=true;if(bad){s.stress+=2;s.energy--;text='何度も走って、足も気持ちも疲れてきた。'+(s.context.cause==='noise'?'放送の音のつらさは、変わらなかった。':s.context.cause==='judgment'?'見られる不安も残っている。':'疲れて、動きを確かめる余裕がなくなった。');meaning='練習を増やすだけでは、負担の理由に合わないことがある。'}else{f.practiced=true;text='動きは少しつかめた。でも疲れが残った。';meaning='できたことが増えても、休む必要がなくなるわけではない。'}}
 if(id==='pretend'){f.hidden=true;text=bad?'先生「大丈夫なんだね」\n困っていることが伝わらず、いつも通りの練習が続いた。':'先生「本当に大丈夫？ あとででも教えてね」\n声をかけてもらえたが、困りごとはまだ伝えていない。';meaning='平気に見せると、周りが必要な助けに気づきにくい。';if(bad)s.stress++}
 if(id==='force'){f.forced=true;if(bad||s.stress>=4){s.stress+=2;s.energy--;text='つらさを隠して続けたが、途中で余力がなくなり、先生と休むことになった。';meaning='やり切ることだけを目指すと、体のサインを見落とすことがある。'}else{f.participated=true;text='参加はできたが、疲れが強く残った。';meaning='全部出られたことだけでは、作戦が合っていたかは決められない。'}}
 if(id==='disappear'){s.stress--;f.unannounced=true;text=bad?'持ち場を離れて少し楽になった。先生とソラは、居場所が分からず探していた。':'近くの先生が気づき、休憩場所まで一緒に行った。';meaning='離れることは選べる。行き先を伝えると、助けてもらいやすくなる。';if(bad)relation(s,'居場所が伝わらず、先生とソラが探していた。')}
 if(id==='askRest'){s.stress-=2;s.energy++;f.restPlan=true;text='先生に「休憩場所へ行きたい」と伝え、一緒に移った。';meaning='前もって合図を決めていなくても、今から休みたいと伝えられる。'}
 if(id==='checkBody'){f.observed=true;const t={noise:'放送の音が大きくなると、体に力が入った。',judgment:'観客の視線が集まると、緊張が強くなった。',movement:'走り出す動きを思い浮かべると、迷いが残った。'};text=t[s.context.cause];note(s,text);meaning=s.reason&&s.reason!==s.context.cause?'最初の予想と違う手がかりが見つかった。次は目的から問い直せる。':'今の状態を確かめた。次の参加方法を相談する手がかりになる。'}
 return text?{text,meaning}:null;
}
function updateProgress(s){const f=s.flags;if(s.goal===null){s.progress=0;return}if(s.story==='fight'){s.progress=[f.boundary||f.promise?3:0,f.fixed?3:f.reason?1:0,f.distance||f.later||f.help||f.leave?3:0,0,f.checked||f.repaired?3:f.greeted||f.mediated?1:0][s.goal]??0;}else{s.progress=[f.practiced?3:0,f.supportive?3:f.sora?1:0,f.place||f.restPlan||f.adjusted?3:f.signal?2:0,f.observed?3:s.clues.length?1:0][s.goal]??0;}}
export function setGoal(s,n,source='reflection'){if(!Number.isInteger(n)||n<0||n>=stories[s.story].goals.length)return false;s.goal=n;s.goalHistory.push({stage:s.stage,goal:goalText(s),source});updateProgress(s);return true}
export function advance(s){if(!s.feedback)return false;s.feedback=null;if(s.stage===2){s.finished=true;return true}s.stage++;s.energy=Math.min(5,s.energy+1);deal(s);return true}
export function safety(s,type){if(s.finished||s.feedback)return false;if(type==='rest'){if(s.rested.includes(s.stage))return false;s.rested.push(s.stage);s.stress=Math.max(0,s.stress-2);s.energy=Math.min(5,s.energy+2);growth(s,'休んで、次の作戦を考える余力をつくった。');return true}if(type==='help'||type==='leave'){s.flags[type]=true;updateProgress(s);s.stress=Math.max(0,s.stress-1);s.finished=true;growth(s,type==='help'?'困りごとを大人に伝えた。':'安全な場所へ移る選択をした。');return true}return false}
export function scene(s){const f=s.flags;if(s.story==='fight'){
 if(s.stage===0)return {narrative:'教室に戻ると、自分が作った飾りが外されていた。',speaker:'ハル',quote:'そこにあるとじゃまだから、取ったよ。',self:'勝手に取るなんて、ひどい！',hint:'外した理由は、まだ分からない。'};
 if(s.stage===1)return {narrative:f.aggravated?'言い返す声が大きくなり、班のみんなもこちらを見ている。':f.distance?'少し離れたあと、作品のことが気になっている。':'片づけの時間が近づいてきた。次にどうしよう。',speaker:f.mina?'ミナ':'ハル',quote:f.aggravated?'そんな言い方、しなくてもいいじゃん！':f.fixed?'飾りは直せたね。ほかに話しておくことはある？':f.reason?'ふたを閉められればいいんだけど……。':'こっちにも理由があったんだよ。',self:'さっき考えた目的は、今の自分にも合っているかな。',hint:'行動の結果と、自分の予想を見比べてみよう。'};
 return {narrative:'次の日、また同じ班で作品を作る時間になった。今できる作戦が、新しく配られた。',speaker:'ハル',quote:f.aggravated?'昨日の言い方が、まだ気になってる。':f.ignored?'今日は、話せそう？':f.promise?'ここ、動かしてもいい？':f.fixed?'昨日のところ、ちゃんと閉まってるよ。':f.later?'昨日の続き、今なら話せる？':'今日は、どうやって作ろうか。',self:'昨日の続きを話す？ まずあいさつする？ 少し距離を取る？',hint:'昨日の出来事は残っていても、今日の一手は選び直せる。'};
 }
 const cues={noise:'遠くの放送が大きくなると、肩に力が入る。',movement:'スタートの動きを思い浮かべると、足の置き方で迷う。',judgment:'友達や家族に走る姿を見られると思うと、胸がざわざわする。'};
 if(s.stage===0)return {narrative:'黒板に「運動会まで、あと7日」。明日から校庭での練習が始まる。',speaker:'ソラ',quote:'今年こそ、かけっこで一番になりたいな！',self:'……運動会、なくなればいいのに。',hint:'苦手の理由は、まだ予想の段階。'};
 if(s.stage===1)return {narrative:'校庭での練習が始まった。'+cues[s.context.cause],speaker:f.sora?'ソラ':'先生',quote:f.sora?'今日は、どんなやり方で試してみる？':'練習を始めるよ。困ったことがあったら教えてね。',self:s.reason?'考えていた理由と、この感じは同じかな？':'どこで負担が増えるか、確かめてみよう。',hint:'自分に問い直しても、原因が確定したわけではない。'};
 return {narrative:'運動会当日。校庭にはたくさんの人がいる。'+(f.overtrained?'練習の疲れも少し残っている。':'')+cues[s.context.cause],speaker:f.hidden?'先生':'ソラ',quote:f.hidden?'練習では大丈夫と言っていたけれど、今日はどう？':f.sora?'自分の出番までは一緒に待てるよ。今日はどうする？':'そろそろ出番だね。今日はどうする？',self:f.signal?'休む合図は決めた。今の自分に合う使い方を選ぼう。':'準備のときとは違う。今の状態から選び直そう。',hint:'当日の手札に変わった。参加も休憩も、今から相談できる。'};
}
export function summary(s){const f=s.flags;let situation;if(f.help)situation='大人に困りごとを伝え、次のことを一緒に考えることにした。';else if(f.leave)situation='安全な場所へ移った。続きは、落ち着いてから考えられる。';else if(s.story==='fight')situation=f.aggravated?'言い合いが残った。次は話す場所や始め方も変えてみられる。':f.fixed?'作品を直せた。気持ちや関係については、別に振り返ろう。':f.later?'続きの話をする機会を決めた。':f.repaired?'話をつなぎ直す機会をつくった。':'気持ちや事情を確かめた。まだ相談できることが残っている。';else situation=f.forced&&s.stress>=4?'無理を続けて負担が増えた。参加の範囲を変える作戦もある。':f.unannounced?'その場から離れた。居場所の伝え方も考えられる。':f.restPlan?'休憩へ移った。その後の参加は、休んでから相談できる。':f.adjusted?'自分に合う参加のしかたを相談した。':f.participated?'自分で決めたことを試した。負担がどう変わったかも振り返ろう。':'作戦を試した。見つけた手がかりから、次の目的を問い直せる。';return {situation,relation:s.relations.length?s.relations.join(' '):'相手との新しい約束や気持ちの共有はまだない。あとから話すこともできる。',growth:s.growth,goal:goalText(s),progress:s.progress,stress:s.stress,energy:s.energy};}
"""
p.write_text(cards+extra+oldplay+rest)
