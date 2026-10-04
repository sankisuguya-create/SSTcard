// All numbers describe fictional characters, not psychological measurements.
// Safety actions never require a card or energy. Exploring never reveals another person's private thoughts.
export const cards={
 boundary:{title:'勝手に外さないで',kind:'talk',label:'伝える',cost:1,bond:1,desc:'嫌だったことを、短い言葉で伝える。',hint:'自分の境界を知らせる',icon:'message'},
 ask:{title:'何のじゃまだったの？',kind:'talk',label:'確かめる',cost:1,bond:1,desc:'まだ分からない理由を、相手に聞く。',hint:'新しい手がかりを得る',icon:'search'},
 distance:{title:'いったん離れる',kind:'support',label:'整える',cost:0,desc:'少し距離をとって、次の作戦を考える。',hint:'今は話さない、も選べる',icon:'door'},
 relocate:{title:'場所を変えてつけ直す',kind:'talk',label:'提案する',cost:2,bond:1,desc:'飾りを残して、ふたも閉まる場所を探す。',hint:'両方の希望をかなえる方法',icon:'puzzle'},
 promise:{title:'次から先に聞いて',kind:'talk',label:'伝える',cost:1,bond:1,desc:'これからの関わり方を、相談する。',hint:'明日の関係につながる',icon:'hand'},
 effort:{title:'頑張って作ったんだ',kind:'think',label:'気持ちを伝える',cost:1,bond:1,desc:'自分が大切にしていたことを話す。',hint:'相手が知らない自分のこと',icon:'heart'},
 mina:{title:'ミナと一緒に伝える',kind:'support',label:'協力する',cost:1,bond:1,desc:'二人だけでは難しい話を、手伝ってもらう。',hint:'一人で解決しなくてもいい',icon:'people'},
 repair:{title:'言い方と気持ちを伝える',kind:'talk',label:'関係をつなぐ',cost:2,bond:1,desc:'強く言ったことを謝り、嫌だったことも伝える。',hint:'自分の気持ちも大切にする',icon:'message'},
 together:{title:'一緒に決め直す',kind:'talk',label:'相談する',cost:2,bond:1,desc:'お互いの希望を出して、作り方を考える。',hint:'話す余裕や手がかりが大切',icon:'puzzle'},
 later:{title:'あとで話す時間を決める',kind:'support',label:'時間をおく',cost:0,bond:1,desc:'今は中断して、続きの話をする時間を決める。',hint:'保留にも次の一手を',icon:'clock'},
 practice:{title:'少し練習してみる',kind:'talk',label:'試してみる',cost:2,desc:'短い距離で、スタートの動きを試す。',hint:'役立つかは、苦手の理由しだい',icon:'flag'},
 schedule:{title:'先生に予定を聞く',kind:'talk',label:'確かめる',cost:1,bond:1,desc:'何をするのか、どこで休めるのかを聞く。',hint:'見通しをつくる',icon:'search'},
 sora:{title:'ソラに気持ちを話す',kind:'think',label:'伝える',cost:1,bond:1,desc:'楽しみな人にも、気が重いことを伝えてみる。',hint:'違う気持ちを知ってもらう',icon:'message'},
 small:{title:'一つの動きだけ練習',kind:'talk',label:'試してみる',cost:1,desc:'全部ではなく、スタートだけを試す。',hint:'小さく区切って確かめる',icon:'flag'},
 private:{title:'二人でタイムなし練習',kind:'support',label:'協力する',cost:1,bond:1,desc:'ソラと、人の少ない場所で練習する。',hint:'見られ方を変える',icon:'people'},
 place:{title:'待つ場所を変える',kind:'support',label:'環境を変える',cost:1,bond:1,desc:'先生と決めた、スピーカーから遠い場所へ。',hint:'音の負担に合った作戦',icon:'door'},
 signal:{title:'休憩の合図を決める',kind:'support',label:'助けを準備する',cost:1,bond:1,desc:'つらくなったら伝わる合図を、先生と決める。',hint:'困ったときの道をつくる',icon:'hand'},
 notice:{title:'試したことを見てほしい',kind:'think',label:'伝える',cost:1,bond:1,desc:'順位より、取り組んだことを見てほしいと話す。',hint:'応援のしかたを相談する',icon:'heart'},
 observe:{title:'つらいところを確かめる',kind:'think',label:'自分を知る',cost:1,desc:'練習の中で、負担が増えるときを見つける。',hint:'まだ分からなくても大丈夫',icon:'search'},
 participate:{title:'決めたことを試す',kind:'talk',label:'自分で選ぶ',cost:1,desc:'今の自分が試したい範囲で参加する。',hint:'順位ではなく、自分の目的',icon:'flag'},
 adjust:{title:'参加のしかたを相談',kind:'support',label:'選び直す',cost:1,bond:1,desc:'参加する範囲や別の役割を、先生と考える。',hint:'当日でも作戦は変えられる',icon:'puzzle'},
 useSignal:{title:'合図を使って休む',kind:'support',label:'自分を守る',cost:0,desc:'決めた合図で伝えて、休憩場所へ移る。',hint:'その後のことは、休んでから',icon:'hand'}
};
export const stories={
 fight:{title:'ふたりで作ったはずなのに',nav:'クラスの子とのケンカ',num:'01',goals:['大切なことを伝えたい','一緒に作品を直したい','まず言い争いを止めたい'],chapters:['図工の時間','どう伝えよう？','翌日の班活動'],locations:['教室・図工の時間','教室・片づけの前','教室・次の日'],base:['boundary','ask','distance']},
 sports:{title:'あと一週間、どうしよう',nav:'苦手な運動会',num:'02',goals:['不安の理由を知りたい','自分に合う参加をしたい','困ったときに備えたい'],chapters:['運動会まで7日','練習の日','運動会当日'],locations:['教室・帰りの会','校庭・練習の日','校庭・運動会当日'],base:['practice','schedule','sora']}
};
export function initial(story='fight'){return {story,stage:0,stress:story==='fight'?4:3,energy:story==='fight'?3:4,liked:1,progress:0,goal:0,hand:[...stories[story].base],discovered:[],used:[],flags:{},clues:[],relations:[],growth:[],log:[],explored:[],rested:[],observed:[],passed:[],feedback:null,finished:false,reason:null,reflection:null};}
const add=(arr,v)=>{if(!arr.includes(v))arr.push(v)};
function grant(s,id){if(!s.hand.includes(id))s.hand.push(id);add(s.discovered,id)}
function note(s,t){add(s.clues,t)}
function relation(s,t){add(s.relations,t)}
function growth(s,t){add(s.growth,t)}
export function canExplore(s){return !s.finished&&!s.feedback&&s.stress<5}
export function explore(s,key){
 if(!canExplore(s)||s.explored.includes(key))return null;
 const out={text:'',card:null};
 const opts=s.story==='fight'?['haru','mina','why','respect','feeling']:['teacher','friend','movement','judgment','noise','unknown'];
 if(!opts.includes(key))return null;
 if(['movement','judgment','noise','unknown'].includes(key)&&s.reason)return null;
 s.explored.push(key);
 if(['haru','mina','teacher','friend'].includes(key))s.liked=Math.min(5,s.liked+1);
 if(key==='haru'){s.flags.reason=true;note(s,'飾りがあると、ふたが閉まらなかった。');out.text='ハル「ふたが閉まらなかったんだ。片づけの時間も近かったから……」\n外した理由が分かった。飾りを残す方法もありそう。';out.card='relocate'}
 if(key==='mina'){s.flags.mina=true;note(s,'飾りは、机の上に置いてある。');out.text='ミナ「捨てたんじゃなくて、机に置いてあるよ。必要なら、一緒に話そうか？」';out.card='mina'}
 if(key==='why'){out.text='「飾りをなくしたくなかったんだ。置く場所を変える方法もあるかな」';out.card='relocate';growth(s,'大切にしたいものを考えた。')}
 if(key==='respect'){out.text='「一番嫌だったのは、何も聞かれずに変えられたことかも」';out.card='promise';growth(s,'嫌だったことを、具体的に考えた。')}
 if(key==='feeling'){out.text='「頑張ったことを、ハルはまだ知らないのかもしれない」';out.card='effort';growth(s,'自分の気持ちを言葉にする方法を見つけた。')}
 if(key==='teacher'){s.flags.teacher=true;note(s,'先生と、待つ場所や休憩を相談できた。');out.text='先生「スピーカーから離れて待つ方法を考えよう。つらいときの合図も決められるよ」';out.card='place';grant(s,'signal')}
 if(key==='friend'){s.flags.sora=true;relation(s,'ソラが、運動会への気持ちの違いを知った。');out.text='ソラ「気が重いんだね。二人で短く練習する？ タイムは計らないで」';out.card='private'}
 if(key==='movement'){s.reason='movement';note(s,'走り出し方が分からないことが、不安。');out.text='「全部が苦手というより、スタートの仕方が分からないんだ」';out.card='small'}
 if(key==='judgment'){s.reason='judgment';note(s,'遅いところを見られることが、気になる。');out.text='「走ることより、遅いところを見られるのが心配なんだ」';out.card='notice'}
 if(key==='noise'){s.reason='noise';note(s,'大きな音や人の多さが、負担になっている。');out.text='「大きな音で、体がぎゅっとなる。走る練習とは別の工夫がいるかも」';out.card='signal'}
 if(key==='unknown'){s.reason='unknown';out.text='「今はまだ、うまく言えない。練習のどこでつらくなるか、確かめてみよう」';out.card='observe'}
 if(out.card)grant(s,out.card);return out;
}
export function available(s){return s.hand.filter(id=>!s.used.includes(id));}
export function canPlay(s,id){return !s.finished&&!s.feedback&&available(s).includes(id)&&s.energy>=cards[id].cost&&!(s.stress>=6&&cards[id].cost>=2);}
export function play(s,id){
 if(!canPlay(s,id))return false;
 const c=cards[id],before={stress:s.stress,energy:s.energy,progress:s.progress,liked:s.liked};s.energy-=c.cost;s.used.push(id);let text='',meaning='';
 if(s.story==='fight'){
  if(id==='boundary'){s.flags.boundary=true;s.stress=Math.min(6,s.stress+1);relation(s,'勝手に変えられるのは嫌だと、ハルに伝えた。');text='ハル「そんなに大事だったの？ 勝手に取ったのは悪かった」\n少し緊張したけれど、嫌だったことは伝わった。';meaning='境界は伝わった。外した理由や、直し方はまだ別の話。'}
  if(id==='ask'){s.flags.reason=true;note(s,'飾りがあると、ふたが閉まらなかった。');grant(s,'relocate');s.stress--;text='ハル「ふたが閉まらなかったんだよ。もう片づけの時間だったし」\n「場所を変えてつけ直す」が手札に加わった。';meaning='理由が分かると、新しい提案ができる。'}
  if(id==='distance'){s.stress-=2;s.energy+=1;s.flags.distance=true;text='廊下で少し距離をとった。言い争いはいったん止まった。\n飾りのことは、まだ気になっている。';meaning='落ち着くことと、問題を解決することは別々にできる。'}
  if(id==='relocate'){s.flags.fixed=true;s.stress--;text='ハル「横につけたら、ふたも閉まるね」\n飾りを残して、作品を直せた。';meaning=s.flags.boundary||s.flags.promise?'気持ちも伝えたうえで、作品を直す方法を見つけた。':'作品は直せた。「先に相談してほしい」は、まだ伝えていない。'}
  if(id==='promise'){s.flags.promise=true;relation(s,'次から動かす前に聞く、と約束した。');text='ハル「分かった。次は動かす前に聞くね」\nこれからの関わり方を一つ決められた。';meaning='意見が違っても、お互いを大切にする約束はつくれる。'}
  if(id==='effort'){s.flags.boundary=true;relation(s,'飾りを頑張って作ったことが、ハルに伝わった。');text='ハル「そうだったんだ。そんなに時間をかけたって知らなかった」';meaning='相手は、自分の頑張りをまだ知らないことがある。'}
  if(id==='mina'){s.flags.mediated=true;s.flags.boundary=true;s.stress--;relation(s,'ミナと一緒に、お互いの言い分を聞いた。');text='ミナ「飾りを大事にしたかったんだよね。ハルは、ふたを閉めたかったんだね」\n二人の希望を並べて話せた。';meaning='間に入ってもらうことも、関係をつくる方法。';s.flags.reason=true;grant(s,'relocate')}
  if(id==='repair'){s.flags.boundary=true;s.flags.repaired=true;relation(s,'強い言い方を謝り、自分の気持ちも伝えた。');text='自分「ひどいって強く言ったのは、ごめん。でも先に聞いてほしかった」\nハル「うん。先に聞けばよかったね」';meaning='謝ることと、自分の気持ちを大切にすることは両立できる。'}
  if(id==='together'){if(s.flags.reason||s.flags.mediated||s.flags.promise){s.flags.fixed=true;relation(s,'お互いの希望を出して、作品を直した。');text='ハル「飾りを残して、閉まる場所を探そう」\n二人で位置を変えて試した。';meaning='手がかりや話す準備があると、相談が進みやすい。'}else{s.flags.reason=true;grant(s,'relocate');note(s,'ハルは、ふたを閉める方法で困っていた。');text='ハル「一緒にって、何を？ ふたが閉まらなくて困ってたんだよ」\nすぐには決まらなかったけれど、相手の困りごとが分かった。';meaning='提案の前に、お互いの希望を知ることが役立つ。'}}
  if(id==='later'){s.flags.later=true;s.stress--;s.energy++;text='「次の図工の前に話そう」と決めた。\n今は休み、続きを話す機会を残した。';meaning='保留するときに、次の機会を決める方法もある。'}
 }else{
  if(id==='practice'||id==='small'){
   if(s.reason==='movement'){s.flags.practiced=true;s.stress--;text='スタートの姿勢だけを試した。\n「あ、こうやって足を置けばいいんだ」';meaning='動きが分からない不安には、小さく区切った練習が役立った。'}
   else if(s.reason==='noise'){s.stress++;text='スタートは試せた。でも、スピーカーの音で体がぎゅっとなる。';meaning='走る練習だけでは、音の負担は変わらなかった。';grant(s,'signal')}
   else if(s.reason==='judgment'){s.stress++;text='動きは試せた。でも、周りから見られることが気になる。';meaning='練習の量だけでなく、誰と、どこで練習するかも変えられる。';grant(s,'notice')}
   else{note(s,'少し走れたが、気が重い理由はまだはっきりしない。');text='短い距離を走ってみた。\n動きは試せたけれど、まだ気が重い。';meaning='試すことで分かることもある。理由を考える作戦も残っている。';grant(s,'observe')}
  }
  if(id==='schedule'){s.flags.teacher=true;note(s,'先生と、休憩や待つ場所を相談できる。');s.stress--;grant(s,'place');grant(s,'signal');text='先生「出番の間には休憩があるよ。待つ場所や、つらいときの合図も相談しよう」\n2枚の作戦カードが増えた。';meaning='予定を知るだけでなく、過ごし方を相談できる。'}
  if(id==='sora'){s.flags.sora=true;relation(s,'ソラが、運動会への気持ちの違いを知った。');grant(s,'private');text='ソラ「楽しみじゃないんだね。二人で少し練習する？ タイムは計らないで」';meaning='同じ気持ちでなくても、協力できることはある。'}
  if(id==='private'){s.flags.sora=true;s.flags.practiced=true;relation(s,'ソラと、タイムを計らず練習した。');if(s.reason==='judgment'||s.reason==='movement'){s.stress--;text='人の少ない場所で、ソラと短く練習した。\n順位を比べずに試せた。';meaning='自分に合う練習の条件を見つけた。'}else{text='ソラと練習できた。'+(s.reason==='noise'?'でも、大きな音はまだつらい。':'まだ気になることは残っている。');meaning='協力が助けになる部分と、別の工夫が必要な部分がある。'}}
  if(id==='place'){s.flags.place=true;if(s.reason==='noise'){s.stress-=2;text='先生と決めた、スピーカーから遠い場所へ。\n音の負担が少し軽くなった。';meaning='自分だけでなく、環境を変える作戦が役立った。'}else{text='先生と待つ場所を変えた。'+(s.reason==='judgment'?'走るところを見られる不安は、まだ残っている。':'走り方への不安は、場所を変えるだけでは消えない。');meaning='場所を変える作戦が、すべての不安に合うとは限らない。'}}
  if(id==='signal'){s.flags.signal=true;grant(s,'useSignal');text='先生「手を上げて合図したら、一緒に休憩場所へ行こう」\nつらいときにどう伝えるか、決められた。';meaning='不安が残っていても、困ったときの道を準備できる。'}
  if(id==='notice'){s.flags.supportive=true;relation(s,'ソラと、順位より試したことを見る応援を相談した。');s.stress--;text='ソラ「じゃあ、順位の話より、試したことを聞くね」';meaning='ほしい応援のしかたは、人によって違う。'}
  if(id==='observe'){if(!s.reason||s.reason==='unknown'){s.reason='noise';note(s,'音が大きくなると、負担も増えると気づいた。');grant(s,'signal');text='走る前より、放送が鳴ったときに体がぎゅっとなった。';meaning='この物語では、音が負担の一つだった。休憩や場所を相談できる。'}else{text='気になっていたことが、練習中にも負担になっていた。';meaning='分かった理由に合わせて、次の作戦を選べる。'}}
  if(id==='participate'){s.flags.participated=true;if((s.reason==='noise'&&!s.flags.place)||(s.reason==='judgment'&&!s.flags.supportive&&!s.flags.sora)){s.stress++;text='自分で決めた範囲を試した。\n気になる負担も残っている。必要なら、ここから休んでもいい。';meaning='参加できたことと、負担が軽くなったことは別の結果。'}else{text='少しドキドキしたけれど、自分で決めたことを試した。';meaning='順位とは別に、自分が試したかったことを記録できる。'}}
  if(id==='adjust'){s.flags.adjusted=true;s.stress--;text='先生と相談して、参加する範囲を変えた。\n次にどうしたいかは、また選べる。';meaning='当日でも、自分に合う形へ作戦を変えられる。'}
  if(id==='useSignal'){s.flags.restPlan=true;s.stress-=2;s.energy+=1;text='合図で伝えて、先生と休憩場所へ移った。\n戻るかどうかは、休んでから相談する。';meaning='準備した作戦を、必要なときに使えた。'}
 }
 growth(s,'「'+c.title+'」を試した。');s.stress=Math.max(0,Math.min(6,s.stress));s.energy=Math.max(0,Math.min(5,s.energy));if(c.bond)s.liked=Math.min(5,s.liked+c.bond);updateProgress(s);
 s.log.push({stage:s.stage,title:c.title,text,meaning});s.feedback={title:c.title,text,meaning,before,after:{stress:s.stress,energy:s.energy,progress:s.progress,liked:s.liked}};return true;
}
function updateProgress(s){const f=s.flags;if(s.story==='fight'){s.progress=s.goal===0?(f.boundary||f.promise?3:0):s.goal===1?(f.fixed?3:f.reason?1:0):(f.distance||f.later||f.mediated||f.repaired||f.help||f.leave?3:f.boundary?1:0)}else{s.progress=s.goal===0?(s.reason&&s.reason!=='unknown'?3:s.clues.length?1:0):s.goal===1?(f.participated||f.adjusted?3:f.place||f.practiced?2:0):(f.signal||f.restPlan?3:f.teacher?1:0)}}
export function setGoal(s,n){if(!Number.isInteger(n)||n<0||n>2)return false;s.goal=n;updateProgress(s);return true}
export function advance(s){if(!s.feedback)return false;s.feedback=null;if(s.stage===2){s.finished=true;return true}s.stage++;s.energy=Math.min(5,s.energy+1);if(s.story==='fight'){for(const c of s.stage===1?['repair','together','later']:['promise','together','later']){if(!s.used.includes(c)&&!s.hand.includes(c))s.hand.push(c)}}else{for(const c of s.stage===1?['observe','adjust']:['participate','adjust'])if(!s.used.includes(c)&&!s.hand.includes(c))s.hand.push(c)}return true}
export function safety(s,type){if(s.finished||s.feedback)return false;if(type==='rest'){if(s.rested.includes(s.stage))return false;s.rested.push(s.stage);s.stress=Math.max(0,s.stress-2);s.energy=Math.min(5,s.energy+2);growth(s,'休んで、次の作戦を考える余力をつくった。');return true}if(type==='help'||type==='leave'){s.flags[type]=true;if(type==='help')s.liked=Math.min(5,s.liked+1);updateProgress(s);s.stress=Math.max(0,s.stress-1);s.finished=true;growth(s,type==='help'?'困りごとを大人に伝えた。':'安全な場所へ移る選択をした。');return true}return false}
function watch(s){
 if(s.story==='fight'){
  if(s.stage===0)return 'ハルは「じゃまだから」と言った。飾りやふたのことで、理由がありそうだ。';
  if(s.stage===1)return '片づけの時間が近い。ハルは、こちらの出方をうかがっている。';
  return 'ハルは、昨日のことをまだ少し気にしている様子だ。';
 }
 if(s.stage===0)return 'ソラは楽しみにしている。不安の理由は、まだはっきりしない。';
 if(s.stage===1)return 'スピーカーの音、走る列、見ている人。負担になりそうなものが見えてくる。';
 return '人の多さが気になる。先生は、こちらの様子を気にかけている。';
}
export function free(s,type){
 if(s.finished||s.feedback)return false;
 if(type==='observe'){if(s.observed.includes(s.stage))return false;s.observed.push(s.stage);const w=watch(s);note(s,w);s.liked=Math.min(5,s.liked+1);growth(s,'相手の様子や、その場の手がかりを確かめた。');return {title:'様子を確かめた',text:w,meaning:'じっくり見るだけでも、分かることが増える。'}}
 if(type==='pass'){if(s.passed.includes(s.stage))return false;s.passed.push(s.stage);s.energy=Math.min(5,s.energy+1);const t='すぐには動かず、その場をやり過ごした。\n何も変わらなかったが、少し余力が戻った。';s.log.push({stage:s.stage,title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'});growth(s,'何もしないで、様子を見る時間をつくった。');return {title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'}}
 return false;
}
export function scene(s){const f=s.flags;if(s.story==='fight'){
 if(s.stage===0)return {narrative:'教室に戻ると、自分が作った飾りが外されていた。',speaker:'ハル',quote:'そこにあるとじゃまだから、取ったよ。',look:'ハルは、どこか強がった様子で答えた。',self:'勝手に取るなんて、ひどい！',hint:'外した理由は、まだ分からない。'};
 if(s.stage===1)return {narrative:f.distance?'少し離れて、気持ちを整えた。作品のことを、どうしよう。':'片づけの時間が近づいてきた。作品も、自分の気持ちも気になっている。',speaker:f.mina?'ミナ':'ハル',quote:f.mina?'必要なら、一緒に話そうか？':f.reason?'ふたが閉まればいいんだけど、どうしよう？':f.boundary?'そんなに大事だったんだね。':'こっちにも理由があったんだよ。',look:f.mina?'ミナが、二人の様子を気にかけている。':'ハルも、少し気まずそうにしている。',self:'何を大切にして、次を選ぼう？',hint:'作品を直すことと、気持ちを伝えることは別々に選べる。'};
 return {narrative:'次の日、また同じ班で作品を作る時間になった。昨日の選択が、今日の会話につながっている。',speaker:'ハル',quote:f.promise?'ここ、動かしてもいい？':f.fixed?'昨日のところ、ちゃんと閉まってるよ。':f.later?'昨日の続き、今なら話せる？':f.mediated?'今日はミナも一緒に決める？':'このあと、どうやって作ろうか。',look:'ハルは、昨日より少しやわらかい顔をしている。',self:f.boundary||f.promise?'大切なことは伝えられた。今日はどうしよう。':'まだ伝えていない気持ちがある。今からでも話せるかな。',hint:'同じ相手との、次の関わり方を選ぼう。'};
 }
 if(s.stage===0)return {narrative:'黒板に「運動会まで、あと7日」。明日から校庭での練習が始まる。',speaker:'ソラ',quote:'今年こそ、かけっこで一番になりたいな！',look:'ソラは、目を輝かせている。',self:'……運動会、なくなればいいのに。',hint:'何が一番つらいのか、まだ分からない。'};
 if(s.stage===1)return {narrative:'校庭での練習が始まった。走る友達や、放送の音が気になる。',speaker:s.flags.sora?'ソラ':'先生',quote:s.flags.sora?'どんなやり方なら、一緒に試せそう？':'練習を始めるよ。困ったことがあったら教えてね。',look:s.flags.sora?'ソラは、こちらのペースを気にかけている。':'先生は、ゆっくりした声で話している。',self:s.reason==='noise'?'大きな音が、つらいのかもしれない。':s.reason==='judgment'?'走るところを見られるのが、気になる。':s.reason==='movement'?'スタートの動きを、少し確かめたい。':'どこでつらくなるか、確かめてみよう。',hint:'苦手の理由によって、合う作戦は変わる。'};
 return {narrative:'運動会当日。校庭にはたくさんの人がいる。少しドキドキする。',speaker:'ソラ',quote:f.sora?'今日はどうする？ 一緒に待てる時間もあるよ。':'そろそろ出番だね。今日はどうする？',look:'ソラは、少し心配そうにこちらを見ている。',self:f.signal?'つらくなったときの合図は、決めてある。':f.place?'自分に合う待つ場所を、相談できた。':'今の自分に合う過ごし方を選ぼう。',hint:'準備した作戦は、当日でも選び直せる。'};
}
export function summary(s){const f=s.flags;let situation;if(f.help)situation='大人に困りごとを伝え、次のことを一緒に考えることにした。';else if(f.leave)situation='安全な場所へ移った。問題の続きは、落ち着いてから考えられる。';else if(s.story==='fight')situation=f.fixed?'飾りを残し、ふたも閉まる形に直せた。':f.later?'話す時間を決めて、いったん保留にした。':'気持ちや事情を確かめた。作品を直す方法は、まだ相談できる。';else situation=f.restPlan?'合図を使って休憩した。その後の参加は、休んでから相談する。':f.adjusted?'先生と、自分に合う参加のしかたを相談した。':f.participated?'自分で決めた範囲で参加した。順位とは別に、試した経験が残った。':'準備の作戦を試した。当日の過ごし方は、これからも選べる。';return {situation,relation:s.relations.length?s.relations.join(' '):'今回は、相手との新しい約束や気持ちの共有はまだない。あとから話すこともできる。',growth:s.growth,goal:stories[s.story].goals[s.goal],progress:s.progress,stress:s.stress,energy:s.energy,liked:s.liked}}
