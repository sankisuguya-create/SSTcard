// All numbers describe fictional characters, not psychological measurements.
// Safety actions never require a card or energy. Exploring never reveals another person's private thoughts.
// 資源: energy=行動力(0-5) mind=精神力(0-6) rep=評判(0-5)。
// バフ/デバフ: stats={study:かしこさ,ath:運動能力,soc:社交性} 初期0、-2..+2。
// 同属性(attr)のカードの攻撃力が stats[attr] 分上下する。
export const cards={
 boundary:{title:'勝手に外さないで',kind:'talk',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'嫌だったことを、短い言葉で伝える。',hint:'自分の境界を知らせる',icon:'message'},
 ask:{title:'何のじゃまだったの？',kind:'talk',label:'確かめる',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'まだ分からない理由を、相手に聞く。',hint:'新しい手がかりを得る',icon:'search'},
 distance:{title:'いったん離れる',kind:'support',label:'整える',cost:0,atk:0,desc:'少し距離をとって、次の作戦を考える。',hint:'今は話さない、も選べる',icon:'door'},
 relocate:{title:'場所を変えてつけ直す',kind:'talk',label:'提案する',cost:2,strain:1,bond:1,atk:2,attr:'study',up:'study',desc:'飾りを残して、ふたも閉まる場所を探す。',hint:'両方の希望をかなえる方法',icon:'puzzle'},
 promise:{title:'次から先に聞いて',kind:'talk',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'これからの関わり方を、相談する。',hint:'明日の関係につながる',icon:'hand'},
 effort:{title:'頑張って作ったんだ',kind:'think',label:'気持ちを伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'自分が大切にしていたことを話す。',hint:'相手が知らない自分のこと',icon:'heart'},
 mina:{title:'ミナと一緒に伝える',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'二人だけでは難しい話を、手伝ってもらう。',hint:'一人で解決しなくてもいい',icon:'people'},
 repair:{title:'言い方と気持ちを伝える',kind:'talk',label:'関係をつなぐ',cost:2,strain:2,bond:1,atk:2,attr:'soc',up:'soc',desc:'強く言ったことを謝り、嫌だったことも伝える。',hint:'自分の気持ちも大切にする',icon:'message'},
 together:{title:'一緒に決め直す',kind:'talk',label:'相談する',cost:2,strain:2,bond:1,atk:3,attr:'soc',up:'soc',desc:'お互いの希望を出して、作り方を考える。',hint:'話す余裕や手がかりが大切',icon:'puzzle'},
 later:{title:'あとで話す時間を決める',kind:'support',label:'時間をおく',cost:0,bond:1,atk:0,desc:'今は中断して、続きの話をする時間を決める。',hint:'保留にも次の一手を',icon:'clock'},
 practice:{title:'少し練習してみる',kind:'talk',label:'試してみる',cost:2,strain:2,atk:1,attr:'ath',up:'ath',desc:'短い距離で、スタートの動きを試す。',hint:'役立つかは、苦手の理由しだい',icon:'flag'},
 schedule:{title:'先生に予定を聞く',kind:'talk',label:'確かめる',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'何をするのか、どこで休めるのかを聞く。',hint:'見通しをつくる',icon:'search'},
 sora:{title:'ソラに気持ちを話す',kind:'think',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'楽しみな人にも、気が重いことを伝えてみる。',hint:'違う気持ちを知ってもらう',icon:'message'},
 small:{title:'一つの動きだけ練習',kind:'talk',label:'試してみる',cost:1,strain:1,atk:2,attr:'ath',up:'ath',desc:'全部ではなく、スタートだけを試す。',hint:'小さく区切って確かめる',icon:'flag'},
 private:{title:'二人でタイムなし練習',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'ath',up:'ath',desc:'ソラと、人の少ない場所で練習する。',hint:'見られ方を変える',icon:'people'},
 place:{title:'待つ場所を変える',kind:'support',label:'環境を変える',cost:1,bond:1,atk:1,attr:'soc',desc:'先生と決めた、スピーカーから遠い場所へ。',hint:'音の負担に合った作戦',icon:'door'},
 signal:{title:'休憩の合図を決める',kind:'support',label:'助けを準備する',cost:1,bond:1,atk:1,attr:'soc',desc:'つらくなったら伝わる合図を、先生と決める。',hint:'困ったときの道をつくる',icon:'hand'},
 notice:{title:'試したことを見てほしい',kind:'think',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'順位より、取り組んだことを見てほしいと話す。',hint:'応援のしかたを相談する',icon:'heart'},
 observe:{title:'つらいところを確かめる',kind:'think',label:'自分を知る',cost:1,atk:0,up:'study',desc:'練習の中で、負担が増えるときを見つける。',hint:'まだ分からなくても大丈夫',icon:'search'},
 participate:{title:'決めたことを試す',kind:'talk',label:'自分で選ぶ',cost:1,strain:2,atk:3,attr:'ath',up:'ath',desc:'今の自分が試したい範囲で参加する。',hint:'順位ではなく、自分の目的',icon:'flag'},
 adjust:{title:'参加のしかたを相談',kind:'support',label:'選び直す',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'参加する範囲や別の役割を、先生と考える。',hint:'当日でも作戦は変えられる',icon:'puzzle'},
 useSignal:{title:'合図を使って休む',kind:'support',label:'自分を守る',cost:0,atk:0,desc:'決めた合図で伝えて、休憩場所へ移る。',hint:'その後のことは、休んでから',icon:'hand'},
 range:{title:'テストの範囲を確かめる',kind:'talk',label:'確かめる',cost:1,bond:1,atk:1,attr:'study',up:'study',desc:'どこまでが範囲か、先生に聞く。',hint:'見通しをつくる',icon:'search'},
 breathe:{title:'深呼吸して落ち着く',kind:'support',label:'整える',cost:0,atk:0,desc:'ゆっくり息をして、体の力を抜く。',hint:'いつでもできる一呼吸',icon:'sun'},
 easyFirst:{title:'できたところから見直す',kind:'talk',label:'試してみる',cost:1,strain:1,atk:2,attr:'study',up:'study',desc:'分かる問題から、ノートを見直す。',hint:'小さく区切って確かめる',icon:'check'},
 plan:{title:'勉強の計画を立てる',kind:'support',label:'準備する',cost:1,bond:1,atk:1,attr:'study',up:'study',desc:'いつ、何を勉強するか、紙に書く。',hint:'見通しは不安を減らす',icon:'clock'},
 mistakes:{title:'まちがいを見直す',kind:'talk',label:'見直す',cost:2,strain:2,atk:2,attr:'study',up:'study',desc:'前のテストやノートの、まちがえたところをやり直す。',hint:'苦手の理由に合う作戦',icon:'book'},
 calmRoutine:{title:'あがったときの切り替え方',kind:'support',label:'切り替える',cost:1,atk:1,attr:'study',up:'study',desc:'肩の力を抜いて、できるところから始める決まり。',hint:'当日あがったときの作戦',icon:'spark'},
 pace:{title:'解く順番を決める',kind:'talk',label:'順番を決める',cost:1,strain:1,atk:1,attr:'study',up:'study',desc:'簡単な問題から解く、自分のルールを決める。',hint:'時間の不安に合う作戦',icon:'flag'},
 studyBuddy:{title:'ケイと一緒に勉強する',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'study',up:'study',desc:'得意なケイと、短い時間だけ一緒にやる。',hint:'一人でやらなくてもいい',icon:'people'},
 tellWorried:{title:'不安だとケイに話す',kind:'think',label:'伝える',cost:1,strain:1,bond:1,atk:0,attr:'soc',up:'soc',desc:'「ちょっと不安なんだ」と、気持ちを伝える。',hint:'気持ちを知ってもらう',icon:'message'},
 goodnight:{title:'早く寝て備える',kind:'support',label:'整える',cost:0,atk:0,desc:'前の日は早く寝て、体を整える。',hint:'休むことも準備の一つ',icon:'sun'},
 takeTest:{title:'自分のペースで取り組む',kind:'talk',label:'自分で選ぶ',cost:2,strain:2,atk:3,attr:'study',up:'study',desc:'決めた作戦で、テストに取り組む。',hint:'順位ではなく、自分の目標',icon:'flag'},
 peekJoin:{title:'はいってもいい？',kind:'talk',label:'聞いてみる',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'遊んでいる輪に、声をかけてみる。',hint:'まず一歩、確かめてみる',icon:'message'},
 watchPlay:{title:'まず様子を見る',kind:'think',label:'観察する',cost:1,atk:0,attr:'study',up:'study',desc:'みんなの遊びを、少し離れて見る。',hint:'見ているだけでもヒントになる',icon:'eye'},
 soloPlay:{title:'一人で好きな遊びをする',kind:'support',label:'自分で選ぶ',cost:0,atk:0,desc:'無理に入らず、一人の遊びを楽しむ。',hint:'一人で遊ぶのも、選べる答え',icon:'sun'},
 pairAsk:{title:'一緒に「はいってもいい？」と聞く',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'リクと二人で、輪に聞いてみる。',hint:'一人じゃなくてもいい',icon:'people'},
 tipJoin:{title:'切り替わりのタイミングで聞く',kind:'talk',label:'確かめる',cost:1,strain:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'ゲームが替わるタイミングで、聞いてみる。',hint:'聞き方にも、ねらい目がある',icon:'clock'},
 selfTalk:{title:'「だめ」と言われても大丈夫',kind:'think',label:'心を整える',cost:1,atk:1,attr:'soc',up:'soc',desc:'断られても負けじゃないと、心の中で唱える。',hint:'こわさを、やわらげる練習',icon:'heart'},
 phrases:{title:'入り方のことばを練習',kind:'talk',label:'練習する',cost:2,strain:1,atk:2,attr:'soc',up:'soc',desc:'「今から入れて？」「人数、あまってる？」を試す。',hint:'ことばを持っていると、足がすくまない',icon:'flag'},
 ownGame:{title:'自分の遊びを始める',kind:'support',label:'自分で選ぶ',cost:1,atk:1,attr:'soc',desc:'輪に入るのではなく、自分の遊びを始める。',hint:'入るだけが答えではない',icon:'spark'},
 invite:{title:'「一緒にやろう」と誘う',kind:'support',label:'巻き込む',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人の子や輪の中の子を、自分の遊びに誘う。',hint:'入るだけでなく、誘うのも仲間づくり',icon:'hand'},
 honest:{title:'一人でも楽しいと言う',kind:'think',label:'気持ちを伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'「今日は一人で遊びたい」と、正直に伝える。',hint:'自分の気持ちも、伝えられる',icon:'message'},
 deny:{title:'やってないと伝える',kind:'talk',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'疑いを、はっきりと否定する。',hint:'まず気持ちを伝える',icon:'message'},
 askBack:{title:'なぜ疑ったのか聞く',kind:'talk',label:'確かめる',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'疑う理由を、相手に聞いてみる。',hint:'誤解のもとを知る',icon:'search'},
 stay:{title:'黙ってやり過ごす',kind:'support',label:'様子を見る',cost:0,atk:0,desc:'何も言わず、うわさが静まるのを待つ。',hint:'黙っていると疑いは残る',icon:'eye'},
 findClue:{title:'本当の手がかりを探す',kind:'think',label:'考える',cost:1,atk:1,attr:'study',up:'study',desc:'消しゴムがどこへ行ったか、推理する。',hint:'事実を確かめる',icon:'search'},
 compose:{title:'伝える内容を整理する',kind:'think',label:'整理する',cost:1,atk:0,up:'study',desc:'何をどう伝えるか、順番を考える。',hint:'あせらず順番に',icon:'book'},
 calmFace:{title:'落ち着いた態度でいる',kind:'think',label:'整える',cost:0,atk:0,up:'soc',desc:'動揺せず、いつもどおりに振る舞う。',hint:'あわてると疑われやすい',icon:'sun'},
 witness:{title:'アイと一緒に証言する',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'見ていたアイと、事実を伝える。',hint:'第三者の証言は強い',icon:'people'},
 thirdParty:{title:'先生に間に入ってもらう',kind:'support',label:'助けを求める',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'公平な大人に、聞いてもらう。',hint:'一人で解決しなくてもいい',icon:'people'},
 proveCalm:{title:'事実を順に説明する',kind:'talk',label:'説明する',cost:2,strain:1,bond:1,atk:3,attr:'study',up:'study',desc:'時系列で、誤解をほどく。',hint:'証拠と順番があれば強い',icon:'flag'},
 sayStop:{title:'「やめて」とはっきり言う',kind:'talk',label:'伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'嫌だったことを、相手に伝える。',hint:'まず一歩、境目を伝える',icon:'message'},
 laughOff:{title:'笑って受け流す',kind:'support',label:'かわす',cost:1,atk:0,desc:'トゲの言葉を、笑ってかわす。',hint:'流せると、気持ちが軽い',icon:'sun'},
 walkAway:{title:'その場を離れる',kind:'support',label:'距離をとる',cost:0,atk:0,desc:'トゲの言葉から、少し離れる。',hint:'離れることも選べる',icon:'door'},
 selfCare:{title:'自分の気持ちを守る',kind:'think',label:'心を守る',cost:0,atk:0,up:'soc',desc:'傷ついた気持ちを、大切に扱う。',hint:'痛いと感じることも、大事',icon:'heart'},
 distance2:{title:'近づく距離を決める',kind:'think',label:'距離を決める',cost:1,atk:0,up:'soc',desc:'仲直りか距離か、自分で選ぶ。',hint:'関係のかたちは、自分で決められる',icon:'puzzle'},
 brush:{title:'受け流す練習',kind:'think',label:'練習する',cost:1,atk:0,up:'soc',desc:'「そう思うんだ」「ふーん」など、流すことばを練習。',hint:'返すことばを持っていると楽',icon:'flag'},
 allyWords:{title:'ケイと一緒に伝える',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人で言えなければ、仲間と伝える。',hint:'一人じゃなくてもいい',icon:'people'},
 mediate:{title:'先生を交えて話す',kind:'support',label:'助けを求める',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'公平な大人を交えて、話をする。',hint:'一人で抱え込まなくてもいい',icon:'people'},
 replyKind:{title:'嫌な言葉に、ていねいに返す',kind:'talk',label:'ていねいに返す',cost:2,strain:1,bond:1,atk:3,attr:'soc',up:'soc',desc:'「それは嫌だった」と、静かに返す。',hint:'冷静な返しは、伝わる',icon:'flag'},
 // ダークカード: ふだんの手札に混ざる、評判を下げて気持ちを楽にする選択肢。モンスターには効かない。
 anger:{title:'怒る',kind:'talk',label:'出す',cost:0,dark:1,heal:1,desc:'その場で、強い言葉をぶつける。',hint:'少し楽になるが、評判が下がる',icon:'bolt',text:'「うるさい！」と、強い言葉をぶつけた。\n少しすっきりした。でも、まわりの目は少し冷たい。',meaning:'出すと楽になる。でも、まわりからの評判は下がる。'},
 ignore:{title:'知らないふりをする',kind:'think',label:'やり過ごす',cost:0,dark:1,heal:1,desc:'見て見ぬふりをして、うずくまる。',hint:'気持ちは楽。でも、評判が下がる',icon:'eye',text:'知らないふりをして、その場をやり過ごした。\n気持ちは少し楽になった。でも、まわりの評判は下がった。',meaning:'見ないふりは一時的な楽。評判が下がると、つらい出来事が増える。'},
 boast:{title:'勝ちほこってバカにする',kind:'talk',label:'見下す',cost:1,dark:1,heal:2,desc:'相手を見下して、自分を大きく見せる。',hint:'いちばん楽になるが、いちばん評判が下がる',icon:'flag',text:'相手をバカにして、自分が勝ったように振る舞った。\n胸がすく。でも、まわりはドン引きだった。',meaning:'いちばん楽になる。でも、評判もいちばん下がり、人が離れていく。'}
};
// 気持ちがいっぱい（精神力1以下）の時だけ出せる赤いカード。気持ちを出して落ち着く。
// 回復はできるが、まわりへの影響が残るものもある。一人で整える（休む・離れる）手段でも回復は可能。
export const minusCards={
 vent:{title:'文句をいう',recover:2,rep:-1,dn:'soc',icon:'message',note:'イライラを文句にして、周りにぶつけてしまった。',desc:'不満をその場で口に出す。',text:'「なんでこうなるの」と、周りに聞こえるように文句を言った。\n少しすっきりしたけれど、近くの人は少し困った顔をしていた。',meaning:'気持ちを出すと楽になる。でも、出し方はまわりへの印象に残る。'},
 lash:{title:'やつあたりする',recover:3,rep:-1,dn:'soc',icon:'bolt',note:'イライラを、関係ないところでぶつけてしまった。',desc:'イライラを、強い言葉でぶつける。',text:'イライラがあふれて、強い言葉をぶつけてしまった。\n気持ちは軽くなったけれど、相手はびっくりしていた。',meaning:'いちばん楽になるけれど、まわりへの影響もいちばん大きい。'},
 cry:{title:'泣く',recover:2,rep:0,icon:'heart',desc:'涙で気持ちを出す。',text:'涙が出てきて、その場で少し泣いた。\n泣き止むと、少し気持ちが楽になった。',meaning:'泣くことも、気持ちを整える方法のひとつ。'},
 fail:{title:'失敗する',recover:3,rep:0,dn:'study',icon:'flag',desc:'うまくやるのを、いったんやめる。',text:'うまくやろうとするのをやめて、失敗したままにした。\n力を抜くと、胸のつかえが少しおりた。',meaning:'頑張るのを止めると楽になる。でも、やり抜く自信は少し削れる。'},
 skip:{title:'さぼる',recover:1,energy:1,rep:0,dn:'ath',icon:'clock',desc:'やることを、あと回しにする。',text:'その場のやることを、少しあと回しにした。\n楽になった分だけ、あとでやることは残っている。',meaning:'先送りは一時的な休憩。問題は待っている。'}
};
export const statMeta={study:{label:'かしこさ',attr:'学習系'},ath:{label:'運動能力',attr:'運動系'},soc:{label:'社交性',attr:'社交系'}};
const add=(arr,v)=>{if(!arr.includes(v))arr.push(v)};
const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
function grant(s,id){if(!s.hand.includes(id))s.hand.push(id);add(s.discovered,id)}
function note(s,t){add(s.clues,t)}
function relation(s,t){add(s.relations,t)}
function growth(s,t){add(s.growth,t)}
function say(s,who,text){s.transcript.push({stage:s.stage,who,text})}
function sayScene(s){const sc=def(s).scene(s);s.transcript.push({stage:s.stage,who:'scene',narrative:sc.narrative,speaker:sc.speaker,quote:sc.quote,look:sc.look,self:sc.self})}
const def=s=>stories[s.story];

// ── ストーリー定義 ──────────────────────────────────────────
// 新しいストーリーはこのレジストリに1件足すだけでよい。
// 必須: title nav num attrs goals chapters locations base monsters start
//       talk/think （探索の選択肢 [key,見出し,説明]、talk系は+1評判）
//       reasonKeys （自分に問う理由の排他選択キー）
//       stageGrants [[場面2で配るカード],[場面3で配るカード]]
//       onExplore(s,key)->{text,card?} onPlay(s,id)->{text,meaning}
//       watch(s)->text scene(s)->{narrative,speaker,quote,look,self,hint}
//       progress(s)->0..3 situation(s)->text
export const stories={
fight:{
 title:'ふたりで作ったはずなのに',nav:'クラスの子とのケンカ',num:'01',attrs:['soc'],
 goals:['大切なことを伝えたい','一緒に作品を直したい','まず言い争いを止めたい'],
 chapters:['図工の時間','どう伝えよう？','翌日の班活動'],locations:['教室・図工の時間','教室・片づけの前','教室・次の日'],
 base:['boundary','ask','distance','anger','boast'],start:{mind:3,energy:3},
 monsters:[{name:'イライラの影',hp:4,power:0,turns:4,look:'イライラが、言葉のさきにまとわりついている。'},{name:'すれちがいの壁',hp:5,power:1,turns:5,look:'聞こえない壁が、二人の間に立っている。'},{name:'わだかまり大王',hp:6,power:1,turns:5,look:'昨日のわだかまりが、大きくのしかかる。'}],
 talk:[['haru','ハルに、理由を聞く','何がじゃまだったのか、確かめる。'],['mina','ミナに、話を聞く','見ていた人の手がかりをもらう。']],
 think:[['why','大切なのは、飾りを残すこと？','何を守りたいか考える。'],['respect','先に相談してほしかった？','嫌だったことを、具体的にする。'],['feeling','頑張ったことを知ってほしい？','自分の気持ちに言葉をつける。']],
 reasonKeys:[],
 stageGrants:[['repair','together','later'],['promise','together','later']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='haru'){s.flags.reason=true;note(s,'飾りがあると、ふたが閉まらなかった。');out.text='ハル「ふたが閉まらなかったんだ。片づけの時間も近かったから……」\n外した理由が分かった。飾りを残す方法もありそう。';out.card='relocate'}
  if(key==='mina'){s.flags.mina=true;note(s,'飾りは、机の上に置いてある。');out.text='ミナ「捨てたんじゃなくて、机に置いてあるよ。必要なら、一緒に話そうか？」';out.card='mina'}
  if(key==='why'){out.text='「飾りをなくしたくなかったんだ。置く場所を変える方法もあるかな」';out.card='relocate';growth(s,'大切にしたいものを考えた。')}
  if(key==='respect'){out.text='「一番嫌だったのは、何も聞かれずに変えられたことかも」';out.card='promise';growth(s,'嫌だったことを、具体的に考えた。')}
  if(key==='feeling'){out.text='「頑張ったことを、ハルはまだ知らないのかもしれない」';out.card='effort';growth(s,'自分の気持ちを言葉にする方法を見つけた。')}
  return out;
 },
 onPlay(s,id){
  let text='',meaning='';
  if(id==='boundary'){s.flags.boundary=true;s.mind-=1;relation(s,'勝手に変えられるのは嫌だと、ハルに伝えた。');text='ハル「そんなに大事だったの？ 勝手に取ったのは悪かった」\n少し緊張したけれど、嫌だったことは伝わった。';meaning='境界は伝わった。外した理由や、直し方はまだ別の話。'}
  if(id==='ask'){s.flags.reason=true;note(s,'飾りがあると、ふたが閉まらなかった。');grant(s,'relocate');s.mind+=1;text='ハル「ふたが閉まらなかったんだよ。もう片づけの時間だったし」\n「場所を変えてつけ直す」が手札に加わった。';meaning='理由が分かると、新しい提案ができる。'}
  if(id==='distance'){s.mind+=2;s.energy+=1;s.flags.distance=true;text='廊下で少し距離をとった。言い争いはいったん止まった。\n飾りのことは、まだ気になっている。';meaning='落ち着くことと、問題を解決することは別々にできる。'}
  if(id==='relocate'){s.flags.fixed=true;s.mind+=1;text='ハル「横につけたら、ふたも閉まるね」\n飾りを残して、作品を直せた。';meaning=s.flags.boundary||s.flags.promise?'気持ちも伝えたうえで、作品を直す方法を見つけた。':'作品は直せた。「先に相談してほしい」は、まだ伝えていない。'}
  if(id==='promise'){s.flags.promise=true;relation(s,'次から動かす前に聞く、と約束した。');text='ハル「分かった。次は動かす前に聞くね」\nこれからの関わり方を一つ決められた。';meaning='意見が違っても、お互いを大切にする約束はつくれる。'}
  if(id==='effort'){s.flags.boundary=true;relation(s,'飾りを頑張って作ったことが、ハルに伝わった。');text='ハル「そうだったんだ。そんなに時間をかけたって知らなかった」';meaning='相手は、自分の頑張りをまだ知らないことがある。'}
  if(id==='mina'){s.flags.mediated=true;s.flags.boundary=true;s.mind+=1;relation(s,'ミナと一緒に、お互いの言い分を聞いた。');text='ミナ「飾りを大事にしたかったんだよね。ハルは、ふたを閉めたかったんだね」\n二人の希望を並べて話せた。';meaning='間に入ってもらうことも、関係をつくる方法。';s.flags.reason=true;grant(s,'relocate')}
  if(id==='repair'){s.flags.boundary=true;s.flags.repaired=true;relation(s,'強い言い方を謝り、自分の気持ちも伝えた。');text='自分「ひどいって強く言ったのは、ごめん。でも先に聞いてほしかった」\nハル「うん。先に聞けばよかったね」';meaning='謝ることと、自分の気持ちを大切にすることは両立できる。'}
  if(id==='together'){if(s.flags.reason||s.flags.mediated||s.flags.promise){s.flags.fixed=true;relation(s,'お互いの希望を出して、作品を直した。');text='ハル「飾りを残して、閉まる場所を探そう」\n二人で位置を変えて試した。';meaning='手がかりや話す準備があると、相談が進みやすい。'}else{s.flags.reason=true;grant(s,'relocate');note(s,'ハルは、ふたを閉める方法で困っていた。');text='ハル「一緒にって、何を？ ふたが閉まらなくて困ってたんだよ」\nすぐには決まらなかったけれど、相手の困りごとが分かった。';meaning='提案の前に、お互いの希望を知ることが役立つ。'}}
  if(id==='later'){s.flags.later=true;s.mind+=1;s.energy++;text='「次の図工の前に話そう」と決めた。\n今は休み、続きを話す機会を残した。';meaning='保留するときに、次の機会を決める方法もある。'}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ハルは「じゃまだから」と言った。飾りやふたのことで、理由がありそうだ。';
  if(s.stage===1)return '片づけの時間が近い。ハルは、こちらの出方をうかがっている。';
  return 'ハルは、昨日のことをまだ少し気にしている様子だ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'教室に戻ると、自分が作った飾りが外されていた。',speaker:'ハル',quote:'そこにあるとじゃまだから、取ったよ。',look:'ハルは、どこか強がった様子で答えた。',self:'勝手に取るなんて、ひどい！',hint:'外した理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:f.distance?'少し離れて、気持ちを整えた。作品のことを、どうしよう。':'片づけの時間が近づいてきた。作品も、自分の気持ちも気になっている。',speaker:f.mina?'ミナ':'ハル',quote:f.mina?'必要なら、一緒に話そうか？':f.reason?'ふたが閉まればいいんだけど、どうしよう？':f.boundary?'そんなに大事だったんだね。':'こっちにも理由があったんだよ。',look:f.mina?'ミナが、二人の様子を気にかけている。':'ハルも、少し気まずそうにしている。',self:'何を大切にして、次を選ぼう？',hint:'作品を直すことと、気持ちを伝えることは別々に選べる。'};
  return {narrative:'次の日、また同じ班で作品を作る時間になった。昨日の選択が、今日の会話につながっている。',speaker:'ハル',quote:f.promise?'ここ、動かしてもいい？':f.fixed?'昨日のところ、ちゃんと閉まってるよ。':f.later?'昨日の続き、今なら話せる？':f.mediated?'今日はミナも一緒に決める？':'このあと、どうやって作ろうか。',look:'ハルは、昨日より少しやわらかい顔をしている。',self:f.boundary||f.promise?'大切なことは伝えられた。今日はどうしよう。':'まだ伝えていない気持ちがある。今からでも話せるかな。',hint:'同じ相手との、次の関わり方を選ぼう。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.boundary||f.promise?3:0):s.goal===1?(f.fixed?3:f.reason?1:0):(f.distance||f.later||f.mediated||f.repaired||f.help||f.leave?3:f.boundary?1:0)},
 situation(s){const f=s.flags;return f.fixed?'飾りを残し、ふたも閉まる形に直せた。':f.later?'話す時間を決めて、いったん保留にした。':'気持ちや事情を確かめた。作品を直す方法は、まだ相談できる。'}
},
sports:{
 title:'あと一週間、どうしよう',nav:'苦手な運動会',num:'02',attrs:['ath','soc'],
 goals:['不安の理由を知りたい','自分に合う参加をしたい','困ったときに備えたい'],
 chapters:['運動会まで7日','練習の日','運動会当日'],locations:['教室・帰りの会','校庭・練習の日','校庭・運動会当日'],
 base:['practice','schedule','sora','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'あせりの霧',hp:4,power:0,turns:4,look:'あせりが、足元にまとわりつく。'},{name:'プレッシャーの壁',hp:5,power:1,turns:5,look:'見られる気配が、壁のように立ちはだかる。'},{name:'本番の大男',hp:6,power:1,turns:5,look:'本番の重圧が、目の前に立っている。'}],
 talk:[['teacher','先生に、過ごし方を相談する','音や休憩について聞いてみる。'],['friend','ソラに、気持ちを話す','楽しみではない気持ちも伝えてみる。']],
 think:[['movement','動き方が分からないのかな','スタートなど、何をすればよいか不安。'],['judgment','人に見られるのが心配かな','遅いところを見られるのが気になる。'],['noise','音や人の多さがつらいのかな','にぎやかな場所だと、体がぎゅっとなる。'],['unknown','まだ、よく分からない','練習の中で確かめることもできる。']],
 reasonKeys:['movement','judgment','noise','unknown'],
 stageGrants:[['observe','adjust'],['participate','adjust']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacher'){s.flags.teacher=true;note(s,'先生と、待つ場所や休憩を相談できた。');out.text='先生「スピーカーから離れて待つ方法を考えよう。つらいときの合図も決められるよ」';out.card='place';grant(s,'signal')}
  if(key==='friend'){s.flags.sora=true;relation(s,'ソラが、運動会への気持ちの違いを知った。');out.text='ソラ「気が重いんだね。二人で短く練習する？ タイムは計らないで」';out.card='private'}
  if(key==='movement'){s.reason='movement';note(s,'走り出し方が分からないことが、不安。');out.text='「全部が苦手というより、スタートの仕方が分からないんだ」';out.card='small'}
  if(key==='judgment'){s.reason='judgment';note(s,'遅いところを見られることが、気になる。');out.text='「走ることより、遅いところを見られるのが心配なんだ」';out.card='notice'}
  if(key==='noise'){s.reason='noise';note(s,'大きな音や人の多さが、負担になっている。');out.text='「大きな音で、体がぎゅっとなる。走る練習とは別の工夫がいるかも」';out.card='signal'}
  if(key==='unknown'){s.reason='unknown';out.text='「今はまだ、うまく言えない。練習のどこでつらくなるか、確かめてみよう」';out.card='observe'}
  return out;
 },
 onPlay(s,id){
  let text='',meaning='';
  if(id==='practice'||id==='small'){
   if(s.reason==='movement'){s.flags.practiced=true;s.mind+=1;text='スタートの姿勢だけを試した。\n「あ、こうやって足を置けばいいんだ」';meaning='動きが分からない不安には、小さく区切った練習が役立った。'}
   else if(s.reason==='noise'){s.mind-=1;text='スタートは試せた。でも、スピーカーの音で体がぎゅっとなる。';meaning='走る練習だけでは、音の負担は変わらなかった。';grant(s,'signal')}
   else if(s.reason==='judgment'){s.mind-=1;text='動きは試せた。でも、周りから見られることが気になる。';meaning='練習の量だけでなく、誰と、どこで練習するかも変えられる。';grant(s,'notice')}
   else{note(s,'少し走れたが、気が重い理由はまだはっきりしない。');text='短い距離を走ってみた。\n動きは試せたけれど、まだ気が重い。';meaning='試すことで分かることもある。理由を考える作戦も残っている。';grant(s,'observe')}
  }
  if(id==='schedule'){s.flags.teacher=true;note(s,'先生と、休憩や待つ場所を相談できる。');s.mind+=1;grant(s,'place');grant(s,'signal');text='先生「出番の間には休憩があるよ。待つ場所や、つらいときの合図も相談しよう」\n2枚の作戦カードが増えた。';meaning='予定を知るだけでなく、過ごし方を相談できる。'}
  if(id==='sora'){s.flags.sora=true;relation(s,'ソラが、運動会への気持ちの違いを知った。');grant(s,'private');text='ソラ「楽しみじゃないんだね。二人で少し練習する？ タイムは計らないで」';meaning='同じ気持ちでなくても、協力できることはある。'}
  if(id==='private'){s.flags.sora=true;s.flags.practiced=true;relation(s,'ソラと、タイムを計らず練習した。');if(s.reason==='judgment'||s.reason==='movement'){s.mind+=1;text='人の少ない場所で、ソラと短く練習した。\n順位を比べずに試せた。';meaning='自分に合う練習の条件を見つけた。'}else{text='ソラと練習できた。'+(s.reason==='noise'?'でも、大きな音はまだつらい。':'まだ気になることは残っている。');meaning='協力が助けになる部分と、別の工夫が必要な部分がある。'}}
  if(id==='place'){s.flags.place=true;if(s.reason==='noise'){s.mind+=2;text='先生と決めた、スピーカーから遠い場所へ。\n音の負担が少し軽くなった。';meaning='自分だけでなく、環境を変える作戦が役立った。'}else{text='先生と待つ場所を変えた。'+(s.reason==='judgment'?'走るところを見られる不安は、まだ残っている。':'走り方への不安は、場所を変えるだけでは消えない。');meaning='場所を変える作戦が、すべての不安に合うとは限らない。'}}
  if(id==='signal'){s.flags.signal=true;grant(s,'useSignal');text='先生「手を上げて合図したら、一緒に休憩場所へ行こう」\nつらいときにどう伝えるか、決められた。';meaning='不安が残っていても、困ったときの道を準備できる。'}
  if(id==='notice'){s.flags.supportive=true;relation(s,'ソラと、順位より試したことを見る応援を相談した。');s.mind+=1;text='ソラ「じゃあ、順位の話より、試したことを聞くね」';meaning='ほしい応援のしかたは、人によって違う。'}
  if(id==='observe'){if(!s.reason||s.reason==='unknown'){s.reason='noise';note(s,'音が大きくなると、負担も増えると気づいた。');grant(s,'signal');text='走る前より、放送が鳴ったときに体がぎゅっとなった。';meaning='この物語では、音が負担の一つだった。休憩や場所を相談できる。'}else{text='気になっていたことが、練習中にも負担になっていた。';meaning='分かった理由に合わせて、次の作戦を選べる。'}}
  if(id==='participate'){s.flags.participated=true;if((s.reason==='noise'&&!s.flags.place)||(s.reason==='judgment'&&!s.flags.supportive&&!s.flags.sora)){s.mind-=1;text='自分で決めた範囲を試した。\n気になる負担も残っている。必要なら、ここから休んでもいい。';meaning='参加できたことと、負担が軽くなったことは別の結果。'}else{text='少しドキドキしたけれど、自分で決めたことを試した。';meaning='順位とは別に、自分が試したかったことを記録できる。'}}
  if(id==='adjust'){s.flags.adjusted=true;s.mind+=1;text='先生と相談して、参加する範囲を変えた。\n次にどうしたいかは、また選べる。';meaning='当日でも、自分に合う形へ作戦を変えられる。'}
  if(id==='useSignal'){s.flags.restPlan=true;s.mind+=2;s.energy+=1;text='合図で伝えて、先生と休憩場所へ移った。\n戻るかどうかは、休んでから相談する。';meaning='準備した作戦を、必要なときに使えた。'}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ソラは楽しみにしている。不安の理由は、まだはっきりしない。';
  if(s.stage===1)return 'スピーカーの音、走る列、見ている人。負担になりそうなものが見えてくる。';
  return '人の多さが気になる。先生は、こちらの様子を気にかけている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'黒板に「運動会まで、あと7日」。明日から校庭での練習が始まる。',speaker:'ソラ',quote:'今年こそ、かけっこで一番になりたいな！',look:'ソラは、目を輝かせている。',self:'……運動会、なくなればいいのに。',hint:'何が一番つらいのか、まだ分からない。'};
  if(s.stage===1)return {narrative:'校庭での練習が始まった。走る友達や、放送の音が気になる。',speaker:f.sora?'ソラ':'先生',quote:f.sora?'どんなやり方なら、一緒に試せそう？':'練習を始めるよ。困ったことがあったら教えてね。',look:f.sora?'ソラは、こちらのペースを気にかけている。':'先生は、ゆっくりした声で話している。',self:s.reason==='noise'?'大きな音が、つらいのかもしれない。':s.reason==='judgment'?'走るところを見られるのが、気になる。':s.reason==='movement'?'スタートの動きを、少し確かめたい。':'どこでつらくなるか、確かめてみよう。',hint:'苦手の理由によって、合う作戦は変わる。'};
  return {narrative:'運動会当日。校庭にはたくさんの人がいる。少しドキドキする。',speaker:'ソラ',quote:f.sora?'今日はどうする？ 一緒に待てる時間もあるよ。':'そろそろ出番だね。今日はどうする？',look:'ソラは、少し心配そうにこちらを見ている。',self:f.signal?'つらくなったときの合図は、決めてある。':f.place?'自分に合う待つ場所を、相談できた。':'今の自分に合う過ごし方を選ぼう。',hint:'準備した作戦は、当日でも選び直せる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(s.reason&&s.reason!=='unknown'?3:s.clues.length?1:0):s.goal===1?(f.participated||f.adjusted?3:f.place||f.practiced?2:0):(f.signal||f.restPlan?3:f.teacher?1:0)},
 situation(s){const f=s.flags;return f.restPlan?'合図を使って休憩した。その後の参加は、休んでから相談する。':f.adjusted?'先生と、自分に合う参加のしかたを相談した。':f.participated?'自分で決めた範囲で参加した。順位とは別に、試した経験が残った。':'準備の作戦を試した。当日の過ごし方は、これからも選べる。'}
},
test:{
 title:'あと少しで、算数テスト',nav:'苦手な教科のテスト',num:'03',attrs:['study'],
 goals:['不安の理由を知りたい','自分に合う準備をしたい','落ち着いて取り組みたい'],
 chapters:['テスト一週間前','勉強の日','テスト当日'],locations:['教室・帰りの会','教室・放課後','教室・テスト当日'],
 base:['range','breathe','easyFirst','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'不安の影',hp:3,power:0,turns:4,look:'不安が、ノートの上をうろついている。'},{name:'わからない山',hp:4,power:1,turns:5,look:'分からないところが、山になっている。'},{name:'テスト大王',hp:5,power:1,turns:5,look:'プリントの向こうから、大王がにらんでいる。'}],
 talk:[['teacherT','先生に、苦手なところを相談する','範囲や勉強の仕方を聞いてみる。'],['kei','ケイに、気持ちを話す','得意な人にも聞いてみる。']],
 think:[['gaps','分からないところが多いのかな','まちがえたところが重なっている気がする。'],['panic','当日あがってしまうのかな','テストと聞くと、体がこわばる。'],['time','時間が足りないのかな','ゆっくり考えると、終わらない気がする。']],
 reasonKeys:['gaps','panic','time'],
 stageGrants:[['tellWorried','mistakes'],['takeTest','plan']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherT'){s.flags.teacher=true;note(s,'先生と、範囲や勉強の仕方を相談できた。');out.text='先生「範囲はここまでだよ。まちがえたところから見直すと、力がつくよ。前の日は早く寝ることも大事」';out.card='mistakes';grant(s,'goodnight')}
  if(key==='kei'){s.flags.kei=true;relation(s,'ケイが、算数が苦手な気持ちを知った。');out.text='ケイ「算数、苦手なんだ。ぼくは好きだけど……よかったら、一緒に勉強する？」';out.card='studyBuddy'}
  if(key==='gaps'){s.reason='gaps';note(s,'分からないところが多いことが、不安。');out.text='「全部が不安というより、まちがえたところが重なっているのかも」';out.card='mistakes'}
  if(key==='panic'){s.reason='panic';note(s,'あがってしまうことが、不安。');out.text='「勉強そのものより、本番であがってしまうのが心配なんだ」';out.card='calmRoutine'}
  if(key==='time'){s.reason='time';note(s,'時間が足りないことが、不安。');out.text='「考えるのに時間がかかる。終わらないかも、が一番の不安かも」';out.card='pace'}
  return out;
 },
 onPlay(s,id){
  let text='',meaning='';
  if(id==='range'){s.flags.range=true;note(s,'テストの範囲が分かった。やることが見えてきた。');s.mind+=1;grant(s,'plan');text='先生「範囲は、3年生までの計算とここの単元だよ」\n範囲が分かって、「勉強の計画を立てる」が手札に加わった。';meaning='何をすればいいか分かるだけで、不安は小さくなる。'}
  if(id==='breathe'){s.flags.breathed=true;s.mind+=1;s.energy++;text='ゆっくり息を吐いて、吸って。\n肩の力が少し抜けた。';meaning='気持ちがいっぱいになる前に整える方法もある。'}
  if(id==='easyFirst'){s.flags.practiced=true;if(s.reason==='gaps'||s.reason==='time'){s.mind+=1;text='分かる問題からノートを見直した。\n「意外と、できるところもある」';meaning='できるところから始めると、苦手の理由にも対処しやすい。'}else{text='分かる問題から見直した。\nどこが苦手かは、まだはっきりしない。';meaning='試すことで分かることもある。理由を考える作戦も残っている。';grant(s,'mistakes')}}
  if(id==='plan'){s.flags.plan=true;s.mind+=1;text='「今日は計算だけ、明日は文章題」と紙に書いた。\nやることが並ぶと、気持ちが少し軽くなった。';meaning='あいまいな不安は、計画に変えると小さくなる。'}
  if(id==='mistakes'){s.flags.reviewed=true;if(s.reason==='gaps'){s.mind+=1;text='まちがえたところをやり直した。\n同じまちがいが続いているところが分かった。';meaning='まちがい直しは、分からない不安にいちばん合う作戦だった。'}else if(s.reason==='panic'){s.mind-=1;text='まちがい直しはできた。でも、本番であがる不安は残っている。';meaning='準備と、本番のこわばりは別の負担。';grant(s,'calmRoutine')}else if(s.reason==='time'){s.mind-=1;text='見直せたけれど、じっくりやると時間がかかる。';meaning='丁寧な見直しだけでは、時間の不安は変わらない。';grant(s,'pace')}else{text='まちがえたところを見直した。\n苦手なところが、少し見えてきた。';meaning='見直すと、何が不安かも分かってくる。'}}
  if(id==='calmRoutine'){s.flags.calmPlan=true;if(s.reason==='panic'){s.mind+=2;text='「あがったら、まず息を吐く。それから名前を書く」と決めた。\n始める手順があると、少し落ち着く。';meaning='あがる不安には、始め方の決まりが合っていた。'}else{text='あがったときの始め方を決めた。';meaning='当日のこわばりへの備えができた。'}}
  if(id==='pace'){s.flags.pace=true;if(s.reason==='time'){s.mind+=1;text='「できる問題から解く、分からないのは後で」と決めた。\n順番のルールがあると、あせらなくて済みそう。';meaning='時間の不安には、自分のルールが合っていた。'}else{text='解く順番を決めた。時間の使い方も、作戦のひとつ。';meaning='当日の進め方の備えができた。'}}
  if(id==='studyBuddy'){s.flags.buddy=true;s.flags.kei=true;relation(s,'ケイと、短い時間だけ一緒に勉強した。');s.mind+=1;if(s.reason==='gaps'||s.reason==='time'){text='ケイと、できるところから少しだけ勉強した。\n「ここ、ぼくもまちがえた」一緒だと気持ちが軽い。';meaning='得意な人とやると、一人で抱える不安が小さくなる。'}else{text='ケイと一緒に勉強できた。\n不安の理由はまだあるけれど、一人ではなくなった。';meaning='協力が助けになる部分と、別の工夫が必要な部分がある。'}}
  if(id==='tellWorried'){s.flags.told=true;relation(s,'算数が不安な気持ちを、ケイに伝えた。');text='ケイ「そうなんだ。ぼくも、じつは国語が苦手で……」\n苦手は、みんなそれぞれにあると分かった。';meaning='不安を話すと、相手も自分のことを話してくれることがある。'}
  if(id==='goodnight'){s.flags.slept=true;s.mind+=1;s.energy+=2;text='早めに布団に入った。\n眠ると、体の力が戻ってくる。';meaning='休むことも、準備のひとつ。'}
  if(id==='takeTest'){s.flags.tested=true;if(s.flags.calmPlan||s.flags.pace||s.flags.plan||s.flags.buddy){s.mind+=1;text='ドキドキしたけれど、決めた作戦で取り組んだ。\nできるところから、自分のペースで進めた。';meaning='準備した作戦は、本番で力になる。'}else{s.mind-=1;text='特に決まりはなかったけれど、自分のペースで取り組んだ。\n不安は残ったままだったが、最後までやれた。';meaning='準備なしでも取り組める。でも、備えがあると気持ちは違う。'}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ケイは平気そうだ。自分の不安の理由は、まだはっきりしない。';
  if(s.stage===1)return 'ノートの、分かるところと分からないところが見えてきた。';
  return '教室は静か。先生は、こちらの様子を気にかけている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'帰りの会。先生が「来週、算数のテストをします」と言った。',speaker:'ケイ',quote:'算数のテストかあ。ぼくは得意だから大丈夫！',look:'ケイは、にこにこしている。',self:'……算数、苦手なのに。',hint:'何が一番不安なのか、まだ分からない。'};
  if(s.stage===1)return {narrative:'放課後。ノートを広げてみたけれど、どこから手をつけよう。',speaker:f.buddy?'ケイ':'先生',quote:f.buddy?'一緒にやるなら、できるところからやってみよう！':'範囲や勉強の仕方、分からないことは聞いてね。',look:f.buddy?'ケイは、こちらのペースを気にかけてくれている。':'先生は、ゆっくりした声で話している。',self:s.reason==='panic'?'本番であがるのが、心配だ。':s.reason==='time'?'時間が足りるか、心配だ。':s.reason==='gaps'?'分からないところから、直していこう。':'どこが不安か、確かめてみよう。',hint:'不安の理由によって、合う作戦は変わる。'};
  return {narrative:'テスト当日の朝。プリントが配られる。少しドキドキする。',speaker:'ケイ',quote:'お互い、自分のペースでね。',look:'ケイは、ちょっとだけ心配そうにこちらを見ている。',self:f.calmPlan?'あがったときの始め方は、決めてある。':f.plan?'自分の計画で準備してきた。':'今の自分にできることを、やってみよう。',hint:'準備した作戦は、当日でも使える。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(s.reason?3:s.clues.length?1:0):s.goal===1?(f.practiced||f.reviewed||f.plan||f.buddy?3:f.range?1:0):(f.calmPlan||f.slept||f.tested&&f.calmPlan?3:f.breathed||f.range?1:0)},
 situation(s){const f=s.flags;return f.tested?'自分の作戦でテストに取り組んだ。結果はこれからだが、準備の経験は残った。':f.buddy||f.plan||f.reviewed?'自分に合う準備をして、当日を迎えられた。':'不安を確かめた。準備の方法は、まだこれから考えられる。'}
},
join:{
 title:'はいってもいい？',nav:'友達の遊びに入りたい',num:'04',attrs:['soc'],
 goals:['仲間に入って遊びたい','自分に合う過ごし方を見つけたい','こわさと向き合いたい'],
 chapters:['休み時間','輪の近くまで','次の休み時間'],locations:['校庭・休み時間','校庭・遊びの輪のそば','校庭・昼休み'],
 base:['peekJoin','watchPlay','soloPlay','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'はいりにくさの影',hp:4,power:0,turns:4,look:'はいりたい気持ちとこわさが、影になって足元にまとわりつく。'},{name:'ことばのつっかえ',hp:5,power:1,turns:5,look:'言いたいことが、のどのあたりでつっかえている。'},{name:'あきらめ大王',hp:6,power:1,turns:5,look:'「どうせだめ」と、大きくのしかかる。'}],
 talk:[['friend2','一人でいるリクに話しかける','同じように輪の外にいる子と、仲間になる。'],['teacherJ','先生に、入り方を相談する','遊びに入るタイミングを聞く。']],
 think:[['fear','断られるのがこわいのかな','「だめ」と言われたら、どうしよう。'],['words','何と言っていいか分からない','入り方のことばが、出てこない。'],['soloOK','一人でいる方が楽かも','無理に入らなくてもいい？']],
 reasonKeys:['fear','words','soloOK'],
 stageGrants:[['invite'],['honest']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='friend2'){s.flags.friend2=true;relation(s,'一人でいるリクと話し、仲間になった。');out.text='リク「ぼくも見てたんだ。一緒に、はいれないか聞いてみる？」';out.card='pairAsk'}
  if(key==='teacherJ'){s.flags.tip=true;note(s,'入るタイミングは、ゲームの替わり目や始まる直前がねらい目。');out.text='先生「ゲームが替わるタイミングで聞くと入りやすいよ。だめと言われても、負けじゃないからね」';out.card='tipJoin'}
  if(key==='fear'){s.reason='fear';note(s,'「だめ」と言われるのがこわくて、足が止まる。');out.text='「だめと言われるのが、一番こわいんだ」';out.card='selfTalk'}
  if(key==='words'){s.reason='words';note(s,'入り方のことばが分からないことが、壁になっている。');out.text='「聞き方が分からないから、行けないんだ」';out.card='phrases'}
  if(key==='soloOK'){s.reason='soloOK';note(s,'一人でいるのも、悪くないかもしれない。');out.text='「一人で遊ぶのも悪くない。無理に入る必要はないかも」';out.card='ownGame'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='peekJoin'){
   if(f.tip){f.joined=true;relation(s,'タイミングを見て「はいっていい？」と聞き、輪に入れた。');text='ゲームが替わるときに聞いた。\n「おう、入れー！」';meaning='聞くタイミングを知っていると、入りやすい。'}
   else if(s.reason==='fear'&&!f.selfTalk){s.mind-=1;text='「えっと……」声が小さくて、聞こえてもらえなかった。';meaning='こわさがあると声が出にくい。心を整える作戦もある。';grant(s,'selfTalk')}
   else if(s.reason==='words'&&!f.phrased){s.mind-=1;text='「あの……」うまく聞けなくて、遠くから見ているだけになった。';meaning='聞き方が決まっていないと、足がすくむ。ことばの練習が助けになる。';grant(s,'phrases')}
   else{f.joined=true;relation(s,'「はいっていい？」と聞いて、輪に入れてもらった。');text='「うん、入れー！」思ったより、あっさり入れた。';meaning='聞いてみると、思ったより簡単に入れることもある。'}
  }
  if(id==='watchPlay'){note(s,'ゲームの合間に、人の入れ替わりが起きている。');f.watched=true;grant(s,'phrases');text='じっくり見ると、ゲームの合間に人が入れ替わっている。';meaning='見ているだけでも、入るヒントが見つかる。'}
  if(id==='soloPlay'){s.mind+=1;if(s.reason==='soloOK'||f.ownGame){f.soloOK=true;text='一人で縄跳びの練習を始めた。気持ちが軽い。';meaning='一人で遊ぶのも、自分で選べる答え。'}else{text='一人で遊んでみた。楽だけど、少しみんなが気になる。';meaning='一人で遊ぶこともできる。入りたい気持ちは、また考えられる。'}}
  if(id==='pairAsk'){f.joined=true;f.friend2=true;relation(s,'リクと一緒に聞いて、輪に入れた。');text='二人で聞くと、ちょっと勇気が出た。\n「いいよー！」';meaning='一人で聞くのが難しければ、誰かと一緒に聞く方法もある。'}
  if(id==='tipJoin'){f.joined=true;f.tip=true;relation(s,'切り替わりのタイミングで聞き、輪に入れた。');text='ちょうどチーム替えのタイミング。\n「うん、こっち来て！」';meaning='相手の都合に合わせた聞き方は、通りやすい。'}
  if(id==='selfTalk'){f.selfTalk=true;s.mind+=1;text='「だめと言われても、負けじゃない。聞くだけだ」\n心の中で唱えた。';meaning='断られても大丈夫と思えると、聞く勇気が出る。'}
  if(id==='phrases'){f.phrased=true;if(s.reason==='words'){s.mind+=1;text='「今から入れて？」「人数、あまってる？」\n練習したことばが、口から出た。';meaning='聞き方のことばを持っていると、足がすくまない。'}else{text='入り方のことばを練習した。';meaning='ことばの準備は、いつでも役立つ。'}}
  if(id==='ownGame'){f.ownGame=true;if(s.reason==='soloOK'){f.soloOK=true;relation(s,'一人で遊んでいたら、リクが寄ってきてくれた。');s.rep=Math.min(5,s.rep+1);text='一人で遊び始めたら、リクが寄ってきた。\n「それ、面白そうだね」';meaning='自分の遊びを楽しんでいると、人が寄ってくることもある。'}else{text='自分の遊びを始めた。気持ちが少し軽い。';meaning='入るだけが答えではない。'}}
  if(id==='invite'){f.invited=true;relation(s,'リクや輪の中の子を、自分の遊びに誘った。');text='「リク、一緒にこっちで遊ぼう」\n誘うと、向こうも笑顔になった。';meaning='入るだけでなく、誘うのも仲間づくり。'}
  if(id==='honest'){f.honest=true;relation(s,'一人で遊びたい気持ちを、ユウに正直に伝えた。');text='ユウ「そっか。じゃあ、やりたいときに来てね」';meaning='自分の気持ちを正直に伝えると、関係が楽になる。'}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ゲームが替わるとき、輪の中で人が入れ替わっている。';
  if(s.stage===1)return 'ユウは、こちらのことを気にかけている様子だ。';
  return '昨日のことがあって、輪の距離が少し近く感じる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間。校庭では、みんながドッジボールをしている。',speaker:'ユウ',quote:'ねえ、一緒にやる？',look:'ユウは、にこにこしながら手招きしている。',self:'行きたいような、行けないような……',hint:'はいりにくい理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:'輪の近くまで行ってみた。ドッジボールの声が、間近で聞こえる。',speaker:f.friend2?'リク':'ユウ',quote:f.friend2?'ぼくも、一緒に聞いてみる？':'どうしたの？ 入る？',look:f.friend2?'リクも、輪の外から見ている。':'ユウは、こちらを気にかけてくれている。',self:s.reason==='fear'?'「だめ」と言われたら、どうしよう。':s.reason==='words'?'何と言って聞けばいい？':s.reason==='soloOK'?'一人でいるのも、悪くないかも。':'どうやって入ろうか。',hint:'断られ方の心配は、やり方で軽くできる。'};
  return {narrative:'昼休み。また、みんなが集まって遊び始めた。',speaker:'ユウ',quote:f.joined?'おはよ！ 今日も一緒にやろう！':f.invited?'昨日の遊び、もう一回やる？':f.soloOK||f.ownGame?'一人の時間も、楽しそうだね。':'今日は、どうする？',look:'ユウは、昨日よりも話しやすそうだ。',self:f.joined?'昨日、入れた。今日も聞いてみよう。':f.soloOK?'一人でいるのも、悪くない。':'今回も、自分に合う入り方を選ぼう。',hint:'同じ休み時間は、また来る。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.joined||f.invited?3:f.tip||f.friend2?1:0):s.goal===1?(f.soloOK||f.ownGame||f.invited||f.joined?3:s.reason?1:0):(f.selfTalk||f.phrased||f.joined?3:s.reason?1:0)},
 situation(s){const f=s.flags;return f.joined?'輪の中に入って、みんなと遊べた。':f.invited?'自分から誘って、新しい輪をつくった。':f.soloOK||f.ownGame?'一人で遊ぶ時間を、自分で選んだ。入りたくなったら、いつでも聞ける。':'入り方のヒントを見つけた。次の休み時間もまた来る。'}
},
blame:{
 title:'おれがやったんじゃない',nav:'していないことを疑われた',num:'05',attrs:['soc','study'],
 goals:['疑いを晴らしたい','自分なりの伝え方を見つけたい','関係をこれからも続けたい'],
 chapters:['昼休み','休み時間','帰りの会の前'],locations:['教室・昼休み','廊下・休み時間','教室・帰りの会の前'],
 base:['deny','askBack','stay','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'疑いの目',hp:4,power:1,turns:4,look:'白い目玉がいくつも集まって、じっとこっちを見ている。'},{name:'決めつけの壁',hp:5,power:1,turns:5,look:'「どうせお前だろ」という声が、壁になって立ちはだかる。'},{name:'誤解大王',hp:6,power:1,turns:5,look:'ちがう事実が、王冠のように大きくのしかかる。'}],
 talk:[['eye','目撃者のアイに話を聞く','ほかの様子を見ていた人がいるかも。'],['teacherB','先生に、相談する','事情をちゃんと聞いてもらう。']],
 think:[['panicB','あせって、ことばが出ない','疑われて、頭がまっ白になる。'],['evidence','証拠がないと信じてもらえない気がする','言い返すだけでは、伝わらないかも。'],['eyesB','みんなの目が気になる','うわさが広がるのが、いちばんつらい。']],
 reasonKeys:['panicB','evidence','eyesB'],
 stageGrants:[['proveCalm'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='eye'){s.flags.witnessed=true;relation(s,'見ていたアイが、証言してくれることになった。');out.text='アイ「見てたよ。ケン、自分でふでばこにしまってた」';out.card='witness'}
  if(key==='teacherB'){s.flags.mediatedB=true;relation(s,'先生が、二人の話を聞く時間をつくってくれた。');out.text='先生「事実を確かめてからにしよう。二人の話を、わたしが聞くよ」';out.card='thirdParty'}
  if(key==='panicB'){s.reason='panicB';note(s,'あせると、伝えたいことがまとまらない。');out.text='「疑われて、頭がまっ白になってる」';out.card='compose'}
  if(key==='evidence'){s.reason='evidence';note(s,'証拠がないと、信じてもらえない気がする。');out.text='「やってないって言うだけじゃ、足りないかも」';out.card='findClue'}
  if(key==='eyesB'){s.reason='eyesB';note(s,'みんなの目が気になって、動きにくい。');out.text='「うわさが広がるのが、いちばんつらい」';out.card='calmFace'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='deny'){
   if(s.reason==='panicB'&&!f.composed){s.mind-=1;text='「やってない！」と強く言い返した。\nでも、あせった言い方が、ますます疑われるように見えた。';meaning='あせっていると、否定だけでは伝わりにくい。整理する作戦もある。';grant(s,'compose')}
   else{relation(s,'「やってない」という気持ちが、落ち着いて伝わった。');text='「ぼくは、とっていないよ」\n落ち着いた声で、伝わった。';meaning='はっきり否定することも、大事な一歩。'}
  }
  if(id==='askBack'){f.knowWhy=true;note(s,'ケンは「前に借りたことがあるから」と疑っていた。');text='ケン「こないだ借りてたじゃん。だから、お前かと思った」\n疑う理由が、分かった。';meaning='疑われる理由が分かると、反論のしかたが見えてくる。'}
  if(id==='stay'){s.mind-=1;text='何も言わずにいると、うわさだけがひろがっていった。';meaning='黙ってやり過ごすと、誤解は残ったままになることが多い。'}
  if(id==='compose'){f.composed=true;s.mind+=1;text='「やったのは誰か」「ぼくはその時、どこにいたか」\n伝える順番が、頭の中でそろった。';meaning='あせっているときは、先に内容を整理すると伝えやすい。'}
  if(id==='findClue'){if(s.reason==='evidence'){f.clueFound=true;s.monsterHp-=2;text='ふでばこの中を見てみると——消しゴムは、ケン自身のふでばこに入っていた！';meaning='事実を確かめると、誤解は一気にほどけることがある。'}else{text='あちこち探したが、手がかりは見つからなかった。';meaning='探すだけでは見つからないこともある。別の方法も試せる。'}}
  if(id==='calmFace'){f.calmed=true;s.mind+=1;text='いつもどおりにふるまった。\n動揺していない様子を見て、うわさは少し静まった。';meaning='あわてない態度も、疑いを広げない作戦になる。'}
  if(id==='witness'){f.cleared=true;relation(s,'アイの証言で、本当のことが伝わった。');text='アイ「ケンがしまうの、見てたよ」\n目撃者のことばは、強かった。';meaning='見ていた人の証言は、疑いを晴らす力になる。'}
  if(id==='thirdParty'){f.cleared=true;f.mediatedB=true;relation(s,'先生の前で、二人の話を整理してもらった。');text='先生「ふでばこを見てごらん」\nケンのふでばこから、消しゴムが出てきた。';meaning='公平な大人が間に入ると、事実が確かめやすい。'}
  if(id==='proveCalm'){if(f.knowWhy||f.composed||f.witnessed){f.cleared=true;relation(s,'時系列で説明して、誤解がほどけた。');text='「その時、ぼくは図工室にいた。アイも見てた」\nケン「ごめん、疑って」。';meaning='証拠や理由がそろうと、誤解はほどける。'}else{s.mind-=1;text='順番がぐちゃぐちゃで、うまく説明できなかった。';meaning='説明には、事実と順番の準備がいる。';grant(s,'compose')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ケンは、自分のふでばこを抱えて座っている。'; 
  if(s.stage===1)return 'うわさは静まっていないが、ケンの表情は少しやわらいだ。';
  return 'ケンは、こちらに歩み寄る気配を見せている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'昼休み。教室に戻ると、ケンがこっちをにらんでいる。',speaker:'ケン',quote:'おれの消しゴム、とったろ？',look:'ケンの後ろで、みんながこそこそ話している。',self:'やってないのに、疑われた。',hint:'疑われた理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:'休み時間。「とった」と言ううわさが、少し広がっている。',speaker:f.witnessed?'アイ':'ケン',quote:f.witnessed?'わたし、見てたよ。ケンがしまうところ。':f.knowWhy?'前に借りてたから、お前かと思ったんだ。':'どうせ、お前だろ。',look:f.witnessed?'アイが、こっちを気にかけてくれている。':'ケンは、まだ疑ったままの顔をしている。',self:s.reason==='panicB'?'あせって、ことばがまとまらない。':s.reason==='evidence'?'証拠があれば、信じてもらえるかも。':s.reason==='eyesB'?'みんなの目が、気になる。':'どう伝えれば、誤解がほどける？',hint:'言い返すだけでなく、事実や証言も使える。'};
  return {narrative:'帰りの会の前。ケンと顔をあわせる時間がやってきた。',speaker:'ケン',quote:f.cleared?'さっきは、ごめんね。':f.knowWhy?'消しゴム、どこいったんだろ……':f.witnessed?'アイが、何か言いたそうにしてる。':'……どうする？',look:'ケンは、さっきより少し気まずそうだ。',self:f.cleared?'誤解は、ほどけた。':'あと少しで、本当のことが伝わりそう。',hint:'疑いは、伝え方ひとつでほどける。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.cleared?3:f.knowWhy||f.witnessed?1:0):s.goal===1?(f.cleared||f.composed||f.calmed?3:s.reason?1:0):(f.cleared&&s.rep>=3?3:f.mediatedB||f.witnessed?2:s.rep>=2?1:0)},
 situation(s){const f=s.flags;return f.cleared?'誤解がほどけて、ケンとも話せるようになった。':f.witnessed||f.mediatedB?'証言や大人の助けがそろった。あとは伝えるだけ。':f.knowWhy?'疑う理由が分かった。説明のしかたを考えられる。':'疑いはまだ残っている。事実や証言を集める方法がある。'}
},
hurt:{
 title:'トゲのことば',nav:'友達に嫌なことを言われた',num:'06',attrs:['soc'],
 goals:['「やめて」と伝えたい','自分の気持ちを守りたい','明日も関係を続けたい'],
 chapters:['休み時間','放課後','次の日の朝'],locations:['教室・休み時間','廊下・放課後','教室・朝'],
 base:['sayStop','laughOff','walkAway','anger','boast'],start:{mind:4,energy:4},
 monsters:[{name:'トゲの言葉',hp:4,power:1,turns:4,look:'とがった言葉が、空気に刺さって残っている。'},{name:'うわさの渦',hp:5,power:1,turns:5,look:'笑い声が、渦になってまわっている。'},{name:'シコリ大王',hp:6,power:1,turns:5,look:'昨日のことが、胸のしこりになってのしかかる。'}],
 talk:[['friendC','ケイに相談する','一人で抱え込まない方法。'],['teacherC','先生に相談する','仲介を頼む。']],
 think:[['sting','ことばが刺さって痛い','「へただね」の一言が、ずっと残っている。'],['friendQ','仲直りしたいか離れたいか分からない','友達だけど、今日は近づきたくない。'],['laughQ','笑って流せる自信がない','流したいけれど、うまく笑えない。']],
 reasonKeys:['sting','friendQ','laughQ'],
 stageGrants:[['replyKind'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='friendC'){s.flags.ally=true;relation(s,'ケイが、一緒に伝えてくれることになった。');out.text='ケイ「それ、ひどいね。一緒に言いに行こうか？」';out.card='allyWords'}
  if(key==='teacherC'){s.flags.mediatedH=true;relation(s,'先生が、二人の話す場をつくってくれた。');out.text='先生「嫌だったことを伝えるのは、大切だよ。わたしもそばにいる」';out.card='mediate'}
  if(key==='sting'){s.reason='sting';note(s,'ことばが刺さって、痛みが残っている。');out.text='「『へただね』が、ずっと胸に残ってる」';out.card='selfCare'}
  if(key==='friendQ'){s.reason='friendQ';note(s,'仲直りするか離れるか、気持ちが揺れている。');out.text='「友達だけど、今日は近づきたくないかも」';out.card='distance2'}
  if(key==='laughQ'){s.reason='laughQ';note(s,'流すことばを持っていないと、返しにくい。');out.text='「笑って流したいけど、何と言えばいいか分からない」';out.card='brush'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='sayStop'){
   if(s.reason==='sting'&&!f.cared){s.mind-=1;text='「やめて」と言おうとしたが、声がふるえた。\n痛みが残っていると、ことばが出にくい。';meaning='傷ついたままだと、伝えるのは難しい。気持ちを守る作戦もある。';grant(s,'selfCare')}
   else{f.saidStop=true;relation(s,'「それ、やめて」と静かに伝わった。');text='「それ、嫌だった」と言えた。\nノアは、少しびっくりした顔をした。';meaning='嫌だと伝えることは、自分を守る第一歩。'}
  }
  if(id==='laughOff'){if(f.brushed){f.laughed=true;s.mind+=1;text='「そう思うんだ～」と、笑って流せた。\nトゲが、するっと抜けた。';meaning='流すことばを持っていると、軽くかわせる。'}else{s.mind-=1;text='笑おうとしたが、ことばが刺さったままだった。';meaning='練習なしに流すのは難しい。流し方も学べる。';grant(s,'brush')}}
  if(id==='walkAway'){f.left=true;s.mind+=1;text='少し離れた。\nトゲの言葉から距離をとると、呼吸が楽になった。';meaning='離れることも、自分を守る選び方。'}
  if(id==='selfCare'){f.cared=true;s.mind+=1;text='「嫌だった」と、自分の気持ちを認めた。\n痛いのは、弱さじゃない。';meaning='傷ついた気持ちを認めると、伝える力が戻る。'}
  if(id==='distance2'){f.distanced=true;s.mind+=1;text='今日は近づかず、明日は話してみる——距離を自分で決めた。';meaning='関係のかたちは、こちらから選べる。'}
  if(id==='brush'){f.brushed=true;s.mind+=1;text='「そう思うんだ」「ふーん」——流すことばを、声に出して練習した。';meaning='流すことばを持っていると、返しやすい。'}
  if(id==='allyWords'){f.mended=true;relation(s,'ケイと一緒に、嫌だったことを伝えた。');text='ケイ「それ、みんなの前で言うのはよくないよ」\n二人で言うと、伝わった。';meaning='一人で言えなければ、仲間と伝える方法もある。'}
  if(id==='mediate'){f.mended=true;relation(s,'先生の前で、お互いの気持ちを話せた。');text='ノア「みんなが笑うと思って、言っちゃった。ごめん」';meaning='大人を交えると、話しにくいことも話せる。'}
  if(id==='replyKind'){if(f.cared||f.saidStop||f.brushed){f.mended=true;relation(s,'静かな返しで、気持ちが伝わった。');text='「その言い方は嫌だよ。あとは好きなんだけど」\nノア「……ごめん」';meaning='冷静な返しは、相手にも届きやすい。'}else{s.mind-=1;text='言葉が出ず、笑ってやり過ごすしかなかった。';meaning='静かに返すには、自分の気持ちの準備がいる。';grant(s,'selfCare')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ノアは、みんなの笑いを気にしている様子だ。';
  if(s.stage===1)return 'トゲの言葉は残っているが、ノアは少し気まずそうだ。';
  return 'ノアは、こっちに寄るタイミングをうかがっている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間。みんなの前で、ノアが言った。',speaker:'ノア',quote:'お前の絵、へただね。ははっ',look:'まわりが笑って、ことばが刺さった。',self:'痛い。でも、何と言えばいいか分からない。',hint:'ことばの痛みの理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:'放課後。トゲの言葉が、胸に残っている。',speaker:f.ally?'ケイ':'ノア',quote:f.ally?'一緒に言いに行こうか？':f.saidStop?'……ごめん、悪かった。':f.left?'あのさ、さっきの……':'はは、なに真顔なの。',look:f.ally?'ケイがそばにいてくれる。':'ノアは、少し気まずそうだ。',self:s.reason==='sting'?'痛みが、まだ残っている。':s.reason==='friendQ'?'仲直りか、距離か……揺れている。':s.reason==='laughQ'?'流したい。でも、ことばが出ない。':'伝えるか、流すか、離れるか。',hint:'痛みは、伝え方と距離でかわせる。'};
  return {narrative:'次の日の朝。ノアと、また顔を合わせる。',speaker:'ノア',quote:f.mended?'おはよ。昨日はごめんね。':f.saidStop?'おはよ。……昨日の、あれ。':'おはよ。',look:'ノアは、昨日よりも優しい顔をしている。',self:f.mended?'気持ちは、伝わった。':'まだ、少しシコリが残っている。',hint:'関係は、続けられる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.saidStop||f.mended?3:f.cared||f.brushed?1:0):s.goal===1?(f.cared||f.laughed||f.left||f.distanced?3:s.reason?1:0):(f.mended&&s.rep>=3?3:f.mended?2:f.ally||f.mediatedH?1:0)},
 situation(s){const f=s.flags;return f.mended?'「嫌だった」が伝わって、関係が戻った。':f.saidStop?'「やめて」と伝えられた。あとは関係の形を決めるだけ。':f.left||f.cared?'自分の気持ちを守れた。伝えるのは、また今度でもいい。':'トゲはまだ残っている。守る・流す・伝える、やり方がある。'}
}
};

// ── 共通の処理 ──────────────────────────────────────────────
function snap(s){return {mind:s.mind,energy:s.energy,rep:s.rep,progress:s.progress,monsterHp:s.monsterHp,stats:{...s.stats}}}
function trackMind(s){s.mindLog.push(s.mind)}
// 場面の合間に入るおまけイベント。困っている時の救いにも、順調な時のごほうびにもなる
const bonusPool=[
 {text:'お菓子をもらった。少し元気が出た。',mind:1},
 {text:'廊下で友達と笑いあった。',rep:1},
 {text:'ぐっすり眠れた。体が軽い。',energy:1},
 {text:'本で、役立つ考え方を見つけた。',stats:'study'},
 {text:'思いきり体を動かして、すっきりした。',stats:'ath'},
 {text:'困っている子を手伝った。',stats:'soc',rep:1}
];
export function initial(story='fight'){
 const d=stories[story];
 const s={story,stage:0,mind:d.start.mind,energy:d.start.energy,rep:1,stats:{study:0,ath:0,soc:0},monsterHp:d.monsters[0].hp,turns:0,slain:[],escaped:[],dead:false,mindLog:[],bonus:null,progress:0,goal:0,hand:[...d.base],discovered:[],used:[],flags:{},clues:[],relations:[],growth:[],log:[],explored:[],rested:[],observed:[],passed:[],minused:[],transcript:[],feedback:null,finished:false,reason:null,reflection:null};
 sayScene(s);return s;
}
export function monster(s){return def(s).monsters[s.stage]}
export function available(s){return s.hand.filter(id=>!s.used.includes(id));}
export function cardAtk(s,id){const c=cards[id];return Math.max(0,(c.atk||0)+(c.attr&&!c.dark?s.stats[c.attr]:0));}
export function canPlay(s,id){return !s.finished&&!s.feedback&&available(s).includes(id)&&s.energy>=cards[id].cost&&s.mind>1;}
export function play(s,id){
 if(!canPlay(s,id))return false;
 const c=cards[id],m=monster(s),before=snap(s);
 s.energy-=c.cost;s.mind-=c.strain||0;s.used.push(id);s.turns++;
 let text='',meaning='';
 if(c.dark){
  // ダークカード: その場の気持ちを出す。楽になるが評判と社交性が下がり、モンスターには効かない
  s.mind+=c.heal||0;s.rep-=1;s.stats.soc-=1;
  relation(s,'「'+c.title+'」で、まわりの目を気にさせた。');
  text=c.text;meaning=c.meaning;
 }else{
  ({text,meaning}=def(s).onPlay(s,id));
 }
 // バフ・デバフ（±2まで）。作戦を試すと同じ系統の力が育つ
 if(c.up)s.stats[c.up]=clamp(s.stats[c.up]+1,-2,2);
 if(c.bond)s.rep=Math.min(5,s.rep+1);
 // モンスターへの攻撃。同属性の力(stats[attr])があれば効果が上下する
 const dmg=cardAtk(s,id);s.monsterHp-=dmg;
 // 生き残ったモンスターの反撃。評判が0だと、まわりの目が冷たく反撃が+1される
 // 反撃は「気持ちがいっぱい」（精神力1）までは削るが直接倒さない。大失敗は自分でコストを払いすぎた時だけ起きる
 let mdmg=0,counter='';
 if(s.monsterHp>0){
  mdmg=m.power+(s.rep<=0?1:0);
  if(mdmg>0){s.mind=s.mind>0?Math.max(1,s.mind-mdmg):s.mind-mdmg;counter=s.rep<=0?'まわりの目が冷たい。孤立が不安を増やし、余計に傷ついた。':'モンスターが反撃してきた。';}
 }
 s.mind=clamp(s.mind,0,6);s.energy=clamp(s.energy,0,5);s.rep=clamp(s.rep,0,5);
 for(const k of ['study','ath','soc'])s.stats[k]=clamp(s.stats[k],-2,2);
 growth(s,'「'+c.title+'」を試した。');
 const killed=s.monsterHp<=0,escaped=!killed&&s.turns>=m.turns;
 if(s.mind<=0){s.dead=true;s.finished=true}
 s.progress=def(s).progress(s);
 s.log.push({stage:s.stage,title:c.title,text,meaning});
 s.feedback={title:c.title,text,meaning,before,after:snap(s),dmg,mdmg,counter,killed,escaped,monster:m.name};
 say(s,'card',text);
 trackMind(s);
 return true;
}
export function setGoal(s,n){if(!Number.isInteger(n)||n<0||n>2)return false;s.goal=n;s.progress=def(s).progress(s);return true}
export function advance(s){
 if(!s.feedback)return false;s.feedback=null;
 if(s.dead){s.finished=true;return true}
 if(s.monsterHp<=0)add(s.slain,s.stage);else add(s.escaped,s.stage);
 if(s.stage===2){s.finished=true;return true}
 s.stage++;s.turns=0;s.monsterHp=monster(s).hp;s.energy=Math.min(5,s.energy+1);
 // ランダムなおまけイベント（約45%）。運でも少しだけ楽になることがある
 s.bonus=null;
 if(Math.random()<0.45){const b=bonusPool[Math.floor(Math.random()*bonusPool.length)];if(b.mind)s.mind=Math.min(6,s.mind+b.mind);if(b.energy)s.energy=Math.min(5,s.energy+b.energy);if(b.rep)s.rep=Math.min(5,s.rep+b.rep);if(b.stats)s.stats[b.stats]=clamp(s.stats[b.stats]+1,-2,2);s.bonus=b.text;say(s,'event',b.text);trackMind(s);}
 for(const c of def(s).stageGrants[s.stage-1]||[])if(!s.used.includes(c)&&!s.hand.includes(c))s.hand.push(c);
 sayScene(s);
 return true;
}
export function safety(s,type){
 if(s.finished||s.feedback)return false;
 if(type==='rest'){if(s.rested.includes(s.stage))return false;s.rested.push(s.stage);s.mind=Math.min(6,s.mind+2);s.energy=Math.min(5,s.energy+2);growth(s,'休んで、次の作戦を考える余力をつくった。');say(s,'free','静かな場所で、少し休んだ。');trackMind(s);return true}
 if(type==='help'||type==='leave'){s.flags[type]=true;if(type==='help')s.rep=Math.min(5,s.rep+1);s.progress=def(s).progress(s);s.mind=Math.min(6,s.mind+1);s.finished=true;growth(s,type==='help'?'困りごとを大人に伝えた。':'安全な場所へ移る選択をした。');trackMind(s);return true}
 return false;
}
export function canExplore(s){return !s.finished&&!s.feedback&&s.mind>1}
export function explore(s,key){
 if(!canExplore(s)||s.explored.includes(key))return null;
 const d=def(s),allKeys=[...d.talk.map(o=>o[0]),...d.think.map(o=>o[0])];
 if(!allKeys.includes(key))return null;
 if(d.reasonKeys.includes(key)&&s.reason)return null;
 s.explored.push(key);
 if(d.talk.some(o=>o[0]===key))s.rep=Math.min(5,s.rep+1); // 話す・相談する行動は評判が上がる
 const out=d.onExplore(s,key);
 if(out.card)grant(s,out.card);
 say(s,'explore',out.text);
 trackMind(s);
 return out;
}
export function canMinus(s){return !s.finished&&!s.feedback&&s.mind<=1}
export function minus(s,id){
 if(!canMinus(s))return null;
 const m=minusCards[id];if(!m||s.minused.includes(s.stage+':'+id))return null;
 s.minused.push(s.stage+':'+id);
 s.mind=Math.min(6,s.mind+m.recover);
 if(m.energy)s.energy=Math.min(5,s.energy+m.energy);
 if(m.rep)s.rep=Math.max(0,s.rep+m.rep);
 if(m.dn)s.stats[m.dn]=Math.max(-2,s.stats[m.dn]-1);
 if(m.note)relation(s,m.note);
 s.log.push({stage:s.stage,title:m.title,text:m.text,meaning:m.meaning});
 say(s,'minus',m.text);
 trackMind(s);
 return {title:m.title,text:m.text,meaning:m.meaning,recover:m.recover,rep:m.rep,dn:m.dn||null};
}
export function free(s,type){
 if(s.finished||s.feedback)return false;
 if(type==='observe'){if(s.observed.includes(s.stage))return false;s.observed.push(s.stage);const w=def(s).watch(s);note(s,w);s.rep=Math.min(5,s.rep+1);growth(s,'相手の様子や、その場の手がかりを確かめた。');say(s,'free',w);trackMind(s);return {title:'様子を確かめた',text:w,meaning:'じっくり見るだけでも、分かることが増える。'}}
 if(type==='pass'){if(s.passed.includes(s.stage))return false;s.passed.push(s.stage);s.energy=Math.min(5,s.energy+1);const t='すぐには動かず、その場をやり過ごした。\n何も変わらなかったが、少し余力が戻った。';s.log.push({stage:s.stage,title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'});growth(s,'何もしないで、様子を見る時間をつくった。');say(s,'free',t);trackMind(s);return {title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'}}
 return false;
}
export function scene(s){return def(s).scene(s)}
export function summary(s){const f=s.flags;let situation;if(s.dead)situation='気持ちがいっぱいをこえて、その場から逃げ出してしまった。ふりかえって、次の作戦を考えよう。';else if(f.help)situation='大人に困りごとを伝え、次のことを一緒に考えることにした。';else if(f.leave)situation='安全な場所へ移った。問題の続きは、落ち着いてから考えられる。';else situation=def(s).situation(s);const outcome=s.dead?'fail':(f.help||f.leave)?'exit':s.slain.includes(2)?'clear':s.slain.length?'partial':'survived';
 // 総合評価: 精神力の平均・最終手札・評判・バフ総量・イベント成否から算出
 const mindAvg=s.mindLog.length?s.mindLog.reduce((a,b)=>a+b,0)/s.mindLog.length:s.mind;
 const buffTotal=s.stats.study+s.stats.ath+s.stats.soc;
 const handSize=s.hand.length;
 const score=Math.round(mindAvg)+handSize+s.rep+buffTotal+s.slain.length*3+(s.dead?-4:0);
 const tier=score>=20?'よく乗りこなした！':score>=14?'だいぶ乗りこなせた':score>=8?'まずまず乗りこなせた':'しんどい回だった';
 return {situation,relation:s.relations.length?s.relations.join(' '):'今回は、相手との新しい約束や気持ちの共有はまだない。あとから話すこともできる。',growth:s.growth,goal:def(s).goals[s.goal],progress:s.progress,mind:s.mind,energy:s.energy,rep:s.rep,stats:{...s.stats},discovered:s.discovered.length,outcome,slain:s.slain.length,escaped:s.escaped.length,mindAvg,buffTotal,handSize,tier,lowMind:mindAvg<=3}}
