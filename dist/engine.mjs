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
 joinIn:{title:'気が進まないけど付き合う',kind:'support',label:'付き合う',cost:1,atk:0,desc:'自分の気持ちに合わない誘いに乗る。',hint:'つらい付き合いは疲れる',icon:'people'},
 vagueNo:{title:'「うーん」と濁す',kind:'support',label:'濁す',cost:0,atk:0,desc:'答えをぼやかして、その場を流す。',hint:'はっきりしないと、また誘われる',icon:'eye'},
 runOff:{title:'トイレに逃げる',kind:'support',label:'離れる',cost:0,atk:0,desc:'いったん逃げて、気持ちを整える。',hint:'逃げてもいい、あとで考える',icon:'door'},
 politeNo:{title:'「今日は一人でいたい」と断る',kind:'talk',label:'断る',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'気持ちを正直に、ていねいに伝える。',hint:'断ることも、誠実な関係',icon:'message'},
 bothWays:{title:'「明日なら」と別の案を出す',kind:'talk',label:'代案を出す',cost:1,strain:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'断るだけでなく、別の日や形を提案。',hint:'断りつつ、関係も残せる',icon:'puzzle'},
 aloneTime:{title:'一人の時間を大切にする',kind:'think',label:'自分を知る',cost:0,atk:0,up:'soc',desc:'一人でいたい気持ちを、悪いことと思わない。',hint:'自分の気持ちも大事',icon:'heart'},
 scriptNo:{title:'断ることばを練習',kind:'think',label:'練習する',cost:1,atk:0,up:'soc',desc:'「今日は一人がいい」「明日なら」などを練習。',hint:'ことばを持っていると断りやすい',icon:'flag'},
 tagDecline:{title:'リクと「明日ね」と言う',kind:'support',label:'協力する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人で断りにくければ、仲間と。',hint:'一人じゃなくてもいい',icon:'people'},
 planB:{title:'「今度一緒に」と約束する',kind:'support',label:'約束する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'別の日の約束を作って、今日は断る。',hint:'断りつつ、つながりを残す',icon:'clock'},
 rematch:{title:'すぐに再戦を挑む',kind:'talk',label:'再戦する',cost:1,strain:1,atk:1,attr:'ath',up:'ath',desc:'悔しさのまま、もう一度勝負。',hint:'勢いだけでは、また負けるかも',icon:'flag'},
 quitGame:{title:'もうやらないと言う',kind:'support',label:'やめる',cost:0,atk:0,desc:'ゲームから降りて、悔しさから離れる。',hint:'やめることもできる',icon:'door'},
 sourFace:{title:'むっとする気持ちを出す',kind:'think',label:'気持ちを出す',cost:0,atk:0,up:'soc',desc:'悔しさを、顔に出しておく。',hint:'隠すより、表に出してもいい',icon:'heart'},
 cooldown:{title:'悔しさを体に出しておく',kind:'think',label:'冷ます',cost:1,atk:0,up:'ath',desc:'深呼吸や体を動かして、熱を冷ます。',hint:'熱いままだと、判断がぶれる',icon:'sun'},
 praiseWin:{title:'「上手かったね」と言う',kind:'talk',label:'讃える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'相手の強さを、認めて伝える。',hint:'讃えると、悔しさが軽くなる',icon:'hand'},
 smartRematch:{title:'負けた理由を考えて再戦',kind:'think',label:'考えて挑む',cost:1,atk:2,attr:'ath',up:'ath',desc:'何が敗因か考えてから、挑む。',hint:'準備があると、結果が変わる',icon:'puzzle'},
 askHow:{title:'サキに勝ち方を聞く',kind:'support',label:'聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'勝った相手に、コツを教えてもらう。',hint:'負けから学べる',icon:'people'},
 reFrame:{title:'負けを練習の手がかりにする',kind:'think',label:'見方を変える',cost:1,atk:0,up:'study',desc:'負けたことで、次にやることが見える。',hint:'負けは、次の作戦のヒント',icon:'book'},
 congrats:{title:'「勝ってすごいね」と讃える',kind:'talk',label:'讃える',cost:1,strain:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'心から、相手を讃えてみる。',hint:'讃えると、関係も自分も楽になる',icon:'spark'},
 complain:{title:'「ふざけるな」と言う',kind:'talk',label:'抗議する',cost:1,strain:1,atk:1,attr:'soc',desc:'気持ちを、強い言葉でそのまま出す。',hint:'気持ちは正当。伝え方を選べる',icon:'flag'},
 sulk:{title:'べそをかく',kind:'think',label:'がっかりする',cost:0,atk:0,desc:'がっかりした気持ちを、少し出しておく。',hint:'がっかりしてもいい',icon:'heart'},
 acceptQuick:{title:'すぐに「わかった」と言う',kind:'think',label:'飲み込む',cost:0,atk:0,desc:'気持ちを飲み込んで、すぐ従う。',hint:'従うのと納得は違う',icon:'door'},
 swapLook:{title:'がっかりの気持ちに名前をつける',kind:'think',label:'気持ちに名前',cost:1,atk:0,up:'soc',desc:'「これはがっかりだ」と認める。',hint:'名前をつけると、気持ちが落ち着く',icon:'sun'},
 whyAsk:{title:'「どうして？」と事情を聞く',kind:'support',label:'事情を聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'変わった理由を、聞いてみる。',hint:'理由が分かると、納得しやすい',icon:'people'},
 makeNew:{title:'新しい楽しみの計画を立てる',kind:'think',label:'新しい計画',cost:1,atk:2,attr:'study',up:'study',desc:'代わりの楽しみを、自分で作る。',hint:'計画は、作り直せる',icon:'puzzle'},
 comfort:{title:'チカのがっかりに寄り添う',kind:'support',label:'寄り添う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一緒にがっかりして、気持ちを分ける。',hint:'がっかりは、分け合える',icon:'people'},
 planNext:{title:'「じゃあ、いつできる？」と聞く',kind:'talk',label:'次を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'延期の先を、具体的に聞いてみる。',hint:'次が見えると、待てる',icon:'clock'},
 helpFriend:{title:'一緒に別の計画を立てる',kind:'talk',label:'一緒に計画',cost:1,strain:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'チカと、別の楽しみを考える。',hint:'一緒だと、立て直しが楽になる',icon:'spark'},
 keepHand:{title:'それでも手を挙げ続ける',kind:'think',label:'挙げ続ける',cost:1,strain:1,atk:2,attr:'study',up:'study',desc:'当たらなくても、挙げ続ける。',hint:'挙げ続けること自体が力になる',icon:'hand'},
 stopHand:{title:'もう挙げないことにする',kind:'think',label:'やめる',cost:0,atk:0,desc:'期待しないように、挙げるのをやめる。',hint:'やめることもできる',icon:'door'},
 bigSigh:{title:'大きくため息をつく',kind:'think',label:'ため息',cost:0,atk:0,desc:'残念な気持ちを、ため息で出す。',hint:'気持ちを出してもいい',icon:'heart'},
 listenWell:{title:'当たった人の発表をよく聞く',kind:'think',label:'聞いて学ぶ',cost:1,atk:1,attr:'study',up:'study',desc:'聞くことも、参加の一つ。',hint:'聞くことから学べる',icon:'ear'},
 braveHand:{title:'小さくても手を挙げる',kind:'think',label:'小さく挙げる',cost:1,atk:1,attr:'soc',up:'soc',desc:'恥ずかしくても、小さく挙げてみる。',hint:'小さな一歩も、挙げることになる',icon:'flag'},
 pickRule:{title:'当て方のルールを先生に聞く',kind:'support',label:'ルールを聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'どうやって選んでいるか、聞いてみる。',hint:'ルールが分かると、納得しやすい',icon:'people'},
 learnWay:{title:'当たった人にコツを聞く',kind:'support',label:'コツを聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'発表の上手さの秘訣を、聞いてみる。',hint:'当たった人から学べる',icon:'people'},
 otherRole:{title:'発表以外の役割を探す',kind:'think',label:'別の役割',cost:1,atk:2,attr:'study',up:'study',desc:'記録係・補助など、別の貢献を見つける。',hint:'発表以外にも役割はある',icon:'puzzle'},
 nextTime:{title:'「次は当たる」と準備する',kind:'talk',label:'次に備える',cost:1,strain:1,atk:2,attr:'study',up:'study',desc:'次に当たったときのために、準備しておく。',hint:'準備は、当たる日のためにある',icon:'spark'},
 takeBack:{title:'黙って取り返す',kind:'talk',label:'取り返す',cost:1,strain:1,atk:1,attr:'soc',desc:'断りなしに、自分のものを戻す。',hint:'ことばがないと、驚かせてしまう',icon:'hand'},
 keepQuiet:{title:'何も言わずに我慢',kind:'think',label:'我慢する',cost:0,atk:0,desc:'嫌だけど、何も言わないでおく。',hint:'我慢もできる。でも気持ちは残る',icon:'door'},
 watchUse:{title:'もう少し様子を見る',kind:'think',label:'様子を見る',cost:0,atk:0,up:'soc',desc:'まずは、様子を見て考える。',hint:'様子を見ることも、選択肢',icon:'eye'},
 sayMine:{title:'「それ、俺のだよ」と伝える',kind:'talk',label:'自分のと伝える',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'自分のものだと、冷静に伝える。',hint:'伝えると、相手も気づける',icon:'flag'},
 ruleTalk:{title:'貸し借りのルールを決める',kind:'talk',label:'ルールを決める',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「使うときは聞いてね」と約束する。',hint:'ルールがあると、また使われにくい',icon:'puzzle'},
 clearNo:{title:'「今回は貸せない」とはっきり言う',kind:'talk',label:'はっきり断る',cost:1,strain:1,atk:1,attr:'soc',up:'soc',desc:'嫌なときは、はっきり断る。',hint:'断るのも、大事な権利',icon:'flag'},
 lendRule:{title:'「使うときは聞いて」と約束',kind:'support',label:'約束する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'ケンと、貸し借りの決まりを作る。',hint:'約束は、次からのルールになる',icon:'people'},
 classRule:{title:'クラスで貸し借りルールを決める',kind:'support',label:'クラスルール',cost:1,bond:1,atk:2,attr:'study',up:'study',desc:'みんなで決まりを作ると、安心できる。',hint:'みんなの決まりは強い',icon:'book'},
 lendBox:{title:'貸し借り用の箱を作る',kind:'talk',label:'貸し借り箱',cost:1,atk:2,attr:'study',up:'study',desc:'「貸していいもの箱」を作って、迷いをなくす。',hint:'仕組みで、断りやすくなる',icon:'spark'},
 backTalk:{title:'「やってない！」と反論',kind:'talk',label:'反論する',cost:1,strain:1,atk:1,attr:'soc',desc:'やってないことを、強く否定する。',hint:'気持ちは正しい。伝え方を選べる',icon:'flag'},
 saySorry:{title:'とりあえず「ごめんなさい」',kind:'talk',label:'謝る',cost:0,bond:1,atk:0,desc:'その場を収めるために、謝っておく。',hint:'収まるが、気持ちは残るかも',icon:'door'},
 goQuiet:{title:'何も言わずにうなずく',kind:'think',label:'うなずく',cost:0,atk:0,desc:'反論もせず、その場をやり過ごす。',hint:'黙ることもできる',icon:'eye'},
 explain:{title:'「走ってはいません」と説明',kind:'talk',label:'説明する',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'事実を、冷静に伝える。',hint:'事実は、冷静に伝えると届く',icon:'pen'},
 hearOut:{title:'まず最後まで聞く',kind:'think',label:'最後まで聞く',cost:1,atk:0,up:'soc',desc:'先生の言い分を、最後まで聞く。',hint:'聞いてから言うと、届きやすい',icon:'ear'},
 smallSay:{title:'「実は…」と小さく言い分を言う',kind:'talk',label:'小さく言う',cost:1,strain:1,atk:1,attr:'soc',up:'soc',desc:'反論ではなく、小さく自分の側を言う。',hint:'小さくても、言うことは言える',icon:'flag'},
 askWhy:{title:'「どう見えましたか？」と聞く',kind:'support',label:'聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'先生にどう見えたか、聞いてみる。',hint:'相手の見え方が分かると、会話になる',icon:'people'},
 vent:{title:'友達に愚痴を聞いてもらう',kind:'support',label:'愚痴る',cost:0,bond:1,atk:0,desc:'納得いかない気持ちを、友達に聞いてもらう。',hint:'吐き出すと、少し整理できる',icon:'people'},
 bothSides:{title:'両方の見え方を考える',kind:'think',label:'両方を考える',cost:1,atk:2,attr:'study',up:'study',desc:'自分の見え方と、先生の見え方の両方を考える。',hint:'両方見えると、納得が作れる',icon:'puzzle'},
 hideForgot:{title:'忘れたのを隠す',kind:'think',label:'隠す',cost:0,atk:0,desc:'バレないように、何も言わない。',hint:'隠すと、ずっと気になるかも',icon:'eye'},
 excuse:{title:'「家に忘れた」とだけ言う',kind:'talk',label:'言い訳だけ',cost:1,strain:1,atk:1,attr:'soc',desc:'事実だけ言って、謝らない。',hint:'言い訳だけだと、次がない',icon:'door'},
 panicF:{title:'あわてて固まる',kind:'think',label:'固まる',cost:0,atk:0,desc:'どうしようと思って、固まる。',hint:'固まるのも自然な反応',icon:'heart'},
 tellTruth:{title:'「忘れました」と正直に言う',kind:'talk',label:'正直に言う',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'隠さず、正直に言って謝る。',hint:'正直は、いちばん楽になる',icon:'flag'},
 sayFirst:{title:'自分から先に先生に言う',kind:'talk',label:'先に言う',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'指摘される前に、自分から言う。',hint:'先に言うと、誠実に見える',icon:'hand'},
 prepareNight:{title:'前の晩に準備する習慣を考える',kind:'think',label:'習慣を考える',cost:1,atk:2,attr:'study',up:'study',desc:'朝じゃなく、前の晩に準備する。',hint:'忘れ物は、習慣で防げる',icon:'book'},
 askLend:{title:'「明日持ってきます」と約束',kind:'support',label:'約束する',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'今日できない分の約束を立てる。',hint:'約束があると、信頼が戻る',icon:'people'},
 shareBook:{title:'友達に見せてもらう',kind:'support',label:'見せてもらう',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'今日の分は、友達と分け合う。',hint:'助けてもらってもいい',icon:'people'},
 checklist:{title:'持ち物チェックリストを作る',kind:'think',label:'リストを作る',cost:1,atk:2,attr:'study',up:'study',desc:'明日から忘れないための仕組み。',hint:'仕組みは、意志より強い',icon:'puzzle'},
 cheerUp:{title:'「元気出せ！」と明るく言う',kind:'talk',label:'励ます',cost:1,strain:1,bond:1,atk:1,attr:'soc',desc:'明るい声で、元気づける。',hint:'気持ちが先にあると、届きやすい',icon:'spark'},
 watchFar:{title:'遠くから見守る',kind:'think',label:'見守る',cost:0,atk:0,up:'soc',desc:'近づかず、そっと見ておく。',hint:'見守るのも、一つの方法',icon:'eye'},
 playNear:{title:'近くで自分の遊びをする',kind:'support',label:'近くで遊ぶ',cost:0,atk:0,desc:'声はかけず、近くにいるだけ。',hint:'近くにいるだけで、安心することもある',icon:'sun'},
 justAsk:{title:'「だいじょうぶ？」と聞く',kind:'talk',label:'聞いてみる',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'気にかけて、一言だけ聞く。',hint:'一言聞くだけで、気持ちは届く',icon:'hand'},
 stayNear:{title:'そばに座っている',kind:'support',label:'そばにいる',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'ことばではなく、そばにいる。',hint:'そばにいるだけでも、助けになる',icon:'people'},
 ownMood:{title:'自分の気持ちも保つ',kind:'think',label:'自分も保つ',cost:1,atk:0,up:'soc',desc:'相手を気にしつつ、自分も守る。',hint:'自分を保ってこそ、人を助けられる',icon:'heart'},
 listenDeep:{title:'落ち込みの理由を聞く',kind:'support',label:'話を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'話せるなら、聞いてあげる。',hint:'聞くことは、いちばんの助け',icon:'ear'},
 tellAdult:{title:'先生にケイのことを伝える',kind:'support',label:'先生に伝える',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'友達の様子を、大人に伝える。',hint:'大人に伝えるのも、助けの一つ',icon:'flag'},
 quietWith:{title:'何も聞かずに一緒にいる',kind:'talk',label:'一緒にいる',cost:1,atk:2,attr:'soc',up:'soc',desc:'理由を聞かず、ただ一緒にいる。',hint:'ことばより、そばにいるだけでも',icon:'sun'},
 stare:{title:'板書をじっと見る',kind:'think',label:'じっと見る',cost:0,atk:1,attr:'study',desc:'もう一度、板書を見つめ直す。',hint:'見返すだけでも、少し進むことがある',icon:'eye'},
 copyDown:{title:'とりあえず写す',kind:'think',label:'写す',cost:0,atk:0,desc:'分からなくても、板書を写しておく。',hint:'写すだけでは、分からないまま',icon:'pen'},
 guess:{title:'適当に答えを書く',kind:'talk',label:'適当に書く',cost:0,strain:1,atk:0,desc:'合ってなくても、何か書いておく。',hint:'書くだけでは、分かったことにならない',icon:'door'},
 handUp:{title:'小さく手を挙げて質問',kind:'talk',label:'挙手して質問',cost:1,strain:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'みんなの前でも、小さく挙げてみる。',hint:'小さな挙手でも、質問は届く',icon:'hand'},
 askAfter:{title:'授業後に先生に聞く',kind:'talk',label:'後で聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'授業中でなくても、聞ける。',hint:'後で聞くのも、質問の一つ',icon:'clock'},
 breakDown:{title:'どこから分からないか探る',kind:'think',label:'壁を探す',cost:1,atk:2,attr:'study',up:'study',desc:'「ここまでは分かる」所を見つける。',hint:'分かるところを見つけると、聞きやすい',icon:'puzzle'},
 showWork:{title:'「ここから分からない」と見せる',kind:'talk',label:'壁を見せる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'ノートを見せて、分からない所を指す。',hint:'場所を示すと、教えてもらいやすい',icon:'book'},
 togetherQ:{title:'友達と一緒に考える',kind:'support',label:'一緒に考える',cost:1,bond:1,atk:2,attr:'study',up:'soc',desc:'分かってる友達と、一緒に考える。',hint:'一緒だと、分からないも怖くない',icon:'people'},
 askSmall:{title:'「ちょっとだけ」部分を聞く',kind:'talk',label:'部分だけ聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'全部でなく、分からない所だけ聞く。',hint:'一部分でも、質問は質問',icon:'ear'},
 plugEars:{title:'耳をふさぐ',kind:'think',label:'耳をふさぐ',cost:0,atk:1,attr:'study',desc:'手で耳をおおって、音をやわらげる。',hint:'音を小さくするだけでも、楽になる',icon:'ear'},
 shout:{title:'「うるさい！」と叫ぶ',kind:'talk',label:'叫ぶ',cost:0,strain:1,atk:0,desc:'思わず、声が出る。',hint:'叫ぶと、余計うるさくなる',icon:'bolt'},
 distractTry:{title:'気にしないようにする',kind:'think',label:'気にしない',cost:0,atk:0,desc:'気にしないよう、顔をそむける。',hint:'気にしないだけでは、音は消えない',icon:'eye'},
 cover:{title:'耳を守る体勢をとる',kind:'support',label:'耳を守る',cost:1,atk:1,attr:'study',up:'study',desc:'耳を押さえる・耳栓など、自分を守る。',hint:'音から自分を守るのは、作戦の一つ',icon:'heart'},
 quietSpot:{title:'静かな場所へ移る',kind:'talk',label:'静かな所へ',cost:1,atk:1,attr:'soc',up:'soc',desc:'廊下や隅など、静かな所に行く。',hint:'場所を変えるのも、対処になる',icon:'door'},
 oneThing:{title:'一つのことに絞る',kind:'think',label:'一つに絞る',cost:1,atk:2,attr:'study',up:'study',desc:'先生の声だけ・ノートだけ、一つに絞る。',hint:'絞ると、音は気にならなくなる',icon:'puzzle'},
 sayLoud:{title:'「うるさくて困る」と伝える',kind:'talk',label:'困ると伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'先生に、困っていることを伝える。',hint:'困りごとは、伝えていい',icon:'hand'},
 pleaseQ:{title:'「少し静かにして」とお願い',kind:'talk',label:'静かにとお願い',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'うるさい友達に、やんわりお願いする。',hint:'お願いのしかたで、受け取り方が変わる',icon:'people'},
 breatheQuiet:{title:'静かな所で深呼吸',kind:'think',label:'深呼吸',cost:1,atk:0,up:'study',desc:'少し離れて、呼吸を整える。',hint:'一度離れて、整えると楽になる',icon:'sun'},
 sulkR:{title:'ふてくされる',kind:'think',label:'ふてくされる',cost:0,strain:1,atk:0,desc:'不満を抱えて、うつむく。',hint:'抱え込むだけでは、何も変わらない',icon:'skull'},
 dragFeet:{title:'だらだら練習する',kind:'think',label:'だらだら',cost:0,atk:1,desc:'やる気なく、流れに任せる。',hint:'流れだけでは、気持ちは晴れない',icon:'clock'},
 skipCheer:{title:'応援をサボる',kind:'talk',label:'サボる',cost:0,atk:0,desc:'応援係を、やる気なくやる。',hint:'サボると、まわりの目が気になる',icon:'eye'},
 cryOK:{title:'「悔しい」と認める',kind:'think',label:'悔しさを認める',cost:1,atk:1,attr:'soc',up:'soc',desc:'悔しさを、きちんと感じる。',hint:'悔しいと認めてこそ、先に進める',icon:'heart'},
 askHow2:{title:'「どうやって決まるの？」と聞く',kind:'talk',label:'決まり方を聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'選手や順番の、決まり方を聞く。',hint:'決まり方が分かると、納得しやすい',icon:'hand'},
 cheerRole:{title:'応援係の役割を考える',kind:'think',label:'役割を考える',cost:1,atk:2,attr:'soc',up:'soc',desc:'応援係にも、意味がある。',hint:'役割の意味が見えると、やる気が出る',icon:'flag'},
 nextChance:{title:'「次はどうすれば？」と聞く',kind:'talk',label:'次の方法を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'次に選ばれるための、方法を聞く。',hint:'次の目標が見えれば、今も変わる',icon:'bolt'},
 trainSee:{title:'選手の走りを見て学ぶ',kind:'think',label:'見て学ぶ',cost:1,atk:2,attr:'ath',up:'ath',desc:'選ばれた人の動きを、見て学ぶ。',hint:'見て学ぶと、次につながる',icon:'eye'},
 cheerHard:{title:'思い切り応援する',kind:'support',label:'思い切り応援',cost:1,bond:1,atk:2,attr:'ath',up:'ath',desc:'選手の背中を、大きな声で押す。',hint:'応援も、勝つための力になる',icon:'spark'},
 pretendNot:{title:'見なかったことにする',kind:'think',label:'見ないふり',cost:0,atk:0,desc:'目をそらして、知らないことにする。',hint:'見ないふりでは、不公平は残る',icon:'eye'},
 glare:{title:'にらむ',kind:'think',label:'にらむ',cost:0,atk:1,attr:'soc',desc:'じっと見て、圧をかける。',hint:'にらむだけでは、相手には伝わらない',icon:'bolt'},
 spread:{title:'みんなに言いふらす',kind:'talk',label:'言いふらす',cost:0,strain:1,atk:0,desc:'「ズルしてたよ」と、みんなに言う。',hint:'広めると、相手が傷つく',icon:'message'},
 tellFair:{title:'「公平じゃない」と先生に伝える',kind:'talk',label:'公平と伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'誰かを売るのでなく、公平さのために言う。',hint:'「公平」のための伝えは、告げ口と違う',icon:'flag'},
 quietTalk:{title:'本人に「それはズルだ」と言う',kind:'talk',label:'本人に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'先生でなく、本人に直接言う。',hint:'本人に言うのも、勇気の一つ',icon:'hand'},
 replayRule:{title:'「もう一回、ルール通りに」提案',kind:'talk',label:'やり直し提案',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'ズルの勝ちをなしにして、やり直す。',hint:'やり直しの提案は、みんなを救う',icon:'cards'},
 sayToHim:{title:'本人にやめるよう言う',kind:'talk',label:'やめてと言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「やめた方がいい」と、直接伝える。',hint:'友達だからこそ、注意できる',icon:'people'},
 tellAdult2:{title:'先生に相談する',kind:'talk',label:'先生に相談',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'どうするべきか、大人に相談する。',hint:'相談は、告げ口と違う',icon:'flag'},
 groupRule:{title:'みんなでルールを決める',kind:'support',label:'ルールを決める',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'次からズルが起きないよう、決める。',hint:'ルールがあれば、ズルは減る',icon:'list'},
 corner:{title:'隅でじっとする',kind:'think',label:'隅でじっと',cost:0,atk:0,desc:'教室の隅で、様子をうかがう。',hint:'隅にいるだけでは、仲間は増えない',icon:'eye'},
 wait:{title:'話しかけられるのを待つ',kind:'think',label:'待つ',cost:0,atk:1,attr:'soc',desc:'向こうから、話しかけてくれるのを待つ。',hint:'待つだけでは、始まらないこともある',icon:'clock'},
 fakeSmile:{title:'愛想笑いをする',kind:'talk',label:'愛想笑い',cost:0,strain:1,atk:0,desc:'とりあえず、笑っておく。',hint:'作り笑いだけでは、距離は縮まらない',icon:'sun'},
 sayHi:{title:'「よろしく」とあいさつ',kind:'talk',label:'あいさつ',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'まず一言、あいさつをする。',hint:'あいさつが、仲間入りの第一歩',icon:'hand'},
 visitOld:{title:'前のクラスの友達に会いに行く',kind:'support',label:'前の友達に会う',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'知っている友達に、会いに行く。',hint:'知っている友達がいると、安心できる',icon:'people'},
 waitSee:{title:'様子を見て一言だけ話す',kind:'talk',label:'一言だけ',cost:1,atk:2,attr:'soc',up:'soc',desc:'勢いよくでなく、一言だけ話す。',hint:'一言だけでも、距離は縮まる',icon:'ear'},
 commonTalk:{title:'共通の話題を探す',kind:'talk',label:'話題を探す',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'好きなゲームや本など、共通の話題を探す。',hint:'共通点があれば、話は進む',icon:'puzzle'},
 classMix:{title:'クラスで仲良くなる時間を作る',kind:'support',label:'仲良くなる時間',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'先生と相談して、なじむ時間を作る。',hint:'時間を作ってもらうのも、作戦の一つ',icon:'clock'},
 lunchJoin:{title:'昼休みに一緒に食べる人を探す',kind:'support',label:'一緒に食べる',cost:1,atk:2,attr:'soc',up:'soc',desc:'昼休みは、仲良くなるチャンス。',hint:'一緒に食べると、仲が深まる',icon:'sun'},
 mumble:{title:'もごもご読む',kind:'talk',label:'もごもご',cost:0,atk:0,desc:'口の中だけで、読む。',hint:'もごもごでは、読んだことにならない',icon:'eye'},
 smallVoice:{title:'小さな声で読む',kind:'talk',label:'小さな声',cost:0,atk:1,attr:'soc',desc:'聞こえるか聞こえないかの声で読む。',hint:'小さくても、声を出したことは一歩',icon:'ear'},
 skipTurn:{title:'順番をパスしてもらう',kind:'talk',label:'パスする',cost:0,strain:1,atk:0,desc:'今回だけ、読まないでおく。',hint:'パスは逃げるだけ。次も怖いまま',icon:'door'},
 lookOne:{title:'一人の友達だけ見て読む',kind:'talk',label:'一人を見て読む',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'みんなでなく、友達一人に向けて読む。',hint:'一人に向けると、気持ちが楽',icon:'people'},
 slowRead:{title:'ゆっくり丁寧に読む',kind:'talk',label:'ゆっくり読む',cost:1,atk:2,attr:'soc',up:'soc',desc:'速くなくていい。一つずつ読む。',hint:'ゆっくりは、恥ずかしくない',icon:'book'},
 practiceRead:{title:'一度練習してから読む',kind:'think',label:'練習して読む',cost:1,atk:2,attr:'study',up:'study',desc:'心の中や、小さな声で一度読む。',hint:'一度読めば、二回目は楽',icon:'pen'},
 rehearse:{title:'先生と練習する',kind:'support',label:'先生と練習',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'放課後、先生と一度読んでみる。',hint:'練習の相手は、先生でもいい',icon:'flag'},
 buddyRead:{title:'友達の前で一度読む',kind:'support',label:'友達の前で読む',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人相手に、まず読んでみる。',hint:'一人の前で読めたら、みんなの前も近い',icon:'people'},
 breatheRead:{title:'深呼吸してから読む',kind:'think',label:'深呼吸して読む',cost:1,atk:2,attr:'soc',up:'soc',desc:'落ち着いてから、読み始める。',hint:'落ち着いて始めると、声が出やすい',icon:'heart'},
 freeze:{title:'固まって何もしない',kind:'think',label:'固まる',cost:0,atk:0,desc:'びっくりして、動けなくなる。',hint:'固まるだけでは、汚れは広がる',icon:'skull'},
 hideMistake:{title:'見て見ぬふりをする',kind:'think',label:'見ぬふり',cost:0,strain:1,atk:0,desc:'こぼしたのを、知らないことにする。',hint:'ふせぐと、あとでバレてもっと困る',icon:'eye'},
 wipeHalf:{title:'適当にふく',kind:'think',label:'適当にふく',cost:0,atk:1,attr:'ath',desc:'拭き方を知らないまま、ふく。',hint:'拭き方が分かると、早く片づく',icon:'pen'},
 saySorry2:{title:'「ごめんなさい」とすぐ言う',kind:'talk',label:'すぐ謝る',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'ミスを、すぐに認めて謝る。',hint:'すぐ謝ると、まわりの目はやわらぐ',icon:'hand'},
 wipeGood:{title:'拭き方を聞いて、きちんとふく',kind:'support',label:'きちんとふく',cost:1,atk:2,attr:'ath',up:'ath',desc:'拭き方を聞いて、きれいにする。',hint:'拭き方を聞くと、早くきれいになる',icon:'spark'},
 askHelp:{title:'「手伝って」と頼む',kind:'talk',label:'手伝いを頼む',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'一人でなく、手伝いを頼む。',hint:'頼むのも、対処の一つ',icon:'people'},
 laughSelf:{title:'「やっちゃった」と笑う',kind:'talk',label:'自分で笑う',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'自分のミスを、軽く笑いに変える。',hint:'自分で笑うと、まわりも楽になる',icon:'sun'},
 mopUp:{title:'雑巾で床をきれいにする',kind:'support',label:'雑巾でふく',cost:1,atk:2,attr:'ath',up:'ath',desc:'ちゃんとした道具で、片づける。',hint:'道具を使えば、早くきれいになる',icon:'cards'},
 cleanBoth:{title:'自分とまわりを両方きれいにする',kind:'support',label:'両方きれいに',cost:1,atk:2,attr:'ath',up:'soc',desc:'自分の服と、床の両方をきれいにする。',hint:'まわりまで片づけると、評判も戻る',icon:'heart'},
 standStill:{title:'その場に立っている',kind:'think',label:'立っている',cost:0,atk:0,desc:'誰に声をかけるか、迷ったまま立つ。',hint:'立つだけでは、組はできない',icon:'skull'},
 followCrowd:{title:'だれかの後ろについていく',kind:'think',label:'ついていく',cost:0,atk:1,attr:'soc',desc:'話しかけずに、近くについていく。',hint:'ついていくだけでは、組と言えない',icon:'door'},
 pretendBusy:{title:'他のことをしているふり',kind:'think',label:'ふりをする',cost:0,strain:1,atk:0,desc:'余っているのを、ごまかす。',hint:'ふりは苦しい。余りは悪くない',icon:'eye'},
 askPair:{title:'「一緒にやる？」と誘う',kind:'talk',label:'誘う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'まだ決まっていない子に、声をかける。',hint:'自分から誘うと、組は早くできる',icon:'hand'},
 oddThree:{title:'3人組に入れてもらう',kind:'talk',label:'3人に入る',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'「入っていい？」と、2人組に聞く。',hint:'入れてもらうのも、一つの方法',icon:'people'},
 ownExp:{title:'一人で実験を始める',kind:'think',label:'一人でやる',cost:1,atk:2,attr:'study',up:'study',desc:'無理に組まず、一人でやってみる。',hint:'一人でやるのも、正当な選択肢',icon:'pen'},
 teacherPair:{title:'先生に組を調整してもらう',kind:'support',label:'先生に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'余ったことを、先生に伝える。',hint:'先生に言うのは、甘えじゃない',icon:'flag'},
 pairUp:{title:'余った子同士で組む',kind:'talk',label:'余った子と組む',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'同じく余った子と、一緒に組む。',hint:'余った同士なら、声をかけやすい',icon:'people'},
 offerNext:{title:'「次は一緒にね」と約束する',kind:'support',label:'次は一緒に',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'今回はこれで、次の約束をする。',hint:'次の約束で、関係は続く',icon:'sun'},
 waitLong:{title:'そのまま待ち続ける',kind:'think',label:'待つ',cost:0,atk:0,desc:'来るかもと、ずっと待つ。',hint:'待つだけでは、気持ちが晴れない',icon:'clock'},
 accuse:{title:'「嘘つき！」と責める',kind:'talk',label:'責める',cost:0,strain:1,atk:0,desc:'会うなり、強く責める。',hint:'責めると、相手は黙る',icon:'bolt'},
 actNormal:{title:'何もなかったように遊ぶ',kind:'think',label:'気にしないふり',cost:0,atk:1,attr:'soc',desc:'気にしていないふりをする。',hint:'気にしないふりは、心の中に残る',icon:'eye'},
 askWhy2:{title:'「どうして？」と理由を聞く',kind:'talk',label:'理由を聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'責めずに、理由だけ聞く。',hint:'理由を聞くと、怒らずに済む',icon:'ear'},
 tellFeel:{title:'「寂しかった」と気持ちを言う',kind:'talk',label:'気持ちを言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'責めずに、自分の気持ちを伝える。',hint:'気持ちを言うと、相手は聞ける',icon:'heart'},
 newPlan:{title:'新しい約束を立てる',kind:'support',label:'新しい約束',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'終わったことより、次の約束をする。',hint:'次の約束で、関係は続く',icon:'sun'},
 dayAlone:{title:'一人で遊ぶ日にする',kind:'think',label:'一人の日',cost:1,atk:2,attr:'study',up:'study',desc:'来ないなら、一人で楽しむ。',hint:'一人の日も、無駄じゃない',icon:'book'},
 hearOut2:{title:'話を最後まで聞く',kind:'talk',label:'最後まで聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'相手の言い分を、最後まで聞く。',hint:'全部聞いてから、決めていい',icon:'ear'},
 bigPromise:{title:'「約束は大事」と伝えて次を約束',kind:'support',label:'約束の大事さ',cost:1,atk:2,attr:'soc',up:'soc',desc:'気持ちを伝えて、次も約束する。',hint:'気持ちを伝えた約束は、守られやすい',icon:'flag'},
 doAll:{title:'黙って全部一人でやる',kind:'think',label:'一人でやる',cost:0,atk:1,attr:'ath',desc:'文句も言わず、全部やる。',hint:'全部一人でやると、疲れてしまう',icon:'skull'},
 slackOff:{title:'自分もサボる',kind:'think',label:'自分もサボる',cost:0,strain:1,atk:0,desc:'相手がサボるなら、自分も。',hint:'二人ともサボると、仕事が残る',icon:'door'},
 complainD:{title:'「ずるい！」と文句を言う',kind:'talk',label:'文句を言う',cost:0,strain:1,atk:0,desc:'不満を、そのままぶつける。',hint:'文句だけでは、相手は動かない',icon:'bolt'},
 callBack:{title:'「一緒にやろう」と声をかける',kind:'talk',label:'声をかける',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'逃げた相手に、普通に声をかける。',hint:'責めず声をかけると、戻りやすい',icon:'hand'},
 splitWork:{title:'分担をはっきりする',kind:'talk',label:'分担する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「こっちやるね」と、分ける。',hint:'分かれた仕事は、サボりにくい',icon:'puzzle'},
 tellTeacherD:{title:'先生に相談する',kind:'support',label:'先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人で抱えず、先生に伝える。',hint:'相談は、チクリじゃない',icon:'flag'},
 doOwn:{title:'自分の分だけきちんとやる',kind:'think',label:'自分の分だけ',cost:1,atk:2,attr:'ath',up:'ath',desc:'全部でなく、自分の分だけ。',hint:'自分の分だけなら、疲れすぎない',icon:'pen'},
 switchJob:{title:'交代制を提案する',kind:'support',label:'交代制にする',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'毎回同じだと逃げやすい。交代にする。',hint:'交代制だと、公平になる',icon:'clock'},
 finishWell:{title:'丁寧に仕上げて自慢する',kind:'support',label:'丁寧に仕上げる',cost:1,atk:2,attr:'ath',up:'ath',desc:'きれいに仕上げて、達成感を持つ。',hint:'きちんとやった達成感は、自分のもの',icon:'spark'},
 denyR:{title:'「違う！」と大声で否定',kind:'talk',label:'大声で否定',cost:0,atk:0,desc:'みんなの前で、大きな声で否定する。',hint:'大声の否定は、かえって広がる',icon:'bolt'},
 snapBack:{title:'流した人を怒鳴りつける',kind:'talk',label:'怒鳴る',cost:0,strain:1,atk:1,attr:'soc',desc:'うわさを流した子を、怒鳴る。',hint:'怒鳴ると、まわりは離れていく',icon:'bolt'},
 pretendR:{title:'聞こえないふりをする',kind:'think',label:'聞こえないふり',cost:0,strain:1,atk:0,desc:'うわさを、聞こえないことにする。',hint:'聞こえないふりは、心に残る',icon:'eye'},
 findOut:{title:'うわさを聞いた子に直接聞く',kind:'talk',label:'直接聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'まわりでなく、本人に聞く。',hint:'直接聞くと、間違いが分かる',icon:'ear'},
 laughOff2:{title:'「ほんとかもよ」と笑い飛ばす',kind:'talk',label:'笑い飛ばす',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'軽く笑って、流す。',hint:'笑い飛ばすと、勢いが止まる',icon:'sun'},
 askSource:{title:'元をたどって確認する',kind:'think',label:'元をたどる',cost:1,atk:2,attr:'study',up:'study',desc:'誰が言い始めたか、落ち着いて確かめる。',hint:'元をたどると、間違いに気づける',icon:'puzzle'},
 teacherStop:{title:'先生にうわさを止めてもらう',kind:'support',label:'先生に止めてもらう',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'広がる前に、先生に止めてもらう。',hint:'先生に言うのは、頼り方の一つ',icon:'flag'},
 tellTruth2:{title:'「本当はこう」と静かに言う',kind:'talk',label:'静かに言う',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'大きな声でなく、静かに伝える。',hint:'静かに言うと、聞いてもらえる',icon:'message'},
 keepAct:{title:'いつもどおりにする',kind:'think',label:'いつもどおり',cost:1,atk:2,attr:'soc',up:'soc',desc:'うわさに動じず、いつもどおりにする。',hint:'いつもどおりが、いちばん強い',icon:'heart'},
 forceAll:{title:'我慢して全部食べる',kind:'think',label:'我慢して全部',cost:0,atk:1,attr:'ath',desc:'苦手でも、無理して全部食べる。',hint:'無理すると、給食が嫌になる',icon:'skull'},
 hideFood:{title:'こっそり残す・隠す',kind:'think',label:'隠す',cost:0,strain:1,atk:0,desc:'苦手なものを、隠してしまう。',hint:'隠すと、あとでバレる',icon:'eye'},
 swapFood:{title:'誰かにあげる・もらう',kind:'talk',label:'あげる',cost:0,strain:1,atk:0,desc:'他の子に、押しつける。',hint:'押しつけると、相手が困る',icon:'hand'},
 littleBite:{title:'一口だけ食べてみる',kind:'think',label:'一口だけ',cost:1,atk:2,attr:'ath',up:'ath',desc:'全部でなく、一口だけ試す。',hint:'一口だけなら、挑戦できる',icon:'ear'},
 tellAmount:{title:'「少なめで」とお願いする',kind:'talk',label:'少なめで',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'量を減らしてもらう。',hint:'量を変えるのも、方法の一つ',icon:'message'},
 askWhyFood:{title:'なぜ苦手か考える',kind:'think',label:'理由を考える',cost:1,atk:2,attr:'study',up:'study',desc:'匂い？食感？理由を知ると対策が見える。',hint:'理由が分かると、工夫できる',icon:'puzzle'},
 askCook:{title:'給食の先生に相談',kind:'support',label:'給食の先生に',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'苦手なことを、給食の先生に伝える。',hint:'作る人に言うと、量を調整してもらえる',icon:'flag'},
 mixFood:{title:'他のものと混ぜて食べる',kind:'think',label:'混ぜる',cost:1,atk:2,attr:'study',up:'study',desc:'好きなものと混ぜて、食べやすくする。',hint:'混ぜると、食べやすくなる',icon:'spark'},
 fullTry:{title:'量を調整して完食する',kind:'support',label:'量を調整して完食',cost:1,atk:2,attr:'ath',up:'ath',desc:'少なめで始めて、完食する。',hint:'完食できた経験は、次の自信になる',icon:'heart'},
 biggerLie:{title:'もっと嘘を重ねる',kind:'talk',label:'嘘を重ねる',cost:0,atk:0,desc:'バレないように、嘘をもう一つ重ねる。',hint:'嘘を重ねると、あとで苦しくなる',icon:'eye'},
 blameOther:{title:'他の人のせいにする',kind:'talk',label:'人のせいに',cost:0,strain:1,atk:1,attr:'soc',desc:'嘘がバレそうな時、別の子のせいにする。',hint:'人のせいにすると、信頼を失う',icon:'bolt'},
 shutMouth:{title:'何も言わないでいる',kind:'think',label:'黙る',cost:0,strain:1,atk:0,desc:'嘘のことを、黙ってやり過ごす。',hint:'黙ると、心に残る',icon:'eye'},
 admitLie:{title:'「ごめん、嘘ついた」と言う',kind:'talk',label:'嘘を認める',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'嘘をついたことを、正直に言う。',hint:'認めるのは怖いが、信頼が戻る',icon:'flag'},
 whyLie:{title:'なぜ嘘をついたか考える',kind:'think',label:'理由を考える',cost:1,atk:2,attr:'study',up:'study',desc:'どうして嘘をついたのか、自分に聞く。',hint:'理由が分かると、次は言える',icon:'puzzle'},
 fixTruth:{title:'本当のことを言い直す',kind:'talk',label:'言い直す',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'嘘をやめて、本当のことを言い直す。',hint:'言い直せば、まだ間に合う',icon:'message'},
 writeSorry:{title:'手紙やメモで謝る',kind:'think',label:'手紙で謝る',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'口で言えなければ、書いて伝える。',hint:'書くのも、謝り方の一つ',icon:'book'},
 promiseTrue:{title:'「もう嘘はつかない」と約束',kind:'support',label:'嘘をやめる約束',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'これからは正直に言うと、約束する。',hint:'約束して、守ると信頼が戻る',icon:'heart'},
 pushHard:{title:'無理に全力で走り込む',kind:'think',label:'無理に練習',cost:0,atk:1,attr:'ath',desc:'不安のまま、無理に走り込む。',hint:'無理すると、怪我につながる',icon:'bolt'},
 dreadRun:{title:'走るのが怖いと思い込む',kind:'think',label:'怖いと思い込む',cost:0,strain:1,atk:0,desc:'失敗を想像して、怖くなる。',hint:'怖いと思い込むと、体が動かない',icon:'eye'},
 skipPractice:{title:'練習をサボる',kind:'think',label:'練習サボり',cost:0,strain:1,atk:0,desc:'怖いから、練習を休む。',hint:'サボると、ますます不安になる',icon:'eye'},
 askPace:{title:'ペース配分を聞く',kind:'talk',label:'ペースを聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'走る速さの配分を、上手い子に聞く。',hint:'配分が分かると、走りやすい',icon:'message'},
 shortRun:{title:'短い距離から練習する',kind:'think',label:'短く練習',cost:1,atk:2,attr:'ath',up:'ath',desc:'いきなり長くなく、短い距離から。',hint:'短い距離なら、始められる',icon:'runner'},
 teamTalk:{title:'チームに不安を話す',kind:'talk',label:'不安を話す',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'「実は不安」と、チームに言う。',hint:'話すと、みんなが応援してくれる',icon:'hand'},
 breathRun:{title:'深呼吸で落ち着く',kind:'think',label:'深呼吸',cost:1,atk:1,attr:'study',up:'study',desc:'走る前に、深呼吸をする。',hint:'深呼吸すると、落ち着ける',icon:'sun'},
 batonPass:{title:'バトン練習を重ねる',kind:'think',label:'バトン練習',cost:1,atk:2,attr:'ath',up:'ath',desc:'バトンの受け渡しを、練習する。',hint:'バトンが決まれば、流れが変わる',icon:'bolt'},
 relayRun:{title:'本番を走り切る',kind:'support',label:'走り切る',cost:1,atk:2,attr:'ath',up:'ath',desc:'練習の成果で、本番を走り切る。',hint:'走り切った経験は、自信になる',icon:'flag'},
 panicLate:{title:'慌てて全部やろうとする',kind:'think',label:'慌てる',cost:0,atk:1,attr:'study',desc:'遅れた分を、一気に全部やろうとする。',hint:'慌てると、どれも中途半端になる',icon:'bolt'},
 hideLate:{title:'遅れを隠す',kind:'think',label:'遅れを隠す',cost:0,strain:1,atk:0,desc:'分からないのを、隠す。',hint:'隠すと、ますます分からなくなる',icon:'eye'},
 copyOnly:{title:'友達のノートを写すだけ',kind:'think',label:'写すだけ',cost:0,strain:1,atk:0,desc:'内容を考えず、写すだけ。',hint:'写すだけでは、分からないまま',icon:'book'},
 askMissed:{title:'休んだ日の内容を聞く',kind:'talk',label:'休んだ日を聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'休んだ日に、何をやったか聞く。',hint:'何があったか聞けば、追いつける',icon:'message'},
 askTeacherS:{title:'分からないところを先生に聞く',kind:'support',label:'先生に聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'分からないところだけ、先生に聞く。',hint:'分からないところを絞ると、聞きやすい',icon:'flag'},
 bitByBit:{title:'少しずつ追いつく',kind:'think',label:'少しずつ',cost:1,atk:2,attr:'study',up:'study',desc:'一気にでなく、少しずつやる。',hint:'少しずつなら、続けられる',icon:'ear'},
 noteKey:{title:'友達に要点を聞く',kind:'talk',label:'要点を聞く',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'ノートの、大事なところを聞く。',hint:'要点だけなら、聞きやすい',icon:'puzzle'},
 catchPlan:{title:'追いつく計画を立てる',kind:'think',label:'追いつく計画',cost:1,atk:2,attr:'study',up:'study',desc:'いつ・何をやるか、計画を立てる。',hint:'計画があれば、迷わない',icon:'list'},
 caughtUp:{title:'追いつけた！',kind:'support',label:'追いついた',cost:1,atk:2,attr:'study',up:'study',desc:'遅れを、取り戻した。',hint:'追いついた経験は、自信になる',icon:'check'},
 coverUp:{title:'ごまかして出す',kind:'think',label:'ごまかす',cost:0,strain:1,atk:1,attr:'study',desc:'直さないまま、出す。',hint:'ごまかすと、あとがつらい',icon:'eye'},
 throwAway:{title:'捨ててしまう',kind:'think',label:'捨てる',cost:0,strain:1,atk:0,desc:'壊れた作品を、捨てる。',hint:'楽になるが、作品はなくなる',icon:'door'},
 mendBit:{title:'直せるところだけ直す',kind:'think',label:'少し直す',cost:1,atk:2,attr:'study',up:'study',desc:'壊れたところだけ、直す。',hint:'小さな直しから、形になる',icon:'pen'},
 partRedo:{title:'一部分だけ作り直す',kind:'think',label:'部分直し',cost:1,atk:2,attr:'study',up:'study',desc:'だめな部分だけ、新しく作る。',hint:'全部やり直さなくていい',icon:'puzzle'},
 likePart:{title:'好きなところを見直す',kind:'think',label:'見直す',cost:1,atk:2,attr:'study',up:'study',desc:'作品の好きなところを、もう一度見る。',hint:'好きなところが、直すヒントになる',icon:'heart'},
 consultArt:{title:'先生と直し方を考える',kind:'talk',label:'直し方を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'先生に、どう直すか聞く。',hint:'一人で抱えなくていい',icon:'people'},
 showArt:{title:'友達に作品を見せる',kind:'talk',label:'見せる',cost:1,bond:1,atk:1,attr:'soc',up:'soc',desc:'壊れたまま、友達に見せる。',hint:'見てもらうと、気持ちが軽くなる',icon:'message'},
 copyGood:{title:'うまい人の真似をする',kind:'think',label:'真似する',cost:1,atk:2,attr:'study',up:'study',desc:'上手な子の作り方を、真似する。',hint:'真似は、上手になる近道',icon:'search'},
 fixIdea:{title:'新しい形に直す',kind:'support',label:'新しい形',cost:2,atk:3,attr:'study',up:'study',desc:'壊れた形をいかして、新しい作品にする。',hint:'失敗も、材料になる',icon:'spark'},
 forceSubmit:{title:'そのまま出す',kind:'think',label:'そのまま出す',cost:0,strain:1,atk:1,attr:'study',desc:'直さないまま、提出する。',hint:'出すことは大事。でも…',icon:'flag'},
 finishWork:{title:'ちゃんと仕上げて出す',kind:'support',label:'仕上げる',cost:2,atk:3,attr:'study',up:'study',desc:'直した作品を、自信を持って出す。',hint:'やり直した分だけ、自信になる',icon:'check'},
 // ダークカード: ふだんの手札に混ざる、評判を下げて気持ちを楽にする選択肢。モンスターには効かない。
 anger:{title:'怒る',kind:'talk',label:'出す',cost:0,dark:1,heal:1,desc:'その場で、強い言葉をぶつける。',hint:'少し楽になるが、評判が下がる',icon:'bolt',text:'「うるさい！」と、強い言葉をぶつけた。\n少しすっきりした。でも、まわりの目は少し冷たい。',meaning:'出すと楽になる。でも、まわりからの評判は下がる。'},
 ignore:{title:'知らないふりをする',kind:'think',label:'やり過ごす',cost:0,dark:1,heal:1,desc:'見て見ぬふりをして、うずくまる。',hint:'気持ちは楽。でも、評判が下がる',icon:'eye',text:'知らないふりをして、その場をやり過ごした。\n気持ちは少し楽になった。でも、まわりの評判は下がった。',meaning:'見ないふりは一時的な楽。評判が下がると、つらい出来事が増える。'},
 boast:{title:'勝ちほこってバカにする',kind:'talk',label:'見下す',cost:1,dark:1,heal:2,desc:'相手を見下して、自分を大きく見せる。',hint:'いちばん楽になるが、いちばん評判が下がる',icon:'flag',text:'相手をバカにして、自分が勝ったように振る舞った。\n胸がすく。でも、まわりはドン引きだった。',meaning:'いちばん楽になる。でも、評判もいちばん下がり、人が離れていく。'}
};
// 気持ちがいっぱい（精神力1以下）の時だけ出せる赤いカード。気持ちを出して落ち着く。
// 回復はできるが、まわりへの影響が残るものもある。一人で整える（休む・離れる）手段でも回復は可能。
export const minusCards={
 grumble:{title:'文句をいう',recover:2,rep:-1,dn:'soc',icon:'message',note:'イライラを文句にして、周りにぶつけてしまった。',desc:'不満をその場で口に出す。',text:'「なんでこうなるの」と、周りに聞こえるように文句を言った。\n少しすっきりしたけれど、近くの人は少し困った顔をしていた。',meaning:'気持ちを出すと楽になる。でも、出し方はまわりへの印象に残る。'},
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
},
alone:{
 title:'今日は一人でいたい',nav:'一人でいたいのに誘われた',num:'07',attrs:['soc'],
 goals:['気持ちよく断りたい','一人の時間も大切にしたい','関係を壊さず断りたい'],
 chapters:['休み時間','帰り道','次の日'],locations:['教室・休み時間','帰り道','教室・朝'],
 base:['politeNo','joinIn','vagueNo','runOff','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'誘いの波',hp:4,power:0,turns:4,look:'優しい誘いが、波のように押し寄せる。'},{name:'断りにくさの壁',hp:5,power:1,turns:5,look:'「嫌がらせたくない」が、壁になって立ちはだかる。'},{name:'気まずさ大王',hp:6,power:1,turns:5,look:'断ったあとの気まずさが、大きくのしかかる。'}],
 talk:[['friendD','リクに相談する','一緒に断ってもらう方法。'],['teacherD','先生に相談する','断ることばの型を聞く。']],
 think:[['noWords','断ることばが分からない','「いや」と言うのが難しい。'],['guilt','断ると相手が悲しむ気がする','誘ってくれたのに、断るのは悪い？'],['wantAlone','本当は一人の時間がほしい','今日は、ひとりでゆっくりしたい。']],
 reasonKeys:['noWords','guilt','wantAlone'],
 stageGrants:[['planB'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='friendD'){s.flags.allyD=true;relation(s,'リクが、一緒に伝えてくれることになった。');out.text='リク「一人でいたい日もあるよね。一緒に『明日ね』って言おう」';out.card='tagDecline'}
  if(key==='teacherD'){s.flags.scripted=true;note(s,'断ることばは「今日は一人がいい」「今度なら」など。');out.text='先生「『今日は一人がいいな』って正直に言っていいよ。『今度なら』をつけると、やさしさが伝わる」';out.card='scriptNo'}
  if(key==='noWords'){s.reason='noWords';note(s,'断ることばを持っていないと、流されやすい。');out.text='「いやと言うのが難しい」';out.card='scriptNo'}
  if(key==='guilt'){s.reason='guilt';note(s,'断ると相手が悲しむ気がして、言いにくい。');out.text='「誘ってくれたのに、断るのは悪いかも」';out.card='bothWays'}
  if(key==='wantAlone'){s.reason='wantAlone';note(s,'一人でいたい気持ちも、大事な気持ち。');out.text='「今日は、一人でゆっくりしたいんだ」';out.card='aloneTime'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='joinIn'){
   if(s.reason==='wantAlone'){s.mind-=1;text='付き合ったが、一人の時間がほしかった気持ちが残った。';meaning='自分の気持ちに合わない付き合いは、疲れることがある。'}
   else{f.joined2=true;text='少し疲れたが、一緒に遊んだ。\n楽しかった部分もあった。';meaning='付き合うこともできる。でも、いつも付き合う必要はない。'}
  }
  if(id==='vagueNo'){s.mind-=1;text='「うーん」と濁したら、ルイは「じゃあね」と去った。\nでも、断ったのか断ってないのか、もやもやが残った。';meaning='はっきりしないと、気持ちが残る。'}
  if(id==='runOff'){f.dodged=true;s.mind+=1;text='いったん離れて、ひと息ついた。\nあとで、気持ちを伝える余裕ができた。';meaning='離れてもいい。そのあと伝える手がかりを作ろう。'}
  if(id==='politeNo'){
   if(f.scripted||f.aloneWays){f.declined=true;relation(s,'「今日は一人がいい」と、ていねいに断った。');text='ルイ「分かった！ 明日やろうね」\n正直に言っても、関係は続いた。';meaning='断ることも、誠実な関係の作り方。'}
   else{s.mind-=1;text='「あの……」言い方が分からず、口ごもってしまった。';meaning='断ることばを持っていないと、伝えにくい。練習が助けになる。';grant(s,'scriptNo')}
  }
  if(id==='bothWays'){f.declined=true;f.bothWays=true;relation(s,'「明日なら」と断りつつ、関係を残した。');text='ルイ「明日ね！ 楽しみ」\n断ったのに、笑顔が残った。';meaning='断るだけでなく、次の案を出すと関係が続く。'}
  if(id==='aloneTime'){f.aloneWays=true;s.mind+=1;text='一人で本を読んだ。\n一人の時間も、悪くない。';meaning='一人でいたい気持ちも、大切な気持ち。'}
  if(id==='scriptNo'){f.scripted=true;s.mind+=1;text='「今日は一人がいい」「今度なら」\n練習したことばが、口を出やすくする。';meaning='断ることばを持っていると、伝えやすい。'}
  if(id==='tagDecline'){f.declined=true;relation(s,'リクと一緒に「明日ね」と伝えた。');text='リク「俺ら、明日一緒にやろうぜって言いたいんだ」\n二人で言うと、伝わった。';meaning='一人で断りにくければ、誰かと一緒でもいい。'}
  if(id==='planB'){f.declined=true;f.promised=true;relation(s,'「今度一緒に」と約束を作り、今日は断った。');text='ルイ「じゃあ木曜ね！ それまでに考えておく」';meaning='別の日の約束は、断りつつ関係を残せる。'}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ルイは、こちらの返事を楽しみに待っている。';
  if(s.stage===1)return 'ルイは、少し期待と不安の混じった顔をしている。';
  return 'ルイは、昨日よりも自然に話しかけてくる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間。一人でゆっくりしたかったのに、ルイが駆け寄ってきた。',speaker:'ルイ',quote:'ねえ、一緒に遊ぼうよ！',look:'ルイは、目を輝かせて誘ってくる。',self:'今日は一人でいたかったのに……',hint:'断りにくい理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:'帰り道。誘いのことばと、自分の気持ちがぐちゃぐちゃになっている。',speaker:f.allyD?'リク':'ルイ',quote:f.allyD?'一人の日もあるよね。一緒に言おうか？':f.declined?'明日ね！ 楽しみにしてる':f.dodged?'さっきはごめん、急いでたんだ':'……で、どうする？',look:f.allyD?'リクが、そばにいてくれる。':'ルイは、返事を待っている。',self:s.reason==='noWords'?'断ることばが、出てこない。':s.reason==='guilt'?'断ると、悲しませるかも。':s.reason==='wantAlone'?'一人の時間も、大切にしたい。':'正直に伝えるか、流すか。',hint:'断り方にも、やさしい形がある。'};
  return {narrative:'次の日の朝。ルイが、また教室に来た。',speaker:'ルイ',quote:f.declined?'おはよ！ 木曜の約束、忘れないよ':f.promised?'木曜ね！ それまでに考えておく':f.dodged?'昨日は急いでてごめん':'おはよ。今日はどうする？',look:'ルイは、昨日よりも気軽そうに話しかけてくる。',self:f.declined?'断っても、関係は続いた。':'断り方、まだ練習中。',hint:'断ることも、関係を続ける方法。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.declined?3:f.scripted||f.allyD?1:0):s.goal===1?(f.aloneWays||f.declined||f.dodged?3:s.reason?1:0):(f.declined&&s.rep>=3?3:f.bothWays||f.promised?2:f.declined?1:0)},
 situation(s){const f=s.flags;return f.declined&&f.promised?'気持ちよく断りつつ、次の約束も作れた。':f.declined?'「今日は一人がいい」を伝えられた。関係は続いている。':f.aloneWays?'一人の時間を、自分で選んだ。':'誘いはまだ残っている。断り方のことばは、練習できる。'}
},
lose:{
 title:'負けた！ どうする',nav:'ゲームに負けた',num:'08',attrs:['soc','ath'],
 goals:['悔しさを乗りこなしたい','相手を認めたい','次につなげたい'],
 chapters:['休み時間のドッジボール','放課後','次の日'],locations:['校庭・ドッジボール','教室・放課後','校庭・朝'],
 base:['rematch','quitGame','sourFace','anger','boast'],start:{mind:4,energy:4},
 monsters:[{name:'悔しさの炎',hp:4,power:1,turns:4,look:'負けた悔しさが、胸に火をつける。'},{name:'くやしさの鎖',hp:5,power:1,turns:5,look:'「また負けるかも」が、鎖になって足を引く。'},{name:'再戦魔王',hp:6,power:1,turns:5,look:'「もう一度」の誘惑が、大きくのしかかる。'}],
 talk:[['winnerS','勝ったサキに話を聞く','強さの理由を聞いてみる。'],['teacherE','先生に相談する','悔しさの扱い方を聞く。']],
 think:[['frustrate','悔しくて仕方ない','あと少しだったのに、と思い続けている。'],['face','みんなに負けたのが恥ずかしい','負けた姿を、見られたくない。'],['again','すぐに再戦したい','今すぐにでも、取り返したい。']],
 reasonKeys:['frustrate','face','again'],
 stageGrants:[['congrats'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='winnerS'){s.flags.learned=true;relation(s,'サキが、強さのコツを教えてくれた。');out.text='サキ「守りを見てから投げるんだ。じゃないと、すぐ取られるよ」';out.card='askHow'}
  if(key==='teacherE'){s.flags.reframed=true;note(s,'負けは、次の練習の手がかりになる。');out.text='先生「負けたことで、次に何をすればいいか分かったんじゃない？」';out.card='reFrame'}
  if(key==='frustrate'){s.reason='frustrate';note(s,'悔しさで、体が熱くなっている。');out.text='「あと少しだったのに、悔しい」';out.card='cooldown'}
  if(key==='face'){s.reason='face';note(s,'負けた姿を、見られたくない気持ちがある。');out.text='「みんなの前で負けたのが、恥ずかしい」';out.card='praiseWin'}
  if(key==='again'){s.reason='again';note(s,'今すぐ取り返したい気持ちが強い。');out.text='「すぐに、もう一度やりたい」';out.card='smartRematch'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='rematch'){
   if(f.smart||f.reframed){f.clearedL=true;relation(s,'準備して挑んだ再戦で、いい勝負ができた。');text='守りを見てから投げた。\n「惜しかった！」サキも本気の顔だ。';meaning='準備があると、同じ相手でも違う結果になる。'}
   else{s.mind-=1;text='勢いで再戦したが、また負けた。\n悔しさが、さらに大きくなった。';meaning='勢いだけの再戦は、同じ結果になりがち。';grant(s,'smartRematch')}
  }
  if(id==='quitGame'){s.mind+=1;text='「もうやらない」と言って、離れた。\n楽になった。でも、少しもやもやが残った。';meaning='やめることもできる。でも、悔しさは残ることがある。'}
  if(id==='sourFace'){f.soured=true;s.mind+=1;text='むっとした顔で、悔しさを出した。\n隠すより、少し楽になった。';meaning='悔しさを出すことも、悪くない。'}
  if(id==='cooldown'){f.cooled=true;s.mind+=1;s.energy+=1;text='深呼吸して、熱を冷ました。\n頭が少し、すっきりした。';meaning='熱いままだと判断がぶれる。冷ますことも作戦。'}
  if(id==='praiseWin'){f.praised=true;relation(s,'「上手かったね」と伝えると、サキが照れていた。');text='サキ「えっ、そ、そう？」\n讃えたら、悔しさが少し軽くなった。';meaning='相手を認めると、自分の悔しさも扱いやすくなる。'}
  if(id==='smartRematch'){f.smart=true;note(s,'敗因: 守りを見ずに投げていた。');text='「投げる前に、守りを見てなかった」\n負けた理由が、少し見えた。';meaning='負けた理由が分かると、次の作戦が立つ。'}
  if(id==='askHow'){f.clearedL=true;f.learned=true;relation(s,'サキにコツを聞いて、次の約束をした。');text='サキ「明日、練習してみる？」\n負けた相手が、教えてくれることになった。';meaning='負けた相手から学ぶと、関係も強くなる。'}
  if(id==='reFrame'){f.reframed=true;s.mind+=1;text='「負けたから、守りの練習が必要って分かった」\n見方を変えると、気持ちが向きを変えた。';meaning='負けは、次の練習の地図になる。'}
  if(id==='congrats'){if(f.praised||f.learned){f.clearedL=true;relation(s,'「勝ってすごいね」と讃えて、関係が戻った。');text='サキ「……ありがと。明日もやろう」';meaning='心から讃えると、自分も楽になる。'}else{s.mind-=1;text='「すごいね」と言ったが、心がついていかなかった。';meaning='讃えるには、気持ちの整理が先かもしれない。';grant(s,'praiseWin')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'サキは、勝ったことをまだ喜んでいる。';
  if(s.stage===1)return 'サキは、こちらの様子をちらちら見ている。';
  return 'サキは、もう一度やる気配を見せている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間のドッジボールで、負けてしまった。',speaker:'サキ',quote:'ざまあみろ！ 俺、強いだろ？',look:'サキは、勝ち誇った顔でこっちを見ている。',self:'悔しい！ なんで負けたんだ……',hint:'悔しさの理由は、まだ分からない。'};
  if(s.stage===1)return {narrative:'放課後。悔しさが、まだ残っている。',speaker:f.learned?'サキ':'サキ',quote:f.learned?'明日、練習してみる？':f.clearedL?'今日はいい勝負だったな':'ざまあみろ、って顔されてたな',look:f.learned?'サキは、教える気分でいる。':'サキは、少し得意げだ。',self:s.reason==='frustrate'?'悔しさで、体が熱い。':s.reason==='face'?'負けた姿を、見られたくない。':s.reason==='again'?'すぐに、取り返したい。':'悔しさと、どう付き合う？',hint:'悔しさは、冷ます・変える・伝えるで扱える。'};
  return {narrative:'次の日の朝。サキが、また誘いに来た。',speaker:'サキ',quote:f.clearedL?'おはよ！ 今日もやろうぜ':f.praised?'昨日の、すごかったな':f.learned?'教えたやつ、試してみる？':'……やる？',look:'サキは、昨日よりも話しやすそうだ。',self:f.clearedL?'悔しさは、もう向きを変えた。':'まだ少し、もやもやが残っている。',hint:'負けは、次の力になる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedL?3:f.cooled||f.soured?1:0):s.goal===1?(f.praised||f.clearedL?3:s.reason?1:0):(f.learned||f.reframed||f.clearedL?3:f.smart?2:0)},
 situation(s){const f=s.flags;return f.clearedL?'悔しさを乗りこなし、次の約束ができた。':f.learned||f.reframed?'負けを、次の作戦に変えられた。':f.cooled||f.soured?'悔しさは、少し扱いやすくなった。':'悔しさは残っている。冷ます・変える・伝える方法がある。'}
},
change:{
 title:'急に、予定が変わった',nav:'予定が変わった',num:'09',attrs:['soc','study'],
 goals:['気持ちを立て直したい','事情を納得したい','次の計画を作りたい'],
 chapters:['3時間目の発表','放課後','翌朝'],locations:['教室・3時間目','教室・放課後','教室・朝'],
 base:['complain','sulk','acceptQuick','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'予定変更の落とし穴',hp:4,power:1,turns:4,look:'楽しみにしていた穴が、ポッカリと開く。'},{name:'失望の霧',hp:5,power:1,turns:5,look:'「なんで」の霧が、前を見えなくする。'},{name:'仕方なさ大王',hp:6,power:1,turns:5,look:'「仕方ないじゃん」の巨大な壁が、立ちはだかる。'}],
 talk:[['chikaF','チカの話を聞く','同じくがっかりしている友達の話を聞く。'],['teacherP','先生に事情を聞く','変わった理由を聞いてみる。']],
 think:[['disappointed','がっかりして動けない','楽しみにしていたのに、という気持ちが重い。'],['unfair','納得いかない','急すぎて、理不尽に感じる。'],['stuckPlan','予定がこわれると頭が真っ白','何をすればいいか分からなくなる。']],
 reasonKeys:['disappointed','unfair','stuckPlan'],
 stageGrants:[['helpFriend'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='chikaF'){s.flags.cared=true;relation(s,'チカもがっかりしていると分かった。');out.text='チカ「ずっと楽しみにしてたのに…」';out.card='comfort'}
  if(key==='teacherP'){s.flags.knowsWhy=true;note(s,'参観日準備のため延期。実験自体は来週できる。');out.text='先生「ごめんね。実験は来週できるから、待ってて」';out.card='planNext'}
  if(key==='disappointed'){s.reason='disappointed';note(s,'がっかりの気持ちが、体を重くしている。');out.text='「ずっと楽しみにしてたのに…」';out.card='swapLook'}
  if(key==='unfair'){s.reason='unfair';note(s,'「なんで今さら」という納得いかなさがある。');out.text='「急に言われても、納得いかない」';out.card='whyAsk'}
  if(key==='stuckPlan'){s.reason='stuckPlan';note(s,'予定がこわれて、頭が真っ白になっている。');out.text='「何をすればいいか、分からなくなった」';out.card='makeNew'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='complain'){if(f.knowsWhy){relation(s,'気持ちを伝えつつ、事情も受け止められた。');text='「楽しみにしてたから残念です。でも、参観日の準備も大事ですよね」\n先生が少しほっとした顔をした。';meaning='事情を知っていれば、気持ちを伝えてもぶつからない。';f.clearedC=true}else{s.mind-=1;text='「ふざけるな！」と言った。\n先生は困った顔で、事情を説明し始めた。';meaning='強い言葉は、理由を知る前に出すとぶつかる。';grant(s,'whyAsk')}}
  if(id==='sulk'){f.sulked=true;s.mind+=1;text='べそをかいて、がっかりを出した。\n出したら、少し気持ちが軽くなった。';meaning='がっかりは、出してもいい気持ち。'}
  if(id==='acceptQuick'){f.swallowed=true;text='「わかりました」と言った。\nでも、胸の奥が少し重いままだ。';meaning='すぐ従うのと、納得するのは違う。気持ちは残ることがある。'}
  if(id==='swapLook'){f.acknowledged=true;s.mind+=1;text='「これは、がっかりっていう気持ちだ」\n名前をつけたら、気持ちが少し扱いやすくなった。';meaning='気持ちに名前をつけると、落ち着いて考えられる。'}
  if(id==='whyAsk'){f.knowsWhy=true;note(s,'参観日準備のため延期。実験は来週できる。');text='先生「実験は来週にずらすだけだよ。準備が間に合わなくて」\n理由が分かると、少し納得できた。';meaning='理由が分かると、変化が受け入れやすくなる。'}
  if(id==='makeNew'){f.newPlan=true;f.clearedC=true;note(s,'今日は図工の続き、実験は来週。');text='「今日は図工の続きをして、実験は来週」\n新しい計画が立つと、気持ちに向きができた。';meaning='こわれた計画は、自分で作り直せる。'}
  if(id==='comfort'){f.clearedC=true;f.cared=true;relation(s,'チカと一緒にがっかりして、仲直りの空気になった。');text='チカ「…ありがと。一緒にいると、少し楽」';meaning='がっかりは、分け合うと軽くなる。'}
  if(id==='planNext'){f.rescheduled=true;f.clearedC=true;text='「じゃあ、来週の何曜日ですか？」\n先生「木曜だよ」\n次が具体的になると、待てる気がした。';meaning='次の約束が見えると、変化が怖くなくなる。'}
  if(id==='helpFriend'){if(f.newPlan||f.rescheduled){f.clearedC=true;relation(s,'チカと一緒に、来週の実験の楽しみを話し合った。');text='チカ「来週、一緒の班だって。楽しみだね」';meaning='一緒に立て直すと、関係も強くなる。'}else{s.mind-=1;text='「別のことしようよ」と言ったが、チカはまだがっかりしていた。';meaning='気持ちの整理が先かもしれない。';grant(s,'comfort')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'チカも、しょんぼりしている。';
  if(s.stage===1)return 'チカは、まだ少しがっかりしている。';
  return 'チカは、来週のことを少し楽しみにしている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'3時間目。楽しみにしていた理科の実験が、来週に延期になった。',speaker:'先生',quote:'ごめんなさい。参観日の準備で、実験は来週にします',look:'みんなが、がっかりしている。チカもうつむいている。',self:'えー、ずっと楽しみにしてたのに…',hint:'がっかりの理由は、まだ整理できていない。'};
  if(s.stage===1)return {narrative:'放課後。教室には、まだ少し重い空気がある。',speaker:'チカ',quote:f.clearedC?'来週、また楽しみだね':f.knowsWhy?'参観日の準備って、そんなに大変なの？':'ずっと楽しみにしてたのに…',look:f.clearedC?'チカは、少し前を向いている。':'チカは、まだ下を向いている。',self:s.reason==='disappointed'?'がっかりで、体が重い。':s.reason==='unfair'?'なんで今さら、という気持ち。':s.reason==='stuckPlan'?'何をすればいいか、分からない。':'がっかりと、どう付き合う？',hint:'がっかりは、認める・聞く・立て直すで扱える。'};
  return {narrative:'翌朝。教室に入ると、チカが待っていた。',speaker:'チカ',quote:f.clearedC?'おはよ！ 来週の実験、どんなだろうね':f.cared?'おはよ…ちょっと楽しみになってきたかも':f.knowsWhy?'参観日、がんばろうね':'…おはよ',look:'チカは、昨日より少し明るい顔をしている。',self:f.clearedC?'気持ちが、もう前を向いている。':'まだ少し、がっかりが残っている。',hint:'予定の変更は、立て直しの練習になる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedC?3:f.acknowledged||f.sulked?1:0):s.goal===1?(f.knowsWhy?3:s.reason?1:0):(f.newPlan||f.rescheduled||f.clearedC?3:f.knowsWhy?2:0)},
 situation(s){const f=s.flags;return f.clearedC?'予定の変更を乗りこなし、次の楽しみができた。':f.knowsWhy?'事情が分かって、気持ちが整理できた。':f.acknowledged||f.sulked?'がっかりの気持ちを、認められた。':'予定は変わった。がっかりの扱い方を、練習できる。'}
},
picked:{
 title:'手を挙げても、当てられない',nav:'当てられない',num:'10',attrs:['study','soc'],
 goals:['諦めずに挙げ続けたい','当たらなくても役に立ちたい','次につなげたい'],
 chapters:['国語の音読発表','放課後','次の日の授業'],locations:['教室・国語','教室・放課後','教室・朝'],
 base:['keepHand','stopHand','bigSigh','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'期待の風船',hp:4,power:0,turns:4,look:'「今度こそ」が膨らんで、大きく割れる。'},{name:'なんで自分じゃないの渦',hp:5,power:1,turns:5,look:'比べる気持ちが、渦になって引きずり込む。'},{name:'当てられなさ大王',hp:6,power:1,turns:5,look:'「どうせ当たらない」の巨大な影が、手を重くする。'}],
 talk:[['teacherH','先生に相談する','当て方や気持ちを聞いてもらう。'],['pickedKid','当たった人に聞く','発表のコツを聞いてみる。']],
 think:[['unfairPick','なんで自分じゃないんだ','挙げているのに、選ばれない。'],['giveUpPick','もう挙げるのをやめたい','当たらないなら、挙げる意味がない気がする。'],['embarrassPick','挙げて当たらないのが恥ずかしい','みんなの前で、外れ続けるのが辛い。']],
 reasonKeys:['unfairPick','giveUpPick','embarrassPick'],
 stageGrants:[['nextTime'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherH'){s.flags.knowsRule=true;note(s,'先生は順番と内容で選んでいる。');out.text='先生「みんなに回るようにしてるんだ。次は期待してて」';out.card='pickRule'}
  if(key==='pickedKid'){s.flags.learnedP=true;relation(s,'当たったリンに、コツを教えてもらった。');out.text='リン「大きな声で言うと、選ばれやすいよ」';out.card='learnWay'}
  if(key==='unfairPick'){s.reason='unfairPick';note(s,'「挙げているのに」という気持ちが強い。');out.text='「ちゃんと挙げてるのに、なんで俺じゃないんだ」';out.card='keepHand'}
  if(key==='giveUpPick'){s.reason='giveUpPick';note(s,'当たらないなら、やめたい気持ち。');out.text='「もう挙げても、意味ないかも」';out.card='listenWell'}
  if(key==='embarrassPick'){s.reason='embarrassPick';note(s,'外れ続ける姿を、見られたくない。');out.text='「挙げて外れるのが、恥ずかしい」';out.card='braveHand'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='keepHand'){f.persist=true;f.clearedP=true;text='今日も、手を挙げ続けた。\n当たらなかった。でも、挙げたことは事実。';meaning='当たるかは先生の決めること。挙げるかは、自分の決めること。'}
  if(id==='stopHand'){f.stopped=true;text='手を挙げるのを、やめた。\n期待はなくなった。でも、少しさみしい。';meaning='やめると楽になる。でも、参加からは少し離れる。'}
  if(id==='bigSigh'){f.sighed=true;s.mind+=1;text='大きなため息をついた。\n残念さが、少し外に出た。';meaning='残念を出すことは、悪いことじゃない。'}
  if(id==='listenWell'){f.listened=true;note(s,'リンの発表は、ゆっくりで分かりやすかった。');text='リンの発表を、最後まで聞いた。\n「ゆっくり話すと、伝わるんだな」';meaning='聞くことも、参加の一つ。学びにもなる。'}
  if(id==='braveHand'){f.brave=true;relation(s,'小さく挙げた手を、先生が見てくれた。');text='恥ずかしいけど、小さく挙げた。\n先生が、こっちを見てうなずいた。';meaning='小さな一歩でも、挙げることになる。'}
  if(id==='pickRule'){f.knowsRule=true;text='先生「順番と内容で選んでるんだ。次、期待してて」\nルールが分かると、少し納得できた。';meaning='選ばれ方が分かると、諦めずに待てる。'}
  if(id==='learnWay'){f.learnedP=true;f.clearedP=true;relation(s,'リンから発表のコツを聞いた。');text='リン「大きな声で、ゆっくり言うといいよ」\n次へのヒントが、もらえた。';meaning='当たった人は、ライバルじゃなくて先生になる。'}
  if(id==='otherRole'){f.roleFound=true;f.clearedP=true;note(s,'記録係や準備係でも、授業に参加できる。');text='「発表じゃなくても、記録係とかあるかも」\n別の貢献が、見えてきた。';meaning='役に立つ道は、一つじゃない。'}
  if(id==='nextTime'){if(f.persist||f.learnedP||f.knowsRule){f.clearedP=true;relation(s,'次に当たるための準備を始めた。');text='「次は当たるかもしれない。準備しておこう」';meaning='準備は、当たる日のためにある。'}else{s.mind-=1;text='「次は当たる」と思いたいが、気持ちが追いつかなかった。';meaning='先に気持ちや理由を整理してからのほうが、前を向きやすい。';grant(s,'listenWell')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'リンは、当たって嬉しそうだ。';
  if(s.stage===1)return 'リンは、発表の練習をしている。';
  return 'リンは、発表を終えてすっきりした顔だ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'国語の音読発表。手を挙げたが、選ばれたのはリンだった。',speaker:'先生',quote:'じゃあ、今日の発表はリンさんね',look:'リンが、にっこりして立っている。',self:'挙げてたのに、俺じゃないんだ…',hint:'当たらなかった気持ちは、まだ整理できていない。'};
  if(s.stage===1)return {narrative:'放課後。リンは、発表の練習をしている。',speaker:'リン',quote:f.clearedP?'一緒に練習しようよ':f.knowsRule?'次はきっと当たるって':f.learnedP?'コツ、教えるよ':'発表、ちょっと緊張する',look:f.clearedP?'リンは、話しやすそうだ。':'リンは、練習に集中している。',self:s.reason==='unfairPick'?'挙げてるのに、なんで俺じゃないんだ。':s.reason==='giveUpPick'?'もう挙げても、意味ないかも。':s.reason==='embarrassPick'?'外れ続けるのが、恥ずかしい。':'当たらなかった気持ちと、どう付き合う？',hint:'挙げ続ける・聞いて学ぶ・別の役割、いろいろある。'};
  return {narrative:'次の日の授業。先生が、また質問を投げた。',speaker:'先生',quote:f.clearedP?'さあ、今日は誰が挙げるかな？':f.knowsRule?'次は君に期待してるよ':f.listened?'今日は発表、がんばってくれたね':'さあ、誰か挙げる人いる？',look:'先生が、みんなを見渡している。',self:f.clearedP?'また、挙げてみよう。':'まだ少し、ためらいがある。',hint:'挙げるかどうかは、自分で決められる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.persist||f.clearedP?3:f.brave?2:s.reason?1:0):s.goal===1?(f.roleFound||f.listened?3:f.knowsRule?2:s.reason?1:0):(f.clearedP||f.learnedP?3:f.knowsRule?2:0)},
 situation(s){const f=s.flags;return f.clearedP?'当たらなくても、自分の参加の仕方が見つかった。':f.knowsRule?'選ばれ方が分かって、少し納得できた。':f.listened?'聞くことでも、学べると分かった。':'当たるかは決められない。でも、次のためにできることがある。'}
},
item:{
 title:'物を勝手に使われた',nav:'貸し借り',num:'11',attrs:['soc','study'],
 goals:['自分のものを守りたい','ケンと仲良くしたい','ルールを作りたい'],
 chapters:['図工の時間','休み時間','放課後'],locations:['教室・図工','教室・休み時間','教室・放課後'],
 base:['takeBack','keepQuiet','watchUse','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'借りっぱなしの手',hp:4,power:1,turns:4,look:'断りなしの手が、また伸びてくる。'},{name:'言えないモヤモヤの壁',hp:5,power:1,turns:5,look:'「言いたい」が、壁になって積み上がる。'},{name:'貸し借り大王',hp:6,power:1,turns:5,look:'「貸してよ」が、大きくのしかかる。'}],
 talk:[['kenB','ケンに話を聞く','なんで勝手に使うのか、聞いてみる。'],['teacherI','先生に相談する','貸し借りの仕方を相談する。']],
 think:[['shy','断るのが苦しい','「いいよ」以外が、言いにくい。'],['angry','勝手に使われて腹が立つ','断りなしは、やっぱり嫌だ。'],['hard','もう貸したくない','大事なものだから、貸したくない。']],
 reasonKeys:['shy','angry','hard'],
 stageGrants:[['lendBox'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='kenB'){s.flags.talked=true;note(s,'ケンは悪気なく、借りていた。');out.text='ケン「ごめん、ちゃんと言うべきだったね」';out.card='lendRule'}
  if(key==='teacherI'){s.flags.advisedI=true;note(s,'クラスで貸し借りルールを決めるとよい。');out.text='先生「みんなで決まりを作ると、安心だね」';out.card='classRule'}
  if(key==='shy'){s.reason='shy';note(s,'「嫌」と言うのが、苦しい。');out.text='「嫌だとは言えない。でも、嫌だ」';out.card='sayMine'}
  if(key==='angry'){s.reason='angry';note(s,'断りなしに使われて、腹が立っている。');out.text='「なんで勝手に使うんだ」';out.card='ruleTalk'}
  if(key==='hard'){s.reason='hard';note(s,'大事なものを貸すのは、怖い。');out.text='「大事なやつだから、もう貸したくない」';out.card='clearNo'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='takeBack'){if(f.talked||f.said){f.clearedI=true;relation(s,'「もう終わり？」と聞いて返してもらった。');text='ケン「あ、ごめん。もう終わり？」\nことばを添えてからだと、角が立たなかった。';meaning='先に伝えてからなら、取り戻しも角が立たない。'}else{s.mind-=1;text='黙って取り返した。\nケンが、びっくりして睨んできた。';meaning='ことばがないと、相手は驚く。先に伝えた方がいい。';grant(s,'sayMine')}}
  if(id==='keepQuiet'){f.bottled=true;text='何も言わなかった。\n気持ちは、中に残ったまま。';meaning='我慢もできる。でも、気持ちは消えない。'}
  if(id==='watchUse'){f.watched=true;s.mind+=1;text='もう少し様子を見た。\nケンは、悪気なさそうに使っている。';meaning='様子を見てから、動くのもあり。'}
  if(id==='sayMine'){f.said=true;f.clearedI=true;relation(s,'「それ俺のだよ」と伝えると、ケンが気づいた。');text='ケン「あ、ごめん！　知らなかった」\n伝えると、相手も分かってくれた。';meaning='「自分の」と伝えるだけで、相手が気づくことがある。'}
  if(id==='ruleTalk'){f.rules=true;f.clearedI=true;relation(s,'ケンと、貸し借りのルールを決めた。');text='「使うときは聞いてね」\nケン「分かった。守るよ」';meaning='ルールを決めると、次から安心できる。'}
  if(id==='clearNo'){if(f.said||f.talked){f.clearedI=true;f.declinedI=true;relation(s,'「今回は貸せない」とはっきり伝えられた。');text='ケン「分かった。また今度ね」\n断っても、関係は続いた。';meaning='はっきり断るのは、悪いことじゃない。'}else{s.mind-=1;text='急に「貸せない」と言った。\nケンは、少し戸惑っていた。';meaning='断る前に、気持ちの素地があると伝わりやすい。';grant(s,'sayMine')}}
  if(id==='lendRule'){f.agreed=true;f.clearedI=true;relation(s,'ケンと「使うときは聞く」を約束した。');text='ケン「約束する。明日から聞くよ」';meaning='約束があると、次から言いやすい。'}
  if(id==='classRule'){f.classAgreed=true;f.clearedI=true;relation(s,'クラスで貸し借りルールができた。');text='みんなで「断りなしで使わない」を決めた。\n安心感が、増えた。';meaning='みんなの決まりは、一人より強い。'}
  if(id==='lendBox'){if(f.rules||f.said){f.clearedI=true;relation(s,'貸し借り箱ができて、迷いがなくなった。');text='「これは貸していい、これは大事」\n箱があると、断ることばが要らない。';meaning='仕組みがあると、気持ちの負担が減る。'}else{s.mind-=1;text='箱を作ったが、ケンには伝わらなかった。';meaning='仕組みも、先に気持ちを伝えると動きやすい。';grant(s,'sayMine')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ケンは、悪気なさそうに鉛筆を使っている。';
  if(s.stage===1)return 'ケンは、こちらの様子をうかがっている。';
  return 'ケンは、もう借りるときは聞いている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'図工の時間。大事な鉛筆を、ケンが断りなしに使っている。',speaker:'ケン',quote:'あ、借りるね',look:'ケンは、悪気なさそうに使っている。',self:'勝手に使われるの、嫌だな…',hint:'嫌な気持ちは、まだ相手に伝わっていない。'};
  if(s.stage===1)return {narrative:'休み時間。ケンは、まだ鉛筆を使っている。',speaker:'ケン',quote:f.clearedI?'ごめん、もう終わり？':f.said?'これ、お前のだったんだ':'なんで睨むの？',look:f.clearedI?'ケンは、返そうとしている。':'ケンは、まだ気づいていない。',self:s.reason==='shy'?'断るのが、苦しい。':s.reason==='angry'?'勝手に使われて、腹が立つ。':s.reason==='hard'?'もう貸したくない。':'嫌な気持ちを、どう伝える？',hint:'伝える・断る・ルールを作る、方法はある。'};
  return {narrative:'放課後。ケンが、鉛筆を持ってきた。',speaker:'ケン',quote:f.clearedI?'これ、返すよ。次から聞くね':f.said?'ごめん、借りてた':'……はい、返す',look:'ケンは、少し申し訳なさそうだ。',self:f.clearedI?'貸し借りの決まりが、できた。':'まだ少し、もやもやが残っている。',hint:'貸し借りは、決まりがあると安心。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedI?3:f.said||f.watched?2:s.reason?1:0):s.goal===1?(f.clearedI&&f.agreed||f.rules?3:f.said?2:s.reason?1:0):(f.rules||f.classAgreed||f.clearedI?3:f.said||f.talked?2:0)},
 situation(s){const f=s.flags;return f.clearedI?'貸し借りのルールができて、安心して使える。':f.said||f.talked?'自分の気持ちを伝えられた。':'嫌な気持ちは残っている。伝える方法を練習できる。'}
},
scold:{
 title:'納得いかない注意',nav:'注意された',num:'12',attrs:['soc','study'],
 goals:['自分の言い分を伝えたい','先生と分かり合いたい','気持ちを整理したい'],
 chapters:['廊下で注意された','休み時間','放課後'],locations:['廊下','教室・休み時間','教室・放課後'],
 base:['backTalk','saySorry','goQuiet','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'注意の稲妻',hp:4,power:1,turns:4,look:'突然の「走ったでしょ」が、稲妻のように落ちる。'},{name:'納得いかなさの雲',hp:5,power:1,turns:5,look:'「やってないのに」の雲が、頭を覆う。'},{name:'言い分大王',hp:6,power:1,turns:5,look:'言いたいことが、大きくて出てこない。'}],
 talk:[['teacherS','先生に話す','自分の言い分を、聞いてもらう。'],['friendS','友達に愚痴を聞いてもらう','納得いかない気持ちを吐き出す。']],
 think:[['notMe','やってないのに注意された','走ってないのに、走ったと言われた。'],['tooHard','言い方が強すぎる','急に強く言われて、びっくりした。'],['scared','反論するともっと怒られそう','言い返すと、もっと怒られる気がする。']],
 reasonKeys:['notMe','tooHard','scared'],
 stageGrants:[['bothSides'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherS'){s.flags.heard=true;note(s,'先生は「走っているように見えた」と言う。');out.text='先生「走っているように見えたんだ。でも、話は聞くよ」';out.card='askWhy2'}
  if(key==='friendS'){s.flags.vented=true;relation(s,'ユウが、愚痴を聞いてくれた。');out.text='ユウ「それは嫌だったね。俺も同じことあったよ」';out.card='vent'}
  if(key==='notMe'){s.reason='notMe';note(s,'やってないのに注意された、という納得いかなさ。');out.text='「走ってないのに、なんで怒られるんだ」';out.card='explain'}
  if(key==='tooHard'){s.reason='tooHard';note(s,'強い言い方に、びっくりして固まった。');out.text='「急に怒られて、頭が真っ白になった」';out.card='hearOut2'}
  if(key==='scared'){s.reason='scared';note(s,'反論すると怒られそうで、怖い。');out.text='「言い返すと、もっと怒られそう」';out.card='smallSay'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='backTalk'){if(f.heard||f.saidSide){f.clearedS=true;relation(s,'「実は走ってません。でも速く見えたかも」と伝えられた。');text='先生「そうか、歩くのが速かったんだね。ごめん」\nお互いの見え方が、合った。';meaning='先に聞いてから言うと、言い分が届く。'}else{s.mind-=1;text='「やってない！」と大声で言った。\n先生は、もっと強い顔になった。';meaning='強く言うと、言い争いになることがある。';grant(s,'explain')}}
  if(id==='saySorry'){f.apologized=true;text='「ごめんなさい」と言った。\n先生は離れた。でも、心には残った。';meaning='謝ると収まる。でも、やってない気持ちは残ることがある。'}
  if(id==='goQuiet'){f.quiet=true;text='何も言わず、うなずいた。\nモヤモヤだけが、残った。';meaning='黙るのも一つの選択。でも、気持ちは残る。'}
  if(id==='explain'){f.explained=true;f.clearedS=true;relation(s,'「走ってはいません」と冷静に伝えた。');text='先生「そうか。速く歩いていたように見えたんだ」\n冷静に言うと、届いた。';meaning='事実を冷静に言うと、誤解がほどける。'}
  if(id==='hearOut2'){f.heard=true;s.mind+=1;text='先生の話を、最後まで聞いた。\n「廊下で足音が速かった」と、事情が分かった。';meaning='まず聞くと、相手も聞いてくれやすい。'}
  if(id==='smallSay'){f.saidSide=true;f.clearedS=true;relation(s,'「実は…」と小さく言うと、先生が聞いてくれた。');text='先生「うん、どうした？」\n小さくても、言うことはできた。';meaning='小さな声でも、言い分は届く。'}
  if(id==='askWhy2'){f.askedHow=true;f.heard=true;note(s,'先生には「走っているように見えた」。');text='先生「走っているように見えたんだ。悪かったね」\n相手の見え方が、分かった。';meaning='相手の見え方が分かると、誤解がほどける。'}
  if(id==='vent'){f.vented=true;s.mind+=1;text='ユウに、全部聞いてもらった。\n吐き出したら、少し楽になった。';meaning='吐き出すと、気持ちが整理できる。'}
  if(id==='bothSides'){if(f.heard||f.askedHow||f.explained){f.clearedS=true;f.balanced=true;note(s,'自分: 走っていない。先生: 速く見えた。');text='「俺は走ってない。先生には走って見えた」\n両方が見えると、納得ができた。';meaning='両方の見え方が分かると、納得が作れる。'}else{s.mind-=1;text='両方を考えようとしたが、相手の側がまだ分からなかった。';meaning='まず聞いてから考えると、両方が見えやすい。';grant(s,'hearOut')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '先生は、まだ少し厳しい顔をしている。';
  if(s.stage===1)return '先生は、こちらに話しかけようとしている。';
  return '先生は、もう穏やかな顔だ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'廊下で、先生に「走ったでしょ」と注意された。',speaker:'先生',quote:'廊下を走ったでしょ。危ないよ',look:'先生は、少し厳しい顔をしている。',self:'走ってないのに…',hint:'納得いかない気持ちが、残っている。'};
  if(s.stage===1)return {narrative:'休み時間。先生が、話しかけてきた。',speaker:'先生',quote:f.clearedS?'さっきはごめんね':f.heard?'どうだった？ 話してみるか':f.vented?'ユウに聞いてもらったそうだね':'さっきのこと、話せる？',look:f.clearedS?'先生は、穏やかな顔だ。':'先生は、話を待っている。',self:s.reason==='notMe'?'やってないのに、注意された。':s.reason==='tooHard'?'強い言い方に、びっくりした。':s.reason==='scared'?'言い返すと怒られそう。':'納得いかない気持ちと、どう付き合う？',hint:'聞く・説明・小さく言う、方法はある。'};
  return {narrative:'放課後。先生が、もう一度話してくれた。',speaker:'先生',quote:f.clearedS?'今日はごめんね。お互い分かり合えてよかった':f.heard?'次はゆっくり歩いてくれると嬉しい':f.saidSide?'言ってくれてありがとう':'今日はここまでにしよう',look:'先生は、落ち着いた顔をしている。',self:f.clearedS?'気持ちが、もう整理できている。':'まだ少し、もやもやがある。',hint:'言い分は、届け方で変わる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedS?3:f.saidSide||f.explained?2:s.reason?1:0):s.goal===1?(f.balanced||f.askedHow?3:f.heard||f.vented?2:s.reason?1:0):(f.clearedS||f.balanced?3:f.heard||f.vented?2:0)},
 situation(s){const f=s.flags;return f.clearedS?'先生と分かり合えた。言い分は届け方で変わる。':f.heard||f.explained?'相手の見え方が分かって、気持ちが整理できた。':f.vented?'気持ちを吐き出せて、少し楽になった。':'納得いかなさは残っている。伝える方法を練習できる。'}
},
forgot:{
 title:'宿題を忘れた朝',nav:'忘れ物',num:'13',attrs:['study','soc'],
 goals:['正直に対処したい','次から忘れないようにしたい','信頼を保ちたい'],
 chapters:['朝の提出時間','休み時間','帰りの会'],locations:['教室・朝','教室・休み時間','教室・帰りの会'],
 base:['hideForgot','excuse','panicF','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'忘れ物の落とし穴',hp:4,power:1,turns:4,look:'提出の穴が、朝の机にポッカリ開く。'},{name:'バレたらどうしようの影',hp:5,power:1,turns:5,look:'「見つかったら」の影が、後ろについてくる。'},{name:'言い訳大王',hp:6,power:1,turns:5,look:'「家に忘れただけ」が、大きな声で誘う。'}],
 talk:[['teacherF','先生に話す','忘れたことを、自分から言う。'],['friendF','友達に相談する','見せてもらうなど、助けを求める。']],
 think:[['lateForgot','今朝急いで忘れた','準備する時間が、なかった。'],['fear','怒られるのが怖い','指摘されると、怒られそう。'],['repeat','よく忘れてしまう','また忘れた。何度目か分からない。']],
 reasonKeys:['lateForgot','fear','repeat'],
 stageGrants:[['checklist'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherF'){s.flags.proactive=true;relation(s,'自分から言うと、先生は理解してくれた。');out.text='先生「自分から言えたのは、えらいね。明日持ってきて」';out.card='askLend'}
  if(key==='friendF'){s.flags.shared=true;relation(s,'ユウが、ノートを見せてくれた。');out.text='ユウ「俺のノート、一緒に見る？」';out.card='shareBook'}
  if(key==='lateForgot'){s.reason='lateForgot';note(s,'今朝、急いでいて忘れた。');out.text='「朝、急いでいて忘れた」';out.card='tellTruth'}
  if(key==='fear'){s.reason='fear';note(s,'怒られるのが怖くて、言えずにいる。');out.text='「怒られるのが、怖い」';out.card='sayFirst'}
  if(key==='repeat'){s.reason='repeat';note(s,'忘れ物は、初めてじゃない。');out.text='「また忘れた。何度目だろう」';out.card='prepareNight'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='hideForgot'){f.hid=true;text='何も言わず、隠した。\n授業中も、ずっと気が気じゃなかった。';meaning='隠すと、その日ずっと気になる。'}
  if(id==='excuse'){if(f.honest||f.proactive){f.excused=true;text='「忘れました。明日持ってきます」\n正直に言った上でなら、言い訳も事情説明になる。';meaning='正直があってこそ、言い訳も事情になる。'}else{s.mind-=1;text='「家に忘れた」とだけ言った。\n先生は、少し怪訝な顔をした。';meaning='言い訳だけだと、信頼が残らない。';grant(s,'tellTruth')}}
  if(id==='panicF'){f.panicked=true;s.mind+=1;text='あわてて、固まった。\n深呼吸したら、少し動けるようになった。';meaning='固まるのは自然。深呼吸で戻れる。'}
  if(id==='tellTruth'){f.honest=true;f.clearedF=true;relation(s,'「忘れました。ごめんなさい」と正直に言えた。');text='先生「正直に言ってくれてありがとう。明日ね」\n正直は、怖くなかった。';meaning='正直に言うと、信用される。'}
  if(id==='sayFirst'){f.proactive=true;f.clearedF=true;relation(s,'自分から先に言うと、怒られなかった。');text='先生「自分から言えたのはえらい」\n先に言うと、場がやわらいだ。';meaning='指摘される前に言うと、誠実に見える。'}
  if(id==='prepareNight'){f.habitPlan=true;f.clearedF=true;note(s,'前の晩に準備する、という習慣。');text='「前の晩に準備すれば、朝は忘れない」\n明日からの作戦が、見えた。';meaning='忘れ物は、習慣で防げる。'}
  if(id==='askLend'){f.promised=true;f.clearedF=true;relation(s,'「明日持ってきます」と約束できた。');text='先生「うん、待ってるよ」\n約束があると、信頼が戻った。';meaning='約束を立てると、忘れ物も次に活きる。'}
  if(id==='shareBook'){f.shared=true;f.clearedF=true;relation(s,'ユウに見せてもらって、今日の分をこなせた。');text='ユウ「ここ、今日のとこ」\n助けてもらうのも、向社会的だ。';meaning='助けてもらうのも、一つの方法。'}
  if(id==='checklist'){if(f.habitPlan||f.promised){f.checklisted=true;f.clearedF=true;note(s,'持ち物チェックリストができた。');text='「ランドセル・宿題・体操服…」\nリストがあると、確認が楽になる。';meaning='仕組みは、意志より確実。'}else{s.mind-=1;text='リストを作ろうとしたが、まず何を書くか分からなかった。';meaning='まず習慣の考えがあってから、リストは作れる。';grant(s,'prepareNight')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '先生は、宿題を集めているところだ。';
  if(s.stage===1)return 'ユウは、隣の席でノートを開いている。';
  return '先生は、明日を待ってくれそうだ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'朝の提出時間。宿題が、ランドセルにない。',speaker:'先生',quote:'宿題を出してくださいね',look:'先生が、机の間を回っている。',self:'忘れた…！ どうしよう',hint:'忘れたことは、もう起きた。対処を考える。'};
  if(s.stage===1)return {narrative:'休み時間。先生の目が、こちらに向いている。',speaker:'先生',quote:f.clearedF?'明日、持ってきてね':f.proactive?'自分から言えたね':f.honest?'正直に言ってくれてありがとう':'宿題、どうした？',look:f.clearedF?'先生は、穏やかな顔だ。':'先生は、まだ聞いている途中だ。',self:s.reason==='lateForgot'?'急いでいて、忘れた。':s.reason==='fear'?'怒られるのが怖い。':s.reason==='repeat'?'また忘れてしまった。':'忘れたことと、どう向き合う？',hint:'正直に言う・先に言う・習慣を作る。'};
  return {narrative:'帰りの会。明日への気持ちが、少し軽い。',speaker:'先生',quote:f.clearedF?'明日は忘れないようにね':f.habitPlan?'前の晩に準備するといいよ':f.promised?'明日、待ってるよ':'明日、持ってきてね',look:'先生は、待ってくれそうだ。',self:f.clearedF?'明日は、ちゃんと準備する。':'まだ少し、不安が残っている。',hint:'忘れ物は、習慣と正直で防げる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedF?3:f.honest||f.proactive?2:s.reason?1:0):s.goal===1?(f.habitPlan||f.checklisted?3:f.promised?2:s.reason?1:0):(f.clearedF||f.shared?3:f.proactive?2:0)},
 situation(s){const f=s.flags;return f.clearedF?'忘れ物を正直に対処し、次の作戦も見つかった。':f.honest||f.proactive?'正直に言えた。信頼が戻っている。':f.shared?'助けてもらって、今日を切り抜けた。':'忘れたままだと、ずっと気になる。正直に言うのが一番楽。'}
},
friend:{
 title:'落ち込んでいる友達',nav:'友達を助ける',num:'14',attrs:['soc'],
 goals:['ケイを気にかけたい','無理に踏み込みすぎたくない','自分も保ちたい'],
 chapters:['休み時間の校庭','昼休み','放課後'],locations:['校庭・休み時間','教室・昼休み','下校途中'],
 base:['cheerUp','watchFar','playNear','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'沈黙の雲',hp:4,power:0,turns:4,look:'ケイの上に、言葉のない雲がかかっている。'},{name:'踏み込めない距離',hp:5,power:1,turns:5,look:'近づきたいのに、何と言うか分からない。'},{name:'一人ぼっちの壁',hp:6,power:1,turns:5,look:'「ほっといて」の壁が、ケイを囲んでいる。'}],
 talk:[['keiG','ケイに話しかける','「だいじょうぶ？」と聞いてみる。'],['teacherG','先生に伝える','ケイの様子を大人に伝える。']],
 think:[['worry','心配だけど、何と言うか分からない','声をかけたいが、ことばが見つからない。'],['leaveIt','一人にしておくべきか迷う','話したくないときもあるよな、と思う。'],['afraid','自分まで嫌な気分になりそう','近づくと、自分も沈みそう。']],
 reasonKeys:['worry','leaveIt','afraid'],
 stageGrants:[['quietWith'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='keiG'){s.flags.askedG=true;relation(s,'ケイが少し顔を上げた。');out.text='ケイ「…うん、だいじょうぶ」\n（本当は、だいじょうぶじゃなさそう）';out.card='listenDeep'}
  if(key==='teacherG'){s.flags.toldT=true;note(s,'先生がケイのことを気にかけ始めた。');out.text='先生「教えてくれてありがとう。様子を見るね」';out.card='tellAdult'}
  if(key==='worry'){s.reason='worry';note(s,'声をかけたいが、ことばが見つからない。');out.text='「心配だけど、何と言えばいいか…」';out.card='justAsk'}
  if(key==='leaveIt'){s.reason='leaveIt';note(s,'一人にしておくべきか、迷っている。');out.text='「話したくないときもあるよな」';out.card='stayNear'}
  if(key==='afraid'){s.reason='afraid';note(s,'自分まで沈みそうで、怖い。');out.text='「近づくと、自分まで暗くなりそう」';out.card='ownMood'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='cheerUp'){if(f.askedG||f.sat){f.clearedG=true;relation(s,'明るい声が、ケイに届いた。');text='ケイ「…ありがと。ちょっと元気出た」';meaning='気持ちを受け取ってから励ますと、届く。'}else{s.mind-=1;text='「元気出せ！」と言ったが、ケイはうつむいたままだった。';meaning='理由を知らない励ましは、空回りすることがある。';grant(s,'justAsk')}}
  if(id==='watchFar'){f.watchedG=true;s.mind+=1;text='遠くから見守った。\nケイは、一人でいるようだ。';meaning='見守ることも、気にかけの一つ。'}
  if(id==='playNear'){f.nearby=true;relation(s,'近くにいるだけで、ケイの顔が少し柔らいだ。');text='近くで遊んでいたら、ケイがちらっとこっちを見た。';meaning='近くにいるだけで、安心することもある。'}
  if(id==='justAsk'){f.askedG=true;relation(s,'「だいじょうぶ？」と聞くと、ケイが少し顔を上げた。');text='ケイ「……少し疲れてるだけ」\n気にかけは、届いた。';meaning='一言聞くだけで、気にかけは届く。'}
  if(id==='stayNear'){f.sat=true;f.clearedG=true;relation(s,'そばに座った。ケイは、少しこっちに寄った。');text='ことばはいらなかった。\nそばにいるだけで、壁が薄くなった。';meaning='そばにいるだけでも、助けになる。'}
  if(id==='ownMood'){f.balancedG=true;s.mind+=1;text='「心配するのと、一緒に沈むのは違う」\n自分の気持ちを保ってから、考えられた。';meaning='自分を保ってこそ、人を助けられる。'}
  if(id==='listenDeep'){if(f.askedG){f.heardStory=true;f.clearedG=true;relation(s,'ケイが、家で落ち込むことがあったと話してくれた。');text='ケイ「実は、うちの犬が病気で…」\n話してくれて、雲が少し晴れた。';meaning='話を聞くことは、いちばんの助け。'}else{s.mind-=1;text='「どうしたの？」と深く聞いたが、ケイは黙った。';meaning='深く聞くには、まず軽く聞くほうが良いかも。';grant(s,'justAsk')}}
  if(id==='tellAdult'){f.toldT=true;f.clearedG=true;relation(s,'先生がケイの様子を見に来てくれた。');text='先生「ケイくん、少し話そうか」\n大人が、入ってくれた。';meaning='大人に伝えるのも、立派な助け。'}
  if(id==='quietWith'){if(f.sat||f.askedG){f.quietT=true;f.clearedG=true;relation(s,'何も聞かずに一緒にいたら、ケイが少し笑った。');text='ケイ「…いてくれてありがと」';meaning='ことばがなくても、そばにいるだけで助けになる。'}else{s.mind-=1;text='そばにいたが、ケイは気まずそうだった。';meaning='先に一言かけると、一緒にいやすい。';grant(s,'justAsk')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'ケイは、一人でうつむいている。';
  if(s.stage===1)return 'ケイは、窓の外をぼんやり見ている。';
  return 'ケイは、少し顔色が戻っている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間。いつも元気なケイが、一人でうつむいている。',speaker:'ケイ',quote:'……',look:'ケイは、何も言わずに下を向いている。',self:'いつものケイじゃない。どうしたんだろう',hint:'ケイの様子が、いつもと違う。'};
  if(s.stage===1)return {narrative:'昼休み。ケイは、まだ一人でいる。',speaker:'ケイ',quote:f.clearedG?'…ありがと':f.askedG?'少し疲れてるだけ':f.sat?'……':f.nearby?'…うん':'……',look:f.clearedG?'ケイは、少し顔を上げている。':'ケイは、まだうつむいている。',self:s.reason==='worry'?'何と言えばいいか分からない。':s.reason==='leaveIt'?'一人にしておくべきかな。':s.reason==='afraid'?'自分まで沈みそう。':'ケイに、どう接する？',hint:'聞く・そばにいる・大人に伝える、方法はある。'};
  return {narrative:'放課後。ケイが、少しだけこちらを見た。',speaker:'ケイ',quote:f.clearedG?'今日は…ありがとう':f.heardStory?'聞いてくれて、少し楽になった':f.sat?'隣にいてくれてありがと':'……おつかれ',look:'ケイは、少しだけ柔らかい顔だ。',self:f.clearedG?'ケイの上の雲が、少し晴れた。':'まだ少し、心配が残っている。',hint:'助け方は、いろいろある。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedG?3:f.askedG||f.sat?2:s.reason?1:0):s.goal===1?(f.heardStory||f.quietT?3:f.sat||f.nearby?2:s.reason?1:0):(f.clearedG&&f.balancedG?3:f.balancedG?2:f.clearedG?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedG?'ケイの気持ちに寄り添えた。助け方はいろいろある。':f.askedG||f.sat?'気にかけが、少し届いている。':f.balancedG?'自分を保ちつつ、考えられている。':'ケイは一人でいる。気にかけ方は、練習できる。'}
},
confused:{
 title:'授業で分からない',nav:'分からない',num:'15',attrs:['study','soc'],
 goals:['分からないを解決したい','質問する勇気を持ちたい','自分のやり方を見つけたい'],
 chapters:['算数の時間','休み時間','放課後'],locations:['教室・算数','教室・休み時間','教室・放課後'],
 base:['stare','copyDown','guess','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'分からなさの迷路',hp:4,power:1,turns:4,look:'板書が、迷路のように入り組んで見える。'},{name:'質問の恥ずかしさの影',hp:5,power:1,turns:5,look:'「聞くのは恥ずかしい」の影が、手を重くする。'},{name:'放置大王',hp:6,power:1,turns:5,look:'「あとでいいや」の溜まったものが、大きくのしかかる。'}],
 talk:[['teacherQ','先生に聞く','分からない所を、聞いてみる。'],['friendQ','分かってる友達に聞く','リンに聞いてみる。']],
 think:[['shyQ','質問が恥ずかしい','みんな分かってそうで、聞きにくい。'],['everyone','みんな分かってそうで言えない','自分だけ分かってない気がする。'],['snowball','分からないが積もっている','どこから分からないか、分からない。']],
 reasonKeys:['shyQ','everyone','snowball'],
 stageGrants:[['askSmall'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherQ'){s.flags.shown=true;relation(s,'先生が、分からない所を一緒に見てくれた。');out.text='先生「どこから分からない？　ここまで分かってるんだね」';out.card='showWork'}
  if(key==='friendQ'){s.flags.together=true;relation(s,'リンが、一緒に考えてくれた。');out.text='リン「ここね、こうすると分かるよ」';out.card='togetherQ'}
  if(key==='shyQ'){s.reason='shyQ';note(s,'質問が恥ずかしくて、手が挙がらない。');out.text='「聞きたいけど、恥ずかしい」';out.card='handUp'}
  if(key==='everyone'){s.reason='everyone';note(s,'自分だけ分かってない気がする。');out.text='「みんな分かってそう。俺だけかも」';out.card='askAfter'}
  if(key==='snowball'){s.reason='snowball';note(s,'どこから分からないか、分からなくなっている。');out.text='「全部、分からなくなってきた」';out.card='breakDown'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='stare'){f.stared=true;text='板書を、もう一度じっくり見た。\n最初より、少し分かる気がした。';meaning='見返すだけでも、少し進むことがある。'}
  if(id==='copyDown'){f.copied=true;text='とりあえず、写した。\nでも、分かった気にはならない。';meaning='写すだけでは、分からないまま。'}
  if(id==='guess'){f.guessed=true;text='適当に答えを書いた。\n書いただけでは、分かったことにならない。';meaning='何か書いても、分かったことにはならない。'}
  if(id==='handUp'){f.askedClass=true;f.clearedQ=true;relation(s,'小さく挙げた手に、先生が気づいてくれた。');text='先生「はい、どこ？」\n挙げたら、先生が来てくれた。';meaning='小さな挙手でも、質問は届く。'}
  if(id==='askAfter'){f.after=true;f.clearedQ=true;relation(s,'授業後に聞くと、ゆっくり教えてもらえた。');text='先生「ここが分からなかったんだね。説明するね」\n後で聞くのも、質問の一つ。';meaning='後で聞くのも、立派な質問。'}
  if(id==='breakDown'){f.located=true;f.clearedQ=true;note(s,'「通分」から分からないと分かった。');text='「あ、通分から分からないんだ」\n壁の場所が、見えた。';meaning='分かる所を見つけると、聞きやすくなる。'}
  if(id==='showWork'){f.shown=true;f.clearedQ=true;relation(s,'「ここから分からない」と見せると、先生が丁寧に教えてくれた。');text='先生「そこか！　じゃあここから説明するね」\n壁を見せると、教えてもらいやすい。';meaning='場所を示すと、教えてもらいやすい。'}
  if(id==='togetherQ'){f.together=true;f.clearedQ=true;relation(s,'リンと一緒に考えて、糸口が見えた。');text='リン「ここはこうするんだ」\n一緒だと、分からないも怖くない。';meaning='友達と考えるのも、学びの一つ。'}
  if(id==='askSmall'){if(f.located||f.shown){f.partAsked=true;f.clearedQ=true;relation(s,'「ここだけ」聞くと、すぐに教えてもらえた。');text='先生「そこだけ？　分かった、ここだよ」\n部分だけでも、質問になる。';meaning='一部分だけ聞くのも、質問。'}else{s.mind-=1;text='「ちょっとだけ」と言ったが、どこが分からないか自分も分かっていなかった。';meaning='まず壁の場所を見つけると、聞きやすい。';grant(s,'breakDown')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '先生は、答えを回収している。';
  if(s.stage===1)return 'リンは、ノートを開いている。';
  return '先生は、質問を待っている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'算数の時間。分数の足し算が、分からない。',speaker:'先生',quote:'分かった人、手を挙げて',look:'まわりは、どんどん手を挙げている。',self:'分からない… みんな分かってるのかな',hint:'分からないことを、どう扱う？'};
  if(s.stage===1)return {narrative:'休み時間。ノートの数字が、まだ目に入る。',speaker:'リン',quote:f.clearedQ?'分かった？':f.located?'どこが分からないの？':f.askedClass?'先生、来たね':'……',look:f.clearedQ?'リンは、一緒に見てくれそうだ。':'リンは、自分のことをしている。',self:s.reason==='shyQ'?'聞くのが恥ずかしい。':s.reason==='everyone'?'自分だけ分かってない気がする。':s.reason==='snowball'?'どこから分からないか分からない。':'分からなさと、どう向き合う？',hint:'聞く・見せる・壁を探す、方法はある。'};
  return {narrative:'放課後。ノートが、少し埋まった。',speaker:'先生',quote:f.clearedQ?'分かってよかったね':f.located?'どこが分からなかったか、分かると聞きやすいよ':f.shown?'ここね、分かるようになったね':'明日、またやろう',look:'先生は、教える気分だ。',self:f.clearedQ?'分からないは、聞けば解決できる。':'まだ少し、残っている。',hint:'分からないは、聞くと消える。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedQ?3:f.located||f.shown?2:s.reason?1:0):s.goal===1?(f.askedClass||f.after?3:f.shown?2:s.reason?1:0):(f.clearedQ?3:f.located?2:0)},
 situation(s){const f=s.flags;return f.clearedQ?'分からないを解決できた。質問の形はいろいろある。':f.located||f.shown?'壁の場所が見つかって、聞きやすくなった。':'分からないまま残っている。聞き方は練習できる。'}
},
noise:{
 title:'まわりがうるさい',nav:'音がつらい',num:'16',attrs:['soc','study'],
 goals:['音に負けず集中したい','自分を守る方法を見つけたい','上手に伝えたい'],
 chapters:['帰りの会','休み時間','放課後'],locations:['教室・帰りの会','教室・休み時間','教室・放課後'],
 base:['plugEars','shout','distractTry','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'ガヤガヤ団',hp:4,power:1,turns:4,look:'あちこちのおしゃべりが、大きな固まりになっている。'},{name:'耳に残る音の玉',hp:5,power:1,turns:5,look:'音がぐるぐる回って、頭の中に残る。'},{name:'イライラの熱',hp:6,power:1,turns:5,look:'溜まったイライラが、ぽっと燃えている。'}],
 talk:[['teacherN','先生に伝える','うるさくて困ると伝える。'],['friendN','うるさい友達にお願い','「少し静かにして」と言う。']],
 think:[['ears','耳がうるさくて痛い','音そのものが、耳に刺さる。'],['head','頭が痛くなってきた','うるささで、頭がズキズキする。'],['cantFocus','何も頭に入ってこない','音が気になって、集中できない。']],
 reasonKeys:['ears','head','cantFocus'],
 stageGrants:[['breatheQuiet'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherN'){s.flags.said=true;note(s,'先生が「静かにしよう」と言ってくれた。');out.text='先生「みんな、少し静かにしようか」\n伝えたら、動いてくれた。';out.card='sayLoud'}
  if(key==='friendN'){s.flags.askedN=true;relation(s,'おしゃべりの子が、少し声を落とした。');out.text='友達「あ、ごめん。少し静かにするね」';out.card='pleaseQ'}
  if(key==='ears'){s.reason='ears';note(s,'音そのものが、耳に刺さっている。');out.text='「音が、ビリビリする」';out.card='cover'}
  if(key==='head'){s.reason='head';note(s,'うるささで、頭が痛くなってきた。');out.text='「ズキズキしてきた…」';out.card='quietSpot'}
  if(key==='cantFocus'){s.reason='cantFocus';note(s,'音が気になって、集中できない。');out.text='「何も頭に入ってこない」';out.card='oneThing'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='plugEars'){f.plugged=true;s.mind+=1;text='耳をふさいだ。\n少しだけ、楽になった。';meaning='音を小さくするだけでも、助けになる。'}
  if(id==='shout'){f.shouted=true;s.rep-=1;relation(s,'叫んだら、まわりが静まった。でも、気まずくなった。');text='「うるさい！」と叫んだ。\n一瞬静まったが、変な空気になった。';meaning='叫ぶと相手もうるさく感じる。伝え方を変えると良い。';grant(s,'pleaseQ')}
  if(id==='distractTry'){f.distractTry=true;text='気にしないようにした。\nでも、音は耳に入ってくる。';meaning='気にしないだけでは、音は消えない。'}
  if(id==='cover'){f.covered=true;f.clearedN=true;note(s,'耳を守ったら、少し聞き取れるようになった。');text='耳を押さえたら、音がやわらいだ。\n少し、集中できそうだ。';meaning='自分を守るのも、対処の一つ。'}
  if(id==='quietSpot'){f.moved=true;f.clearedN=true;note(s,'静かな所に移ったら、頭がすっきりした。');text='少し離れたら、頭が軽くなった。\n聞こえるようになった。';meaning='場所を変えるのも、立派な対処。'}
  if(id==='oneThing'){f.focused=true;f.clearedN=true;note(s,'先生の声だけに絞ったら、他の音が小さくなった。');text='「先生の声だけを聞こう」\n一つに絞ると、音が後ろに下がった。';meaning='一つに絞ると、まわりの音は気にならなくなる。'}
  if(id==='sayLoud'){f.said=true;f.clearedN=true;note(s,'「うるさくて困る」と言ったら、先生が対応してくれた。');text='先生「みんな、おしゃべりはあとにしよう」\n伝えたら、状況が変わった。';meaning='困りごとは、伝えていい。'}
  if(id==='pleaseQ'){f.askedN=true;f.clearedN=true;relation(s,'「少し静かにして」の一言で、友達が声を落とした。');text='友達「あ、ごめんごめん」\nお願いのしかたで、相手の答えが変わる。';meaning='お願いのしかたで、受け取り方が変わる。'}
  if(id==='breatheQuiet'){f.breathed=true;s.mind+=1;text='少し離れて、深呼吸した。\nイライラが、少し収まった。';meaning='一度離れて整えると、楽になる。'}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'まわりの声で、先生の話がかき消されている。';
  if(s.stage===1)return 'おしゃべりは、まだ続いている。';
  return '教室は、少し静まってきた。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'帰りの会。まわりがうるさくて、先生の話が聞こえない。',speaker:'先生',quote:'連絡があるので、静かに聞いてください',look:'あちこちで、おしゃべりが続いている。',self:'うるさい… 頭が痛くなりそう',hint:'音のつらさの、どこが一番つらい？'};
  if(s.stage===1)return {narrative:'休み時間。教室は、相変わらずにぎやかだ。',speaker:'友達',quote:f.clearedN?'少し静かにするね':f.plugged?'耳、大丈夫？':f.said?'先生が言ってたね':'……',look:f.clearedN?'まわりは、少し静まった。':'まわりのおしゃべりは、続いている。',self:s.reason==='ears'?'耳に刺さる。':s.reason==='head'?'頭が痛い。':s.reason==='cantFocus'?'集中できない。':'音と、どう付き合う？',hint:'守る・移る・伝える、方法はある。'};
  return {narrative:'放課後。教室が、少し静まってきた。',speaker:'先生',quote:f.clearedN?'今日はお疲れさま。よく伝えられたね':f.said?'困ったときは、言ってくれていいよ':'明日も頑張ろうね',look:'教室は、だんだん静かになっている。',self:f.clearedN?'音への対処法が、見つかった。':'まだ少し、耳に残っている。',hint:'つらさは、伝えると軽くなる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedN?3:f.covered||f.moved||f.focused?2:s.reason?1:0):s.goal===1?(f.clearedN?3:f.plugged||f.breathed?2:s.reason?1:0):(f.said||f.askedN?3:f.clearedN?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedN?'音への対処法が見つかった。守る・移る・伝えるがある。':f.plugged||f.breathed?'少し楽になった。根本の対処もできる。':'音がつらいまま残っている。対処法は練習できる。'}
},
role:{
 title:'選ばれなかった役割',nav:'役割と順番',num:'17',attrs:['ath','soc'],
 goals:['悔しさを整理したい','自分の役割を見つけたい','次につなげたい'],
 chapters:['発表の時間','練習の日','運動会前日'],locations:['教室・発表','校庭・練習','教室・前日'],
 base:['sulkR','dragFeet','skipCheer','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'欠けたメダル',hp:4,power:1,turns:4,look:'選ばれなかった気持ちが、欠けた形に固まっている。'},{name:'不公平の秤',hp:5,power:1,turns:5,look:'「ずるい」「不公平」の声が、秤の上で揺れている。'},{name:'応援係の重み',hp:6,power:1,turns:5,look:'「応援係なんて」の重さが、肩にのしかかる。'}],
 talk:[['teacherR','先生に聞く','選び方や、次の方法を聞く。'],['pickedOne','選ばれた友達に聞く','選手の走りを、見せてもらう。']],
 think:[['sad','悔しい・悲しい','選ばれなくて、悔しい気持ちが残る。'],['unfairR','選び方が不公平だ','じゃんけんも投票も、納得いかない。'],['otherRole2','応援係なんて嫌だ','走れないなら、意味がない気がする。']],
 reasonKeys:['sad','unfairR','otherRole2'],
 stageGrants:[['cheerHard'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherR'){s.flags.askedR=true;note(s,'先生が、決まり方を教えてくれた。');out.text='先生「タイムと、走る練習で決めたよ。次もチャンスあるよ」';out.card='nextChance'}
  if(key==='pickedOne'){s.flags.learnedR=true;note(s,'選ばれた子が、走りを見せてくれた。');out.text='友達「ここをこう走るんだよ」\n見せてもらうと、勉強になった。';out.card='trainSee'}
  if(key==='sad'){s.reason='sad';note(s,'選ばれなくて、悔しい気持ちが残っている。');out.text='「本当は、走りたかった」';out.card='cryOK'}
  if(key==='unfairR'){s.reason='unfairR';note(s,'選び方が、不公平に思える。');out.text='「なんであの子なの？ずるい」';out.card='askHow2'}
  if(key==='otherRole2'){s.reason='otherRole2';note(s,'応援係に、意味がない気がする。');out.text='「応援なんて、誰でもいいじゃん」';out.card='cheerRole'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='sulkR'){f.sulked=true;text='ふてくされた。\n気持ちは、少しだけこもった。';meaning='抱え込むだけでは、気持ちは晴れない。'}
  if(id==='dragFeet'){f.dragged=true;text='だらだらと、練習した。\n何も、変わらなかった。';meaning='流れるだけでは、気持ちは晴れない。'}
  if(id==='skipCheer'){f.skipped=true;s.rep-=1;relation(s,'応援をサボったら、まわりの目が冷たくなった。');text='応援をサボった。\n友達「応援係、ちゃんとやってよ」';meaning='役割をサボると、評判が下がる。';grant(s,'cheerRole')}
  if(id==='cryOK'){f.felt=true;f.clearedR=true;s.mind+=1;note(s,'「悔しい」と認めたら、気持ちが少し軽くなった。');text='「悔しいな…」と、認めた。\n認めたら、少し楽になった。';meaning='悔しさを認めてこそ、先に進める。'}
  if(id==='askHow2'){f.askedR=true;f.clearedR=true;note(s,'決まり方が分かって、納得できた。');text='「タイムと練習で決めたんだ」\n分かると、すっきりした。';meaning='決まり方が分かると、納得しやすい。'}
  if(id==='cheerRole'){f.roleValued=true;f.clearedR=true;note(s,'応援係にも、意味があると分かった。');text='「応援がないと、走れないかも」\n応援係にも、役割がある。';meaning='役割の意味が見えると、やる気が出る。'}
  if(id==='nextChance'){f.nextKnow=true;f.clearedR=true;note(s,'次に選ばれる方法が、分かった。');text='先生「次は、練習を見せてね」\n次の目標が、見えた。';meaning='次の目標が見えると、今も変わる。'}
  if(id==='trainSee'){f.learnedR=true;f.clearedR=true;note(s,'選手の走りを見て、コツが分かった。');text='友達の走りを見て、\n「ここが速いんだ」と分かった。';meaning='見て学ぶと、次につながる。'}
  if(id==='cheerHard'){if(f.roleValued||f.felt||f.nextKnow){f.cheered=true;f.clearedR=true;relation(s,'思い切り応援したら、選手がこっちを見て笑った。');text='選手「応援、ありがとう！」\n声が、届いた。';meaning='応援も、勝つための力になる。'}else{s.mind-=1;text='応援したが、心がこもっていなかった。\n選手にも、伝わらなかった。';meaning='役割の意味が見えてからの応援は、届きやすい。';grant(s,'cheerRole')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '選手の名前が、読み上げられている。';
  if(s.stage===1)return '選手たちは、校庭で練習している。';
  return '明日は、運動会。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'リレーの選手発表。自分の名前は、呼ばれなかった。',speaker:'先生',quote:'応援係は、カンとケイです',look:'選ばれた子たちが、喜んでいる。',self:'走りたかったのに… 応援係か',hint:'選ばれなかった気持ちの、どこが一番つらい？'};
  if(s.stage===1)return {narrative:'練習の日。選手たちが、走っている。',speaker:'友達',quote:f.cheered?'応援、ありがとう！':f.roleValued?'応援係も大事だよ':f.felt?'悔しいよね':'……',look:f.clearedR?'まわりは、こちらを受け入れている。':'選手たちは、自分の練習に集中している。',self:s.reason==='sad'?'悔しさが残る。':s.reason==='unfairR'?'不公平だと思う。':s.reason==='otherRole2'?'応援係に意味があるの？':'役割と、どう向き合う？',hint:'認める・聞く・考える、方法はある。'};
  return {narrative:'運動会前日。選手の背中に、名前が書かれている。',speaker:'友達',quote:f.cheered?'応援、楽しみにしてる！':f.clearedR?'明日、一緒に頑張ろう':'明日だね',look:'選手たちは、明日を待っている。',self:f.clearedR?'役割が見つかった。':'まだ少し、もやもやする。',hint:'役割には、それぞれ意味がある。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedR?3:f.felt?2:s.reason?1:0):s.goal===1?(f.cheered||f.roleValued?3:f.clearedR?2:s.reason?1:0):(f.nextKnow||f.learnedR?3:f.clearedR?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedR?'役割を受け止められた。認める・聞く・考えるがある。':f.felt||f.roleValued?'気持ちを整理できた。':'納得いかないまま残っている。向き合い方は練習できる。'}
},
cheat:{
 title:'ズルを見てしまった',nav:'ズルを見た',num:'18',attrs:['soc','study'],
 goals:['公平さを保ちたい','友達を傷つけたくない','自分の気持ちを整理したい'],
 chapters:['ゲームの時間','休み時間','放課後'],locations:['教室・ゲーム','教室・休み時間','教室・放課後'],
 base:['pretendNot','glare','spread','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'見てしまった重み',hp:4,power:0,turns:4,look:'知ってしまったことが、胸に重くのしかかる。'},{name:'黙るか言うかの天秤',hp:5,power:1,turns:5,look:'言うべきか黙るべきか、天秤が揺れている。'},{name:'ズルの影',hp:6,power:1,turns:5,look:'ズルで勝った影が、ゲーム全体にかかっている。'}],
 talk:[['teacherX','先生に相談','どうするべきか、聞いてみる。'],['friendX','本人に直接言う','「それはズルだ」と伝える。']],
 think:[['tellWhom','先生に言うべきか迷う','告げ口みたいで、気が進まない。'],['betray','友達を売るようで嫌だ','言ったら、友達が嫌われるかも。'],['unfairGame','ズルで勝つなら意味がない','ルールを守らない勝ちは、勝ちじゃない。']],
 reasonKeys:['tellWhom','betray','unfairGame'],
 stageGrants:[['groupRule'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherX'){s.flags.askedX=true;note(s,'先生が、考えを聞いてくれた。');out.text='先生「公平のために言うのと、告げ口は違うよ」';out.card='tellAdult2'}
  if(key==='friendX'){s.flags.saidHim=true;relation(s,'本人に言ったら、少し気まずくなったが聞いてくれた。');out.text='友達「…ごめん。次からちゃんとやる」\n直接言うと、届くこともある。';out.card='sayToHim'}
  if(key==='tellWhom'){s.reason='tellWhom';note(s,'先生に言うべきか、迷っている。');out.text='「言うべき？　告げ口になる？」';out.card='tellFair'}
  if(key==='betray'){s.reason='betray';note(s,'友達を売るようで、嫌な気持ち。');out.text='「言ったら、嫌われるかも」';out.card='quietTalk'}
  if(key==='unfairGame'){s.reason='unfairGame';note(s,'ズルの勝ちは、勝ちじゃないと思う。');out.text='「ズルで勝っても、意味ないよ」';out.card='replayRule'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='pretendNot'){f.pretended=true;text='見なかったことにした。\nでも、気持ちには残った。';meaning='見ないふりでは、不公平は残る。'}
  if(id==='glare'){f.glared=true;text='にらんだ。\n相手は、気づいたか気づかないか分からない。';meaning='にらむだけでは、相手には伝わらない。'}
  if(id==='spread'){f.spread=true;s.rep-=1;relation(s,'言いふらしたら、本人が泣いた。まわりも気まずい。');text='みんなに言いふらした。\nズルした子は、泣いてしまった。';meaning='広めると、相手が傷つく。伝え方がある。';grant(s,'quietTalk')}
  if(id==='tellFair'){f.toldFair=true;f.clearedX=true;note(s,'「公平じゃない」と伝えたら、先生が対応してくれた。');text='先生「教えてくれてありがとう。みんなでルールを決め直そう」';meaning='公平のための伝えは、告げ口と違う。'}
  if(id==='quietTalk'){f.talkedHim=true;f.clearedX=true;relation(s,'本人に直接言ったら、認めてくれた。');text='友達「…ばれてたか。ごめん」\n友達だからこそ、注意できる。';meaning='本人に言うのも、勇気の一つ。'}
  if(id==='replayRule'){f.replayed=true;f.clearedX=true;note(s,'「もう一回、ルール通りに」の提案が通った。');text='みんな「もう一回やろう！」\nズルの勝ちは、なかったことになった。';meaning='やり直しの提案は、みんなを救う。'}
  if(id==='sayToHim'){f.talkedHim=true;f.clearedX=true;relation(s,'「やめて」と言ったら、本人が止めた。');text='友達「分かった、やめる」\n友達だからこそ、言えることもある。';meaning='友達だからこそ、注意できる。'}
  if(id==='tellAdult2'){f.toldAdult=true;f.clearedX=true;note(s,'先生に相談したら、次の手を教えてもらえた。');text='先生「そういうときは、こうするといいよ」\n相談は、告げ口と違う。';meaning='相談は、告げ口と違う。'}
  if(id==='groupRule'){if(f.toldFair||f.talkedHim||f.toldAdult||f.replayed){f.ruled=true;f.clearedX=true;relation(s,'みんなでルールを決めたら、次からズルが減った。');text='みんなで「こうしよう」と決めた。\n次から、ズルは起きにくい。';meaning='ルールがあれば、ズルは減る。'}else{s.mind-=1;text='ルールを決めようとしたが、何を決めるか分からなかった。';meaning='まず伝えてから、ルールを考えると良い。';grant(s,'tellFair')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '友達は、知らないふりをしている。';
  if(s.stage===1)return 'ズルの話は、少し広がっている。';
  return '明日のゲームは、ルール通りやるはず。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'ゲームの時間。友達が、こっそりズルをしているのを見た。',speaker:'友達',quote:'……（こっそりカードを抜いている）',look:'ズルの瞬間を、見てしまった。',self:'見てしまった… 言うべき？',hint:'見たことを、どう扱う？'};
  if(s.stage===1)return {narrative:'休み時間。ズルの話が、少し広がっている。',speaker:'友達',quote:f.clearedX?'ごめん、もうしない':f.talkedHim?'…分かった':f.pretended?'……':'みんな、なんか言ってる',look:f.clearedX?'友達は、少し気まずそうだが落ち着いている。':'友達は、何事もなかった顔をしている。',self:s.reason==='tellWhom'?'言うべきか迷う。':s.reason==='betray'?'友達を売るようで嫌だ。':s.reason==='unfairGame'?'ズルの勝ちは意味がない。':'見たことと、どう向き合う？',hint:'伝える・本人に言う・やり直し提案、方法はある。'};
  return {narrative:'放課後。ゲームの残りが、机に残っている。',speaker:'友達',quote:f.ruled?'次はルール通りやろう':f.clearedX?'明日はちゃんとやるよ':'……また明日',look:'友達は、少しだけ柔らかい顔だ。',self:f.clearedX?'公平さを保てた。':'まだ少し、残っている。',hint:'公平のための伝えは、告げ口と違う。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedX?3:f.toldFair||f.replayed?2:s.reason?1:0):s.goal===1?(f.talkedHim||f.ruled?3:f.clearedX?2:s.reason?1:0):(f.clearedX?3:f.askedX?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedX?'公平さを保てた。伝え方・言い方・ルールがある。':f.askedX||f.saidHim?'伝える方法が見つかった。':'見たことが残っている。伝え方は練習できる。'}
},
newClass:{
 title:'クラス替えで知らない子ばかり',nav:'クラス替え',num:'19',attrs:['soc'],
 goals:['新しいクラスになじみたい','自分から話せるようになりたい','安心できる場所を見つけたい'],
 chapters:['初日の朝','休み時間','一週間後'],locations:['新しい教室','教室・休み時間','教室・一週間後'],
 base:['corner','wait','fakeSmile','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'知らない顔の群れ',hp:4,power:0,turns:4,look:'知らない顔が、ざわざわと動いている。'},{name:'一人ぼっちの影',hp:5,power:1,turns:5,look:'「仲間がいない」の影が、足元に落ちている。'},{name:'心を閉じる扉',hp:6,power:1,turns:5,look:'自分から話せない気持ちが、扉になっている。'}],
 talk:[['newKid','隣の子に話しかける','隣の席の子に、一言かける。'],['teacherNC','先生に話す','不安なことを、先生に話す。']],
 think:[['noFriends','話しかける友達がいない','知っている子が、一人もいない。'],['missOld','前のクラスが恋しい','ユウと離れて、さびしい。'],['shut','自分から話せない','何を話せばいいか、分からない。']],
 reasonKeys:['noFriends','missOld','shut'],
 stageGrants:[['lunchJoin'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='newKid'){s.flags.saidNC=true;relation(s,'隣の子が、こっちを見て笑った。');out.text='隣の子「よろしくね」\n一言で、笑ってくれた。';out.card='commonTalk'}
  if(key==='teacherNC'){s.flags.toldNC=true;note(s,'先生が、様子を見てくれることになった。');out.text='先生「みんなもドキドキしてるよ。ゆっくりで大丈夫」';out.card='classMix'}
  if(key==='noFriends'){s.reason='noFriends';note(s,'知っている子がいなくて、不安。');out.text='「誰に話せばいいか分からない」';out.card='sayHi'}
  if(key==='missOld'){s.reason='missOld';note(s,'前のクラスの友達が恋しい。');out.text='「ユウに会いたいな」';out.card='visitOld'}
  if(key==='shut'){s.reason='shut';note(s,'自分から話せない気持ちがある。');out.text='「何を話せばいいかな」';out.card='waitSee'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='corner'){f.cornered=true;text='隅でじっとしていた。\n誰も、話しかけてこなかった。';meaning='隅にいるだけでは、仲間は増えない。'}
  if(id==='wait'){f.waited=true;text='待っていたら、誰かが近くを通った。\nでも、話しかけられなかった。';meaning='待つだけでは、始まらないこともある。';grant(s,'sayHi')}
  if(id==='fakeSmile'){f.faked=true;text='愛想笑いをした。\n何も、始まらなかった。';meaning='作り笑いだけでは、距離は縮まらない。'}
  if(id==='sayHi'){f.saidHi=true;f.clearedNC=true;relation(s,'「よろしく」と言ったら、返してもらえた。');text='隣の子「よろしく！」\n一言で、始まった。';meaning='あいさつが、仲間入りの第一歩。'}
  if(id==='visitOld'){f.visited=true;f.clearedNC=true;relation(s,'前の友達に会えて、少し安心した。');text='ユウ「おっ、元気？」\n知っている顔を見ると、安心する。';meaning='知っている友達がいると、安心できる。'}
  if(id==='waitSee'){f.spoke=true;f.clearedNC=true;relation(s,'一言だけ話したら、意外と続いた。');text='「その本、おもしろい？」\n一言だけでも、距離は縮まった。';meaning='一言だけでも、話は始まる。'}
  if(id==='commonTalk'){f.commond=true;f.clearedNC=true;relation(s,'共通の話題で、話が弾んだ。');text='「そのゲーム、俺もやってる！」\n共通点があると、話は進む。';meaning='共通点があれば、仲良くなりやすい。'}
  if(id==='classMix'){f.mixed=true;f.clearedNC=true;note(s,'先生が、みんなで遊ぶ時間を作ってくれた。');text='先生「じゃあ、班の人と自己紹介してみよう」\n時間を作ってもらうと、なじみやすい。';meaning='時間を作ってもらうのも、作戦の一つ。'}
  if(id==='lunchJoin'){if(f.saidHi||f.commond||f.spoke){f.lunched=true;f.clearedNC=true;relation(s,'昼休みに一緒に食べたら、仲が深まった。');text='一緒に食べたら、\nいろんな話ができた。';meaning='一緒に食べると、仲が深まる。'}else{s.mind-=1;text='一緒に食べようとしたが、誘い方が分からなかった。';meaning='まず一言かけてから、一緒に食べると良い。';grant(s,'sayHi')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '新しいクラスの子たちが、ざわざわしている。';
  if(s.stage===1)return 'まわりは、少しずつ話し始めている。';
  return '一週間で、少しずつ顔が分かってきた。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'新学期の朝。新しいクラスは、知らない子ばかり。',speaker:'先生',quote:'今日から、このクラスで一年間よろしくね',look:'知らない顔が、ずらっと並んでいる。',self:'ユウと別クラス… 誰に話せばいい？',hint:'不安の、どこが一番つらい？'};
  if(s.stage===1)return {narrative:'休み時間。まわりは、少しずつ話し始めている。',speaker:'隣の子',quote:f.clearedNC?'ねえ、一緒に遊ぼう':f.saidHi?'よろしく！':f.commond?'そのゲーム、おもしろいよね':'……',look:f.clearedNC?'まわりは、もう少し柔らかい顔だ。':'みんな、まだ探り合っている。',self:s.reason==='noFriends'?'話せる人がいない。':s.reason==='missOld'?'前のクラスが恋しい。':s.reason==='shut'?'自分から話せない。':'どうなじんでいく？',hint:'あいさつ・一言・共通の話題、方法はある。'};
  return {narrative:'一週間後。少しずつ、顔と名前が一致してきた。',speaker:'隣の子',quote:f.clearedNC?'今日も一緒にやろう':f.lunched?'ごはん、一緒に食べよう':'おはよう',look:'教室が、少しずつなじんでいる。',self:f.clearedNC?'新しいクラスに、なじんできた。':'まだ少し、遠い気がする。',hint:'時間がたつと、なじみやすい。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedNC?3:f.saidHi||f.visited?2:s.reason?1:0):s.goal===1?(f.commond||f.lunched?3:f.saidHi||f.spoke?2:s.reason?1:0):(f.visited||f.mixed?3:f.clearedNC?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedNC?'新しいクラスになじんできた。あいさつ・一言・共通点がある。':f.saidHi||f.spoke?'少し話せるようになった。':'知らないまま残っている。一歩の出し方は練習できる。'}
},
present:{
 title:'みんなの前で読む番',nav:'前で読む',num:'20',attrs:['soc','study'],
 goals:['最後まで読み切りたい','怖さと上手に向き合いたい','次も読めるようになりたい'],
 chapters:['音読の前','自分の番','翌日'],locations:['教室・国語','教室・自分の番','教室・翌日'],
 base:['mumble','smallVoice','skipTurn','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'注目の目玉群',hp:4,power:0,turns:4,look:'たくさんの目が、こっちをじっと見ている。'},{name:'かみかみ舌',hp:5,power:1,turns:5,look:'舌がもつれて、ことばが出てこない。'},{name:'笑われるかもの影',hp:6,power:1,turns:5,look:'「間違えたら笑われる」の影が、大きくなる。'}],
 talk:[['teacherP2','先生に相談','読むのが怖いことを、先生に言う。'],['buddyP','友達に聞いてもらう','一人相手に、練習させてもらう。']],
 think:[['eyes','みんなの目が怖い','注目されると、固まる。'],['stumble','噛むのが怖い','言いよどんで、恥ずかしくなる。'],['laugh','間違えて笑われるのが怖い','失敗したら、笑われそう。']],
 reasonKeys:['eyes','stumble','laugh'],
 stageGrants:[['breatheRead'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherP2'){s.flags.toldV=true;note(s,'先生が、練習に付き合ってくれることになった。');out.text='先生「ゆっくりでいいよ。練習しようか」';out.card='rehearse'}
  if(key==='buddyP'){s.flags.buddyV=true;relation(s,'友達が、聞いてくれることになった。');out.text='友達「いいよ、聞くよ」\n一人相手なら、気が楽だ。';out.card='buddyRead'}
  if(key==='eyes'){s.reason='eyes';note(s,'みんなの目が、怖い。');out.text='「見られると、固まる」';out.card='lookOne'}
  if(key==='stumble'){s.reason='stumble';note(s,'噛むのが、怖い。');out.text='「カミカミになりそう」';out.card='slowRead'}
  if(key==='laugh'){s.reason='laugh';note(s,'間違えて笑われるのが、怖い。');out.text='「失敗したら、笑われるかも」';out.card='practiceRead'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='mumble'){f.mumbled=true;text='もごもごと、読んだ。\n先生「もう少し大きな声で」';meaning='もごもごでは、読んだことにならない。'}
  if(id==='smallVoice'){f.smallVoiced=true;note(s,'小さな声でも、読み切った。');text='小さな声で、読み切った。\n先生「最後まで読めたね」';meaning='小さくても、読み切れば一歩。'}
  if(id==='skipTurn'){f.skippedV=true;text='順番をパスしてもらった。\nでも、次も怖いままだ。';meaning='パスは逃げるだけ。怖さは残る。';grant(s,'slowRead')}
  if(id==='lookOne'){f.lookedOne=true;f.clearedV=true;relation(s,'友達一人だけを見て読んだら、楽に読めた。');text='友達だけに向けて読んだ。\nみんなの目は、気にならなかった。';meaning='一人に向けると、気持ちが楽になる。'}
  if(id==='slowRead'){f.slowed=true;f.clearedV=true;note(s,'ゆっくり読んだら、噛まずに読めた。');text='ゆっくり、一つずつ読んだ。\n噛まずに、読み切れた。';meaning='ゆっくりは、恥ずかしくない。'}
  if(id==='practiceRead'){f.practiced=true;f.clearedV=true;note(s,'一度練習したら、本番は読めた。');text='練習してから読んだら、\nすらすら読めた。';meaning='一度読めば、二回目は楽になる。'}
  if(id==='rehearse'){f.rehearsed=true;f.clearedV=true;note(s,'先生と練習して、自信がついた。');text='先生と読んだら、\n「できるじゃん」と思えた。';meaning='練習の相手は、先生でもいい。'}
  if(id==='buddyRead'){f.buddyRead=true;f.clearedV=true;relation(s,'友達の前で読めたら、自信が出た。');text='友達「上手だね！」\n一人の前で読めたら、自信がつく。';meaning='一人の前で読めたら、みんなの前も近い。'}
  if(id==='breatheRead'){if(f.practiced||f.slowed||f.rehearsed){f.breathedV=true;f.clearedV=true;note(s,'深呼吸してから読んだら、落ち着いて読めた。');text='深呼吸して、読み始めた。\n落ち着いて、最後まで読めた。';meaning='落ち着いて始めると、声が出やすい。'}else{s.mind-=1;text='深呼吸したが、準備していないので固まったままだった。';meaning='準備してから深呼吸すると、効きやすい。';grant(s,'practiceRead')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '前の子が、読んでいる。もうすぐ自分の番。';
  if(s.stage===1)return 'みんなが、こっちを見ている。';
  return '昨日の自分より、少し読める気がする。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'国語の時間。音読の番が、回ってきた。',speaker:'先生',quote:'次、カンくんお願いします',look:'みんなの顔が、こっちを向いた。',self:'うわ、来ちゃった… 読めるかな',hint:'読むことへの怖さの、どこが一番？'};
  if(s.stage===1)return {narrative:'自分の番。みんなが、こっちを見ている。',speaker:'友達',quote:f.clearedV?'上手だね！':f.lookedOne?'こっち見て読んでいいよ':f.slowed?'ゆっくりでいいよ':'……',look:f.clearedV?'まわりは、聞き終わって落ち着いている。':'みんなの目が、こっちを見ている。',self:s.reason==='eyes'?'目が怖い。':s.reason==='stumble'?'噛むのが怖い。':s.reason==='laugh'?'笑われそうで怖い。':'どう読み切る？',hint:'一人を見る・ゆっくり・練習、方法はある。'};
  return {narrative:'翌日。昨日の読みが、少し残っている。',speaker:'先生',quote:f.clearedV?'昨日、上手に読めたね':f.practiced?'練習した甲斐があったね':'今日も読んでみようか',look:'先生は、昨日を覚えている。',self:f.clearedV?'読み切れた。次も読めそうだ。':'まだ少し、怖さが残る。',hint:'読めた経験は、次の力になる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedV?3:f.slowed||f.lookedOne?2:s.reason?1:0):s.goal===1?(f.clearedV&&f.practiced?3:f.clearedV?2:s.reason?1:0):(f.practiced||f.rehearsed||f.buddyRead?3:f.clearedV?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedV?'読み切れた。準備・一人に向ける・ゆっくりがある。':f.practiced||f.slowed?'読む方法が見つかった。':'怖さが残っている。読み方は練習できる。'}
},
spill:{
 title:'牛乳をこぼして皆に見られた',nav:'ミスの恥ずかしさ',num:'21',attrs:['soc','ath'],
 goals:['ミスを片づけたい','恥ずかしさと向き合いたい','みんなの前で立て直したい'],
 chapters:['給食の時間','片づけ','午後の授業'],locations:['教室・給食','床・片づけ','教室・午後'],
 base:['freeze','hideMistake','wipeHalf','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'注目の目玉群',hp:4,power:0,turns:4,look:'たくさんの目が、こっちをじっと見ている。'},{name:'広がる牛乳の海',hp:5,power:1,turns:5,look:'こぼれた牛乳が、どんどん広がっていく。'},{name:'恥ずかしさの顔',hp:6,power:1,turns:5,look:'みんなの前での失敗が、赤い顔になって残る。'}],
 talk:[['teacherM','先生に言う','こぼしたことを、すぐ伝える。'],['friendM','近くの友達に頼む','「手伝って」と声をかける。']],
 think:[['embarrass','恥ずかしくて動けない','みんなに見られて、固まる。'],['how2wipe','拭き方が分からない','どう片づければいいか、分からない。'],['laughAt','笑われそうで嫌だ','失敗を、からかわれそう。']],
 reasonKeys:['embarrass','how2wipe','laughAt'],
 stageGrants:[['cleanBoth'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherM'){s.flags.toldM=true;note(s,'先生に言ったら、拭き方を教えてくれた。');out.text='先生「大丈夫、こうして拭くんだよ」\n伝えたら、方法を教えてもらえた。';out.card='wipeGood'}
  if(key==='friendM'){s.flags.helpedM=true;relation(s,'友達が、一緒に拭いてくれた。');out.text='友達「手伝うよ」\n頼んだら、助けてもらえた。';out.card='askHelp'}
  if(key==='embarrass'){s.reason='embarrass';note(s,'恥ずかしさで、固まっている。');out.text='「見られちゃった…」';out.card='saySorry2'}
  if(key==='how2wipe'){s.reason='how2wipe';note(s,'拭き方が、分からない。');out.text='「どうやって拭けばいい？」';out.card='wipeGood'}
  if(key==='laughAt'){s.reason='laughAt';note(s,'笑われそうで、嫌な気持ち。');out.text='「からかわれるかも」';out.card='laughSelf'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='freeze'){f.froze=true;text='固まった。\n牛乳は、どんどん広がっていく。';meaning='固まるだけでは、汚れは広がる。';grant(s,'askHelp')}
  if(id==='hideMistake'){f.hidM=true;s.rep-=1;relation(s,'見ぬふりしたら、後で見つかって怒られた。');text='見ぬふりしたら、\nあとで先生に見つかった。';meaning='ふせぐと、あとでバレてもっと困る。';grant(s,'saySorry2')}
  if(id==='wipeHalf'){f.wipedHalf=true;text='適当にふいたが、\n牛乳は広がるばかりだった。';meaning='拭き方が分かると、早く片づく。';grant(s,'wipeGood')}
  if(id==='saySorry2'){f.saidSorry=true;f.clearedM=true;relation(s,'「ごめんなさい」と言ったら、まわりの目がやわらいだ。');text='「ごめんなさい、こぼしました」\n言ったら、まわりが手伝ってくれた。';meaning='すぐ謝ると、まわりの目はやわらぐ。'}
  if(id==='wipeGood'){f.wipedGood=true;f.clearedM=true;note(s,'拭き方を聞いて、きれいにふけた。');text='教えてもらったとおりにふいたら、\n床がきれいになった。';meaning='拭き方を聞くと、早くきれいになる。'}
  if(id==='askHelp'){f.helpedM=true;f.clearedM=true;relation(s,'「手伝って」と頼んだら、みんなが手伝ってくれた。');text='「手伝って！」と言ったら、\n何人かがふきんを持ってきてくれた。';meaning='頼むのも、対処の一つ。'}
  if(id==='laughSelf'){f.laughed=true;f.clearedM=true;relation(s,'「やっちゃった」と笑ったら、まわりも笑った。');text='「やっちゃったー！」と笑った。\nまわりも、一緒に笑ってくれた。';meaning='自分で笑うと、まわりも楽になる。'}
  if(id==='mopUp'){f.mopped=true;f.clearedM=true;note(s,'雑巾できれいにふけた。');text='雑巾で、床をきれいにした。\nあとは、自分の服だけ。';meaning='道具を使えば、早くきれいになる。'}
  if(id==='cleanBoth'){if(f.saidSorry||f.wipedGood||f.mopped){f.cleanedBoth=true;f.clearedM=true;relation(s,'自分と床の両方をきれいにしたら、完全に戻った。');text='服も床も、きれいになった。\n午後の授業に、間に合う。';meaning='まわりまで片づけると、評判も戻る。'}else{s.mind-=1;text='両方きれいにしようとしたが、どこから手をつけるか分からなかった。';meaning='まず一つ片づけてから、両方やると良い。';grant(s,'wipeGood')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '床に、牛乳が広がっている。';
  if(s.stage===1)return 'みんなが、こっちを見ている。';
  return '午後の授業が、もうすぐ始まる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'給食の時間。牛乳パックが、手から滑り落ちた。',speaker:'友達',quote:'あっ、こぼれた！',look:'床に、白い海が広がっている。',self:'やっちゃった… みんな見てる',hint:'ミスしたときの、一番つらいのはどこ？'};
  if(s.stage===1)return {narrative:'片づけの時間。みんなが、こっちを見ている。',speaker:'友達',quote:f.clearedM?'大丈夫？手伝うよ':f.saidSorry?'ふくの、手伝うね':f.laughed?'わはは、やっちゃったね':'……',look:f.clearedM?'まわりは、手伝ってくれそうだ。':'みんなが、様子を見ている。',self:s.reason==='embarrass'?'恥ずかしい。':s.reason==='how2wipe'?'拭き方が分からない。':s.reason==='laughAt'?'からかわれそう。':'どう立て直す？',hint:'謝る・拭く・頼む・笑う、方法はある。'};
  return {narrative:'午後の授業。床は、もう乾いている。',speaker:'先生',quote:f.clearedM?'きれいに片づけられたね':f.saidSorry?'すぐ謝れて、えらかったよ':'次から気をつけよう',look:'何事もなかったように、授業が始まる。',self:f.clearedM?'片づけられた。ミスは、対処できる。':'まだ少し、気になっている。',hint:'ミスは、対処すれば終わる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedM?3:f.wipedGood||f.mopped?2:s.reason?1:0):s.goal===1?(f.laughed||f.saidSorry?3:f.clearedM?2:s.reason?1:0):(f.cleanedBoth?3:f.clearedM?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedM?'ミスを片づけられた。謝る・拭く・頼む・笑うがある。':f.wipedGood||f.mopped?'片づけ方が分かった。':'ミスが残っている。対処法は練習できる。'}
},
pair:{
 title:'2人組で余った',nav:'ペアで余る',num:'22',attrs:['soc'],
 goals:['実験に参加したい','余っても落ち着いていたい','次につなげたい'],
 chapters:['理科の時間前','ペア作り','実験中'],locations:['教室・理科','教室・ペア作り','教室・実験'],
 base:['standStill','followCrowd','pretendBusy','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'余り者の影',hp:4,power:0,turns:4,look:'自分だけが、ぽつんと残されている感じがする。'},{name:'伸びる沈黙',hp:5,power:1,turns:5,look:'誰も声をかけてくれない時間が、長く感じる。'},{name:'一人の重さ',hp:6,power:1,turns:5,look:'「一人は寂しい」の気持ちが、重くなる。'}],
 talk:[['teacherA','先生に言う','余ったことを、先生に伝える。'],['leftKid','余った子に声をかける','同じく余った子が、いるかも。']],
 think:[['noPairAsk','誘えない','自分から、誘えない。'],['hateLeft','余るのが嫌だ','一人だけ余るのが、嫌だ。'],['soloOK','一人でもいい','無理に組まなくても、いいかも。']],
 reasonKeys:['noPairAsk','hateLeft','soloOK'],
 stageGrants:[['offerNext'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherA'){s.flags.toldA=true;note(s,'先生に言ったら、組を調整してくれた。');out.text='先生「あ、ごめん。ここに入ろうか」\n言ったら、調整してもらえた。';out.card='teacherPair'}
  if(key==='leftKid'){s.flags.foundKid=true;relation(s,'同じく余った子がいた。一緒に組めそうだ。');out.text='あの子も、余っているみたいだ。\n声をかければ、一緒に組めるかも。';out.card='pairUp'}
  if(key==='noPairAsk'){s.reason='noPairAsk';note(s,'自分から誘えない。');out.text='「誘うのが、苦手…」';out.card='askPair'}
  if(key==='hateLeft'){s.reason='hateLeft';note(s,'余るのが、嫌だ。');out.text='「一人だけ余るのは、嫌だ」';out.card='oddThree'}
  if(key==='soloOK'){s.reason='soloOK';note(s,'一人でもいいと思っている。');out.text='「一人でやっても、いいかも」';out.card='ownExp'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='standStill'){f.stood=true;text='立ったまま、迷った。\nみんなは、どんどん組んでいく。';meaning='立つだけでは、組はできない。';grant(s,'askPair')}
  if(id==='followCrowd'){f.followed=true;text='だれかの後ろについていった。\nでも、組とは言えないまま。';meaning='ついていくだけでは、組と言えない。';grant(s,'askPair')}
  if(id==='pretendBusy'){f.pretended=true;text='他のことをしているふりをした。\n余っているのを、ごまかした。';meaning='ふりは苦しい。余るのは悪いことじゃない。';grant(s,'teacherPair')}
  if(id==='askPair'){f.askedP=true;f.clearedP=true;relation(s,'「一緒にやる？」と誘ったら、組めた。');text='「一緒にやる？」\n相手「いいよ！」\n自分から誘えば、組める。';meaning='自分から誘うと、組は早くできる。'}
  if(id==='oddThree'){f.three=true;f.clearedP=true;relation(s,'3人組に入れてもらった。');text='「入っていい？」\n「うん、3人でやろう」';meaning='入れてもらうのも、一つの方法。'}
  if(id==='ownExp'){f.ownExp=true;f.clearedP=true;note(s,'一人で実験を始めたら、集中できた。');text='一人で実験を始めた。\n自分のペースで、進められた。';meaning='一人でやるのも、正当な選択肢。'}
  if(id==='teacherPair'){f.teacherPaired=true;f.clearedP=true;note(s,'先生が組を調整してくれて、入れた。');text='先生が、組を調整してくれた。\n「ここに入りなさい」';meaning='先生に言うのは、甘えじゃない。'}
  if(id==='pairUp'){f.pairedUp=true;f.clearedP=true;relation(s,'余った同士で組んだ。意外と話せた。');text='「一緒にやる？」\n「うん！」\n余った同士で、組めた。';meaning='余った同士なら、声をかけやすい。'}
  if(id==='offerNext'){if(f.askedP||f.pairedUp||f.three){f.offered=true;f.clearedP=true;relation(s,'「次は一緒にね」と言ったら、次も約束できた。');text='「次は一緒にね」\n相手「うん、またね」\n関係は、続いていく。';meaning='次の約束で、関係は続く。'}else{s.mind-=1;text='「次は一緒に」と言おうとしたが、まだ組めていないので言えなかった。';meaning='まず組んでから、次の約束をすると良い。';grant(s,'askPair')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '先生が、「2人組を作って」と言った。';
  if(s.stage===1)return 'みんなが、あっという間に組んでいく。';
  return '実験は、もう始まっている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'理科の時間。先生が、「2人組を作って」と言った。',speaker:'先生',quote:'2人組を作ってください',look:'みんなが、あっという間に動き出した。',self:'え、もう始まる… どうしよう',hint:'余ったときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'みんなが組んでいく。自分は、まだ余っている。',speaker:'友達',quote:f.clearedP?'一緒にやろう！':f.pairedUp?'じゃあ僕たちで組もう':'……',look:f.clearedP?'組めた。実験が始まる。':'まだ、余っている。',self:s.reason==='noPairAsk'?'誘えない。':s.reason==='hateLeft'?'余るのが嫌。':s.reason==='soloOK'?'一人でもいい。':'どうやって組に入る？',hint:'誘う・入る・一人・先生、方法はいろいろ。'};
  return {narrative:'実験中。組めたか、一人か、どちらにしても実験は進む。',speaker:'先生',quote:f.clearedP?'いいペースだね':f.ownExp?'一人でしっかりやれてるね':'大丈夫？',look:'実験は、進んでいる。',self:f.clearedP?'組めた。余っても、終わらない。':'まだ少し、気になっている。',hint:'余っても、実験はできる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedP?3:f.askedP||f.pairedUp?2:s.reason?1:0):s.goal===1?(f.ownExp||f.three?3:f.clearedP?2:s.reason?1:0):(f.offered?3:f.clearedP?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedP?'組めた。誘う・入る・一人・先生に言うがある。':f.askedP||f.pairedUp?'組み方が見つかった。':'まだ余っている。入り方は練習できる。'}
},
promise:{
 title:'約束を忘れられていた',nav:'約束破り',num:'23',attrs:['soc'],
 goals:['気持ちを伝えたい','関係を切らずに済ませたい','次につなげたい'],
 chapters:['約束の日','翌日会う','その後'],locations:['公園・待ち合わせ','学校・翌日','公園・その後'],
 base:['waitLong','accuse','actNormal','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'待ちぼうけの影',hp:4,power:0,turns:4,look:'待っていた時間が、長い影になった。'},{name:'裏切りのトゲ',hp:5,power:1,turns:5,look:'「約束したのに」が、トゲになって刺さる。'},{name:'離れる距離',hp:6,power:1,turns:5,look:'友達との距離が、少し離れていく感じ。'}],
 talk:[['kenP','本人に話す','約束を忘れた子に、直接話す。'],['teacherPr','先生に相談','つらい気持ちを、先生に話す。']],
 think:[['sad','寂しくて怒っている','約束を忘れられて、悲しい。'],['doubt','自分は軽い存在かも','私って、そんなに軽いのかな。'],['worryRel','関係が壊れそう','このまま、仲が悪くなりそう。']],
 reasonKeys:['sad','doubt','worryRel'],
 stageGrants:[['bigPromise'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='kenP'){s.flags.faced=true;note(s,'本人に話したら、謝られた。');out.text='相手「ごめん！本当に忘れてた」\n話したら、ちゃんと謝られた。';out.card='hearOut2'}
  if(key==='teacherPr'){s.flags.toldPr=true;note(s,'先生に話したら、気持ちが軽くなった。');out.text='先生「待っていたんだね。それは悲しかったね」\n話すだけで、気持ちが軽くなった。';out.card='newPlan'}
  if(key==='sad'){s.reason='sad';note(s,'寂しくて、怒っている。');out.text='「待っていたのに…」';out.card='tellFeel'}
  if(key==='doubt'){s.reason='doubt';note(s,'自分は軽い存在かも、と疑っている。');out.text='「私は、軽い存在なのかな」';out.card='askWhy2'}
  if(key==='worryRel'){s.reason='worryRel';note(s,'関係が壊れそうで、不安。');out.text='「このまま、仲が悪くなりそう」';out.card='newPlan'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='waitLong'){f.waited=true;text='そのまま、ずっと待った。\n結局、来なかった。';meaning='待つだけでは、気持ちが晴れない。';grant(s,'dayAlone')}
  if(id==='accuse'){f.accused=true;s.rep-=1;relation(s,'「嘘つき！」と責めたら、相手が黙ってしまった。');text='「嘘つき！」\n相手は、黙ってしまった。';meaning='責めると、相手は黙る。';grant(s,'tellFeel')}
  if(id==='actNormal'){f.actedN=true;text='何もなかったように遊んだ。\nでも、心の中には残っている。';meaning='気にしないふりは、心に残る。';grant(s,'tellFeel')}
  if(id==='askWhy2'){f.askedWhy=true;f.clearedPr=true;note(s,'理由を聞いたら、事情が分かった。');text='「どうして来なかったの？」\n相手「おばあちゃんの家に行ってた」\n事情があって、忘れてただけだった。';meaning='理由を聞くと、怒らずに済む。'}
  if(id==='tellFeel'){f.toldFeel=true;f.clearedPr=true;relation(s,'「寂しかった」と言ったら、相手がちゃんと謝った。');text='「寂しかったよ」\n相手「ごめん。次は絶対来る」\n気持ちを言うと、届く。';meaning='気持ちを言うと、相手は聞ける。'}
  if(id==='newPlan'){f.newPlanned=true;f.clearedPr=true;relation(s,'新しい約束を立てたら、また会える日ができた。');text='「じゃあ、今度の土曜にね」\n次の約束が、できた。';meaning='次の約束で、関係は続く。'}
  if(id==='dayAlone'){f.aloneDay=true;f.clearedPr=true;note(s,'一人で遊んだら、悪くない一日になった。');text='一人で公園を回った。\n自分のペースで、悪くない一日だった。';meaning='一人の日も、無駄じゃない。'}
  if(id==='hearOut2'){f.heard=true;f.clearedPr=true;relation(s,'最後まで聞いたら、相手の事情が分かった。');text='話を全部聞いたら、\n悪気がなかったことが分かった。';meaning='全部聞いてから、決めていい。'}
  if(id==='bigPromise'){if(f.toldFeel||f.heard){f.bigPromised=true;f.clearedPr=true;relation(s,'約束の大事さを伝えて、次も約束できた。');text='「約束は大事だからね」\n相手「うん、分かった」\n気持ちを伝えた約束は、守られやすい。';meaning='気持ちを伝えた約束は、守られやすい。'}else{s.mind-=1;text='約束の大事さを言おうとしたが、まだ話せていないので届かなかった。';meaning='まず気持ちを伝えてから、約束の大事さを言うと良い。';grant(s,'tellFeel')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '約束の時間は、過ぎている。';
  if(s.stage===1)return 'あの子が、教室にいる。';
  return 'また、遊ぶ約束ができそうだ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'公園。約束の時間を、30分過ぎた。',speaker:'友達',quote:'（来ない…）',look:'誰も、いない。時計だけが進む。',self:'来ない… 約束したのに',hint:'約束を忘れられたときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'翌日の教室。あの子は、普通にしている。',speaker:'友達',quote:f.clearedPr?'昨日はごめんね':f.accused?'……':'おはよう',look:f.clearedPr?'ちゃんと謝られた。':'あの子は、普通にしている。',self:s.reason==='sad'?'寂しくて怒っている。':s.reason==='doubt'?'私は軽いのかな。':s.reason==='worryRel'?'仲が悪くなりそう。':'どう切り出す？',hint:'聞く・伝える・一人・先生、方法はある。'};
  return {narrative:'その後。また、約束ができる雰囲気になった。',speaker:'友達',quote:f.clearedPr?'今度は忘れない！':f.newPlanned?'次の土曜ね':'……',look:'二人の距離が、戻ってきている。',self:f.clearedPr?'言ってよかった。関係は続く。':'まだ少し、気になっている。',hint:'約束は、また作れる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedPr?3:f.toldFeel||f.heard?2:s.reason?1:0):s.goal===1?(f.toldFeel?3:f.clearedPr?2:s.reason?1:0):(f.bigPromised||f.newPlanned?3:f.clearedPr?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedPr?'約束の件を、整理できた。聞く・伝える・一人・新約束がある。':f.toldFeel||f.heard?'気持ちを届けられた。':'まだ、モヤモヤが残っている。伝え方は練習できる。'}
},
duty:{
 title:'係当番をサボられた',nav:'当番サボられ',num:'24',attrs:['soc','ath'],
 goals:['当番の仕事を終わらせたい','一人で抱え込まない','次から公平にしたい'],
 chapters:['放課後・当番','仕事中','翌日'],locations:['教室・放課後','教室・仕事','教室・翌日'],
 base:['doAll','slackOff','complainD','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'残った仕事の山',hp:4,power:0,turns:4,look:'机の山が、まだ残っている。'},{name:'ずるいの影',hp:5,power:1,turns:5,look:'「ずるい」の気持ちが、大きくなる。'},{name:'疲れの重さ',hp:6,power:1,turns:5,look:'一人でやる疲れが、重くのしかかる。'}],
 talk:[['slacker','サボった子に声をかける','逃げた相手に、声をかける。'],['teacherD2','先生に相談','一人で抱えず、先生に伝える。']],
 think:[['unfairD','ずるいと思う','一人だけ働くのは、不公平。'],['tired','疲れてきた','一人では、疲れてしまう。'],['dutyOK','当番自体は嫌じゃない','仕事は嫌じゃない、一人が嫌だ。']],
 reasonKeys:['unfairD','tired','dutyOK'],
 stageGrants:[['finishWell'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='slacker'){s.flags.called=true;note(s,'声をかけたら、相手が戻ってきた。');out.text='「一緒にやろうよ」\n相手「…ごめん、手伝う」\n声をかけたら、戻ってきた。';out.card='callBack'}
  if(key==='teacherD2'){s.flags.toldD=true;note(s,'先生に言ったら、明日から交代にしてくれた。');out.text='先生「明日から交代にしよう」\n一人で抱えなくて、済んだ。';out.card='tellTeacherD'}
  if(key==='unfairD'){s.reason='unfairD';note(s,'一人だけ働くのは、ずるいと思う。');out.text='「一人だけ、ずるい」';out.card='splitWork'}
  if(key==='tired'){s.reason='tired';note(s,'疲れてきた。');out.text='「一人じゃ、疲れる…」';out.card='doOwn'}
  if(key==='dutyOK'){s.reason='dutyOK';note(s,'仕事自体は嫌じゃない。');out.text='「仕事はいい。一人が嫌だ」';out.card='doOwn'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='doAll'){f.didAll=true;text='黙って、全部一人でやった。\n疲れた。\nでも、誰も気づいていない。';meaning='全部一人でやると、疲れてしまう。';grant(s,'tellTeacherD')}
  if(id==='slackOff'){f.slackOff=true;s.rep-=1;relation(s,'自分もサボったら、仕事が残って怒られた。');text='自分もサボった。\n仕事が残って、先生に怒られた。';meaning='二人ともサボると、仕事が残る。';grant(s,'doOwn')}
  if(id==='complainD'){f.complained=true;text='「ずるい！」と言った。\n相手は逃げたまま。';meaning='文句だけでは、相手は動かない。';grant(s,'callBack')}
  if(id==='callBack'){f.calledBack=true;f.clearedD=true;relation(s,'声をかけたら、相手が戻って手伝ってくれた。');text='「一緒にやろう」\n相手「ごめん、手伝うよ」\n二人でやったら、すぐ終わった。';meaning='責めず声をかけると、戻りやすい。'}
  if(id==='splitWork'){f.split=true;f.clearedD=true;relation(s,'「こっちやるね」と分けたら、相手もやった。');text='「机を拭くね。そっちの分、お願い」\n分けたら、相手も動いた。';meaning='分かれた仕事は、サボりにくい。'}
  if(id==='tellTeacherD'){f.toldD2=true;f.clearedD=true;note(s,'先生が交代制にしてくれて、公平になった。');text='先生「今日から交代にしよう」\n先生に言ったら、解決した。';meaning='相談は、チクリじゃない。'}
  if(id==='doOwn'){f.didOwn=true;f.clearedD=true;note(s,'自分の分だけを、きちんとやった。');text='自分の分だけ、きちんとやった。\n全部は一人の仕事じゃない。';meaning='自分の分だけなら、疲れすぎない。'}
  if(id==='switchJob'){f.switched=true;f.clearedD=true;relation(s,'交代制を提案したら、みんなが公平にやるようになった。');text='「交代にしない？」\nみんな「いいね」\n交代制で、公平になった。';meaning='交代制だと、公平になる。'}
  if(id==='finishWell'){if(f.calledBack||f.split||f.didOwn){f.finishedWell=true;f.clearedD=true;note(s,'丁寧に仕上げたら、達成感があった。');text='教室が、きれいになった。\nきちんとやった達成感がある。';meaning='きちんとやった達成感は、自分のもの。'}else{s.mind-=1;text='仕上げようとしたが、仕事がまだ片づいていなくて疲れただけだった。';meaning='まず分担してから、仕上げると良い。';grant(s,'splitWork')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'もう一人の当番が、さっきからいない。';
  if(s.stage===1)return '仕事が、まだ残っている。';
  return '今日の当番は、もう終わる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'放課後。当番の時間なのに、相手がいない。',speaker:'友達',quote:'あいつ、また逃げたよ',look:'机の山が、残っている。',self:'一人でやるの…',hint:'当番をサボられたときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'仕事中。相手はまだいない。',speaker:'友達',quote:f.clearedD?'手伝うよ':f.calledBack?'ごめん、やるね':'……',look:f.clearedD?'仕事が、進んでいる。':'仕事が、まだ残っている。',self:s.reason==='unfairD'?'ずるい。':s.reason==='tired'?'疲れた。':s.reason==='dutyOK'?'仕事はいい、一人が嫌だ。':'どう立て直す？',hint:'声をかける・分担・先生・自分の分だけ、方法はある。'};
  return {narrative:'翌日。今日も当番がある。',speaker:'先生',quote:f.clearedD?'今日は交代制にしよう':f.toldD2?'相談してくれてありがとう':'今日も当番、お願いね',look:'今日も、仕事がある。',self:f.clearedD?'昨日、上手く回せた。今日も大丈夫。':'まだ少し、残っている。',hint:'当番の回し方は、練習できる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedD?3:f.didOwn||f.split?2:s.reason?1:0):s.goal===1?(f.toldD2||f.calledBack?3:f.clearedD?2:s.reason?1:0):(f.switched||f.finishedWell?3:f.clearedD?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedD?'当番を回せた。声かけ・分担・相談・自分の分だけがある。':f.didOwn||f.split?'回し方が見つかった。':'一人で抱えている。回し方は練習できる。'}
},
rumor:{
 title:'自分のうわさが流れている',nav:'うわさ',num:'25',attrs:['soc'],
 goals:['うわさを止めたい','落ち着いていたい','関係を守りたい'],
 chapters:['休み時間','うわさの広がり','翌日'],locations:['教室・休み時間','廊下・うわさ','教室・翌日'],
 base:['denyR','snapBack','pretendR','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'ささやきの群れ',hp:4,power:0,turns:4,look:'あっちこっちで、こそこそ声がする。'},{name:'大きくなるうわさ',hp:5,power:1,turns:5,look:'うわさが、伝わるたびに大きくなる。'},{name:'みんなの目',hp:6,power:1,turns:5,look:'みんなの目が、こっちを見ている気がする。'}],
 talk:[['rumorKid','うわさを聞いた子に話す','まわりの子に、静かに聞く。'],['teacherRu','先生に相談','広がる前に、止めてもらう。']],
 think:[['whoDid','誰が流したか気になる','誰が言い始めたか、知りたい。'],['whatThey','内容が恥ずかしい','うわさの中身が、恥ずかしい。'],['angry','腹が立つ','勝手に言われて、腹が立つ。']],
 reasonKeys:['whoDid','whatThey','angry'],
 stageGrants:[['keepAct'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='rumorKid'){s.flags.heardR=true;note(s,'聞いた子に聞いたら、間違いだったと分かった。');out.text='友達「それ、違うみたいだよ」\n間違いが、伝わっていた。';out.card='askSource'}
  if(key==='teacherRu'){s.flags.toldRu=true;note(s,'先生が、うわさを止めてくれた。');out.text='先生「うわさ話はやめようね」\n先生が、みんなに言ってくれた。';out.card='teacherStop'}
  if(key==='whoDid'){s.reason='whoDid';note(s,'誰が流したか、気になる。');out.text='「誰が言い始めたの？」';out.card='findOut'}
  if(key==='whatThey'){s.reason='whatThey';note(s,'うわさの内容が、恥ずかしい。');out.text='「あんなこと、言われてるの？」';out.card='laughOff2'}
  if(key==='angry'){s.reason='angry';note(s,'勝手に言われて、腹が立つ。');out.text='「勝手に言うなよ…」';out.card='tellTruth2'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='denyR'){f.deniedR=true;s.rep-=1;relation(s,'大声で否定したら、かえって目立ってしまった。');text='「違うよ！！」\n大声で言ったら、かえって目立った。';meaning='大声の否定は、かえって広がる。';grant(s,'tellTruth2')}
  if(id==='snapBack'){f.snapped=true;s.rep-=1;relation(s,'怒鳴りつけたら、まわりが離れていった。');text='「お前が言ったんだろ！」\nまわりは、引いていった。';meaning='怒鳴ると、まわりは離れていく。';grant(s,'findOut')}
  if(id==='pretendR'){f.pretR=true;text='聞こえないふりをした。\nでも、うわさは残っている。';meaning='聞こえないふりは、心に残る。';grant(s,'laughOff2')}
  if(id==='findOut'){f.found=true;f.clearedRu=true;note(s,'直接聞いたら、間違いだったと分かった。');text='「それ、本当？」\n相手「あれ？違うの？」\n間違いが、分かった。';meaning='直接聞くと、間違いが分かる。'}
  if(id==='laughOff2'){f.laughedOff=true;f.clearedRu=true;relation(s,'笑い飛ばしたら、うわさの勢いが止まった。');text='「ほんとかもよ（笑）」\n軽く流したら、みんなも笑って終わった。';meaning='笑い飛ばすと、勢いが止まる。'}
  if(id==='askSource'){f.sourced=true;f.clearedRu=true;note(s,'元をたどったら、勘違いだったと分かった。');text='元をたどったら、\n話がひとりでに大きくなっていた。';meaning='元をたどると、間違いに気づける。'}
  if(id==='teacherStop'){f.stoppedT=true;f.clearedRu=true;note(s,'先生が止めてくれて、うわさは静まった。');text='先生が、みんなに言ってくれた。\nうわさは、静まった。';meaning='先生に言うのは、頼り方の一つ。'}
  if(id==='tellTruth2'){f.toldT2=true;f.clearedRu=true;relation(s,'静かに「本当はこう」と言ったら、聞いてもらえた。');text='「本当は、こうなんだ」\n静かに言ったら、ちゃんと聞いてもらえた。';meaning='静かに言うと、聞いてもらえる。'}
  if(id==='keepAct'){if(f.found||f.laughedOff||f.stoppedT||f.toldT2){f.kept=true;f.clearedRu=true;relation(s,'いつもどおりにしたら、うわさは消えていった。');text='いつもどおりにしていたら、\nうわさは、いつの間にか消えた。';meaning='いつもどおりが、いちばん強い。'}else{s.mind-=1;text='いつもどおりにしようとしたが、まだ止まっていないので気になった。';meaning='まず対処してから、いつもどおりにすると良い。';grant(s,'findOut')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '廊下で、こそこそ声が聞こえる。';
  if(s.stage===1)return 'うわさが、どんどん広がっている気がする。';
  return 'うわさは、もう静まったようだ。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間。自分についてのうわさが、流れている。',speaker:'友達',quote:'ねえ、聞いた？あの人…',look:'こそこそ声が、あちこちからする。',self:'なんの話…？私のこと？',hint:'うわさが流れたときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'うわさが、広がっている。',speaker:'友達',quote:f.clearedRu?'あのうわさ、違うんだね':f.found?'間違いだったみたい':'……',look:f.clearedRu?'みんなは、もう別の話題だ。':'うわさは、まだ流れている。',self:s.reason==='whoDid'?'誰が言い始めた？':s.reason==='whatThey'?'恥ずかしい。':s.reason==='angry'?'腹が立つ。':'どう対処する？',hint:'聞く・流す・静かに言う・先生、方法はある。'};
  return {narrative:'翌日。うわさは、もう誰も話していない。',speaker:'先生',quote:f.clearedRu?'みんな、落ち着いたね':f.stoppedT?'うわさは、もういいね':'今日もがんばろう',look:'何事もなかったように、一日が始まる。',self:f.clearedRu?'うわさを乗り越えられた。':'まだ少し、気になっている。',hint:'うわさは、時間と対処で消える。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedRu?3:f.found||f.stoppedT?2:s.reason?1:0):s.goal===1?(f.laughedOff||f.kept?3:f.clearedRu?2:s.reason?1:0):(f.kept?3:f.clearedRu?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedRu?'うわさを乗り越えた。聞く・流す・静かに言う・先生がある。':f.found||f.stoppedT?'対処法が見つかった。':'うわさが残っている。対処法は練習できる。'}
},
lunch:{
 title:'苦手なものが給食に出た',nav:'苦手な給食',num:'26',attrs:['soc'],
 goals:['少しでも食べたい','無理せず向き合いたい','食べるのが楽しみになる日にしたい'],
 chapters:['給食の時間','食べる時間','午後'],locations:['教室・給食','机・食事','教室・午後'],
 base:['forceAll','hideFood','swapFood','anger','ignore'],start:{mind:5,energy:4},
 monsters:[{name:'苦手な一品',hp:3,power:0,turns:4,look:'皿にのった、苦手な食べもの。'},{name:'みんなの視線',hp:4,power:1,turns:5,look:'残すのを、見られる気がする。'},{name:'給食への苦手意識',hp:5,power:1,turns:5,look:'給食の時間が、憂うつになる感じ。'}],
 talk:[['teacherL','先生に言う','苦手なことを、先生に伝える。'],['friendL','友達に聞く','好きな子に、食べ方を聞く。']],
 think:[['shame','残すのが恥ずかしい','残すのを見られたくない。'],['texture','食感が苦手','口の中の感じが、無理。'],['fearTry','食べるのが怖い','一口すら、入れたくない。']],
 reasonKeys:['shame','texture','fearTry'],
 stageGrants:[['fullTry'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherL'){s.flags.toldL=true;note(s,'先生に言ったら、少なめにしてもらえた。');out.text='先生「少なめにしようか」\n量を減らしてもらえた。';out.card='tellAmount'}
  if(key==='friendL'){s.flags.askedL=true;relation(s,'好きな子に聞いたら、工夫を教えてもらった。');out.text='友達「混ぜると食べやすいよ」\n食べ方の工夫を、教えてもらった。';out.card='mixFood'}
  if(key==='shame'){s.reason='shame';note(s,'残すのが、恥ずかしい。');out.text='「残すのを、見られたくない」';out.card='tellAmount'}
  if(key==='texture'){s.reason='texture';note(s,'食感が、苦手だ。');out.text='「あの食感が、無理だ」';out.card='mixFood'}
  if(key==='fearTry'){s.reason='fearTry';note(s,'食べるのが、怖い。');out.text='「一口も、入れたくない」';out.card='littleBite'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='forceAll'){f.forced=true;s.mind-=1;text='我慢して全部食べた。\nでも、気持ち悪くなった。';meaning='無理すると、給食自体が嫌になる。';grant(s,'littleBite')}
  if(id==='hideFood'){f.hidF=true;s.rep-=1;relation(s,'隠したら、あとで見つかって先生に言われた。');text='隠したら、あとで見つかった。\n先生に「言ってくれればいいのに」と言われた。';meaning='隠すと、あとでバレる。';grant(s,'tellAmount')}
  if(id==='swapFood'){f.swapped=true;s.rep-=1;relation(s,'押しつけたら、相手が困った顔をした。');text='「食べてよ」\n相手「えー、僕も苦手だよ」';meaning='押しつけると、相手が困る。';grant(s,'tellAmount')}
  if(id==='littleBite'){f.bit=true;f.clearedL=true;note(s,'一口だけ食べてみたら、思ったより大丈夫だった。');text='一口だけ、食べてみた。\n「…思ったより、いける」';meaning='一口だけなら、挑戦できる。'}
  if(id==='tellAmount'){f.toldAmount=true;f.clearedL=true;relation(s,'「少なめで」と言ったら、量を変えてもらえた。');text='「少なめでお願いします」\n量を減らしてもらえた。';meaning='量を変えるのも、方法の一つ。'}
  if(id==='askWhyFood'){f.askedW=true;f.clearedL=true;note(s,'苦手の理由を考えたら、工夫の仕方が見えた。');text='「匂いなのか、食感なのか」\n理由が分かれば、工夫できる。';meaning='理由が分かると、工夫できる。'}
  if(id==='askCook'){f.askedC=true;f.clearedL=true;note(s,'給食の先生に言ったら、対策を考えてもらえた。');text='給食の先生「明日は工夫するね」\n作る人に言うと、変わる。';meaning='作る人に言うと、量を調整してもらえる。'}
  if(id==='mixFood'){f.mixed=true;f.clearedL=true;note(s,'好きなものと混ぜたら、食べられた。');text='好きなものと混ぜたら、\n食べられた。';meaning='混ぜると、食べやすくなる。'}
  if(id==='fullTry'){if(f.bit||f.toldAmount||f.mixed){f.fullTried=true;f.clearedL=true;note(s,'量を調整して完食できた。自信がついた。');text='少なめで完食した。\n「食べられた！」\n自信が、ついた。';meaning='完食できた経験は、次の自信になる。'}else{s.mind-=1;text='完食しようとしたが、まだ一口も試していないので無理だった。';meaning='まず一口試してから、完食に挑むと良い。';grant(s,'littleBite')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '今日の給食に、苦手なものが入っている。';
  if(s.stage===1)return 'みんなは、食べている。';
  return '午後の授業が、始まる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'給食の時間。今日の献立に、苦手なものがある。',speaker:'給食当番',quote:'今日は〇〇だよ',look:'皿に、苦手なものがのっている。',self:'うわ… これ、苦手なやつだ',hint:'苦手なものが出たときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'食べる時間。みんなは、食べている。',speaker:'友達',quote:f.clearedL?'少なめでよかったね':f.mixed?'混ぜたら食べやすいよ':'……',look:f.clearedL?'量が減って、食べられそうだ。':'皿の中に、まだ残っている。',self:s.reason==='shame'?'残すのが恥ずかしい。':s.reason==='texture'?'食感が無理。':s.reason==='fearTry'?'一口も入れたくない。':'どう向き合う？',hint:'一口・少なめ・混ぜる・先生、方法はある。'};
  return {narrative:'午後。給食は、終わった。',speaker:'先生',quote:f.clearedL?'一口でも食べられて、えらかったね':f.fullTried?'完食できたね':'明日も、がんばろう',look:'午後は、普通に進んでいる。',self:f.clearedL?'少しずつ、向き合えた。':'まだ少し、気になっている。',hint:'食べ方は、工夫できる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedL?3:f.bit||f.mixed?2:s.reason?1:0):s.goal===1?(f.toldAmount||f.askedC?3:f.clearedL?2:s.reason?1:0):(f.fullTried?3:f.clearedL?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedL?'向き合えた。一口・少なめ・混ぜる・相談がある。':f.bit||f.mixed?'工夫が見つかった。':'まだ残っている。向き合い方は練習できる。'}
},
lie:{
 title:'友達に嘘をついてしまった',nav:'嘘をついた',num:'27',attrs:['soc'],
 goals:['正直に言いたい','関係を戻したい','もう嘘をつかない自分になりたい'],
 chapters:['放課後','翌日','翌日・放課後'],locations:['教室・放課後','教室・朝','教室・放課後'],
 base:['biggerLie','blameOther','shutMouth','anger','ignore'],start:{mind:5,energy:4},
 monsters:[{name:'小さな嘘',hp:3,power:0,turns:4,look:'最初は、小さな嘘だった。'},{name:'大きくなる嘘',hp:4,power:1,turns:5,look:'嘘が、重なって大きくなる。'},{name:'胸のもやもや',hp:5,power:1,turns:5,look:'正直になれない、もやもやが残る。'}],
 talk:[['lieKid','友達に聞く','嘘をついた相手の様子を見る。'],['teacherLie','先生に相談','正直に言えないことを相談する。']],
 think:[['scaredTell','正直に言うのが怖い','認めたら、嫌われそう。'],['whyFirst','どうして嘘をついた？','そもそも、なぜ嘘をついたのか。'],['whatNow','このままが楽？','正直に言うか、黙るか。']],
 reasonKeys:['scaredTell','whyFirst','whatNow'],
 stageGrants:[['fixTruth'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='lieKid'){s.flags.sawL=true;relation(s,'相手は、何も知らない様子だった。');out.text='友達は、何も知らない様子。\n余計に、言いにくくなった。';out.card='writeSorry'}
  if(key==='teacherLie'){s.flags.toldLi=true;note(s,'先生「正直に言えたら、えらい」');out.text='先生「言えたら、えらいよ」\n先生は、正直さを見てくれる。';out.card='promiseTrue'}
  if(key==='scaredTell'){s.reason='scaredTell';note(s,'正直に言うのが、怖い。');out.text='「認めたら、嫌われそう」';out.card='writeSorry'}
  if(key==='whyFirst'){s.reason='whyFirst';note(s,'恥ずかしくて、つい嘘をついた。');out.text='「恥ずかしかったから、つい」\n理由が分かった。';out.card='whyLie'}
  if(key==='whatNow'){s.reason='whatNow';note(s,'黙るか、正直に言うか。');out.text='「このままにするか、言うか」\n決めるのは自分。';out.card='admitLie'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='biggerLie'){f.moreLie=true;s.rep-=1;relation(s,'嘘を重ねたら、ますますバレそうになった。');text='嘘をもう一つ重ねた。\nでも、つじつまが合わなくなってきた。';meaning='嘘を重ねると、あとで苦しくなる。';grant(s,'admitLie')}
  if(id==='blameOther'){f.blamedO=true;s.rep-=1;relation(s,'別の子のせいにしたら、その子が泣きそうになった。');text='「あの子が言ったんだ」\n別の子のせいにしたら、泣きそうになった。';meaning='人のせいにすると、信頼を失う。';grant(s,'admitLie')}
  if(id==='shutMouth'){f.shutM=true;s.mind-=1;text='黙っていた。\nでも、胸のもやもやが残った。';meaning='黙ると、心に残る。';grant(s,'writeSorry')}
  if(id==='admitLie'){f.admitted=true;f.clearedLie=true;note(s,'「ごめん、嘘ついた」と言えた。');text='「ごめん、さっき嘘ついた」\n相手は驚いたが、「教えてくれてありがとう」と言った。';meaning='認めるのは怖いが、信頼が戻る。'}
  if(id==='whyLie'){f.askedWhy=true;f.clearedLie=true;note(s,'嘘の理由を考えたら、次は正直に言える気がした。');text='「恥ずかしかったんだ」\n理由が分かると、次は言える。';meaning='理由が分かると、次は言える。'}
  if(id==='fixTruth'){if(f.admitted||f.askedWhy||f.toldLi){f.truthed=true;f.clearedLie=true;note(s,'本当のことを言い直した。');text='「本当は、こうなんだ」\n正直に言い直せた。';meaning='言い直せば、まだ間に合う。'}else{s.mind-=1;text='言い直そうとしたが、まだ認めていないので難しかった。';meaning='まず嘘を認めてから、言い直すと良い。';grant(s,'admitLie')}}
  if(id==='writeSorry'){f.wrote=true;f.clearedLie=true;note(s,'手紙で謝ったら、伝わった。');text='メモで「ごめん」を書いた。\n相手から「いいよ」の返事が来た。';meaning='書くのも、謝り方の一つ。'}
  if(id==='promiseTrue'){if(f.admitted||f.wrote||f.truthed){f.promisedT=true;f.clearedLie=true;note(s,'「もう嘘はつかない」と約束して、守る気持ちになった。');text='「もう、嘘はつかない」\n約束して、守るつもり。';meaning='約束して守ると、信頼が戻る。'}else{s.mind-=1;text='約束しようとしたが、まだ認めていないので形だけになった。';meaning='まず認めてから、約束すると良い。';grant(s,'admitLie')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'つい、嘘をついてしまった。';
  if(s.stage===1)return '嘘が、心に残っている。';
  return '放課後。まだ、胸がもやもやする。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'放課後。友達に、つい嘘をついてしまった。',speaker:'友達',quote:'そうなんだ',look:'相手は、信じている様子。',self:'あ… 嘘ついちゃった',hint:'嘘をついたときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'翌日。嘘が、心に残っている。',speaker:'友達',quote:'おはよう',look:'相手は、普通に話してくる。',self:s.reason==='scaredTell'?'言うのが怖い。':s.reason==='whyFirst'?'なぜ嘘をついたんだろう。':s.reason==='whatNow'?'このままにするか、言うか。':'どうする？',hint:'認める・書く・言い直す・先生、方法はある。'};
  return {narrative:'翌日の放課後。まだ、もやもやしている。',speaker:'先生',quote:f.clearedLie?'正直に言えて、えらかったね':'何かあった？',look:'放課後の教室が、静かだ。',self:f.clearedLie?'正直に言えた。':'まだ、少し残っている。',hint:'正直さは、取り戻せる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.clearedLie?3:f.admitted||f.wrote?2:s.reason?1:0):s.goal===1?(f.truthed||f.wrote?3:f.admitted?2:s.reason?1:0):(f.promisedT?3:f.clearedLie?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedLie?'正直になれた。認める・書く・言い直す・約束がある。':f.admitted||f.wrote?'認め方が見つかった。':'嘘が残っている。正直さは練習できる。'}
},
relay:{
 title:'リレー選手に選ばれた',nav:'リレー選手',num:'28',attrs:['ath','soc'],
 goals:['本番を走り切りたい','チームに貢献したい','走るのが楽しみになりたい'],
 chapters:['放課後の発表','練習日','運動会当日'],locations:['教室・発表','グラウンド・練習','グラウンド・本番'],
 base:['pushHard','dreadRun','skipPractice','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'プレッシャーの影',hp:3,power:0,turns:4,look:'選ばれた重みが、のしかかる。'},{name:'みんなの期待',hp:4,power:1,turns:5,look:'チームの期待が、目に見える。'},{name:'失敗への不安',hp:5,power:1,turns:5,look:'転んだら・遅かったら、どうしよう。'}],
 talk:[['captain','キャプテンに聞く','リレーのコツを、キャプテンに聞く。'],['teacherRe','先生に相談','不安なことを、先生に言う。']],
 think:[['fearFall','転んだらどうしよう','本番で転ぶことを、想像する。'],['slowSelf','足が遅い','自分の走りに、自信がない。'],['teamPress','みんなに迷惑','チームに迷惑をかけそう。']],
 reasonKeys:['fearFall','slowSelf','teamPress'],
 stageGrants:[['batonPass'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='captain'){s.flags.askedC=true;relation(s,'キャプテンにバトンのコツを聞いた。');out.text='キャプテン「バトンは腕を伸ばして」\nコツを教えてもらった。';out.card='batonPass'}
  if(key==='teacherRe'){s.flags.toldRe=true;note(s,'先生に不安を言ったら、練習計画を一緒に立ててもらえた。');out.text='先生「不安なのは普通だよ」\n練習計画を、一緒に考えてもらえた。';out.card='shortRun'}
  if(key==='fearFall'){s.reason='fearFall';note(s,'転んだら、どうしよう。');out.text='「本番で転んだら、どうしよう」';out.card='breathRun'}
  if(key==='slowSelf'){s.reason='slowSelf';note(s,'足が遅いのが、不安。');out.text='「自分は足が遅いから」\nでも、選ばれた理由がある。';out.card='shortRun'}
  if(key==='teamPress'){s.reason='teamPress';note(s,'みんなに迷惑をかけそう。');out.text='「チームに、迷惑をかけそう」';out.card='teamTalk'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='pushHard'){f.pushed=true;s.mind-=1;relation(s,'無理に走り込んで、足が痛くなった。');text='無理に走り込んだ。\n足が、痛くなった。';meaning='無理すると、怪我につながる。';grant(s,'shortRun')}
  if(id==='dreadRun'){f.dreaded=true;s.mind-=1;text='「転んだらどうしよう」\n走る前から、怖くなった。';meaning='怖いと思い込むと、体が動かない。';grant(s,'breathRun')}
  if(id==='skipPractice'){f.skipped=true;s.rep-=1;relation(s,'練習をサボったら、チームのみんなが困った。');text='練習を休んだ。\nチームのみんなが、困った様子。';meaning='サボると、ますます不安になる。';grant(s,'shortRun')}
  if(id==='askPace'){f.askedP=true;f.clearedRe=true;note(s,'ペース配分を聞いたら、走り方が見えた。');text='「最初はゆっくりでいいよ」\nペースが分かれば、走りやすい。';meaning='配分が分かると、走りやすい。'}
  if(id==='shortRun'){f.shorted=true;f.clearedRe=true;note(s,'短い距離から練習したら、走れる気がした。');text='短い距離から、始めた。\n「これなら、走れる」';meaning='短い距離なら、始められる。'}
  if(id==='teamTalk'){f.talked=true;f.clearedRe=true;relation(s,'不安を話したら、チームが応援してくれた。');text='「実は、不安なんだ」\n「大丈夫、みんなで走るよ」';meaning='話すと、みんなが応援してくれる。'}
  if(id==='breathRun'){f.breathed=true;f.clearedRe=true;note(s,'深呼吸したら、少し落ち着いた。');text='深呼吸をした。\n少し、落ち着いた。';meaning='深呼吸すると、落ち着ける。'}
  if(id==='batonPass'){if(f.shorted||f.askedP||f.talked){f.batonOk=true;f.clearedRe=true;note(s,'バトン練習がうまくいった。流れが見えた。');text='バトンの受け渡しが、うまくいった。\n「これなら、本番もいける」';meaning='バトンが決まれば、流れが変わる。'}else{s.mind-=1;text='バトン練習をしようとしたが、まだ走りの練習をしていないので難しかった。';meaning='まず走りの練習をしてから、バトンを練習すると良い。';grant(s,'shortRun')}}
  if(id==='relayRun'){if(f.batonOk||f.clearedRe){f.ranIt=true;note(s,'本番を走り切れた。自信がついた。');text='本番を、走り切った。\n「やった！走り切れた」';meaning='走り切った経験は、自信になる。'}else{s.mind-=1;text='走り切ろうとしたが、準備が足りなかった。';meaning='まず練習と準備をしてから、本番に臨むと良い。';grant(s,'shortRun')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'リレー選手に、選ばれた。';
  if(s.stage===1)return '練習の日が、続いている。';
  return '運動会が、始まる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'放課後。リレーの選手発表があった。',speaker:'先生',quote:'リレーの選手は、この人たちです',look:'自分の名前が、読まれた。',self:'え、自分が…？ 走れるかな',hint:'選ばれたときの、不安はどこ？'};
  if(s.stage===1)return {narrative:'練習日。みんなが、走っている。',speaker:'キャプテン',quote:f.clearedRe?'いい調子だね':'まずは、走ってみよう',look:'グラウンドに、並んでいる。',self:s.reason==='fearFall'?'転んだらどうしよう。':s.reason==='slowSelf'?'足が遅いのが不安。':s.reason==='teamPress'?'迷惑をかけそう。':'準備を進めよう。',hint:'短く・話す・深呼吸・コツを聞く、方法はある。'};
  return {narrative:'運動会当日。リレーが、始まる。',speaker:'先生',quote:f.clearedRe?'落ち着いて、いこう':'まもなく、リレーです',look:'スタート地点に、立っている。',self:f.clearedRe?'練習した分、走れそう。':'まだ、少し不安。',hint:'練習の分だけ、自信になる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.ranIt?3:f.clearedRe?2:s.reason?1:0):s.goal===1?(f.talked||f.batonOk?3:f.clearedRe?2:s.reason?1:0):(f.ranIt?3:f.clearedRe?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedRe?'準備ができた。短く・話す・深呼吸・コツがある。':f.shorted||f.breathed?'練習方法が見つかった。':'不安が残っている。準備は練習できる。'}
},
sickDay:{
 title:'休んで授業に遅れた',nav:'授業の遅れ',num:'29',attrs:['study','soc'],
 goals:['授業に追いつきたい','分からないところを減らしたい','休んでも大丈夫な自分になりたい'],
 chapters:['登校日','休み時間','放課後'],locations:['教室・朝','教室・休み','教室・放課後'],
 base:['panicLate','hideLate','copyOnly','anger','ignore'],start:{mind:5,energy:4},
 monsters:[{name:'たまった連絡',hp:3,power:0,turns:4,look:'休んだ分の連絡が、たまっている。'},{name:'授業の遅れ',hp:4,power:1,turns:5,look:'みんなは、もう先に進んでいる。'},{name:'追いつけない不安',hp:5,power:1,turns:5,look:'追いつけない気がして、焦る。'}],
 talk:[['friendSick','友達に聞く','休んだ日のことを、友達に聞く。'],['teacherSick','先生に相談','遅れていることを、先生に言う。']],
 think:[['dontKnow','どこから分からない？','どこが分からないか、分からない。'],['shyAskS','聞くのが恥ずかしい','遅れたのを、知られたくない。'],['tooMuch','量が多すぎる','たまった分が、多すぎる。']],
 reasonKeys:['dontKnow','shyAskS','tooMuch'],
 stageGrants:[['catchPlan'],[]],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='friendSick'){s.flags.askedF=true;relation(s,'友達に聞いたら、ノートを貸してもらえた。');out.text='友達「ノート、貸すよ」\n休んだ日のことが、分かった。';out.card='noteKey'}
  if(key==='teacherSick'){s.flags.toldS=true;note(s,'先生に言ったら、補習の時間をもらえた。');out.text='先生「分からないところだけ、聞こう」\n補習の時間を、もらえた。';out.card='askTeacherS'}
  if(key==='dontKnow'){s.reason='dontKnow';note(s,'どこから分からないか、分からない。');out.text='「どこが分からないか、分からない」\nまず、聞くところから。';out.card='askMissed'}
  if(key==='shyAskS'){s.reason='shyAskS';note(s,'遅れたのを、知られたくない。');out.text='「聞くのが、恥ずかしい」\nでも、聞かないと分からない。';out.card='noteKey'}
  if(key==='tooMuch'){s.reason='tooMuch';note(s,'たまった分が、多すぎる。');out.text='「量が、多すぎる」\n少しずつなら、いける。';out.card='bitByBit'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='panicLate'){f.panicked=true;s.mind-=1;relation(s,'慌てて全部やったら、どれも中途半端になった。');text='慌てて全部やった。\nでも、どれも中途半端に。';meaning='慌てると、どれも中途半端になる。';grant(s,'bitByBit')}
  if(id==='hideLate'){f.hidL=true;s.rep-=1;relation(s,'遅れを隠したら、テストで困った。');text='分からないのを、隠した。\n次のテストで、困った。';meaning='隠すと、ますます分からなくなる。';grant(s,'askMissed')}
  if(id==='copyOnly'){f.copied=true;s.mind-=1;relation(s,'写すだけでは、分からないまま。');text='友達のノートを、写しただけ。\nでも、内容は分からないまま。';meaning='写すだけでは、分からないまま。';grant(s,'noteKey')}
  if(id==='askMissed'){f.askedM=true;f.clearedS=true;note(s,'休んだ日の内容を聞いたら、何をやるか分かった。');text='「休んだ日、何やった？」\n何をやるかが、分かった。';meaning='何があったか聞けば、追いつける。'}
  if(id==='askTeacherS'){f.askedT=true;f.clearedS=true;note(s,'分からないところを先生に聞いたら、すっきりした。');text='「ここが、分からないです」\n先生が、教えてくれた。';meaning='分からないところを絞ると、聞きやすい。'}
  if(id==='bitByBit'){f.bitBy=true;f.clearedS=true;note(s,'少しずつやったら、追いつけそうになった。');text='少しずつ、やった。\n「あと少しで、追いつく」';meaning='少しずつなら、続けられる。'}
  if(id==='noteKey'){f.notek=true;f.clearedS=true;relation(s,'要点を聞いたら、大事なところが分かった。');text='「大事なのは、ここだよ」\n要点が、分かった。';meaning='要点だけなら、聞きやすい。'}
  if(id==='catchPlan'){if(f.askedM||f.bitBy||f.notek||f.askedT){f.planned=true;f.clearedS=true;note(s,'追いつく計画を立てた。見通しが持てた。');text='「明日はこれ、明後日はこれ」\n計画を立てた。';meaning='計画があれば、迷わない。'}else{s.mind-=1;text='計画を立てようとしたが、何を追いつくかまだ分からない。';meaning='まず内容を聞いてから、計画を立てると良い。';grant(s,'askMissed')}}
  if(id==='caughtUp'){if(f.planned||f.clearedS){f.caught=true;note(s,'遅れを取り戻せた。自信がついた。');text='「追いついた！」\n授業に、ついていける。';meaning='追いついた経験は、自信になる。'}else{s.mind-=1;text='追いつこうとしたが、準備が足りなかった。';meaning='まず聞いて計画を立ててから、追いつくと良い。';grant(s,'askMissed')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '休んでいた分が、たまっている。';
  if(s.stage===1)return 'みんなは、もう先に進んでいる。';
  return '放課後。まだ、少し残っている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'登校日。休んだ分の連絡が、たまっている。',speaker:'先生',quote:'おはよう。休んでた分、これね',look:'机に、プリントがのっている。',self:'うわ… たくさんある',hint:'遅れたときの、つらさはどこ？'};
  if(s.stage===1)return {narrative:'休み時間。授業は、先に進んでいる。',speaker:'友達',quote:f.clearedS?'追いついた？':'ノート、見る？',look:'みんなは、もう先のページ。',self:s.reason==='dontKnow'?'どこから分からないか、分からない。':s.reason==='shyAskS'?'聞くのが恥ずかしい。':s.reason==='tooMuch'?'量が多すぎる。':'追いつき方を考えよう。',hint:'聞く・要点・少しずつ・計画、方法はある。'};
  return {narrative:'放課後。追いつき作業が、続いている。',speaker:'先生',quote:f.clearedS?'いい調子だね':'分からないところ、ある？',look:'放課後の教室が、静かだ。',self:f.clearedS?'少しずつ、追いつけた。':'まだ、少し残っている。',hint:'追いつき方は、工夫できる。'};
 },
 progress(s){const f=s.flags;return s.goal===0?(f.caught?3:f.clearedS?2:s.reason?1:0):s.goal===1?(f.askedT||f.planned?3:f.clearedS?2:s.reason?1:0):(f.caught?3:f.clearedS?2:s.reason?1:0)},
 situation(s){const f=s.flags;return f.clearedS?'追いつき方が見つかった。聞く・要点・少しずつ・計画がある。':f.askedM||f.notek?'聞き方が見つかった。':'遅れが残っている。追いつき方は練習できる。'}
},

// STORY 30 ── 図工の作品が壊れた ──
craft:{
 title:'図工の作品が壊れた',nav:'図工の作品',num:'30',attrs:['study'],
 goals:['作品を完成させたい','うまくいかないときの自分を知りたい','失敗しても、やり直せる自分になりたい'],
 chapters:['図工の時間','放課後','次の図工'],locations:['図工室','家・帰り道','図工室'],
 base:['coverUp','throwAway','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'グシャグシャの影',hp:4,power:1,turns:4,look:'のりがはみ出して、形が崩れている。'},{name:'モヤモヤの影',hp:4,power:1,turns:4,look:'直せる気がしない。考えが、まとまらない。'},{name:'コワバリの影',hp:6,power:2,turns:5,look:'出すのがこわい。手が、固まっている。'}],
 talk:[['teacherArt','先生に相談','どう直すか、先生に聞く。'],['friendArt','友達に見てもらう','壊れた作品を、友達に見せる。'],['skillKid','図工が得意な子に聞く','上手な子の、作り方を聞く。']],
 think:[['perfect','完璧じゃなきゃ嫌','直しても、元どおりにならない。'],['noTime','直す時間がない','次の図工まで、時間がない。'],['gaveUp','もう作りたくない','壊れて、作る気がなくなった。']],
 reasonKeys:['perfect','noTime','gaveUp'],
 stageGrants:[['mendBit'],['finishWork']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='teacherArt'){s.flags.consulted=true;relation(s,'先生に相談したら、直し方のヒントをもらえた。');out.text='先生「壊れたところをいかす形も、あるよ」\n直し方のヒントを、もらえた。';out.card='consultArt'}
  if(key==='friendArt'){s.flags.shown=true;relation(s,'友達に見せたら、「ここ、いいね」と言ってくれた。');out.text='友達「ここ、すごくいいね！」\n見てもらうと、少し気持ちが軽くなった。';out.card='showArt'}
  if(key==='skillKid'){s.flags.askedK=true;note(s,'上手な子の作り方を聞いたら、真似できそうなところが分かった。');out.text='上手な子「ここは、こうやるといいよ」\n真似できそうなところが、分かった。';out.card='copyGood'}
  if(key==='perfect'){s.reason='perfect';note(s,'元どおりじゃなくてもいい、と気づいた。');out.text='「完璧じゃなきゃ嫌」\nでも、元どおりじゃなくてもいい。';out.card='mendBit'}
  if(key==='noTime'){s.reason='noTime';note(s,'全部やり直す時間はないが、一部分なら直せる。');out.text='「直す時間がない」\n一部分だけなら、直せる。';out.card='partRedo'}
  if(key==='gaveUp'){s.reason='gaveUp';note(s,'好きなところは、残っている。');out.text='「もう作りたくない」\nでも、好きなところは残っている。';out.card='likePart'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='coverUp'){f.covered=true;s.rep-=1;relation(s,'ごまかして出したら、先生に「もう少し直そう」と言われた。');text='ごまかして、出した。\n先生「ここ、もう少し直そうか」';meaning='ごまかすと、あとがつらい。';grant(s,'mendBit')}
  if(id==='throwAway'){f.threw=true;s.mind-=1;relation(s,'捨てたら、少し楽になった。でも、作品はなくなった。');text='壊れた作品を、捨てた。\n少し楽になった。でも、作品はない。';meaning='捨てると楽になるが、作品はなくなる。';grant(s,'partRedo')}
  if(id==='mendBit'){f.fixed=true;note(s,'壊れたところだけ直したら、形になってきた。');text='壊れたところだけ、直した。\n少しずつ、形になってきた。';meaning='小さな直しから、形になる。'}
  if(id==='partRedo'){f.fixed=true;note(s,'一部分だけ作り直したら、間に合いそうになった。');text='一部分だけ、作り直した。\n「これなら、間に合う」';meaning='全部やり直さなくていい。'}
  if(id==='likePart'){f.fixed=true;note(s,'好きなところを見直したら、直し方が見えてきた。');text='好きなところを、見直した。\n「ここは、いい感じ」';meaning='好きなところが、直すヒントになる。'}
  if(id==='consultArt'){f.consulted=true;f.fixed=true;relation(s,'先生と直し方を考えたら、見通しが立った。');text='「こう直すと、いいかも」\n先生と一緒に、考えた。';meaning='一人で抱えなくていい。'}
  if(id==='showArt'){f.shown=true;relation(s,'友達に見せたら、「いいね」と言ってくれた。');text='「ここ、いいね！」\n友達に見せたら、ほめてくれた。';meaning='見てもらうと、気持ちが軽くなる。'}
  if(id==='copyGood'){f.copiedG=true;f.fixed=true;note(s,'上手な子の真似をしたら、直せた。');text='上手な子の、真似をした。\n「これで、直せた」';meaning='真似は、上手になる近道。'}
  if(id==='fixIdea'){if(f.fixed||f.consulted||f.copiedG){f.reformed=true;note(s,'壊れた形をいかして、新しい作品に直せた。');text='壊れた形をいかして、新しい作品に。\n「前より、いいかも！」';meaning='失敗も、材料になる。'}else{s.mind-=1;text='新しい形にしようとしたが、直し方が分からなかった。';meaning='まず直せるところから、直すと良い。';grant(s,'mendBit')}}
  if(id==='forceSubmit'){if(f.fixed||f.consulted){f.submitted=true;text='そのまま出した。\n先生「がんばったね」';meaning='出せた。直せた分だけ、すっきりする。'}else{s.mind-=1;text='そのまま出そうとしたが、手が止まった。';meaning='まず直し方を見つけてから、出すと良い。';grant(s,'mendBit')}}
  if(id==='finishWork'){if(f.fixed||f.consulted||f.shown){f.done=true;note(s,'直した作品を、自信を持って出せた。');text='直した作品を、出した。\n「できた！」';meaning='やり直した分だけ、自信になる。'}else{s.mind-=1;text='仕上げようとしたが、まだ直せていなかった。';meaning='まず直し方を見つけてから、仕上げると良い。';grant(s,'consultArt')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '作品が、壊れてしまった。';
  if(s.stage===1)return '持ち帰っても、考えがまとまらない。';
  return '次の図工の時間。出すのが、こわい。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'図工の時間。のり付けに失敗して、作品が壊れた。',speaker:'友達',quote:'あー、ぐしゃっとしちゃった',look:'紙コップ人形が、つぶれている。',self:'せっかく作ったのに…',hint:'うまくいかないとき、何がつらい？'};
  if(s.stage===1)return {narrative:'放課後。壊れた作品を、家に持ち帰った。',speaker:'家族',quote:'それ、どうしたの？',look:'机の上に、壊れた作品がある。',self:s.reason==='perfect'?'元どおりにしたいのに。':s.reason==='noTime'?'直す時間がない。':s.reason==='gaveUp'?'もう、作りたくない。':'どうしよう…',hint:'直し方は、いろいろある。'};
  return {narrative:'次の図工の時間。みんなが、作品を出している。',speaker:'先生',quote:f.done?'よく直せたね':'どうする？',look:'みんなの作品が、並んでいる。',self:f.fixed?'少しずつ、直せた。':'まだ、直せていない。',hint:'直せた形で、出そう。'};
 },
 progress(s){const f=s.flags;return f.done||f.reformed?3:f.fixed||f.consulted?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.done?'直して出せた。失敗も材料になった。':f.fixed||f.consulted?'直し方が見つかった。直せるところ・一部分・相談・真似がある。':'作品が壊れたまま。直し方は見つけられる。'}
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
// 同じ場面で続けてもう1枚出す。フィードバックを閉じるだけで場面・ターンは継続する
export function continueTurn(s){if(!s.feedback)return false;s.feedback=null;return true}
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
