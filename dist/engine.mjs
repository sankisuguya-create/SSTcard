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
 dragFeet:{title:'だらだら練習する',kind:'think',label:'だらだら',cost:0,atk:1,attr:'ath',desc:'やる気なく、流れに任せる。',hint:'流れだけでは、気持ちは晴れない',icon:'clock'},
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
 skipTurn:{title:'順番をやり過ごす',kind:'think',label:'やり過ごす',cost:0,strain:1,atk:0,desc:'自分の番を、やり過ごす。',hint:'やり過ごすと、跳べないまま',icon:'clock'},
 crash:{title:'勢いだけで跳ぶ',kind:'think',label:'勢いだけ',cost:0,strain:1,atk:1,attr:'ath',desc:'考えず、勢いだけで跳ぶ。',hint:'勢いだけでは、跳べない',icon:'bolt'},
 askCoach:{title:'先生にコツを聞く',kind:'talk',label:'コツを聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'跳び方のコツを、先生に聞く。',hint:'コツが分かれば、跳べる',icon:'people'},
 copyMove:{title:'踏み切りを真似する',kind:'think',label:'踏み切り',cost:1,atk:2,attr:'ath',up:'ath',desc:'跳べる子の、踏み切りを真似る。',hint:'踏み切りが決まれば、跳べる',icon:'eye'},
 splitJump:{title:'低い跳び箱から練習する',kind:'think',label:'低く練習',cost:1,atk:2,attr:'ath',up:'ath',desc:'まず低い段から、練習する。',hint:'低いところから、自信がつく',icon:'runner'},
 handsFirst:{title:'手のつき方を練習する',kind:'think',label:'手つき練習',cost:1,atk:2,attr:'ath',up:'ath',desc:'手のつき方だけ、練習する。',hint:'手がつければ、怖くない',icon:'hand'},
 together:{title:'友達と一緒に練習する',kind:'talk',label:'一緒に練習',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'友達と、一緒に練習する。',hint:'一人より、一緒が楽しい',icon:'people'},
 bigTry:{title:'思いっきり跳ぶ',kind:'support',label:'思いっきり',cost:2,atk:3,attr:'ath',up:'ath',desc:'練習の成果で、思いっきり跳ぶ。',hint:'準備があれば、思いっきりいける',icon:'bolt'},
 clearJump:{title:'跳び越せた！',kind:'support',label:'跳び越えた',cost:2,atk:3,attr:'ath',up:'ath',desc:'跳び箱を、跳び越えた。',hint:'跳べた経験は、自信になる',icon:'flag'},
 withdraw:{title:'黙って引き下がる',kind:'think',label:'引き下がる',cost:0,strain:1,atk:0,desc:'反対されて、黙って引き下がる。',hint:'楽になるが、提案は通らない',icon:'clock'},
 insist:{title:'そのまま言い張る',kind:'think',label:'言い張る',cost:0,strain:1,atk:1,attr:'soc',desc:'理由を聞かず、同じ提案を言い張る。',hint:'言い張るだけでは、通らない',icon:'bolt'},
 listenMore:{title:'反対の理由を聞く',kind:'talk',label:'理由を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'反対した子に、理由を聞く。',hint:'反対の理由が、直しのヒント',icon:'ear'},
 hearAll:{title:'みんなの意見を聞く',kind:'talk',label:'意見を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'賛成・反対、みんなの意見を聞く。',hint:'聞くほど、案が固まる',icon:'people'},
 soften:{title:'やわらかい言い方で言う',kind:'think',label:'言い方を変える',cost:1,atk:2,attr:'soc',up:'soc',desc:'「こうしたい」ではなく「こう思う」と言う。',hint:'言い方で、伝わり方が変わる',icon:'message'},
 askReason:{title:'反対した子に聞く',kind:'talk',label:'反対に聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'反対した子に、直接聞く。',hint:'理由を聞けば、次が見える',icon:'search'},
 nextPlan:{title:'別案を考える',kind:'think',label:'別案',cost:1,atk:2,attr:'study',up:'study',desc:'みんなの意見をいれて、別案を考える。',hint:'別案は、両方のいいとこ取り',icon:'puzzle'},
 allyUp:{title:'仲間と練る',kind:'talk',label:'仲間と練る',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'賛成してくれた子と、案を練る。',hint:'仲間と練ると、強くなる',icon:'hand'},
 rePropose:{title:'直した案を提案する',kind:'support',label:'再提案',cost:2,atk:3,attr:'soc',up:'soc',desc:'みんなの意見をいれた案を、提案する。',hint:'聞いた分だけ、通りやすい',icon:'flag'},
 acceptNo:{title:'多数決を受け入れる',kind:'support',label:'受け入れる',cost:1,atk:2,attr:'soc',up:'soc',desc:'通らなくても、次につなげる。',hint:'受け入れるのも、作戦',icon:'check'},
 scoldKid:{title:'きつく叱る',kind:'think',label:'叱る',cost:0,strain:1,atk:1,attr:'soc',desc:'言うことを聞かない子を、きつく叱る。',hint:'叱るだけでは、ついてこない',icon:'bolt'},
 ignoreKid:{title:'一人で全部やる',kind:'think',label:'一人でやる',cost:0,strain:1,atk:0,desc:'頼らず、一人で全部やる。',hint:'一人では、班にならない',icon:'clock'},
 askWhyKid:{title:'言うことを聞かない理由を聞く',kind:'talk',label:'理由を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'なぜ聞かないか、本人に聞く。',hint:'理由が分かれば、やり方が変わる',icon:'ear'},
 watchKid:{title:'年下の子をよく見る',kind:'think',label:'よく見る',cost:1,atk:2,attr:'study',up:'study',desc:'何が好き・何が苦手か、見る。',hint:'見るほど、伝え方が分かる',icon:'eye'},
 doTogether:{title:'一緒にやる',kind:'talk',label:'一緒にやる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「手伝うよ」と、一緒にやる。',hint:'一緒なら、やる気が出る',icon:'hand'},
 letKid:{title:'好きなところを任せる',kind:'talk',label:'任せる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'得意なところを、任せる。',hint:'任せると、やってくれる',icon:'spark'},
 kidCalm:{title:'小さくお願いする',kind:'talk',label:'小さく頼む',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「ちょっとだけ、手伝って」と頼む。',hint:'小さい頼みなら、応じやすい',icon:'message'},
 cheerKid:{title:'ほめる・ありがとうを言う',kind:'talk',label:'ほめる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'やってくれたら、ほめる。',hint:'ほめると、またやる',icon:'heart'},
 tryLead:{title:'もう一度、班をまとめる',kind:'support',label:'まとめる',cost:2,atk:3,attr:'soc',up:'soc',desc:'見つけたやり方で、班をまとめる。',hint:'伝え方が変われば、班が動く',icon:'flag'},
 leadWay:{title:'班がひとつにまとまった',kind:'support',label:'まとまった',cost:2,atk:3,attr:'soc',up:'soc',desc:'みんなで、やりきった。',hint:'まとまった経験は、自信になる',icon:'check'},
 rush:{title:'あわてて走る',kind:'think',label:'あわてる',cost:0,strain:1,atk:1,attr:'ath',desc:'あわてて、学校へ走る。',hint:'あわてると、転ぶかも',icon:'runner'},
 makeExcuse:{title:'言い訳を考える',kind:'think',label:'言い訳',cost:0,strain:1,atk:0,desc:'遅れた理由の、言い訳を考える。',hint:'言い訳は、ばれるかも',icon:'eye'},
 admitLate:{title:'遅れたと正直に言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「寝坊しました」と、正直に言う。',hint:'正直に言うと、すっきりする',icon:'check'},
 callAhead:{title:'先生に連絡する',kind:'talk',label:'連絡する',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'遅れることを、先に言う。',hint:'先に言うと、安心してもらえる',icon:'message'},
 calmWalk:{title:'落ち着いて歩く',kind:'think',label:'落ち着いて',cost:1,atk:2,attr:'study',up:'study',desc:'あわてず、落ち着いて歩く。',hint:'落ち着くと、ミスが減る',icon:'clock'},
 earlyNight:{title:'前の日から準備する',kind:'think',label:'前日準備',cost:1,atk:2,attr:'study',up:'study',desc:'夜、持ち物と服を準備する。',hint:'前日準備で、朝が楽になる',icon:'list'},
 wakeTrick:{title:'起きる工夫をする',kind:'think',label:'起きる工夫',cost:1,atk:2,attr:'study',up:'study',desc:'目覚まし・日差し・声かけ、工夫する。',hint:'工夫すれば、起きられる',icon:'sun'},
 habitAsk:{title:'習慣を先生に相談する',kind:'talk',label:'習慣相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'遅刻ぐせを、先生に相談する。',hint:'習慣のことも、相談できる',icon:'people'},
 arriveCalm:{title:'落ち着いて登校する',kind:'support',label:'落ち着いて',cost:2,atk:3,attr:'study',up:'study',desc:'準備した朝で、落ち着いて登校する。',hint:'準備の分だけ、落ち着ける',icon:'flag'},
 newHabit:{title:'遅刻しない習慣を作る',kind:'support',label:'習慣を作る',cost:2,atk:3,attr:'study',up:'study',desc:'早寝・準備・工夫で、習慣を作る。',hint:'習慣は、明日の味方',icon:'check'},
 hideBook:{title:'なくしたと言わない',kind:'think',label:'言わない',cost:0,strain:1,atk:0,desc:'なくしたことを、言わない。',hint:'黙っていると、気になる',icon:'eye'},
 fakeReturn:{title:'返したことにする',kind:'think',label:'返したふり',cost:0,strain:1,atk:1,attr:'soc',desc:'返したことにして、ごまかす。',hint:'ごまかすと、あとがつらい',icon:'door'},
 tellLost:{title:'なくしたと正直に言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「なくしました」と、正直に言う。',hint:'正直に言うと、済ませ方が決まる',icon:'check'},
 searchBack:{title:'なくした場所を探す',kind:'think',label:'探す',cost:1,atk:2,attr:'study',up:'study',desc:'どこでなくしたか、思い出して探す。',hint:'思い出すと、見つかる',icon:'search'},
 replaceBook:{title:'お小遣いで弁償する',kind:'think',label:'弁償する',cost:1,atk:2,attr:'study',up:'study',desc:'同じ本を、買って返す。',hint:'責任は、お金でもとれる',icon:'list'},
 askLibrarian:{title:'図書の先生に相談する',kind:'talk',label:'図書先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'図書の先生に、なくしたと言う。',hint:'相談すると、やり方が決まる',icon:'people'},
 checkBag:{title:'もう一度カバンを見る',kind:'think',label:'カバンを見る',cost:1,atk:2,attr:'study',up:'study',desc:'カバンの奥を、もう一度見る。',hint:'意外と、あるもの',icon:'search'},
 askFriends:{title:'貸したか聞く',kind:'talk',label:'貸したか聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「貸してない？」と、友達に聞く。',hint:'聞けば、見つかるかも',icon:'message'},
 retraceSteps:{title:'通った道を探す',kind:'think',label:'道を探す',cost:1,atk:2,attr:'study',up:'study',desc:'今日通ったところを、探す。',hint:'戻って探すと、見つかる',icon:'runner'},
 foundIt:{title:'見つかった！',kind:'support',label:'見つかった',cost:2,atk:3,attr:'study',up:'study',desc:'探したら、見つかった。',hint:'見つけた経験は、自信になる',icon:'flag'},
 ownUp:{title:'ちゃんと詫びて済ませる',kind:'support',label:'詫びる',cost:2,atk:3,attr:'soc',up:'soc',desc:'「ごめんなさい」と、きちんと言う。',hint:'詫びた分だけ、前に進める',icon:'check'},
 sulkSeat:{title:'文句を言う',kind:'think',label:'文句',cost:0,strain:1,atk:1,attr:'soc',desc:'「こんな席、いやだ」と文句を言う。',hint:'文句だけでは、変わらない',icon:'bolt'},
 ignoreNew:{title:'新しい隣と話さない',kind:'think',label:'話さない',cost:0,strain:1,atk:0,desc:'新しい隣の子と、話さない。',hint:'話さないと、距離のまま',icon:'eye'},
 meetBreak:{title:'休み時間に会う約束',kind:'talk',label:'会う約束',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'仲良しと、休み時間に会う約束をする。',hint:'離れても、つながれる',icon:'hand'},
 newFriend:{title:'新しい隣の子と話す',kind:'talk',label:'新しく話す',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'新しい隣の子に、話してみる。',hint:'話すと、新しい友達になる',icon:'message'},
 okSeat:{title:'この席のいいところを探す',kind:'think',label:'いいとこ探し',cost:1,atk:2,attr:'study',up:'study',desc:'この席の、いいところを探す。',hint:'見方を変えると、気持ちが変わる',icon:'search'},
 oldCall:{title:'仲良しに気持ちを伝える',kind:'talk',label:'気持ちを伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「離れてさびしい」と、伝える。',hint:'伝えると、さびしさが軽くなる',icon:'heart'},
 seatPlan:{title:'離れても仲良しでいる作戦',kind:'think',label:'離れても作戦',cost:1,atk:2,attr:'study',up:'study',desc:'帰り・休み・遊びの約束を立てる。',hint:'約束があれば、離れても大丈夫',icon:'list'},
 smileSeat:{title:'新しい席を楽しむ',kind:'support',label:'楽しむ',cost:2,atk:3,attr:'soc',up:'soc',desc:'新しい席での、毎日を楽しむ。',hint:'楽しめれば、新しい毎日になる',icon:'sun'},
 keepBond:{title:'仲良しのままでいる',kind:'support',label:'仲良しのまま',cost:2,atk:3,attr:'soc',up:'soc',desc:'離れても、仲良しは続く。',hint:'離れても続く、友達関係',icon:'check'},
 overTry:{title:'いつもと違う自分を見せる',kind:'think',label:'頑張りすぎる',cost:0,strain:1,atk:1,attr:'soc',desc:'親の前で、頑張りすぎる。',hint:'頑張りすぎると、しんどい',icon:'bolt'},
 hideBack:{title:'後ろに隠れる',kind:'think',label:'隠れる',cost:0,strain:1,atk:0,desc:'見られないように、うつむく。',hint:'隠れても、緊張は消えない',icon:'eye'},
 beMyself:{title:'いつもの自分でいる',kind:'think',label:'いつもの自分',cost:1,atk:2,attr:'study',up:'study',desc:'親が来ても、いつもどおりでいる。',hint:'いつもどおりが、いちばん楽',icon:'sun'},
 practiceHand:{title:'前の日に手を挙げる練習',kind:'think',label:'練習する',cost:1,atk:2,attr:'study',up:'study',desc:'参観日前に、発表の練習をする。',hint:'練習すれば、本番もできる',icon:'list'},
 tellParent:{title:'「見られると緊張する」と言う',kind:'talk',label:'緊張と伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'親に、緊張していると正直に言う。',hint:'言うと、楽になる',icon:'heart'},
 askOnce:{title:'一度だけ手を挙げる',kind:'think',label:'一度だけ挙げる',cost:1,atk:2,attr:'study',up:'study',desc:'分かる問題で、一度だけ挙げる。',hint:'一度なら、できそう',icon:'hand'},
 safeAnswer:{title:'分かる問題を選ぶ',kind:'think',label:'分かる問題',cost:1,atk:2,attr:'study',up:'study',desc:'自信のある問題だけ、挙げる。',hint:'分かる問題なら、間違えない',icon:'search'},
 handRaised:{title:'手を挙げられた',kind:'support',label:'挙げられた',cost:2,atk:3,attr:'study',up:'study',desc:'親の前でも、手を挙げられた。',hint:'挙げた経験は、自信になる',icon:'flag'},
 honestDay:{title:'いつもどおりできた',kind:'support',label:'いつもどおり',cost:2,atk:3,attr:'soc',up:'soc',desc:'見られても、いつもどおりできた。',hint:'いつもの自分で、乗り越えた',icon:'check'},
 waitSorry:{title:'相手が謝るのを待つ',kind:'think',label:'待つ',cost:0,strain:1,atk:0,desc:'向こうが謝るまで、何もしない。',hint:'待つだけだと、長引くかも',icon:'clock'},
 stubbornFace:{title:'仲直りしたいのに強がる',kind:'think',label:'強がる',cost:0,strain:1,atk:1,attr:'soc',desc:'仲直りしたいけど、強がってしまう。',hint:'強がると、距離ができてしまう',icon:'bolt'},
 realSorry:{title:'本当の気持ちで謝る',kind:'talk',label:'ちゃんと謝る',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「ごめんね」と、心から謝る。',hint:'心から謝ると、届く',icon:'heart'},
 noteSorry:{title:'メモで気持ちを伝える',kind:'think',label:'メモで伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'口で言えなければ、書いて渡す。',hint:'書くのも、伝え方の一つ',icon:'book'},
 calmFirst:{title:'まず自分を落ち着ける',kind:'think',label:'まず落ち着く',cost:1,atk:2,attr:'study',up:'study',desc:'深呼吸して、気持ちを整える。',hint:'落ち着いてから、話せる',icon:'sun'},
 askMutual:{title:'共通の友達に相談する',kind:'talk',label:'友達に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'仲直りの仕方を、友達に聞く。',hint:'友達が、橋渡ししてくれる',icon:'people'},
 invitePlay:{title:'遊びに誘ってみる',kind:'talk',label:'遊びに誘う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「一緒に遊ぼう」と、誘ってみる。',hint:'誘うと、距離が近づく',icon:'hand'},
 approachSlow:{title:'少しずつ近づく',kind:'think',label:'少しずつ',cost:1,atk:2,attr:'study',up:'study',desc:'あいさつ・目を合わせる、小さく始める。',hint:'小さいことから、始められる',icon:'spark'},
 makeUpDone:{title:'仲直りできた',kind:'support',label:'仲直り',cost:2,atk:3,attr:'soc',up:'soc',desc:'ちゃんと、仲直りできた。',hint:'仲直りの経験は、強くなる',icon:'flag'},
 reBond:{title:'前より仲良くなった',kind:'support',label:'もっと仲良く',cost:2,atk:3,attr:'soc',up:'soc',desc:'けんかを越えて、仲が深まった。',hint:'仲直りできる関係は、強い',icon:'check'},
 confront:{title:'問い詰める',kind:'talk',label:'問い詰める',cost:0,strain:1,atk:1,attr:'soc',desc:'「なんで言ったの」と、問い詰める。',hint:'問い詰めると、けんかになるかも',icon:'bolt'},
 spreadBack:{title:'仕返しに言いふらす',kind:'talk',label:'仕返し',cost:0,strain:1,atk:1,attr:'soc',desc:'相手の秘密を、言いふらす。',hint:'仕返しは、評判が下がる',icon:'eye'},
 askCalm:{title:'落ち着いて理由を聞く',kind:'talk',label:'理由を聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「どうして言ったの」と、落ち着いて聞く。',hint:'理由を聞くと、事情が分かる',icon:'ear'},
 distanceTake:{title:'少し距離を置く',kind:'think',label:'距離を置く',cost:1,atk:2,attr:'study',up:'study',desc:'すぐ決めず、少し距離を置く。',hint:'距離も、答えの一つ',icon:'door'},
 tellFeeling:{title:'「バラされてつらかった」と言う',kind:'talk',label:'気持ちを言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'気持ちを、正直に伝える。',hint:'伝えると、相手に届く',icon:'heart'},
 checkTruth:{title:'本当にバラしたか確かめる',kind:'think',label:'確かめる',cost:1,atk:2,attr:'study',up:'study',desc:'誰が言ったか、確かめてから動く。',hint:'確かめてから、動こう',icon:'search'},
 keepSecret:{title:'秘密の守り方を決める',kind:'think',label:'守り方を決める',cost:1,atk:2,attr:'study',up:'study',desc:'誰にどこまで話すか、決めておく。',hint:'決めておくと、安心',icon:'list'},
 forgiveF:{title:'許して仲直りする',kind:'support',label:'許す',cost:2,atk:3,attr:'soc',up:'soc',desc:'謝ってもらって、仲直りする。',hint:'許せる関係は、強い',icon:'hand'},
 chooseFriend:{title:'話す相手を選ぶ',kind:'support',label:'相手を選ぶ',cost:2,atk:3,attr:'study',up:'study',desc:'秘密は、信頼できる人だけに話す。',hint:'選ぶことも、守り方',icon:'check'},
 trustStep:{title:'少しずつ信頼を戻す',kind:'support',label:'信頼を戻す',cost:2,atk:3,attr:'soc',up:'soc',desc:'小さい約束から、信頼を戻す。',hint:'信頼は、積み重ね',icon:'spark'},
 lookCalm:{title:'平静を装ってやり過ごす',kind:'think',label:'平静を装う',cost:0,strain:1,atk:1,attr:'study',desc:'何もしなかったふりをして、やり過ごす。',hint:'気持ちは、心の中に残る',icon:'eye'},
 joinLaugh:{title:'一緒に笑ってしまった',kind:'talk',label:'一緒に笑う',cost:0,strain:1,atk:1,attr:'soc',desc:'場に合わせて、笑ってしまう。',hint:'加担すると、評判が下がる',icon:'bolt'},
 checkOn:{title:'あとで「大丈夫？」と声をかける',kind:'talk',label:'声をかける',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'いじめられていた子に、声をかける。',hint:'声をかけるだけで、相手は楽になる',icon:'heart'},
 tellTeacher2:{title:'先生にこっそり伝える',kind:'talk',label:'先生に伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'見たことを、先生にだけ伝える。',hint:'先生に伝えるのは、告げ口じゃない',icon:'people'},
 gatherFriends:{title:'信頼できる友達と相談する',kind:'talk',label:'友達と相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「どう思う？」と、友達に相談する。',hint:'一人で抱えなくていい',icon:'people'},
 standNear:{title:'その子のそばにいる',kind:'think',label:'そばにいる',cost:1,atk:2,attr:'soc',desc:'いじめられている子の、近くにいる。',hint:'そばにいるだけでも、力になる',icon:'heart'},
 keepWatch:{title:'様子を見て記録しておく',kind:'think',label:'記録する',cost:1,atk:2,attr:'study',up:'study',desc:'いつ・どこで・何を、メモしておく。',hint:'記録は、あとで役立つ',icon:'list'},
 standTogether:{title:'「みんなでやめよう」と言う',kind:'support',label:'みんなで止める',cost:2,atk:3,attr:'soc',up:'soc',desc:'友達と一緒に、「やめよう」と言う。',hint:'仲間がいると、言える',icon:'flag'},
 inviteThem:{title:'「一緒に行こう」と誘う',kind:'support',label:'誘う',cost:2,atk:3,attr:'soc',up:'soc',desc:'その子を、自分たちの輪に誘う。',hint:'誘うと、孤立がほどける',icon:'hand'},
 talkSecret:{title:'毎日、少しずつ関わる',kind:'support',label:'関わり続ける',cost:2,atk:3,attr:'soc',up:'soc',desc:'その子と毎日、少しずつ話す。',hint:'続けると、信頼が育つ',icon:'spark'},
 hideScore:{title:'点数を隠す・ごまかす',kind:'think',label:'点数を隠す',cost:0,strain:1,atk:1,attr:'study',desc:'点数を、内緒にする・ごまかす。',hint:'隠すと、ずっと気になる',icon:'eye'},
 bragBack:{title:'「自分の方が上」と言い返す',kind:'talk',label:'言い返す',cost:0,strain:1,atk:1,attr:'soc',desc:'点数で、言い返す。',hint:'比べ合いは、みんなつらい',icon:'bolt'},
 sayHonest:{title:'正直に点数を言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'聞かれたら、正直に言う。',hint:'正直は、一番楽',icon:'heart'},
 askMethod:{title:'どう勉強したか聞く',kind:'talk',label:'勉強法を聞く',cost:1,bond:1,atk:2,attr:'study',up:'study',desc:'点がいい子に、やり方を聞く。',hint:'聞くと、真似できる',icon:'ear'},
 selfGoal:{title:'自分の前回と比べる',kind:'think',label:'自分と比べる',cost:1,atk:2,attr:'study',up:'study',desc:'人ではなく、前回の自分と比べる。',hint:'自分比べは、成長が分かる',icon:'up'},
 ignoreRank:{title:'順位を気にしない',kind:'think',label:'気にしない',cost:1,atk:2,attr:'study',up:'study',desc:'順位より、できたかどうかを見る。',hint:'気にしないのも、強さ',icon:'sun'},
 praiseOther:{title:'「すごいね」とほめる',kind:'talk',label:'ほめる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'点がいい子を、素直にほめる。',hint:'ほめられる関係は、いい関係',icon:'spark'},
 keepScore:{title:'点数は内緒にすると決める',kind:'think',label:'内緒にする',cost:1,atk:2,attr:'study',up:'study',desc:'次からは、言わないと決める。',hint:'決めるのも、一つの答え',icon:'list'},
 studyPlan:{title:'次の勉強計画を立てる',kind:'support',label:'計画を立てる',cost:2,atk:3,attr:'study',up:'study',desc:'次のテストに向けて、計画を立てる。',hint:'計画があると、前を向ける',icon:'list'},
 honestReply:{title:'点数を気にしないと伝える',kind:'support',label:'伝える',cost:2,atk:3,attr:'soc',up:'soc',desc:'「点数より、一緒に遊びたい」と言う。',hint:'伝えると、関係が変わる',icon:'hand'},
 pretendKnow:{title:'知ってるふりをする',kind:'talk',label:'知ったかぶり',cost:0,strain:1,atk:1,attr:'soc',desc:'知らないのに、知ってるふりをする。',hint:'ふりをすると、あとでつらい',icon:'eye'},
 buyFit:{title:'無理して合わせる',kind:'think',label:'無理に合わせる',cost:0,strain:1,atk:1,attr:'soc',desc:'興味がないのに、合わせる。',hint:'無理は、続かない',icon:'bolt'},
 askTopic:{title:'「それって何？」と聞く',kind:'talk',label:'素直に聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'知らないことを、素直に聞く。',hint:'聞くと、教えてもらえる',icon:'ear'},
 likeOwn:{title:'自分の好きなことを話す',kind:'talk',label:'好きを話す',cost:1,atk:2,attr:'soc',up:'soc',desc:'自分の好きなことを、話してみる。',hint:'好きを話すと、仲間が見つかる',icon:'spark'},
 listenFirst:{title:'まず聞いてみる',kind:'think',label:'まず聞く',cost:1,atk:2,attr:'study',up:'study',desc:'みんなの話を、まず聞く。',hint:'聞くと、入り口が見える',icon:'ear'},
 bridgeT:{title:'知ってる話題につなげる',kind:'talk',label:'つなげる',cost:1,atk:2,attr:'soc',up:'soc',desc:'「それって、あれに似てる？」とつなげる。',hint:'つなげると、会話になる',icon:'spark'},
 honestNo:{title:'「知らない」と正直に言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'知らないことを、正直に言う。',hint:'正直は、楽で強い',icon:'heart'},
 tryJoin:{title:'教えてもらって一緒にやる',kind:'support',label:'一緒にやる',cost:2,atk:3,attr:'soc',up:'soc',desc:'教えてもらって、一緒にやってみる。',hint:'一緒にやると、輪に入れる',icon:'hand'},
 ownWay:{title:'自分のペースで楽しむ',kind:'support',label:'自分のペース',cost:2,atk:3,attr:'study',up:'study',desc:'無理せず、自分のペースで楽しむ。',hint:'自分のペースも、正解',icon:'sun'},
 joinThem:{title:'自分から話題を出す',kind:'support',label:'話題を出す',cost:2,atk:3,attr:'soc',up:'soc',desc:'次は、自分から話題を出す。',hint:'出せるようになると、対等',icon:'flag'},
 runOut:{title:'途中で逃げ出す',kind:'talk',label:'逃げ出す',cost:0,strain:1,atk:1,attr:'soc',desc:'恥ずかしくて、逃げ出す。',hint:'逃げると、あとが重い',icon:'door'},
 freezeUp:{title:'固まってしまう',kind:'think',label:'固まる',cost:0,strain:1,atk:1,attr:'soc',desc:'頭が真っ白で、動けない。',hint:'固まると、時間だけたつ',icon:'skull'},
 keepGoing:{title:'止まらずに最後までやる',kind:'support',label:'最後までやる',cost:1,atk:2,attr:'ath',up:'ath',desc:'間違えても、最後までやりきる。',hint:'やりきると、見方が変わる',icon:'flag'},
 laughWith:{title:'自分も一緒に笑う',kind:'talk',label:'一緒に笑う',cost:1,atk:2,attr:'soc',up:'soc',desc:'「やっちゃった」と、自分も笑う。',hint:'笑えると、恥ずかしさが軽くなる',icon:'sun'},
 retryNow:{title:'「もう一度やります」と言う',kind:'talk',label:'やり直す',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'やり直す勇気を、口に出す。',hint:'言えたら、もう一回できる',icon:'check'},
 practiceNext:{title:'家で練習する',kind:'think',label:'家で練習',cost:1,atk:2,attr:'study',up:'study',desc:'間違えたところを、家で練習する。',hint:'練習は、次の自信になる',icon:'pen'},
 selfPraise:{title:'「最後までできた」と自分をほめる',kind:'think',label:'自分をほめる',cost:1,atk:2,attr:'soc',up:'soc',desc:'やりきった自分を、ほめる。',hint:'ほめられると、またやれる',icon:'heart'},
 quietDay:{title:'今日は静かに過ごす',kind:'support',label:'静かに過ごす',cost:1,atk:2,attr:'study',up:'study',desc:'無理せず、今日は静かに過ごす。',hint:'休むのも、立て直し',icon:'sun'},
 faceAgain:{title:'次はもっと準備する',kind:'support',label:'もっと準備',cost:2,atk:3,attr:'study',up:'study',desc:'次は、もっと準備して臨む。',hint:'準備は、不安を削る',icon:'list'},
 bounceBack:{title:'切り替えて次に進む',kind:'support',label:'切り替える',cost:2,atk:3,attr:'soc',up:'soc',desc:'失敗は失敗。切り替えて、次に進む。',hint:'切り替えは、強さ',icon:'bolt'},
 pickSide:{title:'とりあえず片方の味方につく',kind:'talk',label:'味方につく',cost:0,strain:1,atk:1,attr:'soc',desc:'急いで、どちらかの味方につく。',hint:'急ぐと、もう片方を失う',icon:'bolt'},
 avoidDays:{title:'二人から離れて過ごす',kind:'think',label:'離れて過ごす',cost:0,strain:1,atk:1,attr:'soc',desc:'関わらないように、避ける。',hint:'避けるだけでは、元に戻らない',icon:'door'},
 calmAsk2:{title:'「どうしたの？」と聞く',kind:'talk',label:'聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'まず、事情を聞いてみる。',hint:'聞くと、全体が見える',icon:'ear'},
 hearBoth:{title:'両方の言い分を聞く',kind:'talk',label:'両方聞く',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'片方ずつ、言い分を聞く。',hint:'両方聞くと、中立でいられる',icon:'people'},
 neutralSay:{title:'「どっちも選べない」と言う',kind:'talk',label:'選べないと言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'選べないことを、正直に言う。',hint:'正直は、両方を守る',icon:'heart'},
 takeSpace:{title:'少し距離を置く',kind:'support',label:'距離を置く',cost:1,atk:2,attr:'study',up:'study',desc:'今は少し、距離を置いて様子を見る。',hint:'距離も、選び方の一つ',icon:'sun'},
 fairBridge:{title:'二人の橋渡しをする',kind:'support',label:'橋渡し',cost:2,atk:3,attr:'soc',up:'soc',desc:'両方の言い分を、伝え合う手伝いをする。',hint:'橋渡しは、関係をつなぐ',icon:'hand'},
 stayFriend:{title:'「どっちも友達」と伝える',kind:'talk',label:'どっちも友達',cost:2,atk:3,attr:'soc',up:'soc',desc:'両方に、「友達だ」と伝える。',hint:'友達宣言は、勇気がいる',icon:'flag'},
 inviteBoth:{title:'二人を一緒に誘う',kind:'support',label:'一緒に誘う',cost:2,atk:3,attr:'soc',up:'soc',desc:'二人を、同じ遊びに誘う。',hint:'同じ場は、仲直りの入口',icon:'spark'},
 threeTalk:{title:'三人で話す場をつくる',kind:'support',label:'三人で話す',cost:2,atk:3,attr:'study',up:'study',desc:'三人で、話す場をつくる。',hint:'場があると、言いやすい',icon:'list'},
 pushMine:{title:'自分の案を押し通す',kind:'talk',label:'押し通す',cost:0,strain:1,atk:1,attr:'soc',desc:'自分の案を、強く押し通す。',hint:'押すだけでは、まとまらない',icon:'bolt'},
 keepQuiet2:{title:'黙って任せる',kind:'think',label:'任せる',cost:0,strain:1,atk:1,attr:'soc',desc:'口を出さず、誰かに任せる。',hint:'任せると、いつまでも決まらない',icon:'eye'},
 listIdeas:{title:'案を書き出す',kind:'think',label:'書き出す',cost:1,atk:2,attr:'study',up:'study',desc:'みんなの案を、書き出してみる。',hint:'書くと、違いが見える',icon:'list'},
 voteRule:{title:'「多数決にする？」と聞く',kind:'talk',label:'多数決を聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'決め方として、多数決を聞く。',hint:'決め方を決めると、進む',icon:'hand'},
 takeTurns:{title:'順番にやる提案をする',kind:'talk',label:'順番にする',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「順番にやらない？」と提案する。',hint:'順番なら、みんな納得できる',icon:'clock'},
 mixIdeas:{title:'いいとこ取りを考える',kind:'think',label:'いいとこ取り',cost:1,atk:2,attr:'study',up:'study',desc:'それぞれの案の、いいところを組み合わせる。',hint:'組み合わせると、みんなの案になる',icon:'spark'},
 bothTry:{title:'両方やってみる提案をする',kind:'support',label:'両方やる',cost:2,atk:3,attr:'soc',up:'soc',desc:'「両方やってみよう」と提案する。',hint:'両方やると、みんな試せる',icon:'people'},
 writePlan:{title:'手順を書いて示す',kind:'support',label:'手順を書く',cost:2,atk:3,attr:'study',up:'study',desc:'決めたことを、手順にして示す。',hint:'見えると、やりやすい',icon:'pen'},
 decideFair:{title:'公平な決め方を提案する',kind:'support',label:'公平に決める',cost:2,atk:3,attr:'study',up:'study',desc:'じゃんけん・くじ・多数決、公平な決め方を提案。',hint:'公平だと、不満が残らない',icon:'check'},
 brushOff:{title:'「調子に乗るなよ」への無言',kind:'think',label:'黙る',cost:0,strain:1,atk:1,attr:'soc',desc:'嫌味に、何も言い返さない。',hint:'飲みこむと、心に残る',icon:'eye'},
 proudOut:{title:'「だって褒められたし」と言い返す',kind:'talk',label:'言い返す',cost:0,strain:1,atk:1,attr:'soc',desc:'嫌味に、まっすぐ言い返す。',hint:'ぶつかると、空気が重い',icon:'bolt'},
 modestSay:{title:'「まぐれだよ」と謙虚に言う',kind:'talk',label:'謙遜',cost:1,atk:2,attr:'soc',up:'soc',desc:'「たまたまだよ」と、謙虚に受ける。',hint:'謙遜で、角が立たない',icon:'sun'},
 shareWin:{title:'「みんなもできたじゃん」と分かち合う',kind:'talk',label:'分かち合う',cost:1,atk:2,attr:'soc',up:'soc',desc:'ほめを、みんなにも返す。',hint:'分かち合うと、輪になる',icon:'people'},
 askBack2:{title:'「そう言うの、どうして？」と聞く',kind:'talk',label:'聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'嫌味の理由を、聞いてみる。',hint:'聞くと、本当の気持ちが見える',icon:'ear'},
 thankT:{title:'先生にお礼を言う',kind:'talk',label:'お礼を言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'褒めてくれた先生に、お礼を言う。',hint:'お礼は、関係を育てる',icon:'heart'},
 cheerThem:{title:'相手のいいところを言う',kind:'talk',label:'相手をほめる',cost:1,atk:2,attr:'soc',up:'soc',desc:'「あなたも、ここがすごいよ」と言う。',hint:'ほめると、ほめ返される',icon:'spark'},
 helpThem:{title:'「一緒にやろう」と誘う',kind:'support',label:'一緒にやる',cost:2,atk:3,attr:'soc',up:'soc',desc:'次の課題を、一緒にやる誘い。',hint:'一緒だと、ライバルが仲間になる',icon:'hand'},
 stayHumble:{title:'次は静かに力をつける',kind:'think',label:'静かに力をつける',cost:1,atk:2,attr:'study',up:'study',desc:'言い返すより、次の力をつける。',hint:'実力は、一番の答え',icon:'pen'},
 ignoreJab:{title:'嫌味は流してやり過ごす',kind:'support',label:'流す',cost:1,atk:2,attr:'ath',up:'ath',desc:'嫌味は、気にせず流す。',hint:'流せるのも、強さ',icon:'flag'},
 accuseH:{title:'「お前が隠したろ」と決めつける',kind:'talk',label:'決めつける',cost:0,strain:1,atk:1,attr:'soc',desc:'犯人を、決めつけて責める。',hint:'決めつけると、関係がこわれる',icon:'bolt'},
 prankBack:{title:'やり返して隠す',kind:'think',label:'やり返す',cost:0,strain:1,atk:1,attr:'soc',desc:'相手の物を、隠して仕返し。',hint:'仕返しは、いたちごっこ',icon:'skull'},
 lookNear:{title:'まず近くを探す',kind:'think',label:'近くを探す',cost:1,atk:2,attr:'study',up:'study',desc:'机の中・まわりから、探す。',hint:'探すと、手がかりが出る',icon:'search'},
 stayCool2:{title:'「隠しごと？」と冷静に言う',kind:'talk',label:'冷静に言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'慌てず、「隠しごと？」と聞く。',hint:'冷静だと、相手も素直になる',icon:'sun'},
 askAround3:{title:'見ていた人に聞く',kind:'talk',label:'見ていた人に聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'「誰か見なかった？」と聞く。',hint:'聞くと、証言が集まる',icon:'ear'},
 tellT3:{title:'先生に相談する',kind:'talk',label:'先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人で抱えず、先生に言う。',hint:'相談は、逃げじゃない',icon:'heart'},
 askCalm3:{title:'「なんで隠したの？」と聞く',kind:'talk',label:'理由を聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'相手に、理由を聞いてみる。',hint:'理由が分かると、次がある',icon:'message'},
 checkDesk:{title:'自分の持ち場を確かめる',kind:'think',label:'持ち場を確かめる',cost:1,atk:2,attr:'study',up:'study',desc:'自分の置き場所を、もう一度確かめる。',hint:'確認すると、勘違いも分かる',icon:'check'},
 letItGo2:{title:'笑いごとで済ませる',kind:'support',label:'笑いごとにする',cost:2,atk:3,attr:'soc',up:'soc',desc:'「びっくりしたー」と、笑いごとにする。',hint:'笑えると、角が立たない',icon:'sun'},
 makeRule2:{title:'「隠すのなし」ルールにする',kind:'support',label:'ルールを決める',cost:2,atk:3,attr:'soc',up:'soc',desc:'みんなで、「隠しごとなし」にする。',hint:'ルールで、次を防ぐ',icon:'flag'},
 hidePaper:{title:'プリントを隠す',kind:'think',label:'隠す',cost:0,strain:1,atk:1,attr:'soc',desc:'点数のプリントを、隠す。',hint:'隠すと、心が重い',icon:'eye'},
 fakeSign:{title:'「まだ配ってない」とごまかす',kind:'talk',label:'ごまかす',cost:0,strain:1,atk:1,attr:'soc',desc:'家で、ごまかす。',hint:'ごまかすと、あとがこわい',icon:'bolt'},
 tellHome:{title:'家に正直に見せる',kind:'talk',label:'正直に見せる',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'悪い点でも、正直に見せる。',hint:'正直は、一番楽',icon:'heart'},
 showWeak:{title:'「ここができなかった」と見せる',kind:'talk',label:'できない所を見せる',cost:1,atk:2,attr:'study',up:'study',desc:'できなかった所を、見せる。',hint:'見せると、教えてもらえる',icon:'search'},
 askHelp4:{title:'「教えて」と頼む',kind:'talk',label:'教えてと頼む',cost:1,atk:2,attr:'study',up:'study',desc:'分からない所を、家の人に頼む。',hint:'頼むと、分かるようになる',icon:'hand'},
 planRedo:{title:'次の勉強計画を立てる',kind:'think',label:'計画を立てる',cost:1,atk:2,attr:'study',up:'study',desc:'次は、どうするか計画を立てる。',hint:'計画で、不安が小さくなる',icon:'list'},
 ownPace2:{title:'自分なりの目標を決める',kind:'think',label:'自分の目標',cost:1,atk:2,attr:'study',up:'study',desc:'人と比べず、自分の目標にする。',hint:'自分のペースが、続く',icon:'sun'},
 compareSelf:{title:'前の自分と比べる',kind:'think',label:'前と比べる',cost:1,atk:2,attr:'study',up:'study',desc:'人の点より、前の自分と比べる。',hint:'前よりできたら、成長',icon:'up'},
 makePromise2:{title:'「次はがんばる」と約束する',kind:'support',label:'約束する',cost:2,atk:3,attr:'soc',up:'soc',desc:'「次はがんばる」と、家で約束する。',hint:'約束は、支えになる',icon:'flag'},
 restEasy:{title:'今日は、気にしない',kind:'support',label:'気にしない',cost:2,atk:3,attr:'ath',up:'ath',desc:'今日は切り替えて、気にしない。',hint:'切り替えも、立て直し',icon:'check'},
 yellCut:{title:'「割り込むな！」と怒鳴る',kind:'talk',label:'怒鳴る',cost:0,strain:1,atk:1,attr:'soc',desc:'前に、大声で怒鳴る。',hint:'怒鳴ると、まわりも嫌になる',icon:'bolt'},
 pretendOk:{title:'何も言わず我慢する',kind:'think',label:'黙って我慢',cost:0,strain:1,atk:1,attr:'soc',desc:'黙って、我慢する。',hint:'我慢すると、心が重い',icon:'eye'},
 sayTurn:{title:'「後ろに並んで」と伝える',kind:'talk',label:'後ろにと伝える',cost:1,atk:2,attr:'soc',up:'soc',desc:'静かに、「後ろに並んで」と言う。',hint:'静かに言うと、伝わる',icon:'message'},
 tapShoulder:{title:'肩を軽くたたいて伝える',kind:'talk',label:'たたいて伝える',cost:1,atk:2,attr:'soc',up:'soc',desc:'肩を軽くたたいて、穏やかに言う。',hint:'穏やかだと、相手も聞く',icon:'hand'},
 tellWatcher:{title:'見ている人・先生に言う',kind:'talk',label:'見ている人に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'見ていた人や、先生に伝える。',hint:'一人で解決しなくてもいい',icon:'heart'},
 coolVoice:{title:'「僕の順番だよ」と自分の意見を言う',kind:'talk',label:'自分の意見を言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'「僕の順番だよ」と、自分の意見を言う。',hint:'自分の意見を言うのは、正しい',icon:'pen'},
 explainRule:{title:'「列のルール」を説明する',kind:'think',label:'ルールを説明',cost:1,atk:2,attr:'study',up:'study',desc:'列のルールを、説明する。',hint:'ルールなら、相手も納得しやすい',icon:'list'},
 letSlide:{title:'今回は見送る',kind:'think',label:'今回は見送る',cost:1,atk:2,attr:'soc',up:'soc',desc:'「今回はいいか」と、見送る。',hint:'許せることも、強さ',icon:'sun'},
 askEnd:{title:'「一番後ろはどこ？」と聞く',kind:'talk',label:'後ろを聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'相手に、「一番後ろはどこ？」と聞く。',hint:'聞くと、気づいてもらえる',icon:'search'},
 standUp2:{title:'みんなで「順番だよ」と言う',kind:'support',label:'みんなで言う',cost:2,atk:3,attr:'soc',up:'soc',desc:'まわりの人と一緒に、「順番だよ」と言う。',hint:'みんなで言うと、届く',icon:'people'},
 snapTake:{title:'「知らないよ」と突き放す',kind:'talk',label:'突き放す',cost:0,strain:1,atk:1,attr:'soc',desc:'押し付けられた仕事を、投げ返す。',hint:'突き放すと、関係がこわれる',icon:'bolt'},
 silentDo:{title:'黙って全部やる',kind:'think',label:'黙ってやる',cost:0,strain:1,atk:1,attr:'soc',desc:'不満を、呑み込んで全部やる。',hint:'我慢すると、心が重い',icon:'eye'},
 sayNo2:{title:'「それはあなたの仕事だよ」と言う',kind:'talk',label:'断る',cost:1,atk:2,attr:'soc',up:'soc',desc:'静かに、「あなたの仕事だよ」と言う。',hint:'断るのは、わがままじゃない',icon:'hand'},
 askRole:{title:'「なんで私がやるの？」と聞く',kind:'talk',label:'理由を聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'押し付ける理由を、聞いてみる。',hint:'理由が分かると、対処できる',icon:'search'},
 takeHalf:{title:'「半分だけやる」と交渉する',kind:'talk',label:'半分と交渉',cost:1,atk:2,attr:'soc',up:'soc',desc:'「半分ならやる」と、交渉する。',hint:'交渉は、両方にいい',icon:'people'},
 tellT4:{title:'係の決め方を先生に相談',kind:'talk',label:'先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'仕事の分け方を、先生に相談する。',hint:'相談は、逃げじゃない',icon:'heart'},
 splitFair:{title:'「みんなで分けよう」と提案する',kind:'think',label:'分ける提案',cost:1,atk:2,attr:'soc',up:'soc',desc:'一人でなく、みんなで分ける提案。',hint:'分けると、公平になる',icon:'list'},
 tradeIt:{title:'「じゃあ交代で」と提案する',kind:'think',label:'交代の提案',cost:1,atk:2,attr:'soc',up:'soc',desc:'「今日はあなた、明日は私」と提案。',hint:'交代なら、ずるくない',icon:'flag'},
 ownJob:{title:'自分の分だけしっかりやる',kind:'think',label:'自分の分をやる',cost:1,atk:2,attr:'study',up:'study',desc:'自分の分を、しっかりやる。',hint:'自分の分は、自分の責任',icon:'check'},
 noPush:{title:'「押し付けない」約束にする',kind:'support',label:'約束にする',cost:2,atk:3,attr:'soc',up:'soc',desc:'「押し付けない」を、みんなの約束にする。',hint:'約束で、次を防ぐ',icon:'spark'},
 joinGossip:{title:'一緒に悪口を言う',kind:'talk',label:'乗る',cost:0,strain:1,atk:1,attr:'soc',desc:'場に合わせて、悪口に乗る。',hint:'乗ると、あとで心が痛い',icon:'bolt'},
 stayMute:{title:'黙って聞き流す',kind:'think',label:'聞き流す',cost:0,strain:1,atk:1,attr:'soc',desc:'何も言わず、聞き流す。',hint:'黙ると、仲間だと思われる',icon:'eye'},
 changeTopic:{title:'話題を変える',kind:'talk',label:'話題を変える',cost:1,atk:2,attr:'soc',up:'soc',desc:'「そういえばさ」と、話題を変える。',hint:'話題を変えると、悪口が止まる',icon:'message'},
 walkAway2:{title:'その場を離れる',kind:'think',label:'離れる',cost:1,atk:2,attr:'soc',up:'soc',desc:'「ちょっとトイレ」と、離れる。',hint:'離れるのも、答え',icon:'door'},
 defendF:{title:'「でも、いいところもあるよ」と言う',kind:'talk',label:'かばう',cost:1,atk:2,attr:'soc',up:'soc',desc:'その子の、いいところを言う。',hint:'かばうのは、勇気',icon:'heart'},
 neutralSt:{title:'「そうかなあ」と中立でいる',kind:'talk',label:'中立でいる',cost:1,atk:2,attr:'soc',up:'soc',desc:'賛成も反対もせず、中立でいる。',hint:'中立でいると、巻き込まれない',icon:'sun'},
 tellF4:{title:'本人に直接伝える',kind:'talk',label:'本人に伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'悪口を言われた子に、正直に伝える。',hint:'正直は、関係を守る',icon:'hand'},
 askBoth2:{title:'両方の話を聞く',kind:'think',label:'両方を聞く',cost:1,atk:2,attr:'study',up:'study',desc:'悪口の側と本人の側、両方聞く。',hint:'両方聞くと、本当が分かる',icon:'ear'},
 kindWord:{title:'悪口のない会話をする',kind:'support',label:'悪口のない会話',cost:2,atk:3,attr:'soc',up:'soc',desc:'悪口のない会話を、心がける。',hint:'悪口のない場は、みんなが楽',icon:'spark'},
 keepOut:{title:'「私は入らない」と距離を置く',kind:'support',label:'距離を置く',cost:2,atk:3,attr:'soc',up:'soc',desc:'「私はそういうの入らない」と、距離を置く。',hint:'距離を置くと、巻き込まれない',icon:'flag'},
 hideBroke:{title:'壊したのを隠す',kind:'think',label:'隠す',cost:0,strain:1,atk:1,attr:'soc',desc:'壊れたものを、そのまま返す。',hint:'隠すと、あとで困る',icon:'eye'},
 blameIt:{title:'「知らない」ととぼける',kind:'talk',label:'とぼける',cost:0,strain:1,atk:1,attr:'soc',desc:'「知らない」と、とぼける。',hint:'とぼけると、信用を失う',icon:'bolt'},
 tellOwner:{title:'「ごめん、壊しちゃった」と言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'持ち主に、正直に謝る。',hint:'正直に謝ると、許してもらえる',icon:'heart'},
 fixIt:{title:'直せるか試す',kind:'think',label:'直す',cost:1,atk:2,attr:'study',up:'study',desc:'壊れたところを、直せるか試す。',hint:'直せたら、一番いい',icon:'check'},
 askSorry:{title:'「本当にごめん」ともう一度謝る',kind:'talk',label:'もう一度謝る',cost:1,atk:2,attr:'soc',up:'soc',desc:'ちゃんと向き合って、もう一度謝る。',hint:'丁寧な謝罪は、届く',icon:'hand'},
 payBack2:{title:'「弁償するよ」と言う',kind:'talk',label:'弁償する',cost:1,atk:2,attr:'soc',up:'soc',desc:'「弁償するよ」と、責任を持つ。',hint:'責任を持つのは、誠実',icon:'flag'},
 askAdult2:{title:'家の人・先生に相談する',kind:'talk',label:'大人に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'一人で抱えず、大人に相談。',hint:'相談は、逃げじゃない',icon:'people'},
 beCareful:{title:'次は丁寧に借りる',kind:'think',label:'丁寧に借りる',cost:1,atk:2,attr:'study',up:'study',desc:'借りるときは、丁寧に扱う。',hint:'丁寧は、約束の形',icon:'pen'},
 ownMistake:{title:'「私がやった」と責任を持つ',kind:'think',label:'責任を持つ',cost:1,atk:2,attr:'soc',up:'soc',desc:'言い訳せず、責任を持つ。',hint:'責任は、信頼の土台',icon:'check'},
 ownTruth:{title:'真実を自分に認める',kind:'support',label:'真実を認める',cost:2,atk:3,attr:'study',up:'study',desc:'ごまかさず、真実を認める。',hint:'真実は、後腐れがない',icon:'sun'},
 chaseRun:{title:'必死に追いかける',kind:'think',label:'追いかける',cost:0,strain:1,atk:1,attr:'ath',desc:'走って、必死に追いかける。',hint:'追うほど、疲れて悲しくなる',icon:'runner'},
 pretendFine:{title:'「どうでもいい」とふるまう',kind:'think',label:'強がる',cost:0,strain:1,atk:1,attr:'soc',desc:'「どうでもいい」と、強がる。',hint:'強がると、心が疲れる',icon:'eye'},
 sayWait2:{title:'「待って！」と声をかける',kind:'talk',label:'待ってと言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'「待って！」と、声をかける。',hint:'声をかけると、気づいてもらえる',icon:'message'},
 tellHow3:{title:'「寂しかった」と気持ちを伝える',kind:'talk',label:'気持ちを伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「置いて行かれて寂しかった」と言う。',hint:'気持ちを言うと、分かってもらえる',icon:'heart'},
 askWhyRun:{title:'「なんで行っちゃったの？」と聞く',kind:'talk',label:'理由を聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'行ってしまった理由を、聞く。',hint:'理由が分かると、気が楽になる',icon:'search'},
 findOwn2:{title:'自分の遊びを見つける',kind:'think',label:'自分の遊び',cost:1,atk:2,attr:'soc',up:'soc',desc:'追いかけず、自分の遊びを見つける。',hint:'一人の遊びも、楽しい',icon:'sun'},
 otherFriends:{title:'他の子と遊ぶ',kind:'think',label:'他の子と遊ぶ',cost:1,atk:2,attr:'soc',up:'soc',desc:'その子以外の、他の子と遊ぶ。',hint:'友達は、一人じゃない',icon:'people'},
 slowDown:{title:'追いかけず深呼吸する',kind:'think',label:'深呼吸',cost:1,atk:2,attr:'ath',up:'ath',desc:'追いかける前に、深呼吸する。',hint:'深呼吸で、気持ちが落ち着く',icon:'sun'},
 waitPatience:{title:'戻ってくるのを待つ',kind:'support',label:'待つ',cost:1,atk:2,attr:'soc',up:'soc',desc:'「そのうち戻ってくるかな」と待つ。',hint:'待てるのも、力',icon:'clock'},
 nextTime:{title:'「次は一緒に行こう」と約束する',kind:'support',label:'次の約束',cost:2,atk:3,attr:'soc',up:'soc',desc:'「次は一緒に行こう」と、約束する。',hint:'約束で、次が変わる',icon:'flag'},
 stayWrong:{title:'間違えたまま返事をする',kind:'think',label:'そのまま返事',cost:0,strain:1,atk:1,attr:'soc',desc:'違う名前でも、返事をしてしまう。',hint:'そのままだと、ずっと間違えられる',icon:'eye'},
 yellName:{title:'「違うよ！」と怒る',kind:'talk',label:'怒る',cost:0,strain:1,atk:1,attr:'soc',desc:'大声で、訂正する。',hint:'怒ると、まわりが引く',icon:'bolt'},
 correctCalm:{title:'「××です」と落ち着いて直す',kind:'talk',label:'落ち着いて直す',cost:1,atk:2,attr:'soc',up:'soc',desc:'落ち着いて、正しい名前を言う。',hint:'落ち着くと、伝わる',icon:'pen'},
 writeName:{title:'名札・ノートに名前を書く',kind:'think',label:'名前を書く',cost:1,atk:2,attr:'study',up:'study',desc:'名札を見せて、覚えてもらう。',hint:'見せると、覚えてもらえる',icon:'pen'},
 askFix:{title:'「名前、違います」とはっきり言う',kind:'talk',label:'はっきり言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'笑って、「名前、違います」と言う。',hint:'はっきり言うと、直してもらえる',icon:'hand'},
 jokeName:{title:'「苗字の覚え方」を教える',kind:'talk',label:'覚え方を教える',cost:1,atk:2,attr:'soc',up:'soc',desc:'「○○って覚えてね」と、覚え方を教える。',hint:'教えると、覚えてもらえる',icon:'message'},
 ownName2:{title:'自分の名前を大切にする',kind:'think',label:'名前を大切に',cost:1,atk:2,attr:'study',up:'study',desc:'自分の名前は、大切なもの。',hint:'大切にすると、堂々と言える',icon:'heart'},
 proudName:{title:'名前の由来を話す',kind:'think',label:'由来を話す',cost:1,atk:2,attr:'soc',up:'soc',desc:'名前の由来を、話してみる。',hint:'由来を話すと、興味を持ってもらえる',icon:'book'},
 askParents2:{title:'家の人に相談する',kind:'talk',label:'家で相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'家の人に、相談する。',hint:'相談は、逃げじゃない',icon:'people'},
 quietTake:{title:'一度だけ優しく直す',kind:'support',label:'優しく直す',cost:2,atk:3,attr:'soc',up:'soc',desc:'一度だけ、優しく名前を直す。',hint:'優しい訂正は、角が立たない',icon:'sun'},
 leaveAll:{title:'全部残してしまう',kind:'think',label:'全部残す',cost:0,strain:1,atk:1,attr:'ath',desc:'苦手なものを、全部残す。',hint:'残すと、体が育たない',icon:'eye'},
 forceEat:{title:'泣きながら無理に食べる',kind:'think',label:'無理に食べる',cost:0,strain:1,atk:1,attr:'ath',desc:'つらいのに、無理に食べる。',hint:'無理は、続かない',icon:'bolt'},
 tinyBite:{title:'一口だけ食べてみる',kind:'think',label:'一口だけ',cost:1,atk:2,attr:'ath',up:'ath',desc:'一口だけ、食べてみる。',hint:'一口は、始まり',icon:'check'},
 askLess:{title:'「少なめにして」とお願いする',kind:'talk',label:'少なめに',cost:1,atk:2,attr:'soc',up:'soc',desc:'配膳の時、「少なめにして」と言う。',hint:'量を変えると、食べられる',icon:'message'},
 trySlow:{title:'ゆっくり味わってみる',kind:'think',label:'味わう',cost:1,atk:2,attr:'ath',up:'ath',desc:'急がず、ゆっくり味わう。',hint:'味わうと、美味しく感じる',icon:'sun'},
 askLunch:{title:'給食の先生に相談する',kind:'talk',label:'給食の先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'給食の先生に、相談する。',hint:'相談は、逃げじゃない',icon:'heart'},
 swapVeg:{title:'「少しだけチャレンジ」と宣言する',kind:'talk',label:'チャレンジ宣言',cost:1,atk:2,attr:'ath',up:'ath',desc:'「今日はこれだけチャレンジ」と宣言。',hint:'宣言すると、頑張れる',icon:'flag'},
 vegBrave:{title:'苦手なものを一つずつ攻略',kind:'think',label:'一つずつ攻略',cost:1,atk:2,attr:'ath',up:'ath',desc:'苦手なものを、一つずつ攻略。',hint:'一つずつは、現実的',icon:'up'},
 tellLunch:{title:'給食当番に正直に言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'当番に、「苦手で」と正直に言う。',hint:'正直は、助けを呼ぶ',icon:'hand'},
 ownPace3:{title:'無理せず自分のペースで',kind:'think',label:'自分のペース',cost:1,atk:2,attr:'ath',up:'ath',desc:'無理せず、自分のペースで挑戦。',hint:'ペースが、続く',icon:'sun'},
 stopSing:{title:'歌うのをやめる',kind:'think',label:'歌わない',cost:0,strain:1,atk:1,attr:'soc',desc:'怖くて、歌うのをやめる。',hint:'やめると、練習にならない',icon:'door'},
 mouthWord:{title:'口パクだけする',kind:'think',label:'口パク',cost:0,strain:1,atk:1,attr:'soc',desc:'声を出さず、口だけ動かす。',hint:'ふりでは、上手くならない',icon:'eye'},
 humAlong:{title:'小さな声でハミング',kind:'think',label:'ハミング',cost:1,atk:2,attr:'soc',up:'soc',desc:'小さな声で、ハミングしてみる。',hint:'小さくても、声は出せる',icon:'ear'},
 askPart:{title:'「自分のパート」を確かめる',kind:'think',label:'パートを確かめる',cost:1,atk:2,attr:'study',up:'study',desc:'自分のパートと、入る場所を確かめる。',hint:'場所が分かれば、迷わない',icon:'search'},
 practiceSong:{title:'間違えたところだけ練習',kind:'think',label:'部分練習',cost:1,atk:2,attr:'study',up:'study',desc:'間違えたところだけ、繰り返し練習。',hint:'一点集中は、効率的',icon:'up'},
 askMusicT:{title:'音楽の先生に教わる',kind:'talk',label:'音楽の先生に',cost:1,bond:1,atk:2,attr:'study',up:'study',desc:'先生に、入り方を教わる。',hint:'相談は、逃げじゃない',icon:'message'},
 singLow:{title:'低めの声で確実に',kind:'think',label:'低めで確実に',cost:1,atk:2,attr:'study',up:'study',desc:'低めの声で、確実に歌う。',hint:'確実な方が、続く',icon:'check'},
 learnTune:{title:'ピアノの音に耳を澄ませる',kind:'think',label:'音を聞く',cost:1,atk:2,attr:'study',up:'study',desc:'ピアノの音を、よく聞く。',hint:'聞くと、合わせられる',icon:'ear'},
 singTogether:{title:'隣の人と一緒に歌う',kind:'talk',label:'一緒に歌う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'隣の人の声に合わせて歌う。',hint:'一緒なら、怖くない',icon:'people'},
 ownPart:{title:'自分のパートに自信を持つ',kind:'think',label:'自分のパート',cost:1,atk:2,attr:'study',up:'study',desc:'自分のパートを、堂々と歌う。',hint:'自信は、声を大きくする',icon:'spark'},
 skipPool:{title:'プールを休みたい',kind:'think',label:'休みたい',cost:0,strain:1,atk:1,attr:'ath',desc:'怖いから、プールを休みたい。',hint:'休むと、いつまでも怖い',icon:'door'},
 wetFirst:{title:'まずはプールサイドで座る',kind:'think',label:'まず座る',cost:0,atk:1,attr:'ath',desc:'入らなくても、近くに座る。',hint:'近づくのも、一歩',icon:'check'},
 splashFace:{title:'顔に水をかけてみる',kind:'think',label:'顔に水',cost:1,atk:2,attr:'ath',up:'ath',desc:'顔に、少しずつ水をかける。',hint:'慣れるのも、練習',icon:'sun'},
 holdEdge:{title:'プールのふちを握って入る',kind:'think',label:'ふちを握る',cost:1,atk:2,attr:'ath',up:'ath',desc:'ふちを握って、ゆっくり入る。',hint:'掴まると、安心',icon:'hand'},
 kickPractice:{title:'けのびを練習する',kind:'think',label:'けのび',cost:1,atk:2,attr:'ath',up:'ath',desc:'壁を蹴って、伸びる練習。',hint:'けのびは、泳ぎの基本',icon:'runner'},
 tellCoach:{title:'「怖い」と先生に言う',kind:'talk',label:'怖いと言う',cost:1,bond:1,atk:2,attr:'ath',up:'ath',desc:'「水が怖い」と、先生に言う。',hint:'正直は、助けを呼ぶ',icon:'message'},
 tryFloat:{title:'浮く練習をする',kind:'think',label:'浮く練習',cost:1,atk:2,attr:'ath',up:'ath',desc:'浅いところで、浮いてみる。',hint:'浮くと、沈まないと分かる',icon:'check'},
 poolStep:{title:'一歩ずつ深いところへ',kind:'think',label:'一歩ずつ',cost:1,atk:2,attr:'ath',up:'ath',desc:'一歩ずつ、深いところへ進む。',hint:'一歩ずつは、現実的',icon:'up'},
 breatheUnder:{title:'水中で息を吐いてみる',kind:'think',label:'息を吐く',cost:1,atk:2,attr:'ath',up:'ath',desc:'水中で、ブクブク息を吐く。',hint:'吐けると、沈まない',icon:'ear'},
 goSlow:{title:'怖いなら、怖いまま少し',kind:'think',label:'怖いまま少し',cost:1,atk:2,attr:'ath',up:'ath',desc:'怖い気持ちのまま、少しだけやる。',hint:'怖いまま進むのも、勇気',icon:'heart'},
 quitRope:{title:'大縄をやめたい',kind:'think',label:'やめたい',cost:0,strain:1,atk:1,attr:'ath',desc:'みんなの前で失敗して、やめたい。',hint:'やめると、怖いまま',icon:'door'},
 jumpLate:{title:'後ろの方に並び直す',kind:'think',label:'後ろに並ぶ',cost:0,strain:1,atk:1,attr:'ath',desc:'目立たない、後ろに並び直す。',hint:'逃げると、跳べないまま',icon:'eye'},
 watchRope:{title:'ロープをよく見る',kind:'think',label:'よく見る',cost:1,atk:2,attr:'ath',up:'ath',desc:'ロープの回り方を、よく見る。',hint:'見ると、タイミングが分かる',icon:'eye'},
 edgeJump:{title:'端の方から入る',kind:'think',label:'端から入る',cost:1,atk:2,attr:'ath',up:'ath',desc:'真ん中じゃなく、端から入る。',hint:'端は、入りやすい',icon:'check'},
 smallRope:{title:'少人数で練習する',kind:'talk',label:'少人数で',cost:1,atk:2,attr:'soc',up:'soc',desc:'休憩時間に、少人数で練習する。',hint:'少人数は、失敗しにくい',icon:'people'},
 askRetry:{title:'「もう一回やりたい」と言う',kind:'talk',label:'もう一回',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'失敗しても、「もう一回」と言う。',hint:'リトライは、成長',icon:'message'},
 countBeat:{title:'「イチニ、イチニ」と拍子を数える',kind:'think',label:'拍子を数える',cost:1,atk:2,attr:'ath',up:'ath',desc:'拍子を数えて、入るタイミングを見る。',hint:'数えると、入りやすい',icon:'clock'},
 jumpWith:{title:'できる人の後に続いて跳ぶ',kind:'talk',label:'続いて跳ぶ',cost:1,bond:1,atk:2,attr:'ath',up:'ath',desc:'できる人の直後に、続いて跳ぶ。',hint:'ついていくと、跳びやすい',icon:'runner'},
 ropeStep:{title:'一歩ずつ慣れていく',kind:'think',label:'一歩ずつ',cost:1,atk:2,attr:'ath',up:'ath',desc:'失敗しても、一歩ずつ慣れる。',hint:'慣れは、時間がかかる',icon:'up'},
 shyFace:{title:'笑われたけど、それでも跳ぶ',kind:'think',label:'それでも跳ぶ',cost:1,atk:2,attr:'ath',up:'ath',desc:'失敗して笑われても、もう一回。',hint:'笑われても跳ぶのが、勇気',icon:'heart'},
 stayAlone:{title:'一人でじっと待つ',kind:'think',label:'じっと待つ',cost:0,strain:1,atk:1,attr:'soc',desc:'不安なまま、じっと待つ。',hint:'我慢だけは、つらい',icon:'clock'},
 boredWait:{title:'つまらなくてぼんやり',kind:'think',label:'ぼんやり',cost:0,strain:1,atk:1,attr:'soc',desc:'何もせず、ぼんやり過ごす。',hint:'時間が、もったいない',icon:'eye'},
 checkDoor2:{title:'戸締りを確認する',kind:'think',label:'戸締り確認',cost:1,atk:2,attr:'study',up:'study',desc:'窓とドアを、確かめて回る。',hint:'確認は、留守番の仕事',icon:'door'},
 quietJob:{title:'頼まれたことを丁寧に',kind:'think',label:'丁寧にやる',cost:1,atk:2,attr:'study',up:'study',desc:'頼まれたことを、丁寧にやる。',hint:'丁寧は、信頼を作る',icon:'check'},
 askStay:{title:'「不安」と正直に言う',kind:'talk',label:'不安と言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「一人だと不安」と、正直に言う。',hint:'正直は、助けを呼ぶ',icon:'message'},
 feelProud:{title:'「任された」と思う',kind:'think',label:'任された',cost:1,atk:2,attr:'soc',up:'soc',desc:'頼まれたのは、信頼だと考える。',hint:'信頼は、力になる',icon:'spark'},
 watchRoom:{title:'教室を見回る',kind:'think',label:'見回る',cost:1,atk:2,attr:'study',up:'study',desc:'教室の中を、見回る。',hint:'見回ると、安心',icon:'search'},
 tellMissed:{title:'「さびしかった」と後で言う',kind:'talk',label:'後で伝える',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'終わった後、「さびしかった」と伝える。',hint:'後で言うのも、正直',icon:'heart'},
 ownDuty:{title:'留守番を「自分の役目」と考える',kind:'think',label:'自分の役目',cost:1,atk:2,attr:'study',up:'study',desc:'留守番は、自分の役目と考える。',hint:'役目は、やりがい',icon:'flag'},
 finishDuty:{title:'戻ってきた人に報告する',kind:'talk',label:'報告する',cost:1,atk:2,attr:'soc',up:'soc',desc:'「変わりありません」と、報告する。',hint:'報告は、締めの仕事',icon:'message'},
 panicShoes:{title:'慌ててどうしようもない',kind:'think',label:'慌てる',cost:0,strain:1,atk:1,attr:'study',desc:'忘れて、慌ててしまう。',hint:'慌てるだけは、解決しない',icon:'bolt'},
 hideFeet:{title:'靴を隠して誤魔化す',kind:'think',label:'隠す',cost:0,strain:1,atk:1,attr:'study',desc:'靴下のまま、隠れて過ごす。',hint:'隠すと、見つかった時つらい',icon:'eye'},
 tellShoes:{title:'「忘れました」と先生に言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「上履きを忘れました」と正直に。',hint:'正直は、助けを呼ぶ',icon:'hand'},
 borrowShoes:{title:'備品の上履きを借りる',kind:'talk',label:'借りる',cost:1,atk:2,attr:'soc',up:'soc',desc:'学校の備品を、借りる。',hint:'借りるのも、解決策',icon:'people'},
 lostFound:{title:'落とし物箱を探す',kind:'think',label:'落とし物箱',cost:1,atk:2,attr:'study',up:'study',desc:'落とし物箱に、上履きがあるか探す。',hint:'探すと、見つかるかも',icon:'search'},
 askFriend8:{title:'友達に「貸して」と頼む',kind:'talk',label:'友達に頼む',cost:1,atk:2,attr:'soc',up:'soc',desc:'休み時間に、友達に貸してもらう。',hint:'頼るのも、勇気',icon:'message'},
 wearSocks:{title:'靴下のまま我慢する',kind:'think',label:'靴下で我慢',cost:1,atk:1,attr:'study',desc:'靴下のまま、一日我慢する。',hint:'我慢は、汚れる',icon:'clock'},
 ownShoes:{title:'「忘れた自分が悪い」と認める',kind:'think',label:'自分を認める',cost:1,atk:2,attr:'study',up:'study',desc:'忘れたのは自分と、認める。',hint:'認めると、次に進める',icon:'check'},
 checkBag2:{title:'明日は前日に確かめる',kind:'think',label:'前日確かめ',cost:1,atk:2,attr:'study',up:'study',desc:'明日から、前の日に持ち物を確かめる。',hint:'習慣は、忘れ物を防ぐ',icon:'list'},
 apologizeT:{title:'先生に「ごめんなさい」と言う',kind:'talk',label:'謝る',cost:1,atk:2,attr:'soc',up:'soc',desc:'忘れてごめんなさい、と言う。',hint:'謝ると、次が始まる',icon:'heart'},
 skipClean:{title:'掃除をサボって遊ぶ',kind:'think',label:'サボる',cost:0,strain:1,atk:1,attr:'soc',desc:'掃除をサボって、遊びに行く。',hint:'サボると、誰かが倍やる',icon:'bolt'},
 fakeBusy:{title:'忙しいふりをする',kind:'think',label:'忙しいふり',cost:0,strain:1,atk:1,attr:'soc',desc:'掃除せず、忙しいふりをする。',hint:'ふりは、バレるとつらい',icon:'eye'},
 smallClean:{title:'小さなところから始める',kind:'think',label:'小さく始める',cost:1,atk:2,attr:'study',up:'study',desc:'「まずここだけ」と、小さく始める。',hint:'小さく始めると、続く',icon:'check'},
 askEasy:{title:'「楽なところを担当して」と言う',kind:'talk',label:'楽なところ',cost:1,atk:2,attr:'soc',up:'soc',desc:'「今日は楽なところを」と、言う。',hint:'言えると、続く',icon:'message'},
 tiredSay:{title:'「疲れた」と正直に言う',kind:'talk',label:'疲れたと言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「疲れたから少し休む」と、言う。',hint:'正直は、助けを呼ぶ',icon:'heart'},
 quickClean:{title:'手早く片付ける',kind:'think',label:'手早く',cost:1,atk:2,attr:'ath',up:'ath',desc:'だらだらせず、手早くやる。',hint:'手早いと、早く終わる',icon:'bolt'},
 swapJob:{title:'担当を替えてもらう',kind:'talk',label:'担当を替える',cost:1,atk:2,attr:'soc',up:'soc',desc:'「担当替えて」と、頼んでみる。',hint:'替わると、やれる',icon:'people'},
 ownClean:{title:'「自分の担当」と考える',kind:'think',label:'自分の担当',cost:1,atk:2,attr:'study',up:'study',desc:'掃除は、自分の担当と考える。',hint:'担当は、やりがい',icon:'flag'},
 teamClean:{title:'「一緒にやろう」と声をかける',kind:'talk',label:'一緒に',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「一緒にやろう」と、声をかける。',hint:'一緒なら、楽',icon:'people'},
 doneClean:{title:'「終わった」と報告する',kind:'talk',label:'終わった報告',cost:1,atk:2,attr:'soc',up:'soc',desc:'終わったら、「できました」と言う。',hint:'報告は、達成感',icon:'check'},
 keepWait:{title:'何も言わず待ち続ける',kind:'think',label:'待ち続ける',cost:0,strain:1,atk:1,attr:'soc',desc:'言えずに、待ち続ける。',hint:'待つだけでは、戻らない',icon:'clock'},
 forgetIt:{title:'もう諦めてしまう',kind:'think',label:'諦める',cost:0,strain:1,atk:1,attr:'soc',desc:'返してもらうのを、諦める。',hint:'諦めると、もやもや残る',icon:'eye'},
 hintBack:{title:'「そろそろ」とほのめかす',kind:'talk',label:'ほのめかす',cost:1,atk:1,attr:'soc',desc:'「そろそろ使うから」と、ほのめかす。',hint:'遠回しは、伝わりにくい',icon:'ear'},
 sayBack:{title:'「返して」とはっきり言う',kind:'talk',label:'返してと言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'「返してほしい」と、はっきり言う。',hint:'はっきりは、失礼じゃない',icon:'message'},
 askTeacher3:{title:'先生に相談する',kind:'talk',label:'先生に相談',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「返してくれなくて」と、相談。',hint:'相談は、逃げじゃない',icon:'people'},
 writeNote:{title:'手紙で伝える',kind:'think',label:'手紙で伝える',cost:1,atk:2,attr:'study',up:'study',desc:'言いにくいから、手紙に書く。',hint:'書くと、伝えられる',icon:'pen'},
 setDate:{title:'「いつまでに」と約束する',kind:'talk',label:'期限を決める',cost:1,atk:2,attr:'soc',up:'soc',desc:'「いつまでに返す」を、決める。',hint:'期限は、安心',icon:'flag'},
 ownBound:{title:'「私のもの」と考え直す',kind:'think',label:'自分のもの',cost:1,atk:2,attr:'study',up:'study',desc:'自分のものだから、返してもらう権利がある。',hint:'権利は、主張していい',icon:'check'},
 stayKind:{title:'優しく返してと頼む',kind:'talk',label:'優しく頼む',cost:1,atk:2,attr:'soc',up:'soc',desc:'怒らず、優しく返してと言う。',hint:'優しくても、伝わる',icon:'sun'},
 returnRule:{title:'次から貸す時は期限を決める',kind:'think',label:'次のルール',cost:1,atk:2,attr:'study',up:'study',desc:'貸す時、「いつ返す」を決める習慣。',hint:'ルールは、予防',icon:'list'},
 behindFeel:{title:'置いていかれた気持ちのまま',kind:'think',label:'置いていかれた',cost:0,strain:1,atk:1,attr:'study',desc:'置いていかれた気持ちで、授業を受ける。',hint:'気持ちのままは、つらい',icon:'eye'},
 lostLesson:{title:'分からないまま流される',kind:'think',label:'流される',cost:0,strain:1,atk:1,attr:'study',desc:'分からないのに、流されてしまう。',hint:'流されると、抜け落ちる',icon:'door'},
 copyNote:{title:'友達のノートを借りる',kind:'talk',label:'ノートを借りる',cost:1,atk:2,attr:'study',up:'study',desc:'休んだ分のノートを、借りる。',hint:'借りると、追いつける',icon:'book'},
 askCover:{title:'「どこまでやった？」と聞く',kind:'talk',label:'範囲を聞く',cost:1,atk:2,attr:'study',up:'study',desc:'休んだ間の範囲を、聞く。',hint:'範囲が分かれば、追いつける',icon:'search'},
 tellBack:{title:'「休んでて分かりません」と言う',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「休んでたから分かりません」と、正直に。',hint:'正直は、助けを呼ぶ',icon:'hand'},
 homeStudy:{title:'家で休んだ分をやる',kind:'think',label:'家でやる',cost:1,atk:2,attr:'study',up:'study',desc:'家で、休んだ分をやっておく。',hint:'家での習慣は、追いつく',icon:'sun'},
 catchSmall:{title:'分かるところから一つずつ',kind:'think',label:'一つずつ',cost:1,atk:2,attr:'study',up:'study',desc:'分かるところから、一つずつ。',hint:'一つずつは、現実的',icon:'up'},
 askSheet:{title:'先生にプリントをもらう',kind:'talk',label:'プリントをもらう',cost:1,atk:2,attr:'study',up:'study',desc:'休んだ分のプリントを、もらう。',hint:'もらうと、復習できる',icon:'cards'},
 askClassmate:{title:'隣の人に「ここ」と聞く',kind:'talk',label:'隣に聞く',cost:1,atk:2,attr:'soc',up:'soc',desc:'隣の人に、「ここって」と聞く。',hint:'聞くは、失礼じゃない',icon:'people'},
 ownPace4:{title:'無理せず追いつく',kind:'think',label:'自分のペース',cost:1,atk:2,attr:'study',up:'study',desc:'焦らず、自分のペースで追いつく。',hint:'ペースが、続く',icon:'clock'},
 quietStay:{title:'黙ったまま過ごす',kind:'think',label:'黙ったまま',cost:0,strain:1,atk:1,attr:'soc',desc:'何も言わず、黙ったまま過ごす。',hint:'黙ると、置いていかれる',icon:'eye'},
 nodOnly:{title:'頷くだけで済ませる',kind:'think',label:'頷くだけ',cost:0,strain:1,atk:1,attr:'soc',desc:'意見を言わず、頷くだけにする。',hint:'頷くだけでは、伝わらない',icon:'check'},
 smallIdea:{title:'小さな意見を一つ言う',kind:'talk',label:'小さな意見',cost:1,atk:2,attr:'soc',up:'soc',desc:'小さな意見でいいから、一つ言う。',hint:'一言は、参加の始まり',icon:'message'},
 askQ2:{title:'質問だけしてみる',kind:'talk',label:'質問だけ',cost:1,atk:2,attr:'soc',up:'soc',desc:'「これはどう？」と、質問だけ。',hint:'質問も、意見の一つ',icon:'ear'},
 writeIdea:{title:'付箋に書いて出す',kind:'think',label:'付箋に書く',cost:1,atk:2,attr:'study',up:'study',desc:'言えないから、付箋に書いて出す。',hint:'書くと、伝えられる',icon:'pen'},
 askSpace:{title:'「私も言っていい？」と聞く',kind:'talk',label:'言っていい？',cost:1,atk:2,attr:'soc',up:'soc',desc:'「私も言っていい？」と、隙間を聞く。',hint:'聞くと、場が開く',icon:'hand'},
 sayOne:{title:'一言だけ口に出す',kind:'talk',label:'一言だけ',cost:1,atk:2,attr:'soc',up:'soc',desc:'考えたことの、一言だけ出す。',hint:'一言も、勇気',icon:'spark'},
 agreeOut:{title:'「私もそう思う」と同調',kind:'talk',label:'同調する',cost:1,atk:1,attr:'soc',desc:'「私もそう思う」と、同調する。',hint:'同調は、入口',icon:'people'},
 listenRole:{title:'聞く役を果たす',kind:'think',label:'聞く役',cost:1,atk:2,attr:'soc',up:'soc',desc:'話せなくても、聞く役を果たす。',hint:'聞くのも、貢献',icon:'ear'},
 shareOpinion:{title:'自分の考えを口にする',kind:'talk',label:'考えを言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'自分の考えを、口にする。',hint:'言うのは、勇気',icon:'heart'},
 tripWorry:{title:'不安なまま遠足へ',kind:'think',label:'不安なまま',cost:0,strain:1,atk:1,attr:'ath',desc:'不安なまま、遠足に行く。',hint:'不安だけでは、楽しくない',icon:'eye'},
 packEarly:{title:'荷物は前の日に',kind:'think',label:'前日準備',cost:1,atk:2,attr:'study',up:'study',desc:'荷物を、前の日に準備する。',hint:'準備は、不安を減らす',icon:'list'},
 nearT:{title:'先生の近くで行動する',kind:'think',label:'先生の近く',cost:1,atk:2,attr:'soc',up:'soc',desc:'不安なら、先生の近くにいる。',hint:'近くは、安心',icon:'people'},
 buddyRule:{title:'バディ（相棒）と一緒に',kind:'talk',label:'相棒と一緒',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'決まった相棒と、一緒に行動。',hint:'二人は、迷子防止',icon:'people'},
 mapCheck:{title:'行き先の地図を確かめる',kind:'think',label:'地図を確かめる',cost:1,atk:2,attr:'study',up:'study',desc:'行き先の地図を、確かめておく。',hint:'知ると、不安が減る',icon:'search'},
 tellAnxious:{title:'「不安」と先生に言う',kind:'talk',label:'不安を言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「ちょっと不安です」と、正直に。',hint:'正直は、助けを呼ぶ',icon:'hand'},
 followLead:{title:'グループのリーダーについていく',kind:'think',label:'ついていく',cost:1,atk:2,attr:'ath',up:'ath',desc:'リーダーの後に、ついていく。',hint:'ついていくと、迷わない',icon:'runner'},
 toiletAsk:{title:'トイレの場所を確かめる',kind:'talk',label:'トイレ確認',cost:1,atk:2,attr:'study',up:'study',desc:'先に、トイレの場所を確かめる。',hint:'確かめると、安心',icon:'search'},
 ownPace5:{title:'疲れたら自分のペースで',kind:'think',label:'自分のペース',cost:1,atk:2,attr:'ath',up:'ath',desc:'疲れたら、自分のペースで行く。',hint:'ペースが、続く',icon:'clock'},
 enjoyTrip:{title:'楽しむことに集中する',kind:'think',label:'楽しむ',cost:1,atk:2,attr:'ath',up:'ath',desc:'不安より、楽しむことに集中。',hint:'楽しむは、気持ちを上げる',icon:'sun'},
 lendAgain:{title:'また黙って貸す',kind:'think',label:'黙って貸す',cost:0,strain:1,atk:1,attr:'soc',desc:'断れず、また貸してしまう。',hint:'貸すだけでは、気持ちが溜まる',icon:'eye'},
 sayNo3:{title:'「ごめん、今日は」と断る',kind:'talk',label:'断る',cost:1,atk:2,attr:'soc',up:'soc',desc:'「ごめん、今日は」と、優しく断る。',hint:'断るのも、大切',icon:'hand'},
 lendOnce:{title:'今日だけ貸して明日は断る',kind:'talk',label:'今日だけ',cost:1,atk:2,attr:'soc',up:'soc',desc:'今日だけ貸して、明日からは断る。',hint:'一回は、折り合い',icon:'clock'},
 explainWhy2:{title:'「私も使うから」と理由を言う',kind:'talk',label:'理由を言う',cost:1,atk:2,attr:'soc',up:'soc',desc:'「私も使うから」と、理由を言う。',hint:'理由があれば、分かりやすい',icon:'message'},
 offerAlt:{title:'別のものを勧める',kind:'talk',label:'別を勧める',cost:1,atk:2,attr:'soc',up:'soc',desc:'「これなら」と、別を勧める。',hint:'代替案は、親切',icon:'cards'},
 honestNo2:{title:'「貸しすぎは嫌」と正直',kind:'talk',label:'正直に言う',cost:1,bond:1,atk:2,attr:'soc',up:'soc',desc:'「貸しすぎは嫌かも」と、正直に。',hint:'正直は、関係を守る',icon:'heart'},
 keepBoundary:{title:'自分のものは自分で守る',kind:'think',label:'境界を守る',cost:1,atk:2,attr:'soc',up:'soc',desc:'自分のものは、自分で守る。',hint:'守るのは、権利',icon:'list'},
 feelUsed:{title:'モヤモヤを認める',kind:'think',label:'モヤモヤ認める',cost:1,atk:2,attr:'soc',up:'soc',desc:'貸しすぎのモヤモヤを、認める。',hint:'認めると、次が見える',icon:'puzzle'},
 lendLimit:{title:'貸す回数を決める',kind:'think',label:'回数を決める',cost:1,atk:2,attr:'study',up:'study',desc:'何回まで貸すか、決めておく。',hint:'決めると、迷わない',icon:'list'},
 smileSay:{title:'笑顔で「ダメ」と言う',kind:'talk',label:'笑顔で断る',cost:1,atk:2,attr:'soc',up:'soc',desc:'笑顔のまま、「ダメ」と言う。',hint:'優しさは、伝わる',icon:'sun'},
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
function grant(s,id){if(!s.hand.includes(id)&&!s.used.includes(id))s.hand.push(id);add(s.discovered,id)}
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
 bg:'class', title:'ふたりで作ったはずなのに',nav:'クラスの子とのケンカ',num:'01',attrs:['soc'],
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
 bg:'field', title:'あと一週間、どうしよう',nav:'苦手な運動会',num:'02',attrs:['ath','soc'],
 goals:['不安の理由を知りたい','自分に合う参加をしたい','困ったときに備えたい'],
 chapters:['運動会まで7日','練習の日','運動会当日'],locations:['教室・帰りの会','校庭・練習の日','校庭・運動会当日'],
 base:['practice','schedule','sora','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'あせりの霧',hp:4,power:0,turns:4,look:'あせりが、足元にまとわりつく。'},{name:'プレッシャーの壁',hp:5,power:1,turns:5,look:'見られる気配が、壁のように立ちはだかる。'},{name:'本番の大男',hp:6,power:1,turns:5,look:'本番の重圧が、目の前に立っている。',special:[{text:'失敗したところを、見られてしまった。',mind:1},{text:'次の動きが、分からなくなった。',debuff:'ath'}]}],
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
 bg:'paper', title:'あと少しで、算数テスト',nav:'苦手な教科のテスト',num:'03',attrs:['study'],
 goals:['不安の理由を知りたい','自分に合う準備をしたい','落ち着いて取り組みたい'],
 chapters:['テスト一週間前','勉強の日','テスト当日'],locations:['教室・帰りの会','教室・放課後','教室・テスト当日'],
 base:['range','breathe','easyFirst','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'不安の影',hp:3,power:0,turns:4,look:'不安が、ノートの上をうろついている。'},{name:'わからない山',hp:4,power:1,turns:5,look:'分からないところが、山になっている。'},{name:'テスト大王',hp:5,power:1,turns:5,look:'プリントの向こうから、大王がにらんでいる。',special:[{text:'難問にぶつかって、手が止まった。',mind:1},{text:'書き間違いに気づいて、やり直しになった。',energy:1}]}],
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
 bg:'yard', title:'はいってもいい？',nav:'友達の遊びに入りたい',num:'04',attrs:['soc'],
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
 bg:'class', title:'おれがやったんじゃない',nav:'していないことを疑われた',num:'05',attrs:['soc','study'],
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
 bg:'yard', title:'トゲのことば',nav:'友達に嫌なことを言われた',num:'06',attrs:['soc'],
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
 bg:'yard', title:'今日は一人でいたい',nav:'一人でいたいのに誘われた',num:'07',attrs:['soc'],
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
 bg:'yard', title:'負けた！ どうする',nav:'ゲームに負けた',num:'08',attrs:['soc','ath'],
 goals:['悔しさを乗りこなしたい','相手を認めたい','次につなげたい'],
 chapters:['休み時間のドッジボール','放課後','次の日'],locations:['校庭・ドッジボール','教室・放課後','校庭・朝'],
 base:['rematch','quitGame','sourFace','anger','boast'],start:{mind:4,energy:4},
 monsters:[{name:'悔しさの炎',hp:4,power:1,turns:4,look:'負けた悔しさが、胸に火をつける。'},{name:'くやしさの鎖',hp:5,power:1,turns:5,look:'「また負けるかも」が、鎖になって足を引く。'},{name:'再戦魔王',hp:6,power:1,turns:5,look:'「もう一度」の誘惑が、大きくのしかかる。',acts:['stress','seal','stress','special','seal']}],
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
 bg:'class', title:'急に、予定が変わった',nav:'予定が変わった',num:'09',attrs:['soc','study'],
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
 bg:'class', title:'手を挙げても、当てられない',nav:'当てられない',num:'10',attrs:['study','soc'],
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
  if(id==='stopHand'){f.stopped=true;grant(s,'otherRole');text='手を挙げるのを、やめた。\n期待はなくなった。でも、少しさみしい。';meaning='やめると楽になる。でも、参加からは少し離れる。'}
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
 bg:'class', title:'物を勝手に使われた',nav:'貸し借り',num:'11',attrs:['soc','study'],
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
 bg:'class', title:'納得いかない注意',nav:'注意された',num:'12',attrs:['soc','study'],
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
 bg:'class', title:'宿題を忘れた朝',nav:'忘れ物',num:'13',attrs:['study','soc'],
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
 bg:'class', title:'落ち込んでいる友達',nav:'友達を助ける',num:'14',attrs:['soc'],
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
 bg:'paper', title:'授業で分からない',nav:'分からない',num:'15',attrs:['study','soc'],
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
 bg:'class', title:'まわりがうるさい',nav:'音がつらい',num:'16',attrs:['soc','study'],
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
 bg:'field', title:'選ばれなかった役割',nav:'役割と順番',num:'17',attrs:['ath','soc'],
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
 bg:'yard', title:'ズルを見てしまった',nav:'ズルを見た',num:'18',attrs:['soc','study'],
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
 bg:'class', title:'クラス替えで知らない子ばかり',nav:'クラス替え',num:'19',attrs:['soc'],
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
 bg:'class', title:'みんなの前で読む番',nav:'前で読む',num:'20',attrs:['soc','study'],
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
 bg:'lunch', title:'牛乳をこぼして皆に見られた',nav:'ミスの恥ずかしさ',num:'21',attrs:['soc','ath'],
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
  if(id==='wipeGood'){f.wipedGood=true;f.clearedM=true;note(s,'拭き方を聞いて、きれいにふけた。');grant(s,'mopUp');text='教えてもらったとおりにふいたら、\n床がきれいになった。';meaning='拭き方を聞くと、早くきれいになる。'}
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
 bg:'class', title:'2人組で余った',nav:'ペアで余る',num:'22',attrs:['soc'],
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
 bg:'yard', title:'約束を忘れられていた',nav:'約束破り',num:'23',attrs:['soc'],
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
 bg:'class', title:'係当番をサボられた',nav:'当番サボられ',num:'24',attrs:['soc','ath'],
 goals:['当番の仕事を終わらせたい','一人で抱え込まない','次から公平にしたい'],
 chapters:['放課後・当番','仕事中','翌日'],locations:['教室・放課後','教室・仕事','教室・翌日'],
 base:['doAll','slackOff','complainD','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'残った仕事の山',hp:4,power:0,turns:4,look:'机の山が、まだ残っている。'},{name:'ずるいの影',hp:5,power:1,turns:5,look:'「ずるい」の気持ちが、大きくなる。'},{name:'疲れの重さ',hp:6,power:1,turns:5,look:'一人でやる疲れが、重くのしかかる。'}],
 talk:[['slacker','サボった子に声をかける','逃げた相手に、声をかける。'],['teacherD2','先生に相談','一人で抱えず、先生に伝える。']],
 think:[['unfairD','ずるいと思う','一人だけ働くのは、不公平。'],['tired','疲れてきた','一人では、疲れてしまう。'],['dutyOK','当番自体は嫌じゃない','仕事は嫌じゃない、一人が嫌だ。']],
 reasonKeys:['unfairD','tired','dutyOK'],
 stageGrants:[['switchJob','finishWell'],[]],
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
 bg:'class', title:'自分のうわさが流れている',nav:'うわさ',num:'25',attrs:['soc'],
 goals:['うわさを止めたい','落ち着いていたい','関係を守りたい'],
 chapters:['休み時間','うわさの広がり','翌日'],locations:['教室・休み時間','廊下・うわさ','教室・翌日'],
 base:['denyR','snapBack','pretendR','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'ささやきの群れ',hp:4,power:0,turns:4,look:'あっちこっちで、こそこそ声がする。'},{name:'大きくなるうわさ',hp:5,power:1,turns:5,look:'うわさが、伝わるたびに大きくなる。'},{name:'みんなの目',hp:6,power:1,turns:5,look:'みんなの目が、こっちを見ている気がする。',acts:['stress','special','stress','seal','special']}],
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
 bg:'lunch', title:'苦手なものが給食に出た',nav:'苦手な給食',num:'26',attrs:['soc'],
 goals:['少しでも食べたい','無理せず向き合いたい','食べるのが楽しみになる日にしたい'],
 chapters:['給食の時間','食べる時間','午後'],locations:['教室・給食','机・食事','教室・午後'],
 base:['forceAll','hideFood','swapFood','anger','ignore'],start:{mind:5,energy:4},
 monsters:[{name:'苦手な一品',hp:3,power:0,turns:4,look:'皿にのった、苦手な食べもの。'},{name:'みんなの視線',hp:4,power:1,turns:5,look:'残すのを、見られる気がする。'},{name:'給食への苦手意識',hp:5,power:1,turns:5,look:'給食の時間が、憂うつになる感じ。',acts:['stress','wait','special','stress','seal']}],
 talk:[['teacherL','先生に言う','苦手なことを、先生に伝える。'],['friendL','友達に聞く','好きな子に、食べ方を聞く。']],
 think:[['shame','残すのが恥ずかしい','残すのを見られたくない。'],['texture','食感が苦手','口の中の感じが、無理。'],['fearTry','食べるのが怖い','一口すら、入れたくない。']],
 reasonKeys:['shame','texture','fearTry'],
 stageGrants:[['askWhyFood','askCook','fullTry'],[]],
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
 bg:'class', title:'友達に嘘をついてしまった',nav:'嘘をついた',num:'27',attrs:['soc'],
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
 bg:'field', title:'リレー選手に選ばれた',nav:'リレー選手',num:'28',attrs:['ath','soc'],
 goals:['本番を走り切りたい','チームに貢献したい','走るのが楽しみになりたい'],
 chapters:['放課後の発表','練習日','運動会当日'],locations:['教室・発表','グラウンド・練習','グラウンド・本番'],
 base:['pushHard','dreadRun','skipPractice','anger','ignore'],start:{mind:4,energy:4},
 monsters:[{name:'プレッシャーの影',hp:3,power:0,turns:4,look:'選ばれた重みが、のしかかる。'},{name:'みんなの期待',hp:4,power:1,turns:5,look:'チームの期待が、目に見える。'},{name:'失敗への不安',hp:5,power:1,turns:5,look:'転んだら・遅かったら、どうしよう。'}],
 talk:[['captain','キャプテンに聞く','リレーのコツを、キャプテンに聞く。'],['teacherRe','先生に相談','不安なことを、先生に言う。']],
 think:[['fearFall','転んだらどうしよう','本番で転ぶことを、想像する。'],['slowSelf','足が遅い','自分の走りに、自信がない。'],['teamPress','みんなに迷惑','チームに迷惑をかけそう。']],
 reasonKeys:['fearFall','slowSelf','teamPress'],
 stageGrants:[['askPace','batonPass'],['relayRun']],
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
 bg:'paper', title:'休んで授業に遅れた',nav:'授業の遅れ',num:'29',attrs:['study','soc'],
 goals:['授業に追いつきたい','分からないところを減らしたい','休んでも大丈夫な自分になりたい'],
 chapters:['登校日','休み時間','放課後'],locations:['教室・朝','教室・休み','教室・放課後'],
 base:['panicLate','hideLate','copyOnly','anger','ignore'],start:{mind:5,energy:4},
 monsters:[{name:'たまった連絡',hp:3,power:0,turns:4,look:'休んだ分の連絡が、たまっている。'},{name:'授業の遅れ',hp:4,power:1,turns:5,look:'みんなは、もう先に進んでいる。'},{name:'追いつけない不安',hp:5,power:1,turns:5,look:'追いつけない気がして、焦る。'}],
 talk:[['friendSick','友達に聞く','休んだ日のことを、友達に聞く。'],['teacherSick','先生に相談','遅れていることを、先生に言う。']],
 think:[['dontKnow','どこから分からない？','どこが分からないか、分からない。'],['shyAskS','聞くのが恥ずかしい','遅れたのを、知られたくない。'],['tooMuch','量が多すぎる','たまった分が、多すぎる。']],
 reasonKeys:['dontKnow','shyAskS','tooMuch'],
 stageGrants:[['catchPlan'],['caughtUp']],
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
 bg:'class', title:'図工の作品が壊れた',nav:'図工の作品',num:'30',attrs:['study'],
 goals:['作品を完成させたい','うまくいかないときの自分を知りたい','失敗しても、やり直せる自分になりたい'],
 chapters:['図工の時間','放課後','次の図工'],locations:['図工室','家・帰り道','図工室'],
 base:['coverUp','throwAway','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'グシャグシャの影',hp:4,power:1,turns:4,look:'のりがはみ出して、形が崩れている。'},{name:'モヤモヤの影',hp:4,power:1,turns:4,look:'直せる気がしない。考えが、まとまらない。'},{name:'コワバリの影',hp:6,power:2,turns:5,look:'出すのがこわい。手が、固まっている。'}],
 talk:[['teacherArt','先生に相談','どう直すか、先生に聞く。'],['friendArt','友達に見てもらう','壊れた作品を、友達に見せる。'],['skillKid','図工が得意な子に聞く','上手な子の、作り方を聞く。']],
 think:[['perfect','完璧じゃなきゃ嫌','直しても、元どおりにならない。'],['noTime','直す時間がない','次の図工まで、時間がない。'],['gaveUp','もう作りたくない','壊れて、作る気がなくなった。']],
 reasonKeys:['perfect','noTime','gaveUp'],
 stageGrants:[['mendBit'],['finishWork','fixIdea','forceSubmit']],
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
},

// STORY 31 ── 跳び箱が跳べない ──
vault:{
 bg:'gym', title:'跳び箱が跳べない',nav:'跳び箱',num:'31',attrs:['ath'],
 goals:['跳び箱を跳びたい','跳べないときの自分を知りたい','練習のしかたを見つけたい'],
 chapters:['体育の時間','休み時間','次の体育'],locations:['体育館','体育館・休み','体育館'],
 base:['skipTurn','crash','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'カベの影',hp:4,power:1,turns:4,look:'跳び箱が、大きなカベに見える。'},{name:'チカラヌケの影',hp:4,power:1,turns:4,look:'みんなは跳べるのに、自分だけ。力が抜ける。'},{name:'コワイの影',hp:6,power:2,turns:5,look:'助走の先の跳び箱が、こわい。'}],
 talk:[['coachAsk','先生にコツを聞く','跳び方のコツを、先生に聞く。'],['mateWatch','跳べる子に聞く','跳べる子の、やり方を聞く。'],['mateTogether','友達と練習する','休み時間、一緒に練習する。']],
 think:[['fearFall','着地がこわい','跳んだあと、こけるのがこわい。'],['tooHigh','高すぎる','跳び箱が、高すぎる。'],['slowRun','助走が遅い','走るのが遅くて、勢いがない。']],
 reasonKeys:['fearFall','tooHigh','slowRun'],
 stageGrants:[['splitJump'],['clearJump','bigTry']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='coachAsk'){s.flags.tipped=true;note(s,'先生にコツを聞いたら、「手をついて、足を開く」と分かった。');out.text='先生「手をついて、足を開くだけでいいよ」\nコツが、分かった。';out.card='askCoach'}
  if(key==='mateWatch'){s.flags.tipped=true;note(s,'跳べる子の踏み切りを見たら、真似できそう。');out.text='「跳ぶ前に、ぐっと踏み切るんだ」\n踏み切りを、真似できそう。';out.card='copyMove'}
  if(key==='mateTogether'){s.flags.hasMate=true;relation(s,'友達と練習することにした。');out.text='「一緒にやろう！」\n友達と、練習することにした。';out.card='together'}
  if(key==='fearFall'){s.reason='fearFall';note(s,'着地がこわいなら、手のつき方から練習できる。');out.text='「着地が、こわい」\n手のつき方から、練習できる。';out.card='handsFirst'}
  if(key==='tooHigh'){s.reason='tooHigh';note(s,'高いなら、低い段から練習できる。');out.text='「高すぎる」\n低い段からなら、始められる。';out.card='splitJump'}
  if(key==='slowRun'){s.reason='slowRun';note(s,'助走が遅いなら、踏み切りから練習できる。');out.text='「助走が、遅い」\n踏み切りから、練習できる。';out.card='copyMove'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='skipTurn'){f.skipped=true;s.mind-=1;relation(s,'順番をやり過ごしたら、少し楽になった。でも、跳べないまま。');text='自分の番を、やり過ごした。\n少し楽になった。でも、跳べないまま。';meaning='やり過ごすと、跳べないまま。';grant(s,'askCoach')}
  if(id==='crash'){f.crashed=true;s.mind-=1;relation(s,'勢いだけで跳んだら、ひっかかった。');text='勢いだけで、跳んだ。\n足がひっかかって、ころんだ。';meaning='勢いだけでは、跳べない。';grant(s,'splitJump')}
  if(id==='askCoach'){f.tipped=true;note(s,'コツを聞いたら、何を練習すればいいか分かった。');text='「手をついて、足を開く」\n何を練習するか、分かった。';meaning='コツが分かれば、練習できる。'}
  if(id==='copyMove'){f.tipped=true;f.practiced=true;note(s,'踏み切りを真似したら、勢いがついた。');text='跳べる子の、踏み切りを真似した。\n「勢いが、ついた」';meaning='真似ると、コツがつかめる。'}
  if(id==='splitJump'){f.practiced=true;note(s,'低い段から練習したら、跳べそうになった。');text='低い段から、練習した。\n「これなら、跳べる」';meaning='低いところから、自信がつく。'}
  if(id==='handsFirst'){f.practiced=true;note(s,'手のつき方を練習したら、着地がこわくなくなった。');text='手のつき方だけ、練習した。\n「手がつけば、こわくない」';meaning='部分練習で、こわさが減る。'}
  if(id==='together'){f.practiced=true;f.hasMate=true;relation(s,'友達と練習したら、楽しく続けられた。');text='友達と、一緒に練習した。\n「もう一回、やろう」';meaning='一人より、一緒が続く。'}
  if(id==='bigTry'){if(f.tipped||f.practiced){f.bigJumped=true;note(s,'思いっきり跳んだら、あと少しまでいけた。');text='思いっきり、跳んだ。\n「あと、少し！」';meaning='準備があれば、思いっきりいける。'}else{s.mind-=1;text='思いっきり跳んだが、やり方が分からずひっかかった。';meaning='まずコツや練習をしてから、跳ぶと良い。';grant(s,'splitJump')}}
  if(id==='clearJump'){if(f.tipped||f.practiced){f.cleared=true;note(s,'跳び箱を、跳び越えられた。');text='跳び箱を、跳び越えた！\n「できた！」';meaning='跳べた経験は、自信になる。'}else{s.mind-=1;text='跳び越えようとしたが、準備が足りなかった。';meaning='まず練習してから、跳び越えると良い。';grant(s,'askCoach')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '跳び箱が、大きなカベに見える。';
  if(s.stage===1)return 'みんなは跳べるのに、自分だけ。';
  return '次の体育。跳び箱が、待っている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'体育の時間。跳び箱の練習が、始まった。',speaker:'先生',quote:'順番に、跳んでみよう',look:'跳び箱が、大きく見える。',self:'跳べるかな…',hint:'跳べないとき、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。みんなは、跳べている。',speaker:'友達',quote:f.practiced?'いい感じだね！':'一緒に練習する？',look:'跳び箱が、待っている。',self:s.reason==='fearFall'?'着地が、こわい。':s.reason==='tooHigh'?'高すぎる。':s.reason==='slowRun'?'助走が遅い。':'どう練習しよう…',hint:'コツを聞く・低く練習・手つき・真似・一緒に、方法はある。'};
  return {narrative:'次の体育。跳び箱が、並んでいる。',speaker:'先生',quote:f.cleared?'跳べたね！':'もう一度、跳んでみる？',look:'跳び箱が、待っている。',self:f.practiced?'練習したから、いける。':'まだ、こわい。',hint:'練習の成果で、跳び越えよう。'};
 },
 progress(s){const f=s.flags;return f.cleared||f.bigJumped?3:f.practiced||f.tipped?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.cleared?'跳び越えられた。練習の成果が出た。':f.practiced||f.tipped?'練習のしかたが見つかった。コツ・低く・手つき・真似・一緒に。':'跳べないまま。練習のしかたは見つけられる。'}
},

// STORY 32 ── 学級会で提案が通らない ──
meeting:{
 bg:'class', title:'学級会で提案が通らない',nav:'提案が通らない',num:'32',attrs:['soc','study'],
 goals:['提案を通したい','反対されたときの自分を知りたい','聞いて練る力をつけたい'],
 chapters:['学級会','休み時間','次の学級会'],locations:['教室','教室・休み','教室'],
 base:['withdraw','insist','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'ハンタイの影',hp:4,power:1,turns:4,look:'反対の手が、いっぱい上がった。'},{name:'フカイの影',hp:4,power:1,turns:4,look:'通らなかった理由が、ふかく考えさせられる。'},{name:'ゴネルの影',hp:6,power:2,turns:5,look:'もう一度言うのが、少しこわい。'}],
 talk:[['askOppose','反対した子に聞く','なぜ反対したか、聞く。'],['teacherMeet','先生に相談','提案の通し方を、先生に聞く。'],['allyTalk','賛成した子と話す','賛成してくれた子と、案を練る。']],
 think:[['whyNo','なぜ反対された？','反対された理由を、考える。'],['notMine','独りよがりだった？','自分だけの提案だったかも。'],['badWords','言い方が強すぎた？','「こうすべき」と、言いすぎたかも。']],
 reasonKeys:['whyNo','notMine','badWords'],
 stageGrants:[['askReason','nextPlan'],['rePropose','acceptNo']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='askOppose'){s.flags.askedO=true;relation(s,'反対した子に聞いたら、「みんなが困るから」と言われた。');out.text='「それだと、掃除の時間がなくなるよ」\n反対の理由が、分かった。';out.card='askReason'}
  if(key==='teacherMeet'){s.flags.toldM=true;note(s,'先生に「みんなの意見を聞いてから」と言われた。');out.text='先生「まず、みんなの意見を聞こう」\n通し方の、ヒントをもらった。';out.card='hearAll'}
  if(key==='allyTalk'){s.flags.allyed=true;relation(s,'賛成した子と話したら、案が固まった。');out.text='「私も、そう思う」\n仲間と、案を練った。';out.card='allyUp'}
  if(key==='whyNo'){s.reason='whyNo';note(s,'反対の理由を聞けば、案の直し方が分かる。');out.text='「なぜ、反対された？」\n理由を聞けば、直し方が分かる。';out.card='listenMore'}
  if(key==='notMine'){s.reason='notMine';note(s,'みんなの意見を聞いてから、案を練ればいい。');out.text='「独りよがりだったかも」\nみんなの意見を、聞こう。';out.card='hearAll'}
  if(key==='badWords'){s.reason='badWords';note(s,'言い方を変えれば、伝わり方が変わる。');out.text='「言い方が、強すぎたかも」\nやわらかい言い方で、言おう。';out.card='soften'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='withdraw'){f.withdrew=true;s.mind-=1;relation(s,'黙って引き下がったら、楽になった。でも、提案は通らなかった。');text='黙って、引き下がった。\n楽になった。でも、提案は通らない。';meaning='引き下がると楽だが、提案は消える。';grant(s,'listenMore')}
  if(id==='insist'){f.insisted=true;s.mind-=1;s.rep-=1;relation(s,'言い張ったら、余計に反対された。');text='そのまま、言い張った。\n余計に、反対された。';meaning='言い張るだけでは、通らない。';grant(s,'listenMore')}
  if(id==='listenMore'){f.heard=true;note(s,'反対の理由を聞いたら、案の直し方が見えた。');text='「掃除の時間が、なくなるから」\n直し方が、見えた。';meaning='反対の理由が、直しのヒント。'}
  if(id==='hearAll'){f.heardAll=true;f.heard=true;relation(s,'みんなの意見を聞いたら、いい案が固まった。');text='いろいろな意見を、聞いた。\n「こうすれば、いいかも」';meaning='聞くほど、案が固まる。'}
  if(id==='soften'){f.softened=true;note(s,'やわらかい言い方にしたら、聞いてもらえた。');text='「こう思うんだけど、どうかな」\n聞いてもらえた。';meaning='言い方で、伝わり方が変わる。'}
  if(id==='askReason'){f.askedO=true;f.heard=true;relation(s,'反対した子に聞いたら、理由が分かった。');text='「だって、時間が足りないよ」\n理由が、分かった。';meaning='理由を聞けば、次が見える。'}
  if(id==='nextPlan'){f.planned=true;note(s,'みんなの意見をいれた別案ができた。');text='「掃除の時間を残して、こうしよう」\n別案が、できた。';meaning='別案は、両方のいいとこ取り。'}
  if(id==='allyUp'){f.allyed=true;f.heard=true;relation(s,'仲間と練ったら、案が強くなった。');text='「ここを、こう直そう」\n仲間と、案を練った。';meaning='仲間と練ると、強くなる。'}
  if(id==='rePropose'){if(f.heard||f.planned||f.softened||f.allyed){f.reProposed=true;note(s,'直した案を提案したら、賛成が増えた。');text='「みんなの意見をいれて、こうしました」\n賛成の手が、増えた。';meaning='聞いた分だけ、通りやすい。'}else{s.mind-=1;text='直した案を出そうとしたが、まだ聞けていなかった。';meaning='まず聞いて練ってから、提案すると良い。';grant(s,'listenMore')}}
  if(id==='acceptNo'){if(f.heard||f.softened){f.accepted=true;note(s,'通らなくても、次につなげると決めた。');text='「今回は通らなかったけど、次がある」\n受け入れて、前を向いた。';meaning='受け入れるのも、作戦。'}else{s.mind-=1;text='受け入れようとしたが、納得できなかった。';meaning='まず理由を聞いてから、受け入れると良い。';grant(s,'listenMore')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '反対の手が、いっぱい上がった。';
  if(s.stage===1)return '通らなかった理由を、考える時間。';
  return '次の学級会。もう一度、言えるかな。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'学級会。自分の提案に、反対が集まった。',speaker:'学級委員',quote:'反対の人が多いです。他にありますか',look:'反対の手が、いっぱい上がっている。',self:'え、通らないの…？',hint:'提案が通らないとき、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。通らなかった理由を、考える。',speaker:'友達',quote:f.heard?'理由、聞けた？':'なんで反対されたんだろ',look:'黒板に、自分の提案の字が残っている。',self:s.reason==='whyNo'?'なぜ反対されたのかな。':s.reason==='notMine'?'独りよがりだったかも。':s.reason==='badWords'?'言い方が強すぎたかも。':'次は、どうしよう。',hint:'聞く・別案・言い方・仲間、方法はある。'};
  return {narrative:'次の学級会。もう一度、提案できる。',speaker:'学級委員',quote:f.reProposed?'いい案ですね':'他に意見はありますか',look:'みんなが、こちらを見ている。',self:f.heard?'聞いた分だけ、固まった。':'まだ、固まらない。',hint:'聞いて練った案で、提案しよう。'};
 },
 progress(s){const f=s.flags;return f.reProposed||f.accepted?3:f.heard||f.planned||f.softened?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.reProposed?'聞いて練った案で、提案できた。':f.heard||f.planned?'反対の理由が分かった。聞く・別案・言い方がある。':'提案が通らないまま。次の一手は見つけられる。'}
},

// STORY 33 ── 縦割り班で言うことを聞かない ──
leader:{
 bg:'class', title:'縦割り班で言うことを聞かない',nav:'縦割り班',num:'33',attrs:['soc'],
 goals:['班をまとめたい','年下の子との関わり方を知りたい','自分らしいリーダーになりたい'],
 chapters:['なわとび会・前日','休み時間','なわとび会・当日'],locations:['運動場','運動場・休み','運動場'],
 base:['scoldKid','ignoreKid','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'バラバラの影',hp:4,power:1,turns:4,look:'班の子が、バラバラに遊んでいる。'},{name:'メガメの影',hp:4,power:1,turns:4,look:'言っても聞かない目が、こちらを見ている。'},{name:'ハンサイの影',hp:6,power:2,turns:5,look:'「もう班長やめたい」と、思ってしまう。'}],
 talk:[['kidWhy','本人に理由を聞く','なぜやらないか、本人に聞く。'],['teacherLead','先生に相談','まとめ方を、先生に聞く。'],['senpaiAsk','去年の班長に聞く','上の子の、まとめ方を聞く。']],
 think:[['tooYoung','年下だから？','年下だから、言うことを聞かない？'],['orderBad','言い方が悪い？','命令っぽく、言いすぎたかも。'],['notFun','楽しくない？','会の練習が、楽しくないのかも。']],
 reasonKeys:['tooYoung','orderBad','notFun'],
 stageGrants:[['kidCalm','cheerKid'],['tryLead','leadWay']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='kidWhy'){s.flags.askedK2=true;relation(s,'本人に聞いたら、「跳べないからやりたくない」と言われた。');out.text='「だって、跳べないし…」\n理由が、分かった。';out.card='askWhyKid'}
  if(key==='teacherLead'){s.flags.toldL=true;note(s,'先生に「まず本人の話を聞いて」と言われた。');out.text='先生「まず、その子の話を聞こう」\nまとめ方の、ヒントをもらった。';out.card='askWhyKid'}
  if(key==='senpaiAsk'){s.flags.askedP=true;note(s,'去年の班長に「任せると意外とやるよ」と聞いた。');out.text='「得意なことを任せると、意外とやるよ」\nまとめ方の、コツを聞いた。';out.card='letKid'}
  if(key==='tooYoung'){s.reason='tooYoung';note(s,'年下だからではなく、伝え方の問題かもしれない。');out.text='「年下だから、聞かない？」\n伝え方を、変えてみよう。';out.card='watchKid'}
  if(key==='orderBad'){s.reason='orderBad';note(s,'命令ではなく、小さく頼むと伝わる。');out.text='「命令っぽく、言いすぎたかも」\n小さく、頼んでみよう。';out.card='kidCalm'}
  if(key==='notFun'){s.reason='notFun';note(s,'楽しくないなら、一緒にやると変わる。');out.text='「練習が、楽しくないのかも」\n一緒にやれば、変わる。';out.card='doTogether'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='scoldKid'){f.scolded=true;s.rep-=1;s.mind-=1;relation(s,'きつく叱ったら、余計に離れていった。');text='きつく、叱った。\nその子は、余計に離れていった。';meaning='叱るだけでは、ついてこない。';grant(s,'askWhyKid')}
  if(id==='ignoreKid'){f.soloed=true;s.mind-=1;relation(s,'一人で全部やったら、疲れて班にならなかった。');text='一人で、全部やった。\n疲れた。班にも、ならない。';meaning='一人では、班にならない。';grant(s,'askWhyKid')}
  if(id==='askWhyKid'){f.heardK=true;note(s,'「跳べないから」と理由が分かった。');text='「だって、跳べないんだもん」\n理由が、分かった。';meaning='理由が分かれば、やり方が変わる。'}
  if(id==='watchKid'){f.watched=true;note(s,'よく見たら、その子は跳び方が苦手だった。');text='よく見ると、その子は跳び方が苦手。\n「だから、やりたくないんだ」';meaning='見るほど、伝え方が分かる。'}
  if(id==='doTogether'){f.togetherDone=true;f.heardK=true;relation(s,'一緒にやったら、その子もやる気を出した。');text='「一緒にやろう」\nその子も、やり始めた。';meaning='一緒なら、やる気が出る。'}
  if(id==='letKid'){f.delegated=true;relation(s,'好きなところを任せたら、やってくれた。');text='「ここ、お願いできる？」\n任せたら、やってくれた。';meaning='任せると、やってくれる。'}
  if(id==='kidCalm'){f.askedCalm=true;relation(s,'小さく頼んだら、応じてくれた。');text='「ちょっとだけ、手伝って」\n小さい頼みに、応じてくれた。';meaning='小さい頼みなら、応じやすい。'}
  if(id==='cheerKid'){f.cheered=true;f.heardK=true;relation(s,'ほめたら、またやってくれた。');text='「すごい！ ありがとう」\nその子も、笑顔になった。';meaning='ほめると、またやる。'}
  if(id==='tryLead'){if(f.heardK||f.togetherDone||f.delegated||f.askedCalm||f.cheered){f.led=true;note(s,'見つけたやり方で、班が動き始めた。');text='「みんなで、やろう」\n班が、動き始めた。';meaning='伝え方が変われば、班が動く。'}else{s.mind-=1;text='まとめようとしたが、やり方が分からなかった。';meaning='まず理由を聞いてから、まとめると良い。';grant(s,'askWhyKid')}}
  if(id==='leadWay'){if(f.led||f.heardK||f.delegated){f.united=true;note(s,'班がひとつにまとまった。');text='「みんなで、やりきった！」\n班が、まとまった。';meaning='まとまった経験は、自信になる。'}else{s.mind-=1;text='まとまらなかった。まだ、やり方が見つかっていない。';meaning='まず聞いて試してから、まとめると良い。';grant(s,'askWhyKid')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '班の子が、バラバラに遊んでいる。';
  if(s.stage===1)return '言っても聞かない目が、こちらを見ている。';
  return 'なわとび会・当日。班をまとめられるか。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'なわとび会の練習。班の1年生が、言うことを聞かない。',speaker:'1年生',quote:'やだよ！ あっちで遊ぶ',look:'班の子が、バラバラに遊んでいる。',self:'班長なのに、聞いてくれない…',hint:'言うことを聞かないとき、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。その子のことを、考える。',speaker:'友達',quote:f.heardK?'その子、跳べないんだって':'一人でやっちゃえば？',look:'運動場に、班の子たちがいる。',self:s.reason==='tooYoung'?'年下だから、聞かない？':s.reason==='orderBad'?'言い方が悪かったかも。':s.reason==='notFun'?'楽しくないのかも。':'どう伝えよう…',hint:'聞く・見る・一緒・任せる・小さく・ほめる、方法はある。'};
  return {narrative:'なわとび会・当日。班をまとめる番が来た。',speaker:'1年生',quote:f.united?'がんばるね！':'…',look:'班の子たちが、待っている。',self:f.heardK?'その子の気持ちが、分かった。':'まだ、まとまらない。',hint:'見つけたやり方で、まとめよう。'};
 },
 progress(s){const f=s.flags;return f.united||f.led?3:f.heardK||f.togetherDone||f.delegated?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.united?'班がまとまった。伝え方が変わった。':f.heardK||f.delegated?'やり方が見つかった。聞く・一緒・任せる・ほめる。':'班がまとまらないまま。伝え方は練習できる。'}
},

// STORY 34 ── 朝、起きられなくて遅刻しそう ──
late:{
 bg:'hall', title:'朝、起きられなくて遅刻しそう',nav:'朝の遅刻',num:'34',attrs:['study','soc'],
 goals:['遅れずに登校したい','遅れたときの自分を知りたい','朝の習慣を変えたい'],
 chapters:['朝・寝坊','登校中','教室'],locations:['家','登校中','教室'],
 base:['rush','makeExcuse','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'マニワナイの影',hp:4,power:1,turns:4,look:'時計の針が、どんどん進んでいる。'},{name:'イイワケの影',hp:4,power:1,turns:4,look:'言い訳が、頭の中で渦巻いている。'},{name:'セカセカの影',hp:6,power:2,turns:5,look:'教室に着いても、気持ちが落ち着かない。'}],
 talk:[['callFirst','先生に先に言う','遅れることを、先に言う。'],['teacherHabit','先生に習慣を相談','遅刻ぐせを、先生に相談する。'],['friendMorning','友達と登校の約束','友達と、一緒に登校する約束をする。']],
 think:[['sleepy','夜更かしした','夜、遅くまで起きていた。'],['noPrep','準備をしてなかった','持ち物も服も、決めてなかった。'],['weakMorning','朝が苦手','そもそも、朝が苦手だ。']],
 reasonKeys:['sleepy','noPrep','weakMorning'],
 stageGrants:[['calmWalk'],['arriveCalm','newHabit']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='callFirst'){s.flags.toldFirst=true;relation(s,'先に連絡したら、「気をつけてね」と言われた。');out.text='「遅れます」と、先に言った。\n先生「分かった。気をつけてね」';out.card='callAhead'}
  if(key==='teacherHabit'){s.flags.askedH=true;note(s,'先生に「寝る時間を決めよう」と言われた。');out.text='先生「まず、寝る時間を決めよう」\n習慣のヒントを、もらった。';out.card='habitAsk'}
  if(key==='friendMorning'){s.flags.promised=true;relation(s,'友達と登校の約束をした。');out.text='「明日、一緒に行こう！」\n約束があれば、起きられる。';out.card='admitLate'}
  if(key==='sleepy'){s.reason='sleepy';note(s,'夜更かしが原因なら、前日準備で変えられる。');out.text='「夜更かしが、原因だ」\n前の日から、変えられる。';out.card='earlyNight'}
  if(key==='noPrep'){s.reason='noPrep';note(s,'準備がないなら、前の日にやっておく。');out.text='「準備を、してなかった」\n前の日に、準備しよう。';out.card='earlyNight'}
  if(key==='weakMorning'){s.reason='weakMorning';note(s,'朝が苦手なら、起きる工夫がいる。');out.text='「朝が、苦手」\n起きる工夫を、しよう。';out.card='wakeTrick'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='rush'){f.rushed=true;s.mind-=1;relation(s,'あわてて走ったら、転んで余計に遅れた。');text='あわてて、走った。\n転んで、余計に遅れた。';meaning='あわてると、ミスが増える。';grant(s,'calmWalk')}
  if(id==='makeExcuse'){f.excused=true;s.mind-=1;relation(s,'言い訳を考えたら、余計にモヤモヤした。');text='言い訳を、考えた。\n余計に、モヤモヤした。';meaning='言い訳は、気持ちが晴れない。';grant(s,'admitLate')}
  if(id==='admitLate'){f.told=true;relation(s,'正直に言ったら、すっきりした。');text='「寝坊しました」と、正直に言った。\n「分かった。明日は気をつけてね」';meaning='正直に言うと、すっきりする。'}
  if(id==='callAhead'){f.called=true;f.told=true;relation(s,'先に連絡したら、安心してもらえた。');text='「遅れます」と、先に言った。\n「分かった。気をつけて来てね」';meaning='先に言うと、安心してもらえる。'}
  if(id==='calmWalk'){f.calmed=true;note(s,'落ち着いて歩いたら、転ばず着いた。');text='落ち着いて、歩いた。\n転ばずに、着いた。';meaning='落ち着くと、ミスが減る。'}
  if(id==='earlyNight'){f.prepared=true;note(s,'前の日に準備したら、朝が楽になった。');text='夜、持ち物と服を準備した。\n「朝が、楽だ」';meaning='前日準備で、朝が楽になる。'}
  if(id==='wakeTrick'){f.prepared=true;note(s,'起きる工夫をしたら、起きられた。');text='目覚ましと日差しの工夫をした。\n「起きられた！」';meaning='工夫すれば、起きられる。'}
  if(id==='habitAsk'){f.askedH=true;f.prepared=true;note(s,'先生と習慣を考えたら、見通しが立った。');text='「寝る時間を、決めよう」\n先生と、習慣を考えた。';meaning='習慣のことも、相談できる。'}
  if(id==='arriveCalm'){if(f.calmed||f.prepared||f.told){f.arrived=true;note(s,'落ち着いて登校できた。');text='落ち着いて、登校した。\n「間に合った」';meaning='準備の分だけ、落ち着ける。'}else{s.mind-=1;text='落ち着いて登校しようとしたが、あわててしまった。';meaning='まず準備・連絡・落ち着きをしてから、登校すると良い。';grant(s,'calmWalk')}}
  if(id==='newHabit'){if(f.prepared||f.askedH){f.habit=true;note(s,'遅刻しない習慣ができた。');text='早寝・準備・工夫で、習慣に。\n「朝が、変わった」';meaning='習慣は、明日の味方。'}else{s.mind-=1;text='習慣を作ろうとしたが、何から変えるか分からなかった。';meaning='まず寝る時間・準備・工夫をしてから、習慣にすると良い。';grant(s,'earlyNight')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '時計の針が、どんどん進んでいる。';
  if(s.stage===1)return '言い訳が、頭の中で渦巻いている。';
  return '教室に着いても、気持ちが落ち着かない。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'朝。目覚ましを止めて、二度寝してしまった。',speaker:'家族',quote:'早く！ 遅刻するよ！',look:'時計が、もうすぐ登校時間。',self:'やばい、遅刻だ…',hint:'遅刻しそうなとき、何がつらい？'};
  if(s.stage===1)return {narrative:'登校中。遅れた言い訳を、考えてしまう。',speaker:'友達',quote:'走ろうよ！','look':'みんなは、もう登校している。',self:s.reason==='sleepy'?'夜更かしが、原因だ。':s.reason==='noPrep'?'準備を、してなかった。':s.reason==='weakMorning'?'朝が、苦手だ。':'どう言おう…',hint:'正直・連絡・落ち着き・前日準備、方法はある。'};
  return {narrative:'教室に着いた。授業は、もう始まっている。',speaker:'先生',quote:f.arrived?'遅れても、来れたね':'どうしたの？',look:'教室が、静かだ。',self:f.told?'正直に言えて、すっきりした。':'まだ、モヤモヤする。',hint:'明日からの習慣を、変えよう。'};
 },
 progress(s){const f=s.flags;return f.arrived||f.habit?3:f.told||f.prepared||f.calmed?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.arrived||f.habit?'落ち着いて登校できた。習慣も変わった。':f.told||f.prepared?'やり方が見つかった。正直・連絡・前日準備・工夫。':'遅刻しそうなまま。朝の習慣は変えられる。'}
},

// STORY 35 ── 図書室の本をなくした ──
lostBook:{
 bg:'lib', title:'図書室の本をなくした',nav:'本をなくした',num:'35',attrs:['soc','study'],
 goals:['本を見つけたい','なくしたときの自分を知りたい','責任のとり方を知りたい'],
 chapters:['図書の時間','家','翌日'],locations:['図書室','家','図書室'],
 base:['hideBook','fakeReturn','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'ナイの影',hp:4,power:1,turns:4,look:'カバンの中に、本がない。'},{name:'ドコの影',hp:4,power:1,turns:4,look:'どこでなくしたか、分からない。'},{name:'ハラの影',hp:6,power:2,turns:5,look:'正直に言うのが、少しこわい。'}],
 talk:[['askLend','貸したか聞く','友達に、貸したか聞く。'],['askLib','図書の先生に相談','図書の先生に、なくしたと言う。'],['teacherBook','担任に相談','担任に、どうするか聞く。']],
 think:[['borrowed','誰かに貸したかも','貸したかもしれない。'],['dropped','どこかに落としたかも','落としたかもしれない。'],['forgotPlace','置き場所を忘れた','どこに置いたか、忘れた。']],
 reasonKeys:['borrowed','dropped','forgotPlace'],
 stageGrants:[['checkBag','askLibrarian'],['ownUp','replaceBook','foundIt']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='askLend'){s.flags.askedF2=true;relation(s,'友達に聞いたら、「借りてないよ」と言われた。');out.text='「借りてないよ」\n貸してはいない、と分かった。';out.card='askFriends'}
  if(key==='askLib'){s.flags.askedL=true;note(s,'図書の先生に「正直に言ってね」と言われた。');out.text='図書の先生「なくしたら、正直に言ってね」\nやり方の、ヒントをもらった。';out.card='tellLost'}
  if(key==='teacherBook'){s.flags.toldT=true;note(s,'担任に「まず探して、なければ正直に」と言われた。');out.text='「まず探して。なければ、正直に言おう」\n担任と、考えた。';out.card='searchBack'}
  if(key==='borrowed'){s.reason='borrowed';note(s,'貸したなら、聞けば分かる。');out.text='「誰かに、貸したかも」\n友達に、聞こう。';out.card='askFriends'}
  if(key==='dropped'){s.reason='dropped';note(s,'落としたなら、通った道を探せる。');out.text='「どこかに、落としたかも」\n通った道を、探そう。';out.card='retraceSteps'}
  if(key==='forgotPlace'){s.reason='forgotPlace';note(s,'忘れたなら、もう一度カバンを見よう。');out.text='「置き場所を、忘れた」\nもう一度、カバンを見よう。';out.card='checkBag'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='hideBook'){f.hid=true;s.mind-=1;relation(s,'言わなかったら、ずっと気になった。');text='なくしたと、言わなかった。\nずっと、気になった。';meaning='黙っていると、気持ちが重い。';grant(s,'tellLost')}
  if(id==='fakeReturn'){f.faked=true;s.rep-=1;relation(s,'返したふりをしたら、あとでばれそうで怖くなった。');text='返したふりをした。\nばれそうで、怖くなった。';meaning='ごまかすと、あとがつらい。';grant(s,'tellLost')}
  if(id==='tellLost'){f.told=true;relation(s,'正直に言ったら、「探してみよう」と言われた。');text='「なくしました」と、正直に言った。\n「探してみよう」';meaning='正直に言うと、済ませ方が決まる。'}
  if(id==='searchBack'){f.searched=true;note(s,'思い出して探したら、体育館の脇で見つかった。');text='通った道を、探した。\n「あった！」';meaning='思い出すと、見つかる。'}
  if(id==='replaceBook'){f.replaced=true;note(s,'お小遣いで弁償したら、責任がとれた。');text='同じ本を、買って返した。\n「ちゃんと、返せた」';meaning='責任は、お金でもとれる。'}
  if(id==='askLibrarian'){f.askedL=true;f.told=true;note(s,'図書の先生に相談したら、済ませ方が分かった。');text='「なくしたら、正直に言ってね」\n図書の先生に、相談した。';meaning='相談すると、やり方が決まる。'}
  if(id==='checkBag'){f.searched=true;note(s,'カバンの奥を見たら、入っていた。');text='カバンの、奥を見た。\n「あった！」';meaning='意外と、あるもの。'}
  if(id==='askFriends'){f.askedF=true;note(s,'友達に聞いたら、貸してないと分かった。');text='「貸してない？」\n「借りてないよ」';meaning='聞けば、状況が分かる。'}
  if(id==='retraceSteps'){f.searched=true;note(s,'通った道を戻ったら、見つかった。');text='通った道を、戻った。\n「あった！」';meaning='戻って探すと、見つかる。'}
  if(id==='foundIt'){if(f.searched||f.askedF){f.found=true;note(s,'本が見つかった。');text='「見つかった！」\nちゃんと、返せた。';meaning='見つけた経験は、自信になる。'}else{s.mind-=1;text='探そうとしたが、どこを探せばいいか分からなかった。';meaning='まず聞く・思い出す・カバンを見てから、探すと良い。';grant(s,'checkBag')}}
  if(id==='ownUp'){if(f.told||f.askedL){f.owned=true;note(s,'ちゃんと詫びて、済ませられた。');text='「ごめんなさい」と、きちんと言った。\n「ちゃんと言えたね」';meaning='詫びた分だけ、前に進める。'}else{s.mind-=1;text='詫びようとしたが、まだ正直に言えていなかった。';meaning='まず正直に言ってから、済ませると良い。';grant(s,'tellLost')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'カバンの中に、本がない。';
  if(s.stage===1)return 'どこでなくしたか、分からない。';
  return '翌日。正直に言うのが、少しこわい。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'図書の時間。返すはずの本が、カバンにない。',speaker:'友達',quote:'どうしたの？',look:'カバンの中に、本がない。',self:'え、ない…',hint:'本をなくしたとき、何がつらい？'};
  if(s.stage===1)return {narrative:'家。どこでなくしたか、考える。',speaker:'家族',quote:'思い出してみたら？',look:'机の上に、ない。',self:s.reason==='borrowed'?'貸したかもしれない。':s.reason==='dropped'?'落としたかもしれない。':s.reason==='forgotPlace'?'置き場所を、忘れた。':'どこだろう…',hint:'探す・聞く・正直・弁償、方法はある。'};
  return {narrative:'翌日。図書の先生に、言う番が来た。',speaker:'図書の先生',quote:f.found?'見つかってよかったね':'どうしたの？',look:'図書室が、静かだ。',self:f.told?'正直に言えて、すっきりした。':'まだ、言えていない。',hint:'正直に言うか、探して返そう。'};
 },
 progress(s){const f=s.flags;return f.found||f.owned||f.replaced?3:f.told||f.searched?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.found?'本が見つかった。探して、返せた。':f.told||f.askedL?'正直に言えた。済ませ方が決まった。':'本がないまま。正直・探す・弁償、方法はある。'}
},

// STORY 36 ── 席替えで仲良しと離れる ──
seat:{
 bg:'class', title:'席替えで仲良しと離れる',nav:'席替え',num:'36',attrs:['soc'],
 goals:['新しい席になじみたい','離れても仲良しでいたい','さびしい気持ちの自分を知りたい'],
 chapters:['席替え','休み時間','数日後'],locations:['教室','教室・休み','教室'],
 base:['sulkSeat','ignoreNew','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'ハナレの影',hp:4,power:1,turns:4,look:'仲良しと、席が離れてしまった。'},{name:'サビシイの影',hp:4,power:1,turns:4,look:'さびしさが、じんわりにじんでくる。'},{name:'アタラシイの影',hp:6,power:2,turns:5,look:'新しい席が、まだなじまない。'}],
 talk:[['oldTalk','仲良しに気持ちを伝える','「さびしい」と、仲良しに言う。'],['newTalk','新しい隣に話す','新しい隣の子に、話してみる。'],['teacherSeat','先生に相談','席替えのことを、先生に言う。']],
 think:[['lonely','さびしい','仲良しと離れて、さびしい。'],['noEnergy','やる気が出ない','新しい席に、なじめない。'],['wantOld','前の席に戻りたい','できれば、前の席に戻りたい。']],
 reasonKeys:['lonely','noEnergy','wantOld'],
 stageGrants:[['meetBreak'],['smileSeat','keepBond']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='oldTalk'){s.flags.toldO=true;relation(s,'「さびしい」と言ったら、仲良しも「私も」と言ってくれた。');out.text='「私も、さびしいよ」\n仲良しも、同じ気持ちだった。';out.card='oldCall'}
  if(key==='newTalk'){s.flags.newTalked=true;relation(s,'新しい隣の子に話したら、返してくれた。');out.text='「あ、おはよう」\n新しい隣の子も、返してくれた。';out.card='newFriend'}
  if(key==='teacherSeat'){s.flags.toldT2=true;note(s,'先生に「離れても会える作戦を立てよう」と言われた。');out.text='先生「離れても、会えるよ」\n作戦の、ヒントをもらった。';out.card='seatPlan'}
  if(key==='lonely'){s.reason='lonely';note(s,'さびしさは、伝えると軽くなる。');out.text='「さびしい」\nさびしさは、伝えると軽くなる。';out.card='oldCall'}
  if(key==='noEnergy'){s.reason='noEnergy';note(s,'なじめないなら、いいところを探す。');out.text='「やる気が、出ない」\nいいところを、探そう。';out.card='okSeat'}
  if(key==='wantOld'){s.reason='wantOld';note(s,'戻れなくても、離れても仲良しでいられる。');out.text='「前の席に、戻りたい」\n離れても、仲良しでいられる。';out.card='meetBreak'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='sulkSeat'){f.sulked=true;s.mind-=1;relation(s,'文句を言ったら、余計にさびしくなった。');text='「こんな席、いやだ」と文句を言った。\n余計に、さびしくなった。';meaning='文句だけでは、変わらない。';grant(s,'meetBreak')}
  if(id==='ignoreNew'){f.ignoredN=true;s.mind-=1;relation(s,'話さなかったら、距離のままだった。');text='新しい隣の子と、話さなかった。\n距離のまま、だった。';meaning='話さないと、距離のまま。';grant(s,'newFriend')}
  if(id==='meetBreak'){f.meetPlanned=true;relation(s,'休み時間に会う約束をしたら、さびしさが軽くなった。');text='「休み時間、一緒に遊ぼう」\n約束ができた。';meaning='離れても、つながれる。'}
  if(id==='newFriend'){f.madeNew=true;relation(s,'新しい隣の子と話したら、楽しかった。');text='「ねえ、それ何？」\n新しい隣の子と、話せた。';meaning='話すと、新しい友達になる。'}
  if(id==='okSeat'){f.seatOk=true;note(s,'この席のいいところを見つけた。');text='「窓側だし、前も見やすい」\nこの席の、いいところを見つけた。';meaning='見方を変えると、気持ちが変わる。'}
  if(id==='oldCall'){f.toldO=true;relation(s,'気持ちを伝えたら、さびしさが軽くなった。');text='「離れて、さびしいよ」\n「私も。でも、すぐ近くだよ」';meaning='伝えると、さびしさが軽くなる。'}
  if(id==='seatPlan'){f.plannedS=true;note(s,'帰りと休みの約束を立てたら、見通しが持てた。');text='「帰りは一緒に、休み時間も遊ぼう」\n作戦が、できた。';meaning='約束があれば、離れても大丈夫。'}
  if(id==='smileSeat'){if(f.seatOk||f.madeNew||f.meetPlanned){f.enjoyed=true;note(s,'新しい席を、楽しめるようになった。');text='「この席も、いいかも」\n新しい席を、楽しめた。';meaning='楽しめれば、新しい毎日になる。'}else{s.mind-=1;text='楽しもうとしたが、まだなじめていなかった。';meaning='まず話す・探す・約束してから、楽しむと良い。';grant(s,'newFriend')}}
  if(id==='keepBond'){if(f.meetPlanned||f.toldO||f.plannedS){f.bondKept=true;note(s,'離れても、仲良しのままでいられた。');text='「明日も、休み時間ね」\n離れても、仲良しのまま。';meaning='離れても続く、友達関係。'}else{s.mind-=1;text='仲良しでいようとしたが、つながり方が分からなかった。';meaning='まず伝える・約束してから、つながると良い。';grant(s,'meetBreak')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '仲良しと、席が離れてしまった。';
  if(s.stage===1)return 'さびしさが、じんわりにじんでくる。';
  return '数日後。新しい席が、まだなじまない。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'席替えの日。仲良しと、席が離れてしまった。',speaker:'仲良し',quote:'えー、離れちゃった…',look:'仲良しが、遠い席に座っている。',self:'さびしい…',hint:'席替えでつらいのは、どこ？'};
  if(s.stage===1)return {narrative:'休み時間。仲良しが、遠い席にいる。',speaker:'仲良し',quote:f.meetPlanned?'休み時間、遊ぼうね':'さびしいね…',look:'仲良しも、こちらを見ている。',self:s.reason==='lonely'?'さびしい。':s.reason==='noEnergy'?'やる気が出ない。':s.reason==='wantOld'?'前の席に戻りたい。':'どうしよう…',hint:'伝える・約束・新しく話す・いいとこ探し、方法はある。'};
  return {narrative:'数日後。新しい席での毎日が、始まっている。',speaker:'新しい隣',quote:f.madeNew?'今日もよろしく！':'…',look:'新しい席に、座っている。',self:f.seatOk||f.madeNew?'この席も、悪くない。':'まだ、なじまない。',hint:'新しい席を、楽しもう。'};
 },
 progress(s){const f=s.flags;return f.enjoyed||f.bondKept?3:f.meetPlanned||f.seatOk||f.madeNew||f.toldO?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.enjoyed||f.bondKept?'新しい席を楽しめ、仲良しも続いた。':f.meetPlanned||f.seatOk?'やり方が見つかった。伝える・約束・新しく話す・いいとこ探し。':'さびしいまま。つながり方は、見つけられる。'}
},

// STORY 37 ── 参観日、見られると手が挙がらない ──
visit:{
 bg:'class', title:'参観日、見られると手が挙がらない',nav:'参観日',num:'37',attrs:['soc','study'],
 goals:['手を挙げたい','いつもどおりでいたい','緊張する自分を知りたい'],
 chapters:['参観日の朝','授業中','放課後'],locations:['教室','教室','家'],
 base:['overTry','hideBack','anger','ignore','boast'],start:{mind:5,energy:4},
 monsters:[{name:'ミラレルの影',hp:4,power:1,turns:4,look:'親が、後ろから見ている。'},{name:'ハズカシイの影',hp:4,power:1,turns:4,look:'見られると、手が挙げられない。'},{name:'キタインの影',hp:6,power:2,turns:5,look:'親の期待に、応えたい気持ち。'}],
 talk:[['talkParent','親に緊張と言う','「緊張する」と、親に言う。'],['talkTeacher2','先生に相談','参観日の緊張を、先生に言う。'],['askFriend','友達と励まし合う','友達と「頑張ろう」と言い合う。']],
 think:[['shyWatch','見られて恥ずかしい','見られるのが、恥ずかしい。'],['missFear','間違えたら恥ずかしい','間違えるのが、こわい。'],['wantShow','頑張って見せたい','いいところを、見せたい。']],
 reasonKeys:['shyWatch','missFear','wantShow'],
 stageGrants:[['askOnce'],['handRaised','honestDay']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='talkParent'){s.flags.toldP=true;relation(s,'「緊張する」と言ったら、「いつもどおりでいいよ」と言われた。');out.text='「いつもどおりで、いいよ」\n親が、分かってくれた。';out.card='tellParent'}
  if(key==='talkTeacher2'){s.flags.toldT3=true;note(s,'先生に「分かる問題で挙げてみて」と言われた。');out.text='先生「分かる問題で、挙げてみて」\n先生と、考えた。';out.card='safeAnswer'}
  if(key==='askFriend'){s.flags.cheered=true;relation(s,'友達と「頑張ろう」と言い合った。');out.text='「お互い、頑張ろうね」\n励まし合えた。';out.card='askOnce'}
  if(key==='shyWatch'){s.reason='shyWatch';note(s,'恥ずかしい気持ちは、言うと軽くなる。');out.text='「見られて、恥ずかしい」\n言うと、軽くなる。';out.card='tellParent'}
  if(key==='missFear'){s.reason='missFear';note(s,'間違えたくないなら、分かる問題を選ぶ。');out.text='「間違えたら、恥ずかしい」\n分かる問題を、選ぼう。';out.card='safeAnswer'}
  if(key==='wantShow'){s.reason='wantShow';note(s,'見せたいなら、練習して準備する。');out.text='「頑張って、見せたい」\n練習して、準備しよう。';out.card='practiceHand'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='overTry'){f.overTried=true;s.mind-=1;relation(s,'頑張りすぎたら、緊張が増えた。');text='いつもと違う自分を、見せようとした。\n緊張が、増えた。';meaning='頑張りすぎると、しんどい。';grant(s,'beMyself')}
  if(id==='hideBack'){f.hidB=true;s.mind-=1;relation(s,'隠れたら、何もできなかった。');text='うつむいて、隠れた。\n何も、できなかった。';meaning='隠れても、緊張は消えない。';grant(s,'askOnce')}
  if(id==='beMyself'){f.myself=true;note(s,'いつもの自分でいたら、楽だった。');text='いつもどおり、授業を受けた。\n「なんだ、いつもと同じだ」';meaning='いつもどおりが、いちばん楽。'}
  if(id==='practiceHand'){f.practiced=true;note(s,'前の日に練習したら、見通しが持てた。');text='家で、発表の練習をした。\n「明日は、挙げられそう」';meaning='練習すれば、本番もできる。'}
  if(id==='tellParent'){f.toldP=true;relation(s,'緊張を言ったら、親が分かってくれた。');text='「見られると、緊張するんだ」\n「そっか。いつもどおりでいいよ」';meaning='言うと、楽になる。'}
  if(id==='askOnce'){f.askedOnce=true;note(s,'一度だけ手を挙げたら、できた。');text='一度だけ、手を挙げた。\n「挙げられた」';meaning='一度なら、できそう。'}
  if(id==='safeAnswer'){f.chosen=true;note(s,'分かる問題で挙げたら、答えられた。');text='分かる問題で、手を挙げた。\n「答えられた！」';meaning='分かる問題なら、間違えない。'}
  if(id==='handRaised'){if(f.practiced||f.askedOnce||f.chosen){f.raised=true;note(s,'親の前で、手を挙げられた。');text='「挙げられた！」\n親が、少し笑っていた。';meaning='挙げた経験は、自信になる。'}else{s.mind-=1;text='挙げようとしたが、自信がなかった。';meaning='まず練習・一度だけ・分かる問題を選んでから、挙げると良い。';grant(s,'safeAnswer')}}
  if(id==='honestDay'){if(f.myself||f.toldP){f.honest=true;note(s,'いつもどおり、乗り越えられた。');text='「いつもの自分で、できた」\n親が「頑張ってたね」と言った。';meaning='いつもの自分で、乗り越えた。'}else{s.mind-=1;text='いつもどおりでいようとしたが、緊張が先に来た。';meaning='まず伝える・いつもの自分を意識してから、やると良い。';grant(s,'beMyself')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '親が、後ろから見ている。';
  if(s.stage===1)return '見られると、手が挙げられない。';
  return '放課後。親が、ねぎらってくれる。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'参観日の朝。親が、教室の後ろに座っている。',speaker:'親',quote:'頑張ってね',look:'後ろに、親が座っている。',self:'見られてる…',hint:'見られる日のつらさは、どこ？'};
  if(s.stage===1)return {narrative:'授業中。先生が質問を出した。手を挙げたいのに、挙げられない。',speaker:'先生',quote:'はい、この問題、誰か分かる？',look:'みんなが、手を挙げている。',self:s.reason==='shyWatch'?'見られて、恥ずかしい。':s.reason==='missFear'?'間違えたら、恥ずかしい。':s.reason==='wantShow'?'頑張って、見せたい。':'手が、重い…',hint:'練習・いつもの自分・一度だけ・分かる問題、方法はある。'};
  return {narrative:'放課後。親と帰り道を歩く。',speaker:'親',quote:f.raised||f.honest?'今日、頑張ってたね':'どうだった？',look:'親が、隣を歩いている。',self:f.raised?'手を挙げられて、うれしい。':f.honest?'いつもどおりで、よかった。':'まだ、モヤモヤする。',hint:'今日の自分を、振り返ろう。'};
 },
 progress(s){const f=s.flags;return f.raised||f.honest?3:f.practiced||f.askedOnce||f.chosen||f.myself||f.toldP?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.raised?'手を挙げられた。練習・選ぶ・一度だけ、が効いた。':f.honest||f.myself?'いつもどおりできた。見られても、自分でいられた。':'緊張したまま。いつもの自分で、乗り越えられる。'}
},

// STORY 38 ── けんかしてしまった友達と仲直りしたい ──
makeUp:{
 bg:'yard', title:'けんかしてしまった友達と仲直りしたい',nav:'仲直りしたい',num:'38',attrs:['soc'],
 goals:['仲直りしたい','自分から動けるようになりたい','けんかした自分を知りたい'],
 chapters:['けんかの翌朝','休み時間','放課後'],locations:['教室','教室','校庭'],
 base:['waitSorry','stubbornFace','anger','ignore','boast'],start:{mind:4,energy:4},
 monsters:[{name:'ギクシャクの影',hp:4,power:1,turns:4,look:'目が合っても、そらしてしまう。'},{name:'キマズイの影',hp:4,power:1,turns:4,look:'話しかけたいのに、きまずい。'},{name:'ナオリタクテの影',hp:6,power:2,turns:5,look:'仲直りしたい気持ちが、大きくなっている。'}],
 talk:[['mutualAsk','共通の友達に相談','仲直りの仕方を、友達に聞く。'],['teacherMake','先生に相談','仲直りを、先生に言う。'],['inviteTry','遊びに誘ってみる','「一緒に遊ぼう」と、誘う。']],
 think:[['myFault','自分も悪かった','自分も、悪いところがあった。'],['pride','意地を張っている','意地を張って、動けない。'],['scared','断られるのがこわい','謝っても、断られそうでこわい。']],
 reasonKeys:['myFault','pride','scared'],
 stageGrants:[['approachSlow','noteSorry','askMutual'],['makeUpDone','reBond']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='mutualAsk'){s.flags.askedM=true;relation(s,'「一緒に遊ぼうって誘えば？」と言われた。');out.text='「誘ってみたら？」\n友達が、橋渡ししてくれた。';out.card='invitePlay'}
  if(key==='teacherMake'){s.flags.toldT4=true;note(s,'先生に「まずあいさつからでも」と言われた。');out.text='先生「まず、あいさつからでも」\n先生と、考えた。';out.card='approachSlow'}
  if(key==='inviteTry'){s.flags.invited=true;relation(s,'「一緒に遊ぼう」と誘ったら、うなずいてくれた。');out.text='「うん、いいよ」\n誘ったら、うなずいてくれた。';out.card='invitePlay'}
  if(key==='myFault'){s.reason='myFault';note(s,'自分も悪いなら、ちゃんと謝れる。');out.text='「自分も、悪かった」\nちゃんと、謝ろう。';out.card='realSorry'}
  if(key==='pride'){s.reason='pride';note(s,'意地は、落ち着けば下ろせる。');out.text='「意地を、張ってた」\nまず、落ち着こう。';out.card='calmFirst'}
  if(key==='scared'){s.reason='scared';note(s,'こわいなら、小さく始めればいい。');out.text='「断られるのが、こわい」\n小さく、始めよう。';out.card='approachSlow'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='waitSorry'){f.waited=true;s.mind-=1;relation(s,'待っていたら、日が暮れてしまった。');text='待ってばかり、いた。\n日が、暮れてしまった。';meaning='待つだけだと、長引いてしまう。';grant(s,'approachSlow')}
  if(id==='stubbornFace'){f.stubborn=true;s.mind-=1;relation(s,'強がったら、余計に距離ができた。');text='「別に、いいし」\n強がって、距離ができた。';meaning='強がると、距離ができる。';grant(s,'calmFirst')}
  if(id==='realSorry'){f.sorry=true;relation(s,'「ごめんね」と謝ったら、「私もごめん」と返ってきた。');text='「ごめんね」\n「…私も、ごめん」';meaning='心から謝ると、届く。'}
  if(id==='noteSorry'){f.sorry=true;f.noted=true;relation(s,'メモを渡したら、あとで「仲直りしよう」と言われた。');text='メモを、渡した。\n「仲直り、しようね」';meaning='書くのも、伝え方の一つ。'}
  if(id==='calmFirst'){f.calmed2=true;note(s,'深呼吸したら、気持ちが整った。');text='深呼吸して、気持ちを整えた。\n「よし、行こう」';meaning='落ち着いてから、話せる。'}
  if(id==='askMutual'){f.askedM=true;relation(s,'友達に相談したら、「私も手伝う」と言われた。');text='「私も、手伝うよ」\n友達が、味方になった。';meaning='友達が、橋渡ししてくれる。'}
  if(id==='invitePlay'){f.invited=true;relation(s,'誘ったら、「うん」とうなずいてくれた。');text='「一緒に、遊ぼう」\n「うん」';meaning='誘うと、距離が近づく。'}
  if(id==='approachSlow'){f.approached=true;note(s,'あいさつから始めたら、少し話せた。');text='「おはよう」\n「…おはよう」';meaning='小さいことから、始められる。'}
  if(id==='makeUpDone'){if(f.sorry||f.invited||f.approached){f.madeUp=true;note(s,'ちゃんと、仲直りできた。');text='「これからも、よろしく」\n仲直り、できた。';meaning='仲直りの経験は、強くなる。'}else{s.mind-=1;text='仲直りしようとしたが、まだ動けていなかった。';meaning='まずず落ち着く・謝る・誘う・少しずつ近づいてから、仲直りすると良い。';grant(s,'approachSlow')}}
  if(id==='reBond'){if(f.madeUp||(f.sorry&&f.invited)){f.rebonded=true;note(s,'けんかを越えて、仲が深まった。');text='「次は、けんかしないようにしようね」\n前より、仲良くなった。';meaning='仲直りできる関係は、強い。'}else{s.mind-=1;text='もっと仲良くなろうとしたが、まだ仲直りできていなかった。';meaning='まず仲直りしてから、深めると良い。';grant(s,'realSorry')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '目が合っても、そらしてしまう。';
  if(s.stage===1)return '話しかけたいのに、きまずい。';
  return '放課後。仲直りしたい気持ちが、大きくなっている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'けんかの翌朝。友達と目が合ったが、そらしてしまった。',speaker:'友達',quote:'…',look:'友達が、少し離れて座っている。',self:'きまずい…',hint:'けんかのあと、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。話しかけたいのに、足が動かない。',speaker:'友達',quote:f.approached?'…おはよう':'（そっぽを向いている）',look:'友達が、一人でいる。',self:s.reason==='myFault'?'自分も、悪かった。':s.reason==='pride'?'意地を、張ってる。':s.reason==='scared'?'断られるのが、こわい。':'どうしたら…',hint:'謝る・誘う・相談・少しずつ、方法はある。'};
  return {narrative:'放課後。友達が、校庭で一人でいる。',speaker:'友達',quote:f.madeUp?'これからも、よろしく':'…',look:'友達が、こちらを見ている。',self:f.sorry?'謝れて、すっきりした。':'まだ、言えていない。',hint:'仲直りを、やりきろう。'};
 },
 progress(s){const f=s.flags;return f.madeUp||f.rebonded?3:f.sorry||f.invited||f.approached?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.rebonded?'仲直りを越えて、仲が深まった。':f.madeUp?'ちゃんと仲直りできた。':f.sorry||f.invited?'動き出せた。謝る・誘う・少しずつ。':'けんかのまま。仲直りの仕方は、ある。'}
},

// STORY 39 ── 友達に秘密をバラされた ──
secret:{
 bg:'class', title:'友達に秘密をバラされた',nav:'秘密をバラされた',num:'39',attrs:['soc','study'],
 goals:['気持ちを整理したい','相手とどう向き合うか決めたい','次の守り方を考えたい'],
 chapters:['秘密が広まった','友達と向き合う','これから'],locations:['教室','教室','帰り道'],
 base:['confront','spreadBack','anger','ignore','boast'],start:{mind:4,energy:4},
 monsters:[{name:'バレタの影',hp:4,power:1,turns:4,look:'秘密が、みんなに知られている。'},{name:'ウラギリの影',hp:4,power:1,turns:4,look:'裏切られた気持ちが、ずっと残っている。'},{name:'シンライの影',hp:6,power:2,turns:5,look:'これから、誰を信じればいいか分からない。'}],
 talk:[['calmAsk','落ち着いて理由を聞く','「どうして言ったの」と、聞く。'],['feelingTell','気持ちを正直に言う','「バラされてつらかった」と伝える。'],['teacherSec','先生に相談','秘密をバラされたことを、先生に言う。']],
 think:[['betrayed','裏切られた','信じていたのに、裏切られた。'],['shame','みんなに知られて恥ずかしい','秘密が広まって、恥ずかしい。'],['notSure','本当にその子が言ったか不明','誰が言ったか、確かではない。']],
 reasonKeys:['betrayed','shame','notSure'],
 stageGrants:[['distanceTake','keepSecret'],['forgiveF','chooseFriend','trustStep']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='calmAsk'){s.flags.askedC=true;relation(s,'「ごめん、つい言っちゃった」と言われた。');out.text='「ごめん、つい言っちゃった」\n事情が、分かった。';out.card='askCalm'}
  if(key==='feelingTell'){s.flags.toldF2=true;relation(s,'気持ちを伝えたら、相手も「ごめん」と言った。');out.text='「ごめんね。悪かった」\n気持ちが、届いた。';out.card='tellFeeling'}
  if(key==='teacherSec'){s.flags.toldT5=true;note(s,'先生に「まず確かめて、気持ちを伝えよう」と言われた。');out.text='先生「まず確かめて、気持ちを伝えよう」\n先生と、考えた。';out.card='checkTruth'}
  if(key==='betrayed'){s.reason='betrayed';note(s,'裏切りの気持ちは、伝えると軽くなる。');out.text='「裏切られた…」\n気持ちを、伝えよう。';out.card='tellFeeling'}
  if(key==='shame'){s.reason='shame';note(s,'恥ずかしさは、距離を置くと楽になる。');out.text='「みんなに知られて、恥ずかしい」\n少し、距離を置こう。';out.card='distanceTake'}
  if(key==='notSure'){s.reason='notSure';note(s,'確かでないなら、まず確かめる。');out.text='「本当に、その子が言ったの？」\nまず、確かめよう。';out.card='checkTruth'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='confront'){f.confronted=true;s.mind-=1;relation(s,'問い詰めたら、言い争いになった。');text='「なんで言ったの！」\n言い争いに、なった。';meaning='問い詰めると、けんかになる。';grant(s,'askCalm')}
  if(id==='spreadBack'){f.spreadB=true;s.rep-=1;relation(s,'仕返しに言いふらしたら、もめごとが大きくなった。');text='相手の秘密を、言いふらした。\nもめごとが、大きくなった。';meaning='仕返しは、評判を下げる。';grant(s,'distanceTake')}
  if(id==='askCalm'){f.askedC=true;relation(s,'落ち着いて聞いたら、事情が分かった。');text='「どうして、言ったの？」\n「つい、言っちゃった…ごめん」';meaning='理由を聞くと、事情が分かる。'}
  if(id==='distanceTake'){f.distanced=true;note(s,'距離を置いたら、気持ちが落ち着いた。');text='少し、距離を置いた。\n気持ちが、落ち着いた。';meaning='距離も、答えの一つ。'}
  if(id==='tellFeeling'){f.toldF2=true;relation(s,'気持ちを伝えたら、相手が謝ってくれた。');text='「バラされて、つらかった」\n「ごめんね」';meaning='伝えると、相手に届く。'}
  if(id==='checkTruth'){f.checked=true;note(s,'確かめたら、誤解だと分かった。');text='確かめたら、本人は「言ってない」と言った。\n誤解だったかも。';meaning='確かめてから、動こう。'}
  if(id==='keepSecret'){f.plannedS2=true;note(s,'誰にどこまで話すか、決めた。');text='「秘密は、信頼できる人だけに」\n守り方を、決めた。';meaning='決めておくと、安心。'}
  if(id==='forgiveF'){if(f.askedC||f.toldF2){f.forgave=true;relation(s,'許して仲直りした。');text='「もう、いいよ」\n許して、仲直りした。';meaning='許せる関係は、強い。'}else{s.mind-=1;text='許そうとしたが、まだ気持ちが追いつかなかった。';meaning='まず聞く・伝えてから、許すと良い。';grant(s,'tellFeeling')}}
  if(id==='chooseFriend'){if(f.plannedS2||f.distanced){f.chooses=true;note(s,'話す相手を、選べるようになった。');text='「この人なら、安心して話せる」\n相手を、選べた。';meaning='選ぶことも、守り方。'}else{s.mind-=1;text='相手を選ぼうとしたが、まだ気持ちが定まらなかった。';meaning='まず距離を置く・守り方を決めてから、選ぶと良い。';grant(s,'keepSecret')}}
  if(id==='trustStep'){if(f.forgave||f.askedC){f.trustBack=true;note(s,'小さい約束から、信頼を戻し始めた。');text='「今度は、絶対に言わない」\n小さい約束から、始めた。';meaning='信頼は、積み重ね。'}else{s.mind-=1;text='信頼を戻そうとしたが、まだ整理できていなかった。';meaning='まず聞く・許してから、信頼を戻すと良い。';grant(s,'askCalm')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '秘密が、みんなに知られている。';
  if(s.stage===1)return '裏切られた気持ちが、ずっと残っている。';
  return 'これから、誰を信じればいいか分からない。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'秘密にしていたことが、みんなに知られていた。教えたのは、あの子だけのはず。',speaker:'友達',quote:'ねえ、アレって本当？',look:'みんなが、こちらを見ている。',self:'バラされた…',hint:'秘密がバレたとき、何がつらい？'};
  if(s.stage===1)return {narrative:'バラしたと思う友達が、目の前にいる。どう向き合うか。',speaker:'友達',quote:f.askedC?'ごめん…':'（目をそらしている）',look:'友達が、うつむいている。',self:s.reason==='betrayed'?'裏切られた。':s.reason==='shame'?'恥ずかしい。':s.reason==='notSure'?'本当にその子？':'どうしよう…',hint:'聞く・伝える・確かめる・距離を置く、方法はある。'};
  return {narrative:'帰り道。これから、誰に何を話すか考える。',speaker:'友達',quote:f.forgave?'今度は絶対、言わないから':'…',look:'帰り道が、続いている。',self:f.forgave?'許せて、少し楽になった。':'まだ、整理できていない。',hint:'守り方と信頼の戻し方を、決めよう。'};
 },
 progress(s){const f=s.flags;return f.forgave||f.trustBack||f.chooses?3:f.askedC||f.toldF2||f.checked||f.distanced||f.plannedS2?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.forgave||f.trustBack?'許して、信頼を戻し始めた。':f.checked||f.askedC?'事情が分かった。次の守り方を決められる。':'裏切られたまま。聞く・伝える・確かめる、方法はある。'}
},

// STORY 40 ── いじめを見てしまった ──
byWatch:{
 bg:'yard', title:'いじめを見てしまった',nav:'いじめを見た',num:'40',attrs:['soc','study'],
 goals:['気持ちを整理したい','自分にできることを見つけたい','次も関わっていきたい'],
 chapters:['目撃した','自分の行動を決める','これから'],locations:['校庭の隅','教室','下駄箱'],
 base:['lookCalm','joinLaugh','anger','ignore','boast'],start:{mind:4,energy:4},
 monsters:[{name:'ミタノ影',hp:4,power:1,turns:4,look:'目撃した光景が、頭に残っている。'},{name:'マヨイの影',hp:4,power:1,turns:4,look:'何をすればいいか、分からない。'},{name:'ヒョウカンの影',hp:6,power:2,turns:5,look:'傍観してしまう自分が、気になっている。'}],
 talk:[['quietTalk','あとで「大丈夫？」と聞く','いじめられていた子に、声をかける。'],['friendAsk','信頼できる友達に相談','「どう思う？」と聞いてみる。'],['teacherBy','先生にこっそり伝える','見たことを、先生にだけ言う。']],
 think:[['scared','自分もいじめられそうで怖い','止めたら、次は自分がやられそう。'],['dontKnow','どうすればいいか分からない','見たけど、対処法が分からない。'],['feelBad','見て見ぬふりが心に残る','見て見ぬふりをしたことが、気になっている。']],
 reasonKeys:['scared','dontKnow','feelBad'],
 stageGrants:[['checkOn','standNear','keepWatch'],['standTogether','inviteThem','talkSecret']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='quietTalk'){s.flags.checkQ=true;relation(s,'「ありがとう」と、言ってもらえた。');out.text='「大丈夫？」\n「…ありがとう」';out.card='checkOn'}
  if(key==='friendAsk'){s.flags.askedF=true;relation(s,'友達も「気になってた」と言った。');out.text='「あれ、どう思う？」\n「実は、気になってた」';out.card='gatherFriends'}
  if(key==='teacherBy'){s.flags.toldBy=true;note(s,'先生は「よく言ってくれた。一緒に見守ろう」と言った。');out.text='先生「よく言ってくれた。一緒に見守ろう」\n先生と、考えた。';out.card='tellTeacher2'}
  if(key==='scared'){s.reason='scared';note(s,'怖いときは、一人で止めなくていい。');out.text='「自分もやられそうで、怖い」\n一人で止めなくても、いい。';out.card='gatherFriends'}
  if(key==='dontKnow'){s.reason='dontKnow';note(s,'分からなければ、まず声をかける・伝える。');out.text='「何をすればいいか、分からない」\nまず、声をかけよう。';out.card='checkOn'}
  if(key==='feelBad'){s.reason='feelBad';note(s,'心に残るなら、次の行動を決める。');out.text='「見て見ぬふりが、心に残る」\n次の行動を、決めよう。';out.card='keepWatch'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='lookCalm'){f.lookC=true;s.mind-=1;note(s,'やり過ごしたが、心に残った。');text='何もしなかったふりをした。\nでも、心には残った。';meaning='やり過ごすと、気持ちが残る。';grant(s,'checkOn')}
  if(id==='joinLaugh'){f.joined=true;s.rep-=1;s.mind-=1;relation(s,'一緒に笑った。あとで、心が重くなった。');text='場に合わせて、笑った。\nあとで、心が重くなった。';meaning='加担は、評判を下げる。';grant(s,'checkOn')}
  if(id==='checkOn'){f.checkQ=true;relation(s,'声をかけたら、相手は少し楽になった。');text='「大丈夫？」\n「うん…ありがとう」\n相手が、少し楽になった。';meaning='声をかけるだけで、相手は楽になる。'}
  if(id==='tellTeacher2'){f.toldBy=true;note(s,'先生が一緒に見守ってくれることになった。');text='先生「よく言ってくれたね。一緒に見守ろう」\n先生が、味方になった。';meaning='先生に伝えるのは、告げ口じゃない。'}
  if(id==='gatherFriends'){f.askedF=true;relation(s,'友達も同じ気持ちだった。');text='「実は、気になってた」\n同じ気持ちの友達が、いた。';meaning='一人で抱えなくていい。'}
  if(id==='standNear'){f.stayed=true;note(s,'そばにいるだけで、相手は安心できた。');text='その子の、そばにいた。\n相手が、少し安心した。';meaning='そばにいるだけでも、力になる。'}
  if(id==='keepWatch'){f.watched=true;note(s,'記録を付けた。いつ、どこで、何があったか。');text='いつ・どこで・何を、メモした。\n記録が、残った。';meaning='記録は、あとで役立つ。'}
  if(id==='standTogether'){if(f.askedF||f.toldBy){f.stood=true;relation(s,'みんなで「やめよう」と言えた。');text='「みんなで、やめよう」\n仲間と一緒に、言えた。';meaning='仲間がいると、言える。'}else{s.mind-=1;text='一人で言おうとしたが、怖くて声が出なかった。';meaning='まず友達・先生と相談してから、言うと良い。';grant(s,'gatherFriends')}}
  if(id==='inviteThem'){if(f.checkQ||f.stayed){f.invitedT=true;relation(s,'その子を誘ったら、孤立がほどけた。');text='「一緒に行こう」\nその子が、輪の中に入れた。';meaning='誘うと、孤立がほどける。'}else{s.mind-=1;text='誘おうとしたが、まだ距離があった。';meaning='まず声をかける・そばにいると良い。';grant(s,'checkOn')}}
  if(id==='talkSecret'){if(f.checkQ||f.stayed||f.invitedT){f.keptOn=true;note(s,'毎日、少しずつ関わり続けている。');text='「今日はどうだった？」\n毎日、少しずつ話せている。';meaning='続けると、信頼が育つ。'}else{s.mind-=1;text='関わろうとしたが、まだ縁がなかった。';meaning='まず声をかけてから、関わると良い。';grant(s,'checkOn')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '目撃した光景が、頭に残っている。';
  if(s.stage===1)return '何をすればいいか、分からない。';
  return '傍観してしまう自分が、気になっている。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'校庭の隅で、クラスの子が囲まれて悪口を言われている。目撃した。',speaker:'まわりの子',quote:'（笑い声）',look:'囲まれている子が、うつむいている。',self:'どうしよう…',hint:'見たとき、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。何をするか、決める。',speaker:'いじめられていた子',quote:'（一人でいる）',look:'その子が、一人でいる。',self:s.reason==='scared'?'怖い…':s.reason==='dontKnow'?'分からない…':s.reason==='feelBad'?'心に残る…':'どうしよう…',hint:'声をかける・相談・伝える・記録、方法はある。'};
  return {narrative:'下駄箱。明日から、どう関わるか。',speaker:'いじめられていた子',quote:f.checkQ?'ありがとう':'…',look:'校舎の向こうに、夕日。',self:f.checkQ||f.toldBy?'一歩、動けた。':'まだ、何もできていない。',hint:'みんなで止める・誘う・関わり続ける、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.stood||f.invitedT||f.keptOn?3:f.checkQ||f.toldBy||f.askedF||f.stayed||f.watched?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.stood||f.keptOn?'行動できて、関わり続けている。':f.checkQ||f.toldBy?'一歩動けた。次の関わり方を選べる。':'見て見ぬふりのまま。声をかける・伝える、方法はある。'}
},

// STORY 41 ── テストの点数を比べられた ──
score:{
 bg:'paper', title:'テストの点数を比べられた',nav:'点数を比べられた',num:'41',attrs:['study','soc'],
 goals:['点数をどう受け止めるか決めたい','相手とどう関わるか決めたい','次の目標を立てたい'],
 chapters:['点数が返ってきた','受け止める','次の目標'],locations:['教室','教室','帰り道'],
 base:['hideScore','bragBack','anger','ignore','boast'],start:{mind:4,energy:4},
 monsters:[{name:'テンカスの影',hp:4,power:1,turns:4,look:'点数が、頭から離れない。'},{name:'クラベの影',hp:4,power:1,turns:4,look:'友達と比べて、気持ちが揺れている。'},{name:'モクヒョウの影',hp:6,power:2,turns:5,look:'次の目標が、まだ見えていない。'}],
 talk:[['honestSay','正直に点数を言う','聞かれたら、正直に言う。'],['methodAsk','どう勉強したか聞く','点がいい子に、やり方を聞く。'],['praiseSay','「すごいね」とほめる','点がいい子を、素直にほめる。']],
 think:[['shameS','点数が低くて恥ずかしい','人より低くて、恥ずかしい。'],['jealous','うらやましくて嫌になる','あの子に、負けたくない。'],['worry','次もできないかもと不安','このままじゃ、また低いかも。']],
 reasonKeys:['shameS','jealous','worry'],
 stageGrants:[['sayHonest','selfGoal','ignoreRank','keepScore'],['studyPlan','honestReply']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='honestSay'){s.flags.saidH=true;relation(s,'正直に言ったら、相手も「自分も苦手ある」と言った。');out.text='「76点…」\n「自分も、苦手あるよ」';out.card='sayHonest'}
  if(key==='methodAsk'){s.flags.askedM=true;note(s,'「前の日に、10分だけ復習してる」と聞いた。');out.text='「どうやって勉強したの？」\n「前の日に、10分だけ」';out.card='askMethod'}
  if(key==='praiseSay'){s.flags.praised=true;relation(s,'ほめたら、相手はうれしそうだった。');out.text='「すごいね」\n相手が、うれしそうに笑った。';out.card='praiseOther'}
  if(key==='shameS'){s.reason='shameS';note(s,'恥ずかしさは、自分と比べると消える。');out.text='「点数が低くて、恥ずかしい」\n自分と比べてみよう。';out.card='selfGoal'}
  if(key==='jealous'){s.reason='jealous';note(s,'うらやましさは、ほめると仲間に変わる。');out.text='「うらやましい…」\nほめると、仲間に変わる。';out.card='praiseOther'}
  if(key==='worry'){s.reason='worry';note(s,'不安は、やり方を聞くと消える。');out.text='「次もできないかも…」\nやり方を、聞いてみよう。';out.card='askMethod'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='hideScore'){f.hidS=true;s.mind-=1;note(s,'隠したが、ずっと気になった。');text='点数を、隠した。\nでも、ずっと気になった。';meaning='隠すと、気持ちが残る。';grant(s,'sayHonest')}
  if(id==='bragBack'){f.bragged=true;s.rep-=1;relation(s,'言い返したら、気まずくなった。');text='「自分の方が上だし」\n気まずい空気に、なった。';meaning='比べ合いは、みんなつらい。';grant(s,'selfGoal')}
  if(id==='sayHonest'){f.saidH=true;relation(s,'正直に言ったら、楽になった。');text='「76点だった」\n言えて、楽になった。';meaning='正直は、一番楽。'}
  if(id==='askMethod'){f.askedM=true;note(s,'復習の仕方を、教えてもらった。');text='「前の日に、10分だけ復習してる」\nやり方を、教えてもらった。';meaning='聞くと、真似できる。'}
  if(id==='selfGoal'){f.selfG=true;note(s,'前回より5点上がっていた。');text='前回は71点。今回は76点。\n自分は、前に進んでいた。';meaning='自分比べは、成長が分かる。'}
  if(id==='ignoreRank'){f.ignoredR=true;note(s,'順位より、できたことを見ることにした。');text='「順位は、気にしない」\nできたことを、見ることにした。';meaning='気にしないのも、強さ。'}
  if(id==='praiseOther'){f.praised=true;relation(s,'ほめたら、相手も「お互いがんばろう」と言った。');text='「すごいね」\n「お互い、がんばろう」';meaning='ほめられる関係は、いい関係。'}
  if(id==='keepScore'){f.keptS=true;note(s,'次からは言わないと決めた。');text='「点数は、内緒にする」\n決めて、楽になった。';meaning='決めるのも、一つの答え。'}
  if(id==='studyPlan'){if(f.askedM||f.selfG){f.plannedSt=true;note(s,'次の勉強計画を立てた。');text='「毎日、10分復習する」\n計画を、立てた。';meaning='計画があると、前を向ける。'}else{s.mind-=1;text='計画を立てようとしたが、やり方が分からなかった。';meaning='まず聞く・自分と比べてから、立てると良い。';grant(s,'askMethod')}}
  if(id==='honestReply'){if(f.saidH||f.praised){f.repliedH=true;relation(s,'点数より一緒に遊びたいと伝えた。');text='「点数より、一緒に遊びたいよ」\n伝えて、関係が変わった。';meaning='伝えると、関係が変わる。'}else{s.mind-=1;text='伝えようとしたが、言い出せなかった。';meaning='まず正直に言う・ほめてから、伝えると良い。';grant(s,'sayHonest')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return '点数が、頭から離れない。';
  if(s.stage===1)return '友達と比べて、気持ちが揺れている。';
  return '次の目標が、まだ見えていない。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'テストが返ってきた。76点。隣の子は95点だった。',speaker:'隣の子',quote:'何点だった？',look:'隣の答案が、チラリと見える。',self:'うわ…',hint:'比べられたとき、何がつらい？'};
  if(s.stage===1)return {narrative:'休み時間。点数を聞かれて、どう答えるか。',speaker:'隣の子',quote:'自分は95点だよ',look:'答案が、机に置いてある。',self:s.reason==='shameS'?'恥ずかしい…':s.reason==='jealous'?'うらやましい…':s.reason==='worry'?'次も不安…':'どうしよう…',hint:'正直・聞く・ほめる・自分比べ、方法はある。'};
  return {narrative:'帰り道。次のテストに向けて、考える。',speaker:'隣の子',quote:f.praised?'お互いがんばろう':'じゃあね',look:'夕日が、長く伸びている。',self:f.plannedSt?'計画がある。':'まだ、決めていない。',hint:'計画を立てる・伝える、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.plannedSt||f.repliedH?3:f.saidH||f.askedM||f.selfG||f.ignoredR||f.praised||f.keptS?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.plannedSt?'計画を立てて、前を向けた。':f.saidH||f.selfG?'受け止められた。次の目標を立てられる。':'比べられたまま。正直・自分比べ、方法はある。'}
},

// STORY 42 ── みんなの話についていけない ──
trend:{
 bg:'yard', title:'みんなの話についていけない',nav:'話についていけない',num:'42',attrs:['soc','study'],
 goals:['ついていけない気持ちを整理したい','入り方を見つけたい','自分らしい関わり方を決めたい'],
 chapters:['みんなが盛り上がっている','入り方を探す','自分らしく'],locations:['教室','休み時間','帰り道'],
 base:['pretendKnow','buyFit','anger','ignore','boast'],start:{mind:4,energy:4},
 monsters:[{name:'ノリノリの影',hp:4,power:1,turns:4,look:'みんなが、知らない話で盛り上がっている。'},{name:'ハズレの影',hp:4,power:1,turns:4,look:'話題から外れて、一人でいる気がする。'},{name:'アセリの影',hp:6,power:2,turns:5,look:'焦って合わせると、自分を見失う。'}],
 talk:[['topicAsk','「それって何？」と聞く','知らないことを、素直に聞く。'],['ownLike','自分の好きなことを話す','自分の好きなことを、話してみる。'],['honestSay2','「知らない」と正直に言う','知らないことを、正直に言う。']],
 think:[['leftOut','仲間外れのようで不安','みんなの話に入れなくて、不安。'],['fakeIt','合わせなきゃと焦る','知らないのは、恥ずかしい気がする。'],['noInterest','そもそも興味がない','流行には、興味がない。']],
 reasonKeys:['leftOut','fakeIt','noInterest'],
 stageGrants:[['askTopic','listenFirst','honestNo'],['tryJoin','ownWay','joinThem']],
 onExplore(s,key){
  const out={text:'',card:null};
  if(key==='topicAsk'){s.flags.askedT=true;relation(s,'聞いたら、友達が教えてくれた。');out.text='「それって、何？」\n「教えてあげるよ」';out.card='askTopic'}
  if(key==='ownLike'){s.flags.liked=true;relation(s,'自分の好きな話をしたら、興味を持ってくれた。');out.text='「自分は、これが好き」\n「それ、おもしろそう」';out.card='likeOwn'}
  if(key==='honestSay2'){s.flags.honest=true;relation(s,'正直に言ったら、相手も「実は自分も知らなかった」と言った。');out.text='「知らないや」\n「実は、自分も知らなかった」';out.card='honestNo'}
  if(key==='leftOut'){s.reason='leftOut';note(s,'不安なら、まず聞く・正直に言う。');out.text='「仲間外れみたいで、不安」\nまず、聞いてみよう。';out.card='askTopic'}
  if(key==='fakeIt'){s.reason='fakeIt';note(s,'焦りは、正直に言うと消える。');out.text='「合わせなきゃ…」\n正直に言えば、いい。';out.card='honestNo'}
  if(key==='noInterest'){s.reason='noInterest';note(s,'興味がなくても、聞くだけはできる。');out.text='「流行には、興味がない」\n聞くだけでも、いい。';out.card='listenFirst'}
  return out;
 },
 onPlay(s,id){
  const f=s.flags;let text='',meaning='';
  if(id==='pretendKnow'){f.faked=true;s.mind-=1;note(s,'知ったかぶりをしたが、あとで気まずくなった。');text='「ああ、知ってる知ってる」\nでも、詳しく聞かれて困った。';meaning='ふりをすると、あとでつらい。';grant(s,'honestNo')}
  if(id==='buyFit'){f.boughtF=true;s.mind-=1;note(s,'無理して合わせたが、楽しくなかった。');text='無理して、合わせた。\nでも、楽しくなかった。';meaning='無理は、続かない。';grant(s,'listenFirst')}
  if(id==='askTopic'){f.askedT=true;relation(s,'聞いたら、教えてもらえた。');text='「それって、何？」\n「こういうのだよ」\n教えて、もらえた。';meaning='聞くと、教えてもらえる。'}
  if(id==='likeOwn'){f.liked=true;relation(s,'自分の好きを話したら、仲間が見つかった。');text='「自分は、これが好きなんだ」\n同じ好きな子が、いた。';meaning='好きを話すと、仲間が見つかる。'}
  if(id==='listenFirst'){f.listened=true;note(s,'まず聞いたら、話の筋が分かってきた。');text='まず、聞いてみた。\n話の筋が、分かってきた。';meaning='聞くと、入り口が見える。'}
  if(id==='bridgeT'){f.bridged=true;relation(s,'つなげたら、会話が続いた。');text='「それって、あれに似てる？」\n会話が、続いた。';meaning='つなげると、会話になる。'}
  if(id==='honestNo'){f.honest=true;relation(s,'正直に言ったら、楽になった。');text='「知らないや」\n正直に言えて、楽になった。';meaning='正直は、楽で強い。'}
  if(id==='tryJoin'){if(f.askedT||f.honest){f.joinedT=true;relation(s,'教えてもらって、一緒にやれた。');text='「教えて」\n「いいよ、一緒にやろう」\n輪に、入れた。';meaning='一緒にやると、輪に入れる。'}else{s.mind-=1;text='入ろうとしたが、話が分からなかった。';meaning='まず聞く・正直に言ってから、入ると良い。';grant(s,'askTopic')}}
  if(id==='ownWay'){if(f.liked||f.listened){f.ownPace=true;note(s,'自分のペースで、楽しんでいる。');text='「無理せず、自分のペースで」\n自分なりに、楽しめた。';meaning='自分のペースも、正解。'}else{s.mind-=1;text='自分のペースにしようとしたが、まだ焦っていた。';meaning='まず聞く・話してから、ペースを決めると良い。';grant(s,'listenFirst')}}
  if(id==='joinThem'){if(f.liked||f.bridged){f.led=true;relation(s,'自分から話題を出せた。');text='「ねえ、これ知ってる？」\n自分から、話題を出せた。';meaning='出せるようになると、対等。'}else{s.mind-=1;text='話題を出そうとしたが、まだ自信がなかった。';meaning='まず話す・つなげてから、出すと良い。';grant(s,'bridgeT')}}
  return {text,meaning};
 },
 watch(s){
  if(s.stage===0)return 'みんなが、知らない話で盛り上がっている。';
  if(s.stage===1)return '話題から外れて、一人でいる気がする。';
  return '焦って合わせると、自分を見失う。';
 },
 scene(s){const f=s.flags;
  if(s.stage===0)return {narrative:'休み時間、みんなが流行りの話で盛り上がっている。自分だけ、話が分からない。',speaker:'まわりの子',quote:'昨日のあれ、見た？',look:'みんなが、笑っている。',self:'何の話…',hint:'ついていけないとき、何がつらい？'};
  if(s.stage===1)return {narrative:'話題の輪が、近くにある。どう関わるか。',speaker:'まわりの子',quote:'お前も知ってるよね？',look:'みんなが、こちらを見た。',self:s.reason==='leftOut'?'不安…':s.reason==='fakeIt'?'焦る…':s.reason==='noInterest'?'興味ないし…':'どうしよう…',hint:'聞く・正直・まず聞く、方法はある。'};
  return {narrative:'帰り道。明日から、どう関わるか。',speaker:'友達',quote:f.askedT?'また教えるよ':'じゃあね',look:'夕焼けが、広がっている。',self:f.joinedT||f.ownPace?'自分なりに、楽しめそう。':'まだ、焦っている。',hint:'一緒にやる・自分のペース・話題を出す、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.joinedT||f.ownPace||f.led?3:f.askedT||f.liked||f.listened||f.honest||f.bridged?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.joinedT||f.ownPace?'自分らしい入り方を、見つけた。':f.askedT||f.honest?'聞けた・言えた。次の関わり方を選べる。':'外れたまま。聞く・正直に言う、方法はある。'}
},
stumble:{title:'みんなの前で間違えた',nav:'発表で間違えた',num:43,attrs:['soc'],goals:['恥ずかしさを乗りこなしたい','やり直したい','失敗しても立て直したい'],chapters:['かんでしまった','恥ずかしさが残る','明日の自分'],locations:['教室・発表','昼休み','帰り道'],base:['runOut','freezeUp','keepGoing','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'まわりの笑い声',hp:5,power:1,turns:4,look:'口をあけて、笑っている。'},{name:'恥ずかしさの残り火',hp:5,power:1,turns:4,look:'頬が、まだ熱い。'},{name:'明日の不安',hp:6,power:2,turns:4,look:'明日が、頭に残る。'}],
 talk:[['ashamedTell','「恥ずかしかった」と話す','恥ずかしさを、正直に話す。'],['laughAlong','自分も一緒に笑う','「やっちゃった」と笑う。'],['askAfter','次はどうするか聞く','友達に、聞いてみる。']],
 think:[['messedUp','かんでしまった','言いたいことが、出てこなかった。'],['laughedAt','笑われた気がする','みんなが、笑っていた。'],['wantRetry','やり直したい','次は、うまくやりたい。']],
 reasonKeys:['messedUp','laughedAt','wantRetry'],
 stageGrants:[['laughWith','retryNow','practiceNext'],['selfPraise','quietDay','faceAgain','bounceBack']],
 subs:[
  {title:'友達が「大丈夫？」と聞いてくれた',text:'「さっき、大丈夫だった？」',stat:'soc',min:0,good:{text:'「ちょっと恥ずかしかった」と言えた。',mind:1,rep:1},ok:{text:'なんとか、答えられた。',mind:1}},
  {title:'先生が「よく最後までできた」と言った',text:'先生が、声をかけてくれた。',stat:'study',min:0,good:{text:'「次はもっと練習します」と言えた。',rep:1,stat:'study'},ok:{text:'ほめられて、少し楽になった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='ashamedTell'){s.flags.toldS=true;relation(s,'恥ずかしさを話したら、友達が分かってくれた。');out.text='「実は、恥ずかしかった」\n「分かるよ。私もある」';out.card='retryNow'}
  if(key==='laughAlong'){s.flags.laughedS=true;relation(s,'自分も笑ったら、空気が軽くなった。');out.text='「やっちゃった！」\nみんなも、一緒に笑った。';out.card='laughWith'}
  if(key==='askAfter'){s.flags.askedS=true;relation(s,'「次はどうする？」聞いたら、作戦が見えた。');out.text='「次、どうしたらいい？」\n「ゆっくり読むといいよ」';out.card='faceAgain'}
  if(key==='messedUp'){s.reason='messedUp';out.text='言いたいことが、出てこなかった。\n「何を直せばいいか」が見えた。';out.card='practiceNext'}
  if(key==='laughedAt'){s.reason='laughedAt';out.text='笑われたのが、一番つらかった。\n「恥ずかしさ」に名前をつけた。';out.card='selfPraise'}
  if(key==='wantRetry'){s.reason='wantRetry';out.text='やり直したい気持ちが、ある。\n「もう一回」が目標になった。';out.card='retryNow'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='keepGoing'){f.keptOn=true;return{text:'止まらずに、最後までやりきった。',meaning:'やりきると、「できた」が残る。'}}
  if(id==='laughWith'){f.laughedW=true;return{text:'「やっちゃった」と自分も笑った。空気が、軽くなった。',meaning:'笑えると、恥ずかしさが味方になる。'}}
  if(id==='retryNow'){f.retried=true;return{text:'「もう一度やります」と言えた。',meaning:'やり直す勇気は、失敗のあとに効く。'}}
  if(id==='practiceNext'){f.practiced=true;return{text:'家で、間違えたところを練習した。',meaning:'練習は、次の自信になる。'}}
  if(id==='selfPraise'){f.praisedSelf=true;return{text:'「最後までできた」と自分をほめた。',meaning:'ほめられると、また挑戦できる。'}}
  if(id==='quietDay'){f.quiet=true;return{text:'今日は、静かに過ごした。',meaning:'休んで立て直すのも、作戦。'}}
  if(id==='faceAgain'){f.faced=true;return{text:'「次はもっと準備しよう」と決めた。',meaning:'準備で、不安を削る。'}}
  if(id==='bounceBack'){f.bounced=true;return{text:'「失敗は失敗。次行こう」と切り替えた。',meaning:'切り替えは、立て直しの力。'}}
  if(id==='runOut'){f.ran=true;return{text:'恥ずかしくて、逃げ出した。',meaning:'逃げると、あとで余計つらい。'}}
  if(id==='freezeUp'){f.froze=true;return{text:'固まって、動けなかった。',meaning:'固まると、時間だけたつ。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'みんなの笑い方は、悪意というより驚きに近い。':s.stage===1?'誰も、もう気にしていないようだ。':'明日、またチャンスはある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'音読の発表。大事なところで、かんでしまった。教室に、笑い声が広がる。',speaker:'まわりの子',quote:'あはは、かんだー',look:'みんなが、笑っている。',self:'顔が、熱い…',hint:'つらいとき、何がつらい？'};
  if(s.stage===1)return{narrative:'昼休み。さっきのことが、頭に残っている。',speaker:'友達',quote:'さっきの、気にしてる？',look:'友達が、心配そうに見ている。',self:s.reason==='laughedAt'?'笑われたのが、つらい…':s.reason==='wantRetry'?'やり直したい…':'まだ、恥ずかしい…',hint:'笑う・やり直す・練習する、選ぼう。'};
  return{narrative:'帰り道。明日から、どうするか。',speaker:'友達',quote:f.retried?'明日も、がんばろう':'じゃあね',look:'夕焼けが、広がっている。',self:f.practiced||f.faced||f.bounced?'失敗しても、立て直せる。':'まだ、恥ずかしさが残る。',hint:'ほめる・静かに・準備・切り替え、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.bounced||f.faced||f.praisedSelf?3:f.laughedW||f.retried||f.practiced||f.toldS||f.askedS?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.bounced||f.faced?'失敗から立て直せた。':f.laughedW||f.retried||f.practiced?'やり直しの一歩を、踏み出した。':'失敗が、残っている。笑う・やり直す・練習、方法はある。'}
},
sides:{title:'どっちの味方か迫られた',nav:'板ばさみ',num:44,attrs:['soc'],goals:['どっちも失いたくない','正直に伝えたい','関係をつなぎたい'],chapters:['板ばさみ','選ぶプレッシャー','決裂のあと'],locations:['休み時間','下校前','翌日'],base:['pickSide','avoidDays','calmAsk2','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'板ばさみ',hp:5,power:1,turns:4,look:'二人の間で、揺れている。'},{name:'選ぶプレッシャー',hp:5,power:1,turns:4,look:'「どっちなの？」と、詰め寄る。'},{name:'決裂のあと',hp:6,power:2,turns:4,look:'ぎくしゃくした空気が残る。'}],
 talk:[['listenBoth','両方の言い分を聞く','片方ずつ、話を聞く。'],['tellNeutral','「どっちも選べない」と言う','正直に、気持ちを言う。'],['askTeacher2','先生に相談する','一人で抱えず、相談する。']],
 think:[['forced','選ばないとと焦る','どっちか選ばないと、と焦る。'],['bothFriends','どっちも友達','二人とも、大切な友達。'],['scaredFight','ケンカがこわい','ケンカの空気が、こわい。']],
 reasonKeys:['forced','bothFriends','scaredFight'],
 stageGrants:[['hearBoth','neutralSay','takeSpace'],['fairBridge','stayFriend','inviteBoth','threeTalk']],
 subs:[
  {title:'片方が「あいつと遊ぶな」と言った',text:'「あいつと遊ぶな」と言われた。',stat:'soc',min:0,good:{text:'「二人とも友達だよ」と言えた。',rep:1,stat:'soc'},ok:{text:'うなずいてしまった。少し、苦しい。',mind:1}},
  {title:'休み時間、二人とも一人でいた',text:'二人とも、一人でいる。',stat:'soc',min:0,good:{text:'両方に、少しずつ話しかけられた。',mind:1,rep:1},ok:{text:'様子を見ることにした。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='listenBoth'){s.flags.heardBoth=true;relation(s,'両方の言い分を聞いた。二人とも、うれしそうだった。');out.text='「どうしたの？」\n二人とも、たくさん話してくれた。';out.card='hearBoth'}
  if(key==='tellNeutral'){s.flags.saidN=true;relation(s,'「選べない」と言ったら、二人とも少し考えた。');out.text='「どっちも、選べない」\n「……そっか」';out.card='neutralSay'}
  if(key==='askTeacher2'){s.flags.askedT2=true;relation(s,'先生に相談したら、見守り方を教えてもらった。');out.text='「相談していい？」\n「二人の様子、見守っとくね」';out.card='takeSpace'}
  if(key==='forced'){s.reason='forced';out.text='どっちか選ばないと、と焦っていた。\n「急がなくていい」ことに気づいた。';out.card='takeSpace'}
  if(key==='bothFriends'){s.reason='bothFriends';out.text='どっちも、大切な友達。\n「選ぶ」のが答えじゃないかも。';out.card='stayFriend'}
  if(key==='scaredFight'){s.reason='scaredFight';out.text='ケンカの空気が、こわかった。\nこわい気持ちも、伝えられる。';out.card='neutralSay'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='calmAsk2'){f.askedWhat=true;return{text:'「どうしたの？」と聞いた。事情が、少し見えた。',meaning:'まず聞くと、選び方が見える。'}}
  if(id==='hearBoth'){f.heardBoth=true;return{text:'両方の言い分を、聞いた。',meaning:'両方聞くと、中立でいられる。'}}
  if(id==='neutralSay'){f.saidN=true;return{text:'「どっちも選べない」と正直に言えた。',meaning:'正直な「選べない」も、答え。'}}
  if(id==='takeSpace'){f.tookSpace=true;return{text:'少し距離を置いて、様子を見た。',meaning:'距離を置くのも、選び方。'}}
  if(id==='fairBridge'){f.bridged2=true;return{text:'二人の言い分を、伝え合う手伝いをした。',meaning:'橋渡しは、関係をつなぐ。'}}
  if(id==='stayFriend'){f.stayed=true;return{text:'「どっちも友達」と伝えた。',meaning:'友達宣言は、両方を守る。'}}
  if(id==='inviteBoth'){f.invited=true;return{text:'二人を、同じ遊びに誘った。',meaning:'同じ場は、仲直りの入口。'}}
  if(id==='threeTalk'){f.talked3=true;return{text:'三人で話す場を、つくった。',meaning:'場があると、言いやすい。'}}
  if(id==='pickSide'){f.picked2=true;s.rep-=1;relation(s,'急いで味方についたら、もう片方が離れた。');return{text:'急いで、味方についた。もう片方が、離れてしまった。',meaning:'急いで選ぶと、片方を失う。'}}
  if(id==='avoidDays'){f.avoided=true;return{text:'二人から、離れて過ごした。',meaning:'避けるだけでは、元に戻らない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'二人とも、本当は仲直りしたそうに見える。':s.stage===1?'焦って選ぶと、どちらかが傷つきそう。':'まだ、つなぐチャンスはある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'仲のいい二人が、大ゲンカ。「どっちの味方か、はっきりして」と、迫られた。',speaker:'二人',quote:'どっちなの！？',look:'二人とも、こちらを見ている。',self:'板ばさみだ…',hint:'板ばさみで、何がつらい？'};
  if(s.stage===1)return{narrative:'下校前。二人とも、「答えは？」と目で聞いてくる。',speaker:'二人',quote:'ねえ、どっち？',look:'二人の目が、こちらに向く。',self:s.reason==='bothFriends'?'どっちも、友達なのに…':s.reason==='scaredFight'?'こわい…':'焦る…',hint:'聞く・正直に言う・距離を置く、方法はある。'};
  return{narrative:'翌日。二人の空気は、まだぎくしゃくしている。',speaker:'二人',quote:f.bridged2||f.invited?'「…まあ、いいけど」':'「…」',look:'少しずつ、距離が近づいている。',self:f.bridged2||f.stayed||f.talked3?'関係を、つなげそう。':'まだ、板ばさみかも。',hint:'橋渡し・どっちも友達・一緒に誘う、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.bridged2||f.stayed||f.invited||f.talked3?3:f.heardBoth||f.saidN||f.tookSpace||f.askedT2?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.bridged2||f.stayed||f.talked3?'関係を、つなげた。':f.heardBoth||f.saidN||f.tookSpace?'中立の立ち方を、見つけた。':'まだ、板ばさみ。聞く・正直・距離、方法はある。'}
},
deadlock:{title:'話し合いが決まらない',nav:'決まらない',num:45,attrs:['soc','study'],goals:['みんな納得の決め方を見つけたい','自分の意見も伝えたい','時間内に決めたい'],chapters:['平行線の言い合い','決まらない迷子','タイムリミット'],locations:['係の話し合い','昼休み','放課後'],base:['pushMine','keepQuiet2','listIdeas','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'平行線の言い合い',hp:5,power:1,turns:4,look:'「俺の案！」「私の！」と、声がぶつかる。'},{name:'決まらない迷子',hp:5,power:1,turns:4,look:'ぐるぐる、同じところを回る。'},{name:'タイムリミット',hp:6,power:2,turns:4,look:'チャイムが、近づいている。'}],
 talk:[['hearAll','みんなの案を全部聞く','全部の案を、まず聞く。'],['suggestRule','「決め方」を提案する','何で決めるか、決め方を提案。'],['askVote','「多数決にする？」と聞く','多数決を、聞いてみる。']],
 think:[['hurryUp','早く決めないと焦る','時間がない。急がないと。'],['myWay','自分の案がいい','自分の案が、いちばんだと思う。'],['sickOfTalk','言い合いが嫌','もう、決めるのが面倒。']],
 reasonKeys:['hurryUp','myWay','sickOfTalk'],
 stageGrants:[['voteRule','takeTurns','mixIdeas'],['bothTry','writePlan','decideFair']],
 subs:[
  {title:'一人が「じゃ、俺が決める」と言った',text:'「もう、俺が決めるよ」と言い出した。',stat:'soc',min:0,good:{text:'「みんなで決め方を決めよう」と言えた。',rep:1,stat:'soc'},ok:{text:'任せた。少し、モヤモヤ。',mind:1}},
  {title:'反対の人と目が合った',text:'反対の人と、目が合った。',stat:'soc',min:0,good:{text:'「お互いの案、聞こう」と言えた。',mind:1,rep:1},ok:{text:'目をそらした。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='hearAll'){s.flags.heardAll=true;relation(s,'案を全部聞いた。意外と、共通点があった。');out.text='「全部、聞かせて」\n案が並ぶと、近い案が見えた。';out.card='mixIdeas'}
  if(key==='suggestRule'){s.flags.suggestedR=true;relation(s,'「まず決め方を決めよう」と言ったら、場が落ち着いた。');out.text='「先に、決め方を決めない？」\n「あ、それがいい」';out.card='voteRule'}
  if(key==='askVote'){s.flags.askedV=true;relation(s,'多数決の提案に、賛否が出た。');out.text='「多数決にする？」\n「順番でもいいんじゃない？」';out.card='takeTurns'}
  if(key==='hurryUp'){s.reason='hurryUp';out.text='時間がないから、焦っていた。\n急ぐほど、決まらない。';out.card='listIdeas'}
  if(key==='myWay'){s.reason='myWay';out.text='自分の案が、いちばんだと思っていた。\n他の案も、聞いてみよう。';out.card='voteRule'}
  if(key==='sickOfTalk'){s.reason='sickOfTalk';out.text='言い合いに、疲れていた。\n「決め方」から変えられる。';out.card='takeTurns'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='listIdeas'){f.listed=true;return{text:'案を書き出した。違いが、見えてきた。',meaning:'書くと、比べられる。'}}
  if(id==='voteRule'){f.voted=true;return{text:'「多数決にする？」と聞いた。',meaning:'決め方を決めると、進む。'}}
  if(id==='takeTurns'){f.turned=true;return{text:'「順番にやろう」と提案した。',meaning:'順番なら、みんな納得。'}}
  if(id==='mixIdeas'){f.mixed=true;return{text:'いいとこ取りの案を、考えた。',meaning:'組み合わせると、みんなの案になる。'}}
  if(id==='bothTry'){f.tried=true;return{text:'「両方やってみよう」と提案した。',meaning:'両方試すと、分かる。'}}
  if(id==='writePlan'){f.planned2=true;return{text:'決めたことを、手順にして示した。',meaning:'見えると、やりやすい。'}}
  if(id==='decideFair'){f.faired=true;return{text:'公平な決め方を、提案した。',meaning:'公平だと、不満が残らない。'}}
  if(id==='pushMine'){f.pushed=true;s.rep-=1;relation(s,'押し通したら、反発された。');return{text:'自分の案を、強く押し通した。反発された。',meaning:'押すだけでは、まとまらない。'}}
  if(id==='keepQuiet2'){f.quieted=true;return{text:'黙って、誰かに任せた。',meaning:'任せると、いつまでも決まらない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'案は違うが、目的は近い。':s.stage===1?'「決め方」さえ決まれば、進みそう。':'時間内に、一つに絞れる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'係の話し合い。「こうしよう」「いや、こっちだ」意見が平行線で、全然決まらない。',speaker:'みんな',quote:'俺の案がいい！',look:'声が、ぶつかっている。',self:'決まらない…',hint:'決まらないとき、何がじゃま？'};
  if(s.stage===1)return{narrative:'昼休み。話し合いは、まだ迷子のまま。',speaker:'みんな',quote:'えー、どうするの？',look:'うんざりした顔が、並ぶ。',self:s.reason==='myWay'?'自分の案がいいのに…':s.reason==='sickOfTalk'?'もう面倒…':'焦る…',hint:'決め方を決める・いいとこ取り・順番、方法はある。'};
  return{narrative:'放課後。今日中に、決めないと。',speaker:'みんな',quote:f.voted||f.faired?'それで決めよう':'まだ決まらない…',look:'チャイムが、近づいている。',self:f.mixed||f.tried||f.planned2?'決め方が、見えた。':'まだ、平行線かも。',hint:'両方やる・手順・公平に決める、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.mixed||f.tried||f.planned2||f.faired?3:f.heardAll||f.suggestedR||f.voted||f.turned||f.listed?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.mixed||f.faired||f.planned2?'決め方が、まとまった。':f.voted||f.turned||f.listed?'進め方を、見つけた。':'まだ、平行線。決め方を決める、方法はある。'}
},
praised:{title:'褒められて嫌味を言われた',nav:'嫌味を言われた',num:46,attrs:['soc'],goals:['関係をこわさず受け取りたい','自分の調子を保ちたい','相手ともうまくやりたい'],chapters:['褒められた直後','嫌味が刺さる','明日の関係'],locations:['教室','休み時間','帰り道'],base:['brushOff','proudOut','modestSay','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'ねたみの視線',hp:5,power:1,turns:4,look:'じろっと、にらんでいる。'},{name:'刺さった言葉',hp:5,power:1,turns:4,look:'言葉が、胸に残っている。'},{name:'明日の空気',hp:6,power:2,turns:4,look:'明日、どう接するか。'}],
 talk:[['tellFeel2','「その言い方、つらい」と伝える','正直に、気持ちを伝える。'],['thankTeacher','先生にお礼を言う','褒めてくれたことへの、お礼。'],['askWhyJab','「どうして？」と聞く','嫌味のわけを、聞く。']],
 think:[['wantLike','好かれたい','嫌味を言われて、悲しい。'],['fair2','褒められただけなのに','悪いこと、してないのに。'],['worriedR','関係が心配','明日から、どう接するか。']],
 reasonKeys:['wantLike','fair2','worriedR'],
 stageGrants:[['shareWin','askBack2','thankT'],['cheerThem','helpThem','stayHumble','ignoreJab']],
 subs:[
  {title:'別の友達が「よかったね」と言ってくれた',text:'「よかったじゃん」と、声をかけてくれた。',stat:'soc',min:0,good:{text:'素直に「ありがとう」と言えた。',mind:1,rep:1},ok:{text:'少し、救われた。',mind:1}},
  {title:'嫌味を言った子が一人でいた',text:'その子が、一人でいる。',stat:'soc',min:1,good:{text:'「さっきの、気にしてる？」と聞けた。',rep:1,mind:1},ok:{text:'様子を見ることにした。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='tellFeel2'){s.flags.toldF2=true;relation(s,'「その言い方、つらい」と伝えた。相手が、黙った。');out.text='「その言い方、つらいんだ」\n「…ごめん」';out.card='askBack2'}
  if(key==='thankTeacher'){s.flags.thanked=true;relation(s,'お礼を言ったら、先生がにっこりした。');out.text='「褒めてくれて、ありがとうございます」\n「うれしいよ」';out.card='thankT'}
  if(key==='askWhyJab'){s.flags.askedJ=true;relation(s,'「どうして？」聞いたら、相手も褒められたかった様子。');out.text='「どうして、そんなこと言うの？」\n「…うるさい」';out.card='shareWin'}
  if(key==='wantLike'){s.reason='wantLike';out.text='嫌味を言われて、悲しかった。\n「みんなに好かれたい」気持ちが見えた。';out.card='shareWin'}
  if(key==='fair2'){s.reason='fair2';out.text='悪いことをしたわけじゃない。\n「謙虚に受ける」こともできる。';out.card='modestSay'}
  if(key==='worriedR'){s.reason='worriedR';out.text='明日からの関係が、心配。\n「つなぐ」方法を考えよう。';out.card='helpThem'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='modestSay'){f.modest=true;return{text:'「まぐれだよ」と、謙虚に受けた。',meaning:'謙遜で、角が立たない。'}}
  if(id==='shareWin'){f.shared=true;return{text:'「みんなも、できたじゃん」と返した。',meaning:'分かち合うと、輪になる。'}}
  if(id==='askBack2'){f.askedB=true;return{text:'「どうして？」と聞いた。',meaning:'聞くと、本当の気持ちが見える。'}}
  if(id==='thankT'){f.thanked=true;return{text:'先生に、お礼を言えた。',meaning:'お礼は、関係を育てる。'}}
  if(id==='cheerThem'){f.cheered=true;return{text:'相手のいいところを、言った。',meaning:'ほめると、ほめ返される。'}}
  if(id==='helpThem'){f.helped=true;return{text:'「一緒にやろう」と誘った。',meaning:'一緒だと、ライバルが仲間になる。'}}
  if(id==='stayHumble'){f.humbled=true;return{text:'次は、静かに力をつけることにした。',meaning:'実力は、一番の答え。'}}
  if(id==='ignoreJab'){f.ignored=true;return{text:'嫌味は、気にせず流した。',meaning:'流せるのも、強さ。'}}
  if(id==='brushOff'){f.swallowed=true;return{text:'何も言い返さなかった。心に残った。',meaning:'飲みこむと、心に残る。'}}
  if(id==='proudOut'){f.outed=true;s.rep-=1;relation(s,'言い返したら、空気が重くなった。');return{text:'「だって褒められたし」と言い返した。空気が、重くなった。',meaning:'ぶつかると、空気が重い。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'嫌味を言う子は、本当は褒められたそう。':s.stage===1?'「つらい」と伝えるか、流すか、分かれる。':'明日も、顔を合わせる相手。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'先生に、みんなの前でほめられた。うれしい。その直後、「調子に乗るなよ」と、ぽつり。',speaker:'友達',quote:'調子に乗るなよ',look:'じろっと、にらんでいる。',self:'せっかく褒められたのに…',hint:'嫌味を言われて、何がつらい？'};
  if(s.stage===1)return{narrative:'休み時間。さっきの言葉が、胸に残っている。',speaker:'友達',quote:'ふん',look:'その子も、一人でいる。',self:s.reason==='wantLike'?'好かれたいのに…':s.reason==='fair2'?'悪くないのに…':'心配…',hint:'謙遜・分かち合う・お礼・聞く、方法はある。'};
  return{narrative:'帰り道。明日も、同じ教室で会う。',speaker:'友達',quote:f.cheered||f.helped?'「…明日もよろしく」':'「…」',look:'少しずつ、距離が戻っている。',self:f.shared||f.cheered||f.helped?'関係を、つなげそう。':'まだ、言葉が残る。',hint:'ほめる・一緒にやる・静かに・流す、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.shared||f.cheered||f.helped||f.humbled?3:f.toldF2||f.askedJ||f.thanked||f.askedB?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.shared||f.cheered||f.helped?'関係を、つなげた。':f.toldF2||f.askedJ||f.thanked?'気持ちを、やり取りできた。':'嫌味が、残っている。伝える・流す・分かち合う、方法はある。'}
},
hidden:{title:'筆箱を隠された',nav:'隠された',num:47,attrs:['soc'],goals:['冷静に対処したい','関係をこわさず解決したい','次に備えたい'],chapters:['筆箱がない','誰が隠した？','明日の約束'],locations:['教室・朝','休み時間','帰り道'],base:['accuseH','prankBack','lookNear','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'消えた筆箱',hp:5,power:1,turns:4,look:'机の上に、何もない。'},{name:'隠した何か',hp:5,power:1,turns:4,look:'だれかが、にやにやしている。'},{name:'明日の持ち物',hp:6,power:2,turns:4,look:'明日、同じことがあるか。'}],
 talk:[['tellFeel3','「隠すの、やめて」と伝える','正直に、やめてと言う。'],['askTeacher3','先生に相談する','困ったことは、相談する。'],['askWho','「誰か見なかった？」と聞く','目撃者を、探す。']],
 think:[['annoyed','困る・腹が立つ','勝手に隠されて、腹が立つ。'],['worried2','明日も不安','明日も、同じことになるか。'],['whoDid2','誰がやったのか','誰が、隠したのか。']],
 reasonKeys:['annoyed','worried2','whoDid2'],
 stageGrants:[['stayCool2','askAround3','tellT3'],['askCalm3','checkDesk','letItGo2','makeRule2']],
 subs:[
  {title:'「ごめん、遊びのつもりだった」と言ってきた',text:'その子が、謝ってきた。',stat:'soc',min:0,good:{text:'「もうやめてね」と、許せた。',rep:1,mind:1},ok:{text:'許すことにした。',mind:1}},
  {title:'筆箱が、戻ってきた',text:'机の上に、戻っていた。',stat:'soc',min:0,good:{text:'「ありがとう」と言えた。',rep:1},ok:{text:'ほっとした。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='tellFeel3'){s.flags.toldF3=true;relation(s,'「やめて」と伝えた。相手が、少し考えた。');out.text='「隠すの、やめて」\n「…ごめん」';out.card='stayCool2'}
  if(key==='askTeacher3'){s.flags.askedT3=true;relation(s,'相談したら、先生が「見とくね」と言った。');out.text='「先生、相談していいですか」\n「あとで見とくね」';out.card='tellT3'}
  if(key==='askWho'){s.flags.askedW=true;relation(s,'「見なかった？」聞いたら、証言が出た。');out.text='「誰か、見なかった？」\n「あ、さっきあの子が机のとこにいた」';out.card='askAround3'}
  if(key==='annoyed'){s.reason='annoyed';out.text='勝手に隠されて、腹が立った。\n怒る前に、まず確かめよう。';out.card='lookNear'}
  if(key==='worried2'){s.reason='worried2';out.text='明日も、同じことになるか不安。\n「次を防ぐ」ことを考えよう。';out.card='makeRule2'}
  if(key==='whoDid2'){s.reason='whoDid2';out.text='誰がやったか、気になる。\n「聞く」と「決めつける」は違う。';out.card='askAround3'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='lookNear'){f.looked=true;return{text:'近くを、探した。手がかりが出てきた。',meaning:'まず探すと、事実が分かる。'}}
  if(id==='stayCool2'){f.cooled2=true;return{text:'「隠しごと？」と、冷静に聞いた。',meaning:'冷静だと、相手も素直になる。'}}
  if(id==='askAround3'){f.askedA3=true;return{text:'見ていた人に、聞いた。',meaning:'聞くと、証言が集まる。'}}
  if(id==='tellT3'){f.told3=true;return{text:'先生に、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='askCalm3'){f.askedC3=true;return{text:'「なんで隠したの？」と聞いた。',meaning:'理由が分かると、次がある。'}}
  if(id==='checkDesk'){f.checked=true;return{text:'置き場所を、もう一度確かめた。',meaning:'確認すると、勘違いも分かる。'}}
  if(id==='letItGo2'){f.letGo=true;return{text:'「びっくりしたー」と、笑いごとにした。',meaning:'笑えると、角が立たない。'}}
  if(id==='makeRule2'){f.ruled=true;return{text:'「隠しごとなし」のルールにした。',meaning:'ルールで、次を防ぐ。'}}
  if(id==='accuseH'){f.accused=true;s.rep-=1;relation(s,'決めつけて責めたら、嫌われた。');return{text:'「お前が隠したろ」と決めつけた。嫌われた。',meaning:'決めつけると、関係がこわれる。'}}
  if(id==='prankBack'){f.pranked=true;s.rep-=1;relation(s,'仕返ししたら、いたちごっこになった。');return{text:'仕返しして、隠した。いたちごっこになった。',meaning:'仕返しは、終わらない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'「遊び」がエスカレートすると、嫌な関係になる。':s.stage===1?'聞くと、理由や気持ちが見える。':'明日も、教室は同じ。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'朝、机の上に筆箱がない。だれかが、にやにやしている。',speaker:'だれか',quote:'（くすくす）',look:'誰かが、こちらを見ている。',self:'勝手に隠された…',hint:'隠されて、何がつらい？'};
  if(s.stage===1)return{narrative:'休み時間。誰がやったか、気になる。',speaker:'友達',quote:'あの子、さっき机のとこにいたよ',look:'証言が、集まってきた。',self:s.reason==='whoDid2'?'誰だろう…':s.reason==='worried2'?'明日も不安…':'むかつく…',hint:'冷静・聞く・相談、方法はある。'};
  return{narrative:'帰り道。明日から、どうするか。',speaker:'友達',quote:f.ruled?'「じゃ、なしだね」':'「またあるかも…」',look:'明日も、同じ教室。',self:f.letGo||f.ruled||f.askedC3?'次を、防げそう。':'まだ、不安が残る。',hint:'理由を聞く・確かめる・笑いごと・ルール、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.letGo||f.ruled||f.askedC3?3:f.cooled2||f.askedA3||f.told3||f.looked||f.checked?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.ruled||f.letGo?'次を、防ぐ準備ができた。':f.cooled2||f.askedA3?'冷静に、対処できている。':'まだ、モヤモヤ。冷静・聞く・相談、方法はある。'}
},
sign:{title:'テストの点を見せたくない',nav:'点を見せたくない',num:48,attrs:['study','soc'],goals:['正直に伝えたい','次につなげたい','自分のペースを守りたい'],chapters:['返ってきたテスト','家に帰って','明日から'],locations:['教室','家','翌日'],base:['hidePaper','fakeSign','tellHome','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'見せられない点数',hp:5,power:1,turns:4,look:'赤い数字が、目に入る。'},{name:'家での不安',hp:5,power:1,turns:4,look:'ランドセルが、重い。'},{name:'次のテストへの気持ち',hp:6,power:2,turns:4,look:'次は、どうするか。'}],
 talk:[['talkHome','家の人に相談する','点数のこと、相談する。'],['talkTeacher4','先生に聞く','どう直せばいいか、聞く。'],['showFriend','友達と見せ合う','お互いのを、見せ合う。']],
 think:[['shame3','点が悪くて恥ずかしい','点数が、低かった。'],['scaredHome','家で言われそう','家で、何か言われそう。'],['dontKnow2','どう直せばいいか','何をすれば、直せるか。']],
 reasonKeys:['shame3','scaredHome','dontKnow2'],
 stageGrants:[['showWeak','askHelp4','planRedo'],['ownPace2','compareSelf','makePromise2','restEasy']],
 subs:[
  {title:'家の人が「がんばったね」と言った',text:'「がんばったね」と、声をかけてもらった。',stat:'soc',min:0,good:{text:'「実は、あまりできなくて」と言えた。',rep:1,mind:1},ok:{text:'安心した。',mind:1}},
  {title:'テストを返してもらった',text:'先生が、「直せばいいよ」と言ってくれた。',stat:'study',min:0,good:{text:'「どこを直せばいいか」聞けた。',stat:'study'},ok:{text:'直す気になった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='talkHome'){s.flags.talkedH=true;relation(s,'相談したら、一緒に考えてくれた。');out.text='「テスト、悪かった」\n「どこができなかった？」';out.card='tellHome'}
  if(key==='talkTeacher4'){s.flags.talkedT=true;relation(s,'聞いたら、直し方を教えてもらった。');out.text='「どう直せばいいですか」\n「ここを、もう一回やろう」';out.card='showWeak'}
  if(key==='showFriend'){s.flags.showedF=true;relation(s,'見せ合ったら、みんな似たようなものだった。');out.text='「俺も悪かったよ」\n「え、そうなの？」';out.card='compareSelf'}
  if(key==='shame3'){s.reason='shame3';out.text='点数が、恥ずかしかった。\n「見せる」のは勇気がいる。';out.card='tellHome'}
  if(key==='scaredHome'){s.reason='scaredHome';out.text='家で言われそうで、こわかった。\n先に「相談」すると、変わる。';out.card='showWeak'}
  if(key==='dontKnow2'){s.reason='dontKnow2';out.text='何を直せばいいか、分からなかった。\n「直す方法」を考えよう。';out.card='planRedo'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='tellHome'){f.toldH=true;return{text:'正直に、見せた。',meaning:'正直は、一番楽。'}}
  if(id==='showWeak'){f.showedW=true;return{text:'「ここができなかった」と見せた。',meaning:'見せると、教えてもらえる。'}}
  if(id==='askHelp4'){f.askedH4=true;return{text:'「教えて」と頼んだ。',meaning:'頼むと、分かるようになる。'}}
  if(id==='planRedo'){f.planned3=true;return{text:'次の勉強計画を、立てた。',meaning:'計画で、不安が小さくなる。'}}
  if(id==='ownPace2'){f.ownPaced=true;return{text:'自分なりの目標を、決めた。',meaning:'自分のペースが、続く。'}}
  if(id==='compareSelf'){f.compared=true;return{text:'前の自分と、比べた。',meaning:'前よりできたら、成長。'}}
  if(id==='makePromise2'){f.promised2=true;return{text:'「次はがんばる」と約束した。',meaning:'約束は、支えになる。'}}
  if(id==='restEasy'){f.rested2=true;return{text:'今日は、気にしないことにした。',meaning:'切り替えも、立て直し。'}}
  if(id==='hidePaper'){f.hid=true;return{text:'プリントを、隠した。',meaning:'隠すと、心が重い。'}}
  if(id==='fakeSign'){f.faked2=true;s.rep-=1;relation(s,'ごまかしたら、あとでばれた。');return{text:'「まだ配ってない」とごまかした。',meaning:'ごまかすと、あとがこわい。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'点数は一時。直し方は、まだある。':s.stage===1?'正直だと、助けてもらえる。':'次のテストで、取り戻せる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'返ってきたテスト。思ったより、点が低かった。',speaker:'先生',quote:'直してきてね',look:'赤い数字が、目に入る。',self:'見せられない…',hint:'点が悪いとき、何がつらい？'};
  if(s.stage===1)return{narrative:'家。ランドセルが、重い。',speaker:'家の人',quote:'テスト、返ってきた？',look:'家の人が、聞いてくる。',self:s.reason==='scaredHome'?'怒られるかも…':s.reason==='shame3'?'恥ずかしい…':'どう言おう…',hint:'正直・見せる・聞く、方法はある。'};
  return{narrative:'翌日。次のテストまで、あと少し。',speaker:'家の人',quote:f.toldH||f.promised2?'「次、がんばろうね」':'「まあいいけど」',look:'明日も、勉強がある。',self:f.ownPaced||f.compared||f.planned3?'次の作戦が、立った。':'まだ、気が重い。',hint:'目標・比べる・約束・気にしない、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.ownPaced||f.compared||f.planned3||f.promised2?3:f.toldH||f.showedW||f.askedH4||f.talkedH||f.talkedT?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.ownPaced||f.planned3||f.promised2?'次の作戦が、立った。':f.toldH||f.showedW?'正直に、できた。':'まだ、隠したまま。正直・見せる・計画、方法はある。'}
},
lineCut:{title:'列に割り込まれた',nav:'割り込まれた',num:49,attrs:['soc'],goals:['自分の順番を守りたい','相手とぶつからず解決したい','ルールを守れる関係にしたい'],chapters:['列に並んでいた','割り込まれた','明日からの列'],locations:['給食の列','休み時間','翌日の列'],base:['yellCut','pretendOk','sayTurn','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'割り込む足',hp:5,power:1,turns:4,look:'前に、誰かが入った。'},{name:'割り込んだ子',hp:5,power:1,turns:4,look:'知らんぷりしている。'},{name:'明日の列',hp:6,power:2,turns:4,look:'明日も、列がある。'}],
 talk:[['talkCut','「後ろに並んで」と言う','自分の順番を、伝える。'],['tellWatch2','見ている人・先生に言う','困ったことは、相談する。'],['askBack','「一番後ろはどこ？」と聞く','気づいてもらう聞き方。']],
 think:[['unfair','ずるい・腹が立つ','割り込まれて、ずるいと思った。'],['hesitant3','言っていいか不安','言っても、いいのかな。'],['ruleThink','ルールはどうだったか','列のルール、どうだったか。']],
 reasonKeys:['unfair','hesitant3','ruleThink'],
 stageGrants:[['tapShoulder','tellWatcher','coolVoice'],['explainRule','letSlide','askEnd','standUp2']],
 subs:[
  {title:'割り込んだ子が「ごめん」と言った',text:'その子が、謝って後ろに行った。',stat:'soc',min:0,good:{text:'「ありがとう」と言えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'前の子が「代わろうか」と言ってくれた',text:'前の子が、優しく声をかけてくれた。',stat:'soc',min:0,good:{text:'「いいよ、ありがとう」と言えた。',rep:1},ok:{text:'あたたかい気持ちになった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='talkCut'){s.flags.talkedCut=true;relation(s,'「後ろに並んで」と言ったら、相手が動いた。');out.text='「後ろに並んで」\n「あ、ごめん」';out.card='sayTurn'}
  if(key==='tellWatch2'){s.flags.toldW=true;relation(s,'見ていた人に言ったら、一緒に言ってくれた。');out.text='「割り込まれた」\n「そうだよね、順番だよ」';out.card='tellWatcher'}
  if(key==='askBack'){s.flags.askedB=true;relation(s,'「一番後ろはどこ？」と聞いたら、気づいてくれた。');out.text='「一番後ろ、どこ？」\n「あ、僕が悪かった」';out.card='askEnd'}
  if(key==='unfair'){s.reason='unfair';out.text='割り込まれて、ずるいと思った。\n「ずるい」は、正しい気持ち。';out.card='sayTurn'}
  if(key==='hesitant3'){s.reason='hesitant3';out.text='言ってもいいか、不安だった。\n「静かに言う」なら、大丈夫。';out.card='coolVoice'}
  if(key==='ruleThink'){s.reason='ruleThink';out.text='列のルール、どうだったか。\nルールを説明すれば、相手も納得しやすい。';out.card='explainRule'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='sayTurn'){f.saidT=true;return{text:'「後ろに並んで」と、伝えた。',meaning:'静かに言うと、伝わる。'}}
  if(id==='tapShoulder'){f.tapped=true;return{text:'肩を軽くたたいて、穏やかに言った。',meaning:'穏やかだと、相手も聞く。'}}
  if(id==='tellWatcher'){f.toldW2=true;return{text:'見ている人に、伝えた。',meaning:'一人で解決しなくてもいい。'}}
  if(id==='coolVoice'){f.coolV=true;return{text:'「僕の順番だよ」と言えた。',meaning:'自分の意見を言うのは、正しい。'}}
  if(id==='explainRule'){f.explained=true;return{text:'列のルールを、説明した。',meaning:'ルールなら、相手も納得しやすい。'}}
  if(id==='letSlide'){f.letS=true;return{text:'「今回はいいか」と、見送った。',meaning:'許せることも、強さ。'}}
  if(id==='askEnd'){f.askedE=true;return{text:'「一番後ろはどこ？」と聞いた。',meaning:'聞くと、気づいてもらえる。'}}
  if(id==='standUp2'){f.stood=true;return{text:'みんなで、「順番だよ」と言った。',meaning:'みんなで言うと、届く。'}}
  if(id==='yellCut'){f.yelled=true;s.rep-=1;relation(s,'怒鳴ったら、まわりが引いた。');return{text:'「割り込むな！」と怒鳴った。まわりが引いた。',meaning:'怒鳴ると、まわりも嫌になる。'}}
  if(id==='pretendOk'){f.pretended=true;return{text:'黙って、我慢した。',meaning:'我慢すると、心が重い。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'順番は、みんなの約束。':s.stage===1?'言い方次第で、関係は変わる。':'明日も、列はある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'給食の列に、ちゃんと並んでいた。',speaker:'前の子',quote:'（割り込んでくる）',look:'前に、誰かが入った。',self:'ずるい…',hint:'割り込まれて、何がつらい？'};
  if(s.stage===1)return{narrative:'その子は、知らんぷりしている。',speaker:'割り込んだ子',quote:'（後ろを見ない）',look:'その子は、目をそらした。',self:s.reason==='hesitant3'?'言っていいか不安…':s.reason==='ruleThink'?'ルールは…？':'ずるい…',hint:'言う・聞く・相談、方法はある。'};
  return{narrative:'翌日。また、列に並ぶ。',speaker:'友達',quote:f.saidT||f.coolV||f.stood?'「順番だよね」':'「今日はどうなるかな」',look:'今日も、列がある。',self:f.letS||f.explained||f.askedE?'落ち着いて、対処できそう。':'まだ、少し嫌な気持ち。',hint:'ルール・見送る・聞く・みんなで、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.letS||f.explained||f.askedE||f.stood?3:f.saidT||f.tapped||f.toldW2||f.coolV?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.letS||f.explained||f.stood?'列を、守れる関係ができた。':f.saidT||f.coolV?'自分の順番を、伝えられた。':'まだ、モヤモヤ。言う・聞く・相談、方法はある。'}
},
dumped:{title:'仕事を押し付けられた',nav:'押し付けられた',num:50,attrs:['soc'],goals:['自分の仕事と相手の仕事を分けたい','断る勇気を持ちたい','公平な分け方にしたい'],chapters:['「やっといて」と言われた','自分の仕事と相手の仕事','明日の係'],locations:['教室・放課後','休み時間','翌日'],base:['snapTake','silentDo','sayNo2','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'押し付ける手',hp:5,power:1,turns:4,look:'「やっといて」と、雑巾が渡された。'},{name:'逃げたその子',hp:5,power:1,turns:4,look:'その子は、もう遊んでいる。'},{name:'明日の係',hp:6,power:2,turns:4,look:'明日も、同じことがあるか。'}],
 talk:[['talkDuty','「あなたの仕事だよ」と言う','静かに、断る。'],['askTeacher5','係の決め方を相談する','仕事の分け方、相談する。'],['askOthers','他の係の人に聞く','「みんなはどうしてる？」と聞く。']],
 think:[['resent','なんで私だけ…と思う','押し付けられて、不満だった。'],['dutyThink','自分の分はどこまでか','どこまでが、自分の仕事か。'],['fairThink','公平じゃないと思う','一人に押し付けるのは、公平じゃない。']],
 reasonKeys:['resent','dutyThink','fairThink'],
 stageGrants:[['askRole','takeHalf','tellT4'],['splitFair','tradeIt','ownJob','noPush']],
 subs:[
  {title:'その子が「ごめん、半分やる」と言った',text:'その子が、戻ってきて半分やってくれた。',stat:'soc',min:0,good:{text:'「ありがとう、助かる」と言えた。',rep:1,mind:1},ok:{text:'仲直りできた。',mind:1}},
  {title:'他の係の人が手伝ってくれた',text:'「一緒にやろう」と、手伝ってくれた。',stat:'soc',min:0,good:{text:'一緒にできて、楽しかった。',rep:1},ok:{text:'助かった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='talkDuty'){s.flags.talkedD=true;relation(s,'「あなたの仕事だよ」と言ったら、相手が戻ってきた。');out.text='「それ、あなたの仕事だよ」\n「…ごめん」';out.card='sayNo2'}
  if(key==='askTeacher5'){s.flags.askedT5=true;relation(s,'相談したら、「みんなで分けなさい」と言ってもらえた。');out.text='「係、一人に押し付けられて」\n「みんなで分けなさい」';out.card='tellT4'}
  if(key==='askOthers'){s.flags.askedO=true;relation(s,'他の係に聞いたら、「交代でやってる」と分かった。');out.text='「みんな、どうしてる？」\n「うちは、交代でやってるよ」';out.card='tradeIt'}
  if(key==='resent'){s.reason='resent';out.text='なんで私だけ…と思った。\n「不満」は、伝えてもいい気持ち。';out.card='sayNo2'}
  if(key==='dutyThink'){s.reason='dutyThink';out.text='どこまでが自分の仕事か、考えた。\n「自分の分」を見極めよう。';out.card='ownJob'}
  if(key==='fairThink'){s.reason='fairThink';out.text='一人に押し付けるのは、公平じゃない。\n「分ける」「交代」で公平にできる。';out.card='splitFair'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='sayNo2'){f.saidNo2=true;return{text:'「あなたの仕事だよ」と、言えた。',meaning:'断るのは、わがままじゃない。'}}
  if(id==='askRole'){f.askedR=true;return{text:'「なんで私がやるの？」と聞いた。',meaning:'理由が分かると、対処できる。'}}
  if(id==='takeHalf'){f.tookH=true;return{text:'「半分だけやる」と、交渉した。',meaning:'交渉は、両方にいい。'}}
  if(id==='tellT4'){f.toldT4=true;return{text:'係の決め方を、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='splitFair'){f.splitF=true;return{text:'「みんなで分けよう」と、提案した。',meaning:'分けると、公平になる。'}}
  if(id==='tradeIt'){f.traded=true;return{text:'「じゃあ交代で」と、提案した。',meaning:'交代なら、ずるくない。'}}
  if(id==='ownJob'){f.ownJ=true;return{text:'自分の分だけ、しっかりやった。',meaning:'自分の分は、自分の責任。'}}
  if(id==='noPush'){f.noP=true;return{text:'「押し付けない」を、みんなの約束にした。',meaning:'約束で、次を防ぐ。'}}
  if(id==='snapTake'){f.snapped=true;s.rep-=1;relation(s,'突き放したら、その子と気まずくなった。');return{text:'「知らないよ」と突き放した。',meaning:'突き放すと、関係がこわれる。'}}
  if(id==='silentDo'){f.didAll=true;return{text:'黙って、全部やった。',meaning:'我慢すると、心が重い。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'仕事は、押し付けるものじゃない。':s.stage===1?'断るのは、わがままじゃない。':'明日も、係がある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'放課後。「やっといて」と、雑巾を渡された。その子は、もう遊んでいる。',speaker:'その子',quote:'よろしく〜',look:'その子が、走って行った。',self:'なんで私だけ…',hint:'押し付けられて、何がつらい？'};
  if(s.stage===1)return{narrative:'自分の仕事と、その子の仕事。どこまでやればいい？',speaker:'係の友達',quote:'それ、その子の仕事じゃない？',look:'一人で、雑巾がけをしている。',self:s.reason==='dutyThink'?'どこまでが自分の分…':s.reason==='fairThink'?'公平じゃない…':'なんで私だけ…',hint:'断る・交渉・相談、方法はある。'};
  return{narrative:'翌日。また、係の時間が来る。',speaker:'係の友達',quote:f.splitF||f.traded?'「分けようか」':'「今日はどうする？」',look:'明日も、係がある。',self:f.ownJ||f.noP||f.splitF?'公平に、できそう。':'まだ、一人で抱えそう。',hint:'分ける・交代・自分の分・約束、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.ownJ||f.noP||f.splitF||f.traded?3:f.saidNo2||f.askedR||f.tookH||f.toldT4?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.splitF||f.traded||f.noP?'公平な分け方が、できた。':f.saidNo2||f.tookH?'断る・交渉が、できた。':'まだ、一人で抱えている。断る・分ける・相談、方法はある。'}
},
gossip:{title:'友達の悪口を聞いた',nav:'悪口を聞いた',num:51,attrs:['soc'],goals:['悪口に乗らないでいたい','関係をこわさず立ち回りたい','悪口のない場にしたい'],chapters:['悪口の話が始まった','どう立ち回るか','明日からの関係'],locations:['休み時間','帰り道','翌日'],base:['joinGossip','stayMute','changeTopic','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'悪口の渦',hp:5,power:1,turns:4,look:'「あの子ってさ…」と始まった。'},{name:'同調の圧力',hp:5,power:1,turns:4,look:'みんな、こっちを見ている。'},{name:'明日の空気',hp:6,power:2,turns:4,look:'明日も、このグループ。'}],
 talk:[['changeSub','話題を変える','「そういえば」と、切り替える。'],['askDirect','本人に直接聞いてみる','悪口じゃなく、本人に聞く。'],['talkTeacher6','先生に相談する','悪口のこと、相談する。']],
 think:[['uncomfortable','悪口が嫌だ','悪口を聞くと、嫌な気持ち。'],['afraid2','はずされるのが不安','反対したら、はずされるか。'],['whatIsRight','正しいのはどれか','正しいのは、どれだろう。']],
 reasonKeys:['uncomfortable','afraid2','whatIsRight'],
 stageGrants:[['walkAway2','defendF','neutralSt'],['tellF4','askBoth2','kindWord','keepOut']],
 subs:[
  {title:'悪口を言っていた子が「本当は悪くないと思う」と言った',text:'その子が、本音を漏らした。',stat:'soc',min:0,good:{text:'「そうだよね」と、本音で話せた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'悪口を言われた子が「一緒に遊ぼう」と誘ってきた',text:'その子が、誘ってきた。',stat:'soc',min:0,good:{text:'「うん」と、仲良くできた。',rep:1},ok:{text:'嬉しかった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='changeSub'){s.flags.changed=true;relation(s,'話題を変えたら、悪口が止まった。');out.text='「そういえば、昨日のテレビ」\n「あ、それ見た見た！」';out.card='changeTopic'}
  if(key==='askDirect'){s.flags.askedD=true;relation(s,'本人に聞いたら、本当のことが分かった。');out.text='「今日、元気ないけどどうしたの」\n「実は…」';out.card='tellF4'}
  if(key==='talkTeacher6'){s.flags.talkedT6=true;relation(s,'相談したら、「悪口は乗らなくていいよ」と言ってもらえた。');out.text='「悪口、どうすれば」\n「乗らなくて、いいよ」';out.card='keepOut'}
  if(key==='uncomfortable'){s.reason='uncomfortable';out.text='悪口を聞くと、嫌な気持ちになった。\nその「嫌」は、正しい。';out.card='changeTopic'}
  if(key==='afraid2'){s.reason='afraid2';out.text='反対したら、はずされるか不安。\n「中立」「離れる」なら、ぶつからない。';out.card='neutralSt'}
  if(key==='whatIsRight'){s.reason='whatIsRight';out.text='正しいのは、どれだろう。\n「かばう」は勇気、「悪口のない場」は理想。';out.card='defendF'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='changeTopic'){f.chTopic=true;return{text:'話題を、変えた。',meaning:'話題を変えると、悪口が止まる。'}}
  if(id==='walkAway2'){f.walked2=true;return{text:'その場を、離れた。',meaning:'離れるのも、答え。'}}
  if(id==='defendF'){f.defended=true;return{text:'「いいところもあるよ」と、かばった。',meaning:'かばうのは、勇気。'}}
  if(id==='neutralSt'){f.neutral2=true;return{text:'「そうかなあ」と、中立でいた。',meaning:'中立でいると、巻き込まれない。'}}
  if(id==='tellF4'){f.toldF4=true;return{text:'本人に、直接伝えた。',meaning:'正直は、関係を守る。'}}
  if(id==='askBoth2'){f.askedB2=true;return{text:'両方の話を、聞いた。',meaning:'両方聞くと、本当が分かる。'}}
  if(id==='kindWord'){f.kindW=true;return{text:'悪口のない会話を、心がけた。',meaning:'悪口のない場は、みんなが楽。'}}
  if(id==='keepOut'){f.keptOut=true;return{text:'「私は入らない」と、距離を置いた。',meaning:'距離を置くと、巻き込まれない。'}}
  if(id==='joinGossip'){f.joined=true;s.rep-=1;relation(s,'悪口に乗ったら、あとで心が痛んだ。');return{text:'一緒に、悪口を言った。',meaning:'乗ると、あとで心が痛い。'}}
  if(id==='stayMute'){f.muted=true;return{text:'黙って、聞き流した。',meaning:'黙ると、仲間だと思われる。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'悪口は、簡単に広がる。':s.stage===1?'乗らなくていい。でも、方法はいろいろ。':'明日も、このグループがある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'休み時間。「あの子ってさ…」と、悪口の話が始まった。',speaker:'友達',quote:'あの子、なんかムカつくよね',look:'みんな、うなずいている。',self:'悪口、嫌だな…',hint:'悪口を聞いて、何がつらい？'};
  if(s.stage===1)return{narrative:'話は、どんどん盛り上がっている。みんな、こっちを見ている。',speaker:'友達',quote:'お前も思うよね？',look:'同調を、求められている。',self:s.reason==='afraid2'?'反対したら…':s.reason==='whatIsRight'?'正しいのは…':'嫌だな…',hint:'変える・離れる・かばう・中立、方法はある。'};
  return{narrative:'翌日。また、そのグループで過ごす。',speaker:'友達',quote:f.defended||f.keptOut?'「お前、あの子のことかばうよな」':'「また悪口の話しようぜ」',look:'明日も、この関係。',self:f.kindW||f.keptOut||f.toldF4?'悪口のない場に、できそう。':'まだ、流されそう。',hint:'本人・両方・悪口なし・距離、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.kindW||f.keptOut||f.toldF4||f.askedB2?3:f.chTopic||f.walked2||f.defended||f.neutral2?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.kindW||f.keptOut?'悪口のない場に、近づいた。':f.chTopic||f.defended||f.neutral2?'流されず、立ち回れた。':'まだ、流されそう。変える・離れる・かばう、方法はある。'}
},
broke:{title:'借りたものを壊した',nav:'壊した',num:52,attrs:['soc'],goals:['正直に謝りたい','責任を取りたい','次は丁寧に扱いたい'],chapters:['壊れてしまった','どう伝えるか','返すとき'],locations:['教室','休み時間','翌日'],base:['hideBroke','blameIt','tellOwner','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'壊れたもの',hp:5,power:1,turns:4,look:'壊れたものが、手の中にある。'},{name:'持ち主の顔',hp:5,power:1,turns:4,look:'持ち主が、近づいてくる。'},{name:'返すときの信用',hp:6,power:2,turns:4,look:'明日も、顔を合わせる。'}],
 talk:[['confess','「ごめん、壊した」と言う','正直に、謝る。'],['askHelp5','大人に相談する','どうすればいいか、聞く。'],['tryFix','直せるか試す','直せるところは、直す。']],
 think:[['guilty','悪いことをした','壊してしまって、悪かった。'],['scared3','怒られるのがこわい','怒られるのが、こわい。'],['responsibility','責任は取るべきか','責任を、どう取るか。']],
 reasonKeys:['guilty','scared3','responsibility'],
 stageGrants:[['fixIt','askSorry','payBack2'],['askAdult2','beCareful','ownMistake','ownTruth']],
 subs:[
  {title:'持ち主が「気にしないで」と言ってくれた',text:'その子が、優しく許してくれた。',stat:'soc',min:0,good:{text:'「ごめん、ありがとう」と言えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'直せるところが見つかった',text:'壊れたところ、直せそうだった。',stat:'study',min:0,good:{text:'丁寧に直せた。',stat:'study'},ok:{text:'ちょっと直せた。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='confess'){s.flags.confessed=true;relation(s,'正直に謝ったら、相手は静かに聞いてくれた。');out.text='「ごめん、壊しちゃった」\n「…そっか。ありがとう、言ってくれて」';out.card='tellOwner'}
  if(key==='askHelp5'){s.flags.askedH5=true;relation(s,'相談したら、「謝るのが一番」と言ってもらえた。');out.text='「壊しちゃった…」\n「謝るのが、一番だよ」';out.card='askAdult2'}
  if(key==='tryFix'){s.flags.triedFix=true;relation(s,'試したら、少し直せた。');out.text='「この部分、戻せるかも」';out.card='fixIt'}
  if(key==='guilty'){s.reason='guilty';out.text='壊してしまって、悪かった。\n「悪い」は、正直に言うべき気持ち。';out.card='tellOwner'}
  if(key==='scared3'){s.reason='scared3';out.text='怒られるのが、こわい。\nでも「隠す」より「謝る」が先。';out.card='askSorry'}
  if(key==='responsibility'){s.reason='responsibility';out.text='責任を、どう取るか。\n「弁償」「直す」「謝る」がある。';out.card='payBack2'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='tellOwner'){f.toldO=true;return{text:'「ごめん、壊しちゃった」と言えた。',meaning:'正直に謝ると、許してもらえる。'}}
  if(id==='fixIt'){f.fixed=true;return{text:'直せるところを、直した。',meaning:'直せたら、一番いい。'}}
  if(id==='askSorry'){f.sorryA=true;return{text:'ちゃんと向き合って、もう一度謝った。',meaning:'丁寧な謝罪は、届く。'}}
  if(id==='payBack2'){f.paid=true;return{text:'「弁償するよ」と、責任を持った。',meaning:'責任を持つのは、誠実。'}}
  if(id==='askAdult2'){f.askedA2=true;return{text:'大人に、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='beCareful'){f.careful=true;return{text:'次は丁寧に、借りることにした。',meaning:'丁寧は、約束の形。'}}
  if(id==='ownMistake'){f.owned=true;return{text:'「私がやった」と、責任を持った。',meaning:'責任は、信頼の土台。'}}
  if(id==='ownTruth'){f.ownedT=true;return{text:'ごまかさず、真実を認めた。',meaning:'真実は、後腐れがない。'}}
  if(id==='hideBroke'){f.hidB=true;return{text:'壊したのを、隠して返した。',meaning:'隠すと、あとで困る。'}}
  if(id==='blameIt'){f.blamed=true;s.rep-=1;relation(s,'とぼけたら、あとでばれて信用を失った。');return{text:'「知らない」と、とぼけた。',meaning:'とぼけると、信用を失う。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'壊したものは、戻らない。でも対応はできる。':s.stage===1?'正直は、一番の弁償。':'明日も、顔を合わせる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'借りたものを、落として壊してしまった。',speaker:'心の声',quote:'どうしよう…',look:'壊れたものが、手の中にある。',self:'隠したい…',hint:'壊して、何がつらい？'};
  if(s.stage===1)return{narrative:'持ち主が、近づいてくる。どう伝えるか。',speaker:'持ち主',quote:'あれ、返してくれる？',look:'持ち主が、笑っている。',self:s.reason==='scared3'?'怒られるかも…':s.reason==='responsibility'?'責任は…':'悪いな…',hint:'正直・直す・弁償・相談、方法はある。'};
  return{narrative:'返したあと。明日も、顔を合わせる。',speaker:'持ち主',quote:f.toldO||f.sorryA?'「正直に言ってくれてありがとう」':'「まあ、仕方ないか」',look:'明日も、この関係。',self:f.owned||f.ownedT||f.careful?'信用を、守れた。':'まだ、心が重い。',hint:'相談・丁寧・責任・真実、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.owned||f.ownedT||f.careful||f.askedA2?3:f.toldO||f.fixed||f.sorryA||f.paid?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.owned||f.ownedT?'責任を、取れた。':f.toldO||f.fixed||f.paid?'正直に、対応できた。':'まだ、隠したまま。正直・直す・弁償、方法はある。'}
},
leftOut:{title:'遊びから置いて行かれた',nav:'置いて行かれた',num:53,attrs:['soc'],goals:['寂しさを伝えたい','一人でも楽しくいたい','次は一緒にいたい'],chapters:['置いて行かれた','一人の時間','明日の遊び'],locations:['校庭','休み時間','翌日'],base:['chaseRun','pretendFine','sayWait2','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'遠ざかる背中',hp:5,power:1,turns:4,look:'友達の背中が、遠くなる。'},{name:'一人の時間',hp:5,power:1,turns:4,look:'一人、取り残された。'},{name:'明日の遊び',hp:6,power:2,turns:4,look:'明日は、一緒にいられるか。'}],
 talk:[['callOut','「待って！」と声をかける','置いて行かれて、声をかける。'],['askReason','「なんで行っちゃったの？」と聞く','理由を、聞いてみる。'],['talkOther','他の子と話してみる','その子以外にも、話せる。']],
 think:[['lonely','寂しい・悲しい','置いて行かれて、寂しかった。'],['wantAlong','一緒にいたかった','本当は、一緒にいたかった。'],['ownFun','一人でも楽しいこと','一人でも、楽しいことはある。']],
 reasonKeys:['lonely','wantAlong','ownFun'],
 stageGrants:[['tellHow3','askWhyRun','slowDown'],['findOwn2','otherFriends','waitPatience','nextTime']],
 subs:[
  {title:'友達が戻ってきて「ごめん、忘れてた」と言った',text:'その子が、戻ってきて謝った。',stat:'soc',min:0,good:{text:'「気にしてないよ」と言えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'一人で遊んでいたら、誰かが寄ってきた',text:'別の子が、「一緒にやろう」と来てくれた。',stat:'soc',min:0,good:{text:'新しい遊びが、できた。',rep:1},ok:{text:'楽しかった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='callOut'){s.flags.called=true;relation(s,'「待って！」と言ったら、立ち止まってくれた。');out.text='「待って！」\n「あ、ごめん！　気づかなかった」';out.card='sayWait2'}
  if(key==='askReason'){s.flags.askedR2=true;relation(s,'聞いたら、「急いでて」と分かった。');out.text='「なんで行っちゃったの？」\n「先に行きたくて…ごめん」';out.card='askWhyRun'}
  if(key==='talkOther'){s.flags.talkedO=true;relation(s,'他の子と話したら、楽しかった。');out.text='「何してるの？」\n「これ、面白いよ」';out.card='otherFriends'}
  if(key==='lonely'){s.reason='lonely';out.text='置いて行かれて、寂しかった。\n「寂しい」は、伝えていい気持ち。';out.card='tellHow3'}
  if(key==='wantAlong'){s.reason='wantAlong';out.text='本当は、一緒にいたかった。\n「待って」「次は」と、言おう。';out.card='sayWait2'}
  if(key==='ownFun'){s.reason='ownFun';out.text='一人でも、楽しいことはある。\n追いかけなくても、いい。';out.card='findOwn2'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='sayWait2'){f.saidW2=true;return{text:'「待って！」と、声をかけた。',meaning:'声をかけると、気づいてもらえる。'}}
  if(id==='tellHow3'){f.toldH3=true;return{text:'「寂しかった」と、伝えた。',meaning:'気持ちを言うと、分かってもらえる。'}}
  if(id==='askWhyRun'){f.askedW3=true;return{text:'「なんで行っちゃったの？」と聞いた。',meaning:'理由が分かると、気が楽になる。'}}
  if(id==='findOwn2'){f.found2=true;return{text:'自分の遊びを、見つけた。',meaning:'一人の遊びも、楽しい。'}}
  if(id==='otherFriends'){f.othered=true;return{text:'他の子と、遊んだ。',meaning:'友達は、一人じゃない。'}}
  if(id==='slowDown'){f.slowed=true;return{text:'追いかけず、深呼吸した。',meaning:'深呼吸で、気持ちが落ち着く。'}}
  if(id==='waitPatience'){f.waited=true;return{text:'戻ってくるのを、待った。',meaning:'待てるのも、力。'}}
  if(id==='nextTime'){f.nexted=true;return{text:'「次は一緒に行こう」と、約束した。',meaning:'約束で、次が変わる。'}}
  if(id==='chaseRun'){f.chased=true;return{text:'必死に、追いかけた。',meaning:'追うほど、疲れて悲しくなる。'}}
  if(id==='pretendFine'){f.pretendF=true;return{text:'「どうでもいい」と、強がった。',meaning:'強がると、心が疲れる。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'置いて行かれると、寂しい。':s.stage===1?'一人の時間も、悪くない。':'明日も、遊べる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'友達と遊んでいたのに、気づいたら一人だった。',speaker:'友達',quote:'（遠くで笑い声）',look:'友達の背中が、遠くに見える。',self:'置いて行かれた…',hint:'置いて行かれて、何がつらい？'};
  if(s.stage===1)return{narrative:'一人の時間。追いかけるか、自分のことをするか。',speaker:'心の声',quote:'どうしよう',look:'校庭が、広い。',self:s.reason==='wantAlong'?'一緒にいたい…':s.reason==='ownFun'?'一人でも…':'寂しい…',hint:'伝える・聞く・深呼吸、方法はある。'};
  return{narrative:'翌日。また、遊ぶ時間が来る。',speaker:'友達',quote:f.toldH3||f.nexted?'「ごめんね、昨日」':'「今日は何して遊ぶ？」',look:'今日も、遊べる。',self:f.found2||f.othered||f.waited?'一人でも、大丈夫。':'まだ、寂しさが残る。',hint:'自分の遊び・他の子・待つ・約束、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.found2||f.othered||f.waited||f.nexted?3:f.saidW2||f.toldH3||f.askedW3||f.slowed?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.found2||f.othered||f.nexted?'一人でも、楽しくいられる。':f.saidW2||f.toldH3?'気持ちを、伝えられた。':'まだ、置いて行かれたまま。伝える・自分の遊び・待つ、方法はある。'}
},
nameWrong:{title:'名前を間違えられ続ける',nav:'名前を間違えられる',num:54,attrs:['soc'],goals:['正しい名前で呼んでもらいたい','関係をこわさず訂正したい','自分の名前を大切にしたい'],chapters:['また間違えられた','どう訂正するか','名前で呼ばれる日'],locations:['教室','休み時間','翌日'],base:['stayWrong','yellName','correctCalm','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'間違った呼び名',hp:5,power:1,turns:4,look:'「△△くん」と、また呼ばれた。'},{name:'訂正する勇気',hp:5,power:1,turns:4,look:'言うか、言わないか。'},{name:'名前の自分',hp:6,power:2,turns:4,look:'自分の名前は、自分のもの。'}],
 talk:[['tellTeacher7','先生に「違います」と言う','落ち着いて、訂正する。'],['showCard','名札を見せる','名札で、覚えてもらう。'],['tellFriend5','友達に相談する','「どう言えばいい？」と聞く。']],
 think:[['small','自分が小さく思える','何度も間違えられて、小さく思えた。'],['awkward2','言いにくい','訂正するのが、言いにくい。'],['myName','名前は大切','名前は、自分の大切なもの。']],
 reasonKeys:['small','awkward2','myName'],
 stageGrants:[['writeName','askFix','jokeName'],['ownName2','proudName','askParents2','quietTake']],
 subs:[
  {title:'先生が「ごめん、ずっと間違えてたね」と言った',text:'先生が、気づいて謝ってくれた。',stat:'soc',min:0,good:{text:'「大丈夫です」と言えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'友達が「僕も覚えたよ」と言ってくれた',text:'友達が、名前を覚えてくれた。',stat:'soc',min:0,good:{text:'「ありがとう」と言えた。',rep:1},ok:{text:'嬉しかった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='tellTeacher7'){s.flags.toldT7=true;relation(s,'言ったら、先生が「ごめんね」と言ってくれた。');out.text='「先生、名前違います」\n「あ、ごめんね」';out.card='askFix'}
  if(key==='showCard'){s.flags.showedC=true;relation(s,'名札を見せたら、覚えてくれた。');out.text='「ここに、名前あります」\n「あ、これが△△じゃなくて××ね」';out.card='writeName'}
  if(key==='tellFriend5'){s.flags.toldF5=true;relation(s,'相談したら、「はっきり言えばいいよ」と言ってもらえた。');out.text='「名前、間違えられて」\n「はっきり言えばいいよ」';out.card='askFix'}
  if(key==='small'){s.reason='small';out.text='何度も間違えられて、小さく思えた。\nでも名前は、自分のもの。';out.card='ownName2'}
  if(key==='awkward2'){s.reason='awkward2';out.text='訂正するのが、言いにくかった。\n「優しく」「落ち着いて」なら、言いやすい。';out.card='quietTake'}
  if(key==='myName'){s.reason='myName';out.text='名前は、自分の大切なもの。\n正しく呼んでもらうのは、当然。';out.card='correctCalm'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='correctCalm'){f.corrected=true;return{text:'「××です」と、落ち着いて直した。',meaning:'落ち着くと、伝わる。'}}
  if(id==='writeName'){f.wrote=true;return{text:'名札を見せて、覚えてもらった。',meaning:'見せると、覚えてもらえる。'}}
  if(id==='askFix'){f.askedF=true;return{text:'「名前、違います」と、はっきり言った。',meaning:'はっきり言うと、直してもらえる。'}}
  if(id==='jokeName'){f.joked=true;return{text:'覚え方を、教えた。',meaning:'教えると、覚えてもらえる。'}}
  if(id==='ownName2'){f.ownedN=true;return{text:'名前を、大切にすることにした。',meaning:'大切にすると、堂々と言える。'}}
  if(id==='proudName'){f.prouded=true;return{text:'名前の由来を、話した。',meaning:'由来を話すと、興味を持ってもらえる。'}}
  if(id==='askParents2'){f.askedP2=true;return{text:'家の人に、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='quietTake'){f.quieted=true;return{text:'一度だけ、優しく直した。',meaning:'優しい訂正は、角が立たない。'}}
  if(id==='stayWrong'){f.stayedW=true;return{text:'間違えたまま、返事をした。',meaning:'そのままだと、ずっと間違えられる。'}}
  if(id==='yellName'){f.yelledN=true;s.rep-=1;relation(s,'怒って直したら、まわりが引いた。');return{text:'「違うよ！」と、怒った。',meaning:'怒ると、まわりが引く。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'名前は、みんなの入口。':s.stage===1?'訂正は、攻撃じゃない。':'明日も、名前で呼ばれる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'朝の会。「△△くん」と、また間違った名前で呼ばれた。',speaker:'先生',quote:'△△くん、今日の当番だよ',look:'名前を、間違えられた。',self:'違うんだけどな…',hint:'間違えられて、何がつらい？'};
  if(s.stage===1)return{narrative:'休み時間。訂正するか、このままか。',speaker:'心の声',quote:'言うか、言わないか',look:'名札が、光っている。',self:s.reason==='awkward2'?'言いにくい…':s.reason==='myName'?'名前は大切…':'小さい気持ち…',hint:'直す・見せる・教える、方法はある。'};
  return{narrative:'翌日。今日は、どう呼ばれるか。',speaker:'友達',quote:f.corrected||f.askedF||f.joked?'「××くん、おはよう」':'「△△くんだっけ」',look:'今日も、名前で呼ばれる。',self:f.ownedN||f.quieted||f.prouded?'名前で、呼ばれそう。':'まだ、間違えられそう。',hint:'大切に・由来・相談・優しく、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.ownedN||f.quieted||f.prouded||f.askedP2?3:f.corrected||f.wrote||f.askedF||f.joked?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.ownedN||f.quieted?'名前を、守れた。':f.corrected||f.askedF?'訂正、できた。':'まだ、間違えたまま。直す・見せる・教える、方法はある。'}
},
picky:{title:'給食が苦手で残した',nav:'給食で残した',num:55,attrs:['ath','soc'],goals:['少しずつ食べられるようになりたい','無理せず挑戦したい','正直に苦手を伝えたい'],chapters:['苦手なものが出た','どう挑戦するか','明日の給食'],locations:['給食の時間','教室','翌日'],base:['leaveAll','forceEat','tinyBite','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'苦手な一品',hp:5,power:1,turns:4,look:'苦手なものが、目の前にある。'},{name:'残すか残さないか',hp:5,power:1,turns:4,look:'食べるか、残すか。'},{name:'明日の給食',hp:6,power:2,turns:4,look:'明日も、給食はある。'}],
 talk:[['askLess2','「少なめに」とお願いする','量を、変えてもらう。'],['askLunch2','給食の先生に相談する','どうすればいいか、聞く。'],['tellFriend6','友達に相談する','「苦手なんだけど」と言う。']],
 think:[['hate2','苦手で食べたくない','苦手なものが、出てきた。'],['shame4','残すのが恥ずかしい','残すと、目立つ。'],['wantEat','食べられるようになりたい','本当は、食べられるようになりたい。']],
 reasonKeys:['hate2','shame4','wantEat'],
 stageGrants:[['askLess','trySlow','askLunch'],['swapVeg','vegBrave','tellLunch','ownPace3']],
 subs:[
  {title:'友達が「僕も苦手」と言ってくれた',text:'同じ苦手な子が、いた。',stat:'soc',min:0,good:{text:'「一緒に頑張ろう」と言えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'一口食べたら、意外と美味しかった',text:'食べてみたら、悪くなかった。',stat:'ath',min:0,good:{text:'「もう一口」と思えた。',stat:'ath',mind:1},ok:{text:'挑戦できた。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='askLess2'){s.flags.askedL=true;relation(s,'「少なめにして」と言ったら、量を変えてもらえた。');out.text='「少なめにして」\n「わかった」';out.card='askLess'}
  if(key==='askLunch2'){s.flags.askedL2=true;relation(s,'相談したら、「一口ずつがいいよ」と言ってもらえた。');out.text='「苦手で…」\n「一口ずつ、試せばいいよ」';out.card='askLunch'}
  if(key==='tellFriend6'){s.flags.toldF6=true;relation(s,'「苦手」と言ったら、「僕も」って言ってくれた。');out.text='「苦手なんだ」\n「僕もだよ、一緒に頑張ろう」';out.card='tellLunch'}
  if(key==='hate2'){s.reason='hate2';out.text='苦手なものが、出てきた。\n「苦手」は、正直に言っていい。';out.card='tellLunch'}
  if(key==='shame4'){s.reason='shame4';out.text='残すと、目立って恥ずかしい。\n「少なめ」なら、残さず食べられる。';out.card='askLess'}
  if(key==='wantEat'){s.reason='wantEat';out.text='本当は、食べられるようになりたい。\n「一口」「ゆっくり」で、少しずつ。';out.card='tinyBite'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='tinyBite'){f.tinyed=true;return{text:'一口だけ、食べてみた。',meaning:'一口は、始まり。'}}
  if(id==='askLess'){f.askedLess=true;return{text:'「少なめにして」と、お願いした。',meaning:'量を変えると、食べられる。'}}
  if(id==='trySlow'){f.triedS=true;return{text:'ゆっくり、味わってみた。',meaning:'味わうと、美味しく感じる。'}}
  if(id==='askLunch'){f.askedLn=true;return{text:'給食の先生に、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='swapVeg'){f.swapped=true;return{text:'「少しだけチャレンジ」と、宣言した。',meaning:'宣言すると、頑張れる。'}}
  if(id==='vegBrave'){f.braved=true;return{text:'苦手なものを、一つずつ攻略した。',meaning:'一つずつは、現実的。'}}
  if(id==='tellLunch'){f.toldL=true;return{text:'「苦手で」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='ownPace3'){f.ownPaced3=true;return{text:'自分のペースで、挑戦した。',meaning:'ペースが、続く。'}}
  if(id==='leaveAll'){f.leftAll=true;return{text:'全部、残してしまった。',meaning:'残すと、体が育たない。'}}
  if(id==='forceEat'){f.forcedE=true;return{text:'無理に、食べた。',meaning:'無理は、続かない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'苦手は、みんなにある。':s.stage===1?'一口ずつが、現実的。':'明日も、給食はある。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'今日の給食。苦手なものが、配膳された。',speaker:'給食当番',quote:'今日は○○だよ',look:'苦手なものが、目の前にある。',self:'食べたくない…',hint:'給食が苦手で、何がつらい？'};
  if(s.stage===1)return{narrative:'食べるか、残すか。周りは食べている。',speaker:'友達',quote:'早く食べないと、休み時間なくなるよ',look:'お盆が、まだ半分残っている。',self:s.reason==='shame4'?'残すの恥ずかしい…':s.reason==='wantEat'?'食べられるようになりたい…':'苦手だ…',hint:'少なめ・一口・味わう・相談、方法はある。'};
  return{narrative:'翌日。また、給食がある。',speaker:'給食当番',quote:f.tinyed||f.askedLess?'「今日はどう？」':'「また残すの？」',look:'今日も、お盆がある。',self:f.swapped||f.braved||f.ownPaced3?'少しずつ、食べられそう。':'まだ、苦手のまま。',hint:'宣言・攻略・正直・ペース、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.swapped||f.braved||f.ownPaced3||f.toldL?3:f.tinyed||f.askedLess||f.triedS||f.askedLn?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.swapped||f.braved||f.ownPaced3?'少しずつ、攻略できそう。':f.tinyed||f.askedLess?'一口から、挑戦できた。':'まだ、残したまま。少なめ・一口・相談、方法はある。'}
},
choirMiss:{title:'合唱でミスした',nav:'合唱でミスした',num:56,attrs:['study','soc'],goals:['間違えても歌い続けたい','練習で立て直したい','本番を楽しみたい'],chapters:['練習で音を外した','立て直しの練習','本番の合唱'],locations:['音楽室','音楽室','体育館'],base:['stopSing','mouthWord','humAlong','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'外れた音',hp:5,power:1,turns:4,look:'さっきの音、変だったかも。'},{name:'怖くなる声',hp:5,power:1,turns:4,look:'また間違えたら、どうしよう。'},{name:'本番の合唱',hp:6,power:2,turns:4,look:'本番は、みんなの前。'}],
 talk:[['askPart2','先生にパートを確かめる','自分のパートを、聞いてみる。'],['askMusicT2','音楽の先生に教わる','入り方を、教わる。'],['singTogether2','隣の人と一緒に歌う','隣の声に、合わせてみる。']],
 think:[['wrongNote','音を外してしまった','さっきの音、ずれてたかも。'],['fear2','また間違えそうで怖い','間違えるのが、怖い。'],['wantSing','ちゃんと歌いたい','本当は、上手く歌いたい。']],
 reasonKeys:['wrongNote','fear2','wantSing'],
 stageGrants:[['askPart','practiceSong','askMusicT'],['singLow','learnTune','singTogether','ownPart']],
 subs:[
  {title:'先生が「もう一回」と言ってくれた',text:'間違えたところを、もう一度やる時間をもらった。',stat:'study',min:0,good:{text:'ゆっくり入れた。',mind:1},ok:{text:'練習になった。',mind:1}},
  {title:'隣の人が「一緒にやろ」と誘ってくれた',text:'隣の子が、パート練習に付き合ってくれた。',stat:'soc',min:0,good:{text:'一緒だと、歌いやすい。',rep:1,mind:1},ok:{text:'心強かった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='askPart2'){s.flags.askedP2=true;out.text='「私のパート、ここ？」\n「そう、そこから入るよ」';out.card='askPart'}
  if(key==='askMusicT2'){s.flags.askedM2=true;relation(s,'教わったら、「ここで息を吸うといい」と教えてもらえた。');out.text='「入る場所が分かりません」\n「ここで息を吸うと、入りやすいよ」';out.card='askMusicT'}
  if(key==='singTogether2'){s.flags.sangT2=true;relation(s,'隣の子の声に合わせたら、歌いやすかった。');out.text='「一緒に歌っていい？」\n「うん、合わせよう」';out.card='singTogether'}
  if(key==='wrongNote'){s.reason='wrongNote';out.text='さっきの音、ずれてたかも。\n「部分練習」で、そこだけ直せる。';out.card='practiceSong'}
  if(key==='fear2'){s.reason='fear2';out.text='また間違えそうで、怖い。\n「低めの声」で確実に歌うと、怖さが減る。';out.card='singLow'}
  if(key==='wantSing'){s.reason='wantSing';out.text='本当は、上手く歌いたい。\n「耳を澄ませる」「ハミング」で少しずつ。';out.card='learnTune'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='humAlong'){f.hummed=true;return{text:'小さな声で、ハミングした。',meaning:'小さくても、声は出せる。'}}
  if(id==='askPart'){f.askedP3=true;return{text:'自分のパートを、確かめた。',meaning:'場所が分かれば、迷わない。'}}
  if(id==='practiceSong'){f.practiced2=true;return{text:'間違えたところだけ、練習した。',meaning:'一点集中は、効率的。'}}
  if(id==='askMusicT'){f.askedMT=true;return{text:'先生に、教わった。',meaning:'相談は、逃げじゃない。'}}
  if(id==='singLow'){f.sangL=true;return{text:'低めの声で、確実に歌った。',meaning:'確実な方が、続く。'}}
  if(id==='learnTune'){f.learnedT=true;return{text:'ピアノの音に、耳を澄ませた。',meaning:'聞くと、合わせられる。'}}
  if(id==='singTogether'){f.sangT=true;return{text:'隣の人と、一緒に歌った。',meaning:'一緒なら、怖くない。'}}
  if(id==='ownPart'){f.ownedP=true;return{text:'自分のパートを、堂々と歌った。',meaning:'自信は、声を大きくする。'}}
  if(id==='stopSing'){f.stoppedS=true;return{text:'歌うのを、やめた。',meaning:'やめると、練習にならない。'}}
  if(id==='mouthWord'){f.mouthed=true;return{text:'口だけ、動かした。',meaning:'ふりでは、上手くならない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'外れても、歌は続く。':s.stage===1?'部分練習が、一番効く。':'本番は、みんなで作る。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'合唱練習。自分の音が、ずれた気がした。',speaker:'音楽の先生',quote:'もう一度、そこから。',look:'楽譜が、目の前にある。',self:'今の、変だったかも…',hint:'合唱でミスして、何がつらい？'};
  if(s.stage===1)return{narrative:'練習時間。間違えたところを、どう立て直すか。',speaker:'音楽の先生',quote:'分からないところは、聞いて。',look:'ピアノの音が、聞こえる。',self:s.reason==='fear2'?'また間違えそう…':s.reason==='wantSing'?'上手く歌いたい…':'音、外れたな…',hint:'確かめる・練習・教わる、方法はある。'};
  return{narrative:'本番。体育館に、みんなの声が響く。',speaker:'指揮の人',quote:f.sangL||f.ownedP?'（微笑んで、手を振る）':'「大きな声でー」',look:'みんなの視線が、前を向く。',self:f.sangT||f.ownedP||f.learnedT?'歌えそう。':'まだ、不安なまま。',hint:'低め・耳・一緒・自信、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.sangT||f.ownedP||f.learnedT?3:f.askedP3||f.practiced2||f.askedMT||f.sangL?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.sangT||f.ownedP?'立て直して、歌えそう。':f.askedP3||f.practiced2?'練習で、立て直せた。':'まだ、不安なまま。部分練習・教わる・一緒に歌う、方法はある。'}
},
poolFear:{title:'プールが怖い',nav:'プールが怖い',num:57,attrs:['ath'],goals:['少しずつ水に慣れたい','怖いことを伝えたい','自分のペースで挑戦したい'],chapters:['プールの授業が始まる','水に慣れる','少しずつ進む'],locations:['プールサイド','浅いところ','プール'],base:['skipPool','wetFirst','splashFace','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'水への怖さ',hp:5,power:1,turns:4,look:'水が、ちょっと怖い。'},{name:'沈みそうな不安',hp:5,power:1,turns:4,look:'沈んでしまうんじゃないか。'},{name:'深いところ',hp:6,power:2,turns:4,look:'深いところは、もっと怖い。'}],
 talk:[['tellCoach2','「怖い」と先生に言う','正直に、気持ちを言う。'],['askFriend7','できる友達に聞く','「どうやって慣れた？」と聞く。'],['joinBuddy','友達と一緒に入る','一人より、二人が安心。']],
 think:[['coldWater','水が冷たくて怖い','水が冷たくて、入りたくない。'],['sinkFear','沈みそうで怖い','沈んでしまうんじゃないか。'],['wantSwim','泳げるようになりたい','本当は、泳げるようになりたい。']],
 reasonKeys:['coldWater','sinkFear','wantSwim'],
 stageGrants:[['holdEdge','kickPractice','tellCoach'],['tryFloat','poolStep','breatheUnder','goSlow']],
 subs:[
  {title:'先生が「浅いところでいいよ」と言ってくれた',text:'深いところじゃなくても、いいと言われた。',stat:'ath',min:0,good:{text:'浅いところで、浮けた。',mind:1},ok:{text:'安心した。',mind:1}},
  {title:'友達が「僕も最初は怖かった」と言った',text:'みんな、最初は怖かった。',stat:'ath',min:0,good:{text:'「普通なんだ」と思えた。',rep:1,mind:1},ok:{text:'ほっとした。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='tellCoach2'){s.flags.toldC2=true;relation(s,'「怖い」と言ったら、「無理しなくていいよ」と言ってもらえた。');out.text='「水が、怖いです」\n「分かった。浅いところから、ゆっくりいこう」';out.card='tellCoach'}
  if(key==='askFriend7'){s.flags.askedF7=true;out.text='「どうやって慣れた？」\n「ふちを握って、ゆっくり入ったよ」';out.card='holdEdge'}
  if(key==='joinBuddy'){s.flags.joined=true;relation(s,'友達と一緒に入ったら、安心した。');out.text='「一緒に入ろ」\n「うん！」';out.card='tryFloat'}
  if(key==='coldWater'){s.reason='coldWater';out.text='水が冷たくて、怖い。\n「顔に水」「ふちを握る」で、少しずつ慣れよう。';out.card='splashFace'}
  if(key==='sinkFear'){s.reason='sinkFear';out.text='沈んでしまうんじゃないか。\n「浮く練習」で、沈まないと分かる。';out.card='tryFloat'}
  if(key==='wantSwim'){s.reason='wantSwim';out.text='本当は、泳げるようになりたい。\n「けのび」が、泳ぎの始まり。';out.card='kickPractice'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='wetFirst'){f.wetted=true;return{text:'プールサイドに、座ってみた。',meaning:'近づくのも、一歩。'}}
  if(id==='splashFace'){f.splashed=true;return{text:'顔に、水をかけてみた。',meaning:'慣れるのも、練習。'}}
  if(id==='holdEdge'){f.held=true;return{text:'ふちを握って、ゆっくり入った。',meaning:'掴まると、安心。'}}
  if(id==='kickPractice'){f.kicked=true;return{text:'けのびを、練習した。',meaning:'けのびは、泳ぎの基本。'}}
  if(id==='tellCoach'){f.told=true;return{text:'「怖い」と、先生に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='tryFloat'){f.floated=true;return{text:'浮いて、みた。',meaning:'浮くと、沈まないと分かる。'}}
  if(id==='poolStep'){f.stepped=true;return{text:'一歩ずつ、深いところへ。',meaning:'一歩ずつは、現実的。'}}
  if(id==='breatheUnder'){f.breathed=true;return{text:'水中で、息を吐いてみた。',meaning:'吐けると、沈まない。'}}
  if(id==='goSlow'){f.wentSlow=true;return{text:'怖いまま、少しだけやった。',meaning:'怖いまま進むのも、勇気。'}}
  if(id==='skipPool'){f.skipped=true;return{text:'プールを、休みたいと思った。',meaning:'休むと、いつまでも怖い。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'怖いのは、みんなある。':s.stage===1?'一歩ずつが、現実的。':'怖いまま進むのも、勇気。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'プールの授業。みんなが入っていく中、足が止まる。',speaker:'体育の先生',quote:'水着着替えた人から、入ってー',look:'青い水が、広がっている。',self:'怖い…',hint:'プールで、何が怖い？'};
  if(s.stage===1)return{narrative:'浅いところで、水に慣れる時間。',speaker:'体育の先生',quote:'無理しなくていいからね',look:'浅いところは、胸くらいの深さ。',self:s.reason==='sinkFear'?'沈みそう…':s.reason==='wantSwim'?'泳ぎたい…':'冷たい…',hint:'顔に水・ふち・けのび・正直、方法はある。'};
  return{narrative:'少しずつ、進んでみる。',speaker:'体育の先生',quote:f.floated||f.stepped?'「いいね、その調子！」':'「今日はどこまでいける？」',look:'深いところが、まだある。',self:f.floated||f.breathed||f.wentSlow?'少しずつ、いける。':'まだ、怖いまま。',hint:'浮く・一歩・息・怖いまま、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.floated||f.breathed||f.wentSlow||f.stepped?3:f.splashed||f.held||f.kicked||f.told?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.floated||f.breathed?'浮けると分かった。':f.splashed||f.held?'少しずつ、慣れてきた。':'まだ、怖いまま。顔に水・ふち・正直、方法はある。'}
},
ropeTrip:{title:'大縄でひっかかった',nav:'大縄でひっかかった',num:58,attrs:['ath','soc'],goals:['失敗しても跳び続けたい','タイミングを覚えたい','みんなと跳びたい'],chapters:['みんなの前でひっかかった','練習して立て直す','もう一回跳ぶ'],locations:['校庭','校庭','校庭'],base:['quitRope','jumpLate','watchRope','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'跳べない不安',hp:5,power:1,turns:4,look:'また引っかかったら、恥ずかしい。'},{name:'みんなの目',hp:5,power:1,turns:4,look:'みんなが、見ている。'},{name:'本番の大縄',hp:6,power:2,turns:4,look:'もう一回、跳ぶ番が来た。'}],
 talk:[['smallRope2','少人数で練習する','休憩時間に、練習する。'],['askRetry2','「もう一回やりたい」と言う','リトライを、求める。'],['jumpWith2','できる人の後に続く','ついていくと、跳びやすい。']],
 think:[['tripped','引っかかって転んだ','ロープに、引っかかった。'],['shame5','みんなに見られて恥ずかしい','失敗を、見られちゃった。'],['wantJump','ちゃんと跳びたい','本当は、跳べるようになりたい。']],
 reasonKeys:['tripped','shame5','wantJump'],
 stageGrants:[['watchRope','edgeJump','askRetry'],['countBeat','jumpWith','ropeStep','shyFace']],
 subs:[
  {title:'「もう一回」と声をかけてもらった',text:'失敗しても、励ましてもらえた。',stat:'soc',min:0,good:{text:'「もう一回」って言えた。',rep:1,mind:1},ok:{text:'うれしかった。',mind:1}},
  {title:'できる人が「俺の後に入れ」と言った',text:'ついていけば、跳びやすい。',stat:'ath',min:0,good:{text:'一緒に跳べた。',mind:1},ok:{text:'参考になった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='smallRope2'){s.flags.askedS=true;out.text='「休み時間に練習しない？」\n「いいよ、少人数なら」';out.card='smallRope'}
  if(key==='askRetry2'){s.flags.askedR=true;relation(s,'「もう一回」と言ったら、「いいぞ」と言ってもらえた。');out.text='「もう一回やりたいです」\n「いいぞ、入れ」';out.card='askRetry'}
  if(key==='jumpWith2'){s.flags.jumpedW=true;relation(s,'できる人の後に入ったら、跳べた。');out.text='「あなたの後に入っていい？」\n「いいよ、ついてきて」';out.card='jumpWith'}
  if(key==='tripped'){s.reason='tripped';out.text='ロープに、引っかかって転んだ。\n「よく見る」「端から」で、タイミングを覚えよう。';out.card='watchRope'}
  if(key==='shame5'){s.reason='shame5';out.text='みんなに見られて、恥ずかしい。\n「少人数」なら、失敗しても目立たない。';out.card='smallRope'}
  if(key==='wantJump'){s.reason='wantJump';out.text='本当は、ちゃんと跳びたい。\n「拍子を数える」「続いて跳ぶ」で。';out.card='countBeat'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='watchRope'){f.watched=true;return{text:'ロープを、よく見た。',meaning:'見ると、タイミングが分かる。'}}
  if(id==='edgeJump'){f.edged=true;return{text:'端の方から、入った。',meaning:'端は、入りやすい。'}}
  if(id==='smallRope'){f.smalled=true;return{text:'少人数で、練習した。',meaning:'少人数は、失敗しにくい。'}}
  if(id==='askRetry'){f.asked=true;return{text:'「もう一回」と、言った。',meaning:'リトライは、成長。'}}
  if(id==='countBeat'){f.counted=true;return{text:'「イチニ」と、拍子を数えた。',meaning:'数えると、入りやすい。'}}
  if(id==='jumpWith'){f.jumped=true;return{text:'できる人の後に、続いて跳んだ。',meaning:'ついていくと、跳びやすい。'}}
  if(id==='ropeStep'){f.stepped2=true;return{text:'一歩ずつ、慣れていった。',meaning:'慣れは、時間がかかる。'}}
  if(id==='shyFace'){f.faced=true;return{text:'笑われても、もう一回跳んだ。',meaning:'笑われても跳ぶのが、勇気。'}}
  if(id==='quitRope'){f.quitted=true;return{text:'大縄を、やめたいと思った。',meaning:'やめると、怖いまま。'}}
  if(id==='jumpLate'){f.lated=true;return{text:'後ろに、並び直した。',meaning:'逃げると、跳べないまま。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'失敗は、誰にでもある。':s.stage===1?'練習は、味方。':'みんなも、最初はできなかった。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'大縄跳び。ロープに引っかかって、転んでしまった。',speaker:'友達',quote:'あはは、引っかかった！',look:'ロープが、ぐるぐる回っている。',self:'恥ずかしい…',hint:'大縄でひっかかって、何がつらい？'};
  if(s.stage===1)return{narrative:'跳び直すか、練習するか。',speaker:'担任の先生',quote:'もう一回、やってみる？',look:'ロープが、待っている。',self:s.reason==='shame5'?'見られて恥ずかしい…':s.reason==='wantJump'?'跳びたい…':'転んだ…',hint:'見る・端・もう一回・少人数、方法はある。'};
  return{narrative:'本番の大縄。もう一度、跳ぶ番が来た。',speaker:'ロープを回す人',quote:f.jumped||f.faced?'「いけー！」':'「入れるかな」',look:'ロープが、回っている。',self:f.jumped||f.stepped2||f.faced?'跳べそう。':'まだ、跳べないかも。',hint:'拍子・ついて・一歩・笑われても、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.jumped||f.stepped2||f.faced?3:f.watched||f.edged||f.asked||f.smalled?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.jumped||f.faced?'もう一度、跳べた。':f.watched||f.edged?'練習で、慣れてきた。':'まだ、跳べないかも。見る・端・少人数、方法はある。'}
},
homeAlone:{title:'教室の留守番を頼まれた',nav:'留守番を頼まれた',num:59,attrs:['soc','study'],goals:['頼まれたことをやりたい','不安を伝えたい','役目を果たしたい'],chapters:['みんなが出て行く','一人の時間','戻ってきた'],locations:['教室','教室','教室'],base:['stayAlone','boredWait','checkDoor2','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'一人の不安',hp:5,power:1,turns:4,look:'一人で、教室に残された。'},{name:'つまらなさ',hp:5,power:1,turns:4,look:'何もすることが、ない。'},{name:'頼まれた責任',hp:6,power:2,turns:4,look:'留守番を、果たさなければ。'}],
 talk:[['askStay2','「不安」と正直に言う','気持ちを、伝える。'],['tellMissed2','終わった後に伝える','後から、「さびしかった」と。'],['askBuddy2','「一緒にいて」と頼む','残れる人に、頼んでみる。']],
 think:[['lonely','一人でさびしい','一人は、さびしい。'],['dutyFeel','頼まれた責任を感じる','任された、責任がある。'],['wantDo','役目を果たしたい','ちゃんと、留守番したい。']],
 reasonKeys:['lonely','dutyFeel','wantDo'],
 stageGrants:[['checkDoor2','quietJob','askStay'],['watchRoom','feelProud','tellMissed','ownDuty','finishDuty']],
 subs:[
  {title:'隣のクラスの人が「一人？」と声をかけた',text:'声をかけてもらえて、ほっとした。',stat:'soc',min:0,good:{text:'「ちょっとだけ」って言えた。',rep:1,mind:1},ok:{text:'心強かった。',mind:1}},
  {title:'戻ってきた先生が「ありがとう」と言った',text:'留守番を、評価してもらえた。',stat:'study',min:0,good:{text:'「役に立った」と思えた。',mind:1},ok:{text:'安心した。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='askStay2'){s.flags.askedS3=true;relation(s,'「不安」と言ったら、「大丈夫だよ」と言ってもらえた。');out.text='「一人だと不安です」\n「大丈夫、すぐ戻るから」';out.card='askStay'}
  if(key==='tellMissed2'){s.flags.toldM=true;relation(s,'「さびしかった」と言ったら、「ごめんね」と言ってもらえた。');out.text='「実は、さびしかった」\n「ごめんね、ありがとう」';out.card='tellMissed'}
  if(key==='askBuddy2'){s.flags.askedB=true;out.text='「一緒にいてくれない？」\n「うん、いるよ」';out.card='watchRoom'}
  if(key==='lonely'){s.reason='lonely';out.text='一人は、さびしい。\n「見回る」「確認する」で、落ち着こう。';out.card='watchRoom'}
  if(key==='dutyFeel'){s.reason='dutyFeel';out.text='頼まれた責任を、感じる。\n「丁寧にやる」「自分の役目」と考えよう。';out.card='quietJob'}
  if(key==='wantDo'){s.reason='wantDo';out.text='ちゃんと、留守番したい。\n「戸締り確認」「見回る」で、やることを作ろう。';out.card='checkDoor2'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='checkDoor2'){f.checkedD=true;return{text:'戸締りを、確認した。',meaning:'確認は、留守番の仕事。'}}
  if(id==='quietJob'){f.quietedJ=true;return{text:'頼まれたことを、丁寧にやった。',meaning:'丁寧は、信頼を作る。'}}
  if(id==='askStay'){f.askedS4=true;return{text:'「不安」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='feelProud'){f.proudF=true;return{text:'「任された」と、思った。',meaning:'信頼は、力になる。'}}
  if(id==='watchRoom'){f.watchedR=true;return{text:'教室を、見回った。',meaning:'見回ると、安心。'}}
  if(id==='tellMissed'){f.toldM2=true;return{text:'「さびしかった」と、後で言った。',meaning:'後で言うのも、正直。'}}
  if(id==='ownDuty'){f.ownD=true;return{text:'留守番を、「自分の役目」と考えた。',meaning:'役目は、やりがい。'}}
  if(id==='finishDuty'){f.finished=true;return{text:'「変わりありません」と、報告した。',meaning:'報告は、締めの仕事。'}}
  if(id==='stayAlone'){f.stayedA=true;return{text:'一人で、じっと待った。',meaning:'我慢だけは、つらい。'}}
  if(id==='boredWait'){f.bored=true;return{text:'ぼんやり、過ごした。',meaning:'時間が、もったいない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'一人も、みんなある。':s.stage===1?'やることを作ると、落ち着く。':'役目は、信頼の証。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'先生が「教室の留守番、お願いできる？」と言った。みんなが出て行く。',speaker:'担任の先生',quote:'ちょっとお願いしてもいい？',look:'教室に、一人残される。',self:'さびしい…',hint:'留守番を頼まれて、どう感じた？'};
  if(s.stage===1)return{narrative:'一人の時間。何をするか、自分で決める。',speaker:'心の声',quote:'何をしよう？',look:'窓の外は、明るい。',self:s.reason==='dutyFeel'?'責任を感じる…':s.reason==='wantDo'?'やりたい…':'さびしい…',hint:'確認・丁寧・不安を言う、方法はある。'};
  return{narrative:'みんなが、戻ってきた。',speaker:'担任の先生',quote:f.finished||f.ownD?'「ありがとう、助かったよ」':'「どうだった？」',look:'教室に、活気が戻る。',self:f.finished||f.ownD||f.proudF?'役目を果たせた。':'まだ、さびしいまま。',hint:'報告・伝える・役目・誇り、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.finished||f.ownD||f.proudF?3:f.checkedD||f.quietedJ||f.askedS4||f.watchedR?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.finished||f.ownD?'留守番を、果たせた。':f.checkedD||f.quietedJ?'やることを見つけた。':'まだ、さびしいまま。確認・丁寧・報告、方法はある。'}
},
noShoes:{title:'上履きを忘れた',nav:'上履きを忘れた',num:60,attrs:['study','soc'],goals:['正直に伝えたい','今日を乗り切りたい','明日から忘れないようにしたい'],chapters:['朝、気づいた','一日をどうする','明日のために'],locations:['教室','教室','家と学校'],base:['panicShoes','hideFeet','wearSocks','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'忘れた焦り',hp:5,power:1,turns:4,look:'上履きが、ない。'},{name:'どうするかの迷い',hp:5,power:1,turns:4,look:'靴下のまま、恥ずかしい。'},{name:'明日の忘れ物',hp:6,power:2,turns:4,look:'明日も、忘れるかも。'}],
 talk:[['tellShoes2','「忘れました」と言う','正直に、伝える。'],['borrowShoes2','備品を借りる','学校のを、借りる。'],['askFriend9','友達に貸してと頼む','休み時間に、頼む。']],
 think:[['forgotS','上履きを忘れた','忘れてしまった。'],['shame6','靴下は恥ずかしい','靴下でいるの、恥ずかしい。'],['wantFix','どうにかしたい','本当は、ちゃんとしたい。']],
 reasonKeys:['forgotS','shame6','wantFix'],
 stageGrants:[['tellShoes','borrowShoes','lostFound'],['askFriend8','ownShoes','checkBag2','apologizeT']],
 subs:[
  {title:'落とし物箱に上履きがあった',text:'探したら、あった。',stat:'study',min:0,good:{text:'履けた。',mind:1},ok:{text:'ほっとした。',mind:1}},
  {title:'「私もよく忘れる」と友達が言った',text:'忘れ物は、みんなある。',stat:'soc',min:0,good:{text:'「普通なんだ」と思えた。',rep:1,mind:1},ok:{text:'安心した。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='tellShoes2'){s.flags.toldS2=true;relation(s,'正直に言ったら、「備品を借りなさい」と言ってもらえた。');out.text='「上履きを忘れました」\n「備品を貸すから、履いてね」';out.card='tellShoes'}
  if(key==='borrowShoes2'){s.flags.borrowed=true;out.text='「備品、借りていいですか」\n「いいよ、使って」';out.card='borrowShoes'}
  if(key==='askFriend9'){s.flags.askedF9=true;out.text='「休み時間だけ貸して」\n「いいよ」';out.card='askFriend8'}
  if(key==='forgotS'){s.reason='forgotS';out.text='上履きを、忘れてしまった。\n「正直に言う」「落とし物箱」で探そう。';out.card='tellShoes'}
  if(key==='shame6'){s.reason='shame6';out.text='靴下でいるのは、恥ずかしい。\n「借りる」「頼む」で、一日を乗り切ろう。';out.card='borrowShoes'}
  if(key==='wantFix'){s.reason='wantFix';out.text='本当は、ちゃんとしたい。\n「前日確かめ」で、明日から変えよう。';out.card='checkBag2'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='tellShoes'){f.toldS3=true;return{text:'「忘れました」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='borrowShoes'){f.borrowed2=true;return{text:'備品の上履きを、借りた。',meaning:'借りるのも、解決策。'}}
  if(id==='lostFound'){f.foundBox=true;return{text:'落とし物箱を、探した。',meaning:'探すと、見つかるかも。'}}
  if(id==='askFriend8'){f.askedF10=true;return{text:'友達に、「貸して」と頼んだ。',meaning:'頼るのも、勇気。'}}
  if(id==='wearSocks'){f.woreSocks=true;return{text:'靴下のまま、一日我慢した。',meaning:'我慢は、汚れる。'}}
  if(id==='ownShoes'){f.ownedS=true;return{text:'「忘れた自分が悪い」と、認めた。',meaning:'認めると、次に進める。'}}
  if(id==='checkBag2'){f.checkB=true;return{text:'明日は、前日に確かめることにした。',meaning:'習慣は、忘れ物を防ぐ。'}}
  if(id==='apologizeT'){f.apologized=true;return{text:'「ごめんなさい」と、言った。',meaning:'謝ると、次が始まる。'}}
  if(id==='panicShoes'){f.panicked=true;return{text:'慌てて、どうしようもなかった。',meaning:'慌てるだけは、解決しない。'}}
  if(id==='hideFeet'){f.hidF=true;return{text:'靴下のまま、隠れた。',meaning:'隠すと、見つかった時つらい。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'忘れ物は、みんなある。':s.stage===1?'正直は、早い解決。':'習慣は、味方。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'朝、教室で気づいた。上履きが、ない。',speaker:'心の声',quote:'あれ、上履き…',look:'足元は、靴下のまま。',self:'忘れた…',hint:'忘れて、何がつらい？'};
  if(s.stage===1)return{narrative:'今日一日を、どうやって過ごすか。',speaker:'担任の先生',quote:'どうしたの？',look:'教室の中、みんな上履き。',self:s.reason==='shame6'?'恥ずかしい…':s.reason==='wantFix'?'何とかしたい…':'忘れた…',hint:'正直・借りる・探す・頼む、方法はある。'};
  return{narrative:'明日の準備。今夜、何をする？',speaker:'家の人',quote:f.checkB||f.ownedS?'「明日は忘れないでね」':'「明日も忘れない？」',look:'ランドセルが、待っている。',self:f.checkB||f.ownedS?'前日確かめできる。':'まだ、忘れそう。',hint:'認める・前日確かめ・謝る、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.checkB||f.ownedS||f.apologized?3:f.toldS3||f.borrowed2||f.foundBox||f.askedF10?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.checkB||f.ownedS?'明日の準備ができた。':f.toldS3||f.borrowed2?'今日を、乗り切れた。':'まだ、靴下のまま。正直・借りる・探す、方法はある。'}
},
cleanSkip:{title:'掃除当番、逃げたい',nav:'掃除をサボりたい',num:61,attrs:['soc','study'],goals:['逃げずにやりたい','正直に気持ちを言いたい','自分の担当を果たしたい'],chapters:['掃除の時間が来た','やるか逃げるか','片付け終わり'],locations:['教室','教室','教室'],base:['skipClean','fakeBusy','smallClean','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'サボりたい気持ち',hp:5,power:1,turns:4,look:'掃除、面倒くさい。'},{name:'めんどくささ',hp:5,power:1,turns:4,look:'早く遊びたい。'},{name:'自分の担当',hp:6,power:2,turns:4,look:'掃除を、果たさなければ。'}],
 talk:[['askEasy2','「楽なところを」と言う','担当を、相談する。'],['tiredSay2','「疲れた」と正直に言う','気持ちを、伝える。'],['teamClean2','「一緒にやろう」と声をかける','一緒なら、楽。']],
 think:[['lazy','掃除が面倒くさい','掃除、面倒だな。'],['wantPlay','早く遊びたい','掃除より、遊びたい。'],['wantDone','ちゃんとやりたい','本当は、やって終わりたい。']],
 reasonKeys:['lazy','wantPlay','wantDone'],
 stageGrants:[['smallClean','askEasy','tiredSay'],['quickClean','swapJob','ownClean','teamClean','doneClean']],
 subs:[
  {title:'「手伝おうか」と声をかけてもらった',text:'手伝いが、来てくれた。',stat:'soc',min:0,good:{text:'一緒にやれた。',rep:1,mind:1},ok:{text:'助かった。',mind:1}},
  {title:'掃除が終わって達成感',text:'きれいになった教室を見た。',stat:'study',min:0,good:{text:'「やった」と思えた。',mind:1},ok:{text:'気持ちよかった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='askEasy2'){s.flags.askedE=true;out.text='「今日は楽なところを」\n「いいよ、こっちにしよう」';out.card='askEasy'}
  if(key==='tiredSay2'){s.flags.toldT=true;relation(s,'「疲れた」と言ったら、「少し休んでいいよ」と言ってもらえた。');out.text='「疲れちゃった」\n「少し休んで、できるところから」';out.card='tiredSay'}
  if(key==='teamClean2'){s.flags.teamed=true;relation(s,'「一緒にやろう」で声をかけたら、分担できた。');out.text='「一緒にやろう」\n「うん、半分ずつやろう」';out.card='teamClean'}
  if(key==='lazy'){s.reason='lazy';out.text='掃除が、面倒くさい。\n「小さく始める」で、始めてみよう。';out.card='smallClean'}
  if(key==='wantPlay'){s.reason='wantPlay';out.text='掃除より、遊びたい。\n「手早く」やると、早く終わる。';out.card='quickClean'}
  if(key==='wantDone'){s.reason='wantDone';out.text='本当は、やって終わりたい。\n「自分の担当」「一緒に」で進めよう。';out.card='ownClean'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='smallClean'){f.smalledC=true;return{text:'小さなところから、始めた。',meaning:'小さく始めると、続く。'}}
  if(id==='askEasy'){f.askedE2=true;return{text:'「楽なところを」と、言った。',meaning:'言えると、続く。'}}
  if(id==='tiredSay'){f.toldT2=true;return{text:'「疲れた」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='quickClean'){f.quick=true;return{text:'手早く、片付けた。',meaning:'手早いと、早く終わる。'}}
  if(id==='swapJob'){f.swapped2=true;return{text:'担当を、替えてもらった。',meaning:'替わると、やれる。'}}
  if(id==='ownClean'){f.ownedC=true;return{text:'「自分の担当」と、考えた。',meaning:'担当は、やりがい。'}}
  if(id==='teamClean'){f.teamed2=true;return{text:'「一緒にやろう」と、声をかけた。',meaning:'一緒なら、楽。'}}
  if(id==='doneClean'){f.doneC=true;return{text:'「終わった」と、報告した。',meaning:'報告は、達成感。'}}
  if(id==='skipClean'){f.skippedC=true;return{text:'サボって、遊びに行った。',meaning:'サボると、誰かが倍やる。'}}
  if(id==='fakeBusy'){f.faked=true;return{text:'忙しいふりを、した。',meaning:'ふりは、バレるとつらい。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'面倒は、みんな思う。':s.stage===1?'小さく始めると、続く。':'担当は、やりがい。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'掃除の時間。みんなが箒を持っている中、逃げ出したい気持ち。',speaker:'掃除当番',quote:'今日は床掃除だよ',look:'箒とちり取りが、並んでいる。',self:'面倒だな…',hint:'掃除当番で、何がつらい？'};
  if(s.stage===1)return{narrative:'やるか、逃げるか。自分の担当を、どう進めるか。',speaker:'掃除当番',quote:'早く終わらせよう',look:'教室が、まだ汚いまま。',self:s.reason==='wantPlay'?'遊びたい…':s.reason==='wantDone'?'やりたい…':'面倒…',hint:'小さく・正直・手早く・担当、方法はある。'};
  return{narrative:'片付けが、終わった。',speaker:'掃除当番',quote:f.doneC||f.ownedC?'「きれいになったね」':'「終わった？」',look:'教室が、すっきりした。',self:f.doneC||f.ownedC||f.teamed2?'やり遂げられた。':'まだ、面倒なまま。',hint:'報告・担当・一緒・替える、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.doneC||f.ownedC||f.teamed2?3:f.smalledC||f.askedE2||f.toldT2||f.quick?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.doneC||f.ownedC?'掃除を、果たせた。':f.smalledC||f.quick?'小さく、始められた。':'まだ、面倒なまま。小さく・正直・一緒に、方法はある。'}
},
lendBack:{title:'貸したものを返してほしい',nav:'返してもらいたい',num:62,attrs:['soc'],goals:['返してほしいと言いたい','関係を壊さず伝えたい','次からはルールを決めたい'],chapters:['貸したのに戻らない','どう伝えるか','次の貸し借り'],locations:['教室','教室','教室'],base:['keepWait','forgetIt','hintBack','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'言い出せない',hp:5,power:1,turns:4,look:'言い出すのが、苦手。'},{name:'もやもや',hp:5,power:1,turns:4,look:'返してほしいのに、言えない。'},{name:'次の貸し借り',hp:6,power:2,turns:4,look:'また貸す時、どうする？'}],
 talk:[['sayBack2','「返して」とはっきり言う','直接、伝える。'],['askTeacher4','先生に相談する','「返してくれなくて」と。'],['stayKind2','優しく返してと頼む','怒らず、優しく。']],
 think:[['cantSay','言い出せない','返してと、言いにくい。'],['moyamoya','もやもやする','言えなくて、もやもや。'],['wantBack','ちゃんと返してほしい','本当は、返してほしい。']],
 reasonKeys:['cantSay','moyamoya','wantBack'],
 stageGrants:[['sayBack','writeNote','askTeacher3'],['setDate','ownBound','stayKind','returnRule']],
 subs:[
  {title:'「ごめん、忘れてた」と返してもらえた',text:'言ったら、素直に返ってきた。',stat:'soc',min:0,good:{text:'「返して」って言えた。',rep:1,mind:1},ok:{text:'戻ってきた。',mind:1}},
  {title:'「私もよく貸しっぱなし」と友達が言った',text:'みんな、貸し借りで悩む。',stat:'soc',min:0,good:{text:'「普通なんだ」と思えた。',mind:1},ok:{text:'安心した。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='sayBack2'){s.flags.saidB=true;relation(s,'「返して」と言ったら、素直に返してくれた。');out.text='「そろそろ返して」\n「あ、ごめん忘れてた」';out.card='sayBack'}
  if(key==='askTeacher4'){s.flags.askedT4=true;relation(s,'相談したら、「ちゃんと言っていいよ」と言ってもらえた。');out.text='「返してくれなくて」\n「ちゃんと言っていいよ、君のものだから」';out.card='askTeacher3'}
  if(key==='stayKind2'){s.flags.stayedK=true;out.text='「優しく言えばいい？」\n「うん、優しくていいよ」';out.card='stayKind'}
  if(key==='cantSay'){s.reason='cantSay';out.text='返してと、言いにくい。\n「はっきり」「手紙」で、伝えよう。';out.card='sayBack'}
  if(key==='moyamoya'){s.reason='moyamoya';out.text='言えなくて、もやもやする。\n「自分のもの」と考えて、権利を主張しよう。';out.card='ownBound'}
  if(key==='wantBack'){s.reason='wantBack';out.text='本当は、返してほしい。\n「期限を決める」「優しく」で、実現しよう。';out.card='setDate'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='sayBack'){f.saidB2=true;return{text:'「返して」と、はっきり言った。',meaning:'はっきりは、失礼じゃない。'}}
  if(id==='writeNote'){f.wroteN=true;return{text:'手紙で、伝えた。',meaning:'書くと、伝えられる。'}}
  if(id==='askTeacher3'){f.askedT5=true;return{text:'先生に、相談した。',meaning:'相談は、逃げじゃない。'}}
  if(id==='setDate'){f.dated=true;return{text:'「いつまでに」と、決めた。',meaning:'期限は、安心。'}}
  if(id==='ownBound'){f.ownedB=true;return{text:'「私のもの」と、考え直した。',meaning:'権利は、主張していい。'}}
  if(id==='stayKind'){f.kindAsked=true;return{text:'優しく、返してと頼んだ。',meaning:'優しくても、伝わる。'}}
  if(id==='returnRule'){f.ruled=true;return{text:'次からは、期限を決めることにした。',meaning:'ルールは、予防。'}}
  if(id==='keepWait'){f.waited=true;return{text:'何も言わず、待ち続けた。',meaning:'待つだけでは、戻らない。'}}
  if(id==='forgetIt'){f.forgot2=true;return{text:'諦めて、しまった。',meaning:'諦めると、もやもや残る。'}}
  if(id==='hintBack'){f.hinted=true;return{text:'「そろそろ」と、ほのめかした。',meaning:'遠回しは、伝わりにくい。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'言いにくいのは、みんなある。':s.stage===1?'はっきりは、失礼じゃない。':'ルールは、予防。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'貸したものが、ずっと戻ってこない。言い出せない。',speaker:'心の声',quote:'返してって、言いにくい…',look:'貸した相手は、普通に使っている。',self:'もやもやする…',hint:'返してほしいのに、何がつらい？'};
  if(s.stage===1)return{narrative:'どう伝えるか。はっきり言うか、優しく言うか、別の方法か。',speaker:'貸した相手',quote:'あれ、まだ持ってた？',look:'相手は、気づいていない。',self:s.reason==='moyamoya'?'もやもや…':s.reason==='wantBack'?'返してほしい…':'言いにくい…',hint:'はっきり・手紙・優しく、方法はある。'};
  return{narrative:'返してもらえた。次からは、どうする？',speaker:'貸した相手',quote:f.dated||f.ruled?'「いつ返すか決めとくね」':'「ごめんね」',look:'自分のものが、戻ってきた。',self:f.dated||f.ruled||f.ownedB?'次は、ルールを決められる。':'まだ、言いにくいまま。',hint:'期限・権利・優しく・ルール、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.dated||f.ruled||f.ownedB?3:f.saidB2||f.wroteN||f.askedT5||f.kindAsked?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.dated||f.ruled?'次の準備ができた。':f.saidB2||f.kindAsked?'返してと、言えた。':'まだ、言えないまま。はっきり・手紙・優しく、方法はある。'}
},
sickReturn:{title:'休み明けでついていけない',nav:'休み明けについていけない',num:63,attrs:['study'],goals:['休んだ分を追いつきたい','正直に分からないと言いたい','自分のペースで戻りたい'],chapters:['休み明けの授業','追いつく方法','少しずつ戻る'],locations:['教室','教室','教室'],base:['behindFeel','lostLesson','copyNote','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'置いていかれた感',hp:5,power:1,turns:4,look:'みんなが、先に進んでいる。'},{name:'分からなさ',hp:5,power:1,turns:4,look:'授業が、分からない。'},{name:'追いつくまで',hp:6,power:2,turns:4,look:'追いつくのは、大変。'}],
 talk:[['askCover2','「どこまでやった？」と聞く','範囲を、確認する。'],['tellBack2','「分かりません」と言う','正直に、伝える。'],['askClassmate2','隣の人に聞く','「ここって」と、聞く。']],
 think:[['lostFeel','置いていかれた気持ち','先に進んでしまった。'],['dontKnow','授業が分からない','休んだ分、分からない。'],['wantCatch','追いつきたい','本当は、追いつきたい。']],
 reasonKeys:['lostFeel','dontKnow','wantCatch'],
 stageGrants:[['copyNote','askCover','tellBack'],['homeStudy','catchSmall','askSheet','askClassmate','ownPace4']],
 subs:[
  {title:'「ノート貸すよ」と友達が言った',text:'借りたら、追いつけそう。',stat:'study',min:0,good:{text:'休んだ分が分かった。',rep:1,mind:1},ok:{text:'助かった。',mind:1}},
  {title:'先生が「ゆっくりでいいよ」と言った',text:'焦らなくていいと、言われた。',stat:'study',min:0,good:{text:'落ち着いた。',mind:1},ok:{text:'安心した。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='askCover2'){s.flags.askedC=true;out.text='「休みの間、どこまでやった？」\n「ここまでだよ」';out.card='askCover'}
  if(key==='tellBack2'){s.flags.toldB=true;relation(s,'正直に言ったら、「分かるところからでいいよ」と言ってもらえた。');out.text='「休んでて分かりません」\n「分かるところから、ゆっくりでいいよ」';out.card='tellBack'}
  if(key==='askClassmate2'){s.flags.askedCl=true;out.text='「ここって、どうやるの？」\n「こうだよ」';out.card='askClassmate'}
  if(key==='lostFeel'){s.reason='lostFeel';out.text='置いていかれた気持ち。\n「範囲を聞く」で、何をやったか確認しよう。';out.card='askCover'}
  if(key==='dontKnow'){s.reason='dontKnow';out.text='授業が、分からない。\n「ノートを借りる」「プリントをもらう」で。';out.card='copyNote'}
  if(key==='wantCatch'){s.reason='wantCatch';out.text='本当は、追いつきたい。\n「一つずつ」「自分のペース」で進もう。';out.card='catchSmall'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='copyNote'){f.copied=true;return{text:'友達のノートを、借りた。',meaning:'借りると、追いつける。'}}
  if(id==='askCover'){f.askedC2=true;return{text:'範囲を、聞いた。',meaning:'範囲が分かれば、追いつける。'}}
  if(id==='tellBack'){f.toldB2=true;return{text:'「分かりません」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='homeStudy'){f.homeS=true;return{text:'家で、休んだ分をやった。',meaning:'家での習慣は、追いつく。'}}
  if(id==='catchSmall'){f.caught=true;return{text:'分かるところから、一つずつ。',meaning:'一つずつは、現実的。'}}
  if(id==='askSheet'){f.askedS=true;return{text:'プリントを、もらった。',meaning:'もらうと、復習できる。'}}
  if(id==='askClassmate'){f.askedCl2=true;return{text:'隣の人に、聞いた。',meaning:'聞くは、失礼じゃない。'}}
  if(id==='ownPace4'){f.ownP4=true;return{text:'自分のペースで、追いついた。',meaning:'ペースが、続く。'}}
  if(id==='behindFeel'){f.behind=true;return{text:'置いていかれた気持ちの、まま。',meaning:'気持ちのままは、つらい。'}}
  if(id==='lostLesson'){f.lost=true;return{text:'分からないまま、流された。',meaning:'流されると、抜け落ちる。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'休んだ人は、みんなある。':s.stage===1?'範囲を聞くと、追いつける。':'一つずつは、現実的。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'休み明けの授業。みんなが進んでいて、ついていけない。',speaker:'担任の先生',quote:'じゃあ、ここからね',look:'黒板に、進んだ内容がある。',self:'分からない…',hint:'休み明けで、何がつらい？'};
  if(s.stage===1)return{narrative:'追いつく方法を、探す。',speaker:'友達',quote:'ノート、貸す？',look:'休んだ分のノートがある。',self:s.reason==='dontKnow'?'分からない…':s.reason==='wantCatch'?'追いつきたい…':'置いていかれた…',hint:'聞く・借りる・正直、方法はある。'};
  return{narrative:'少しずつ、追いついていく。',speaker:'担任の先生',quote:f.caught||f.ownP4?'「いい調子」':'「どう？」',look:'プリントとノートがある。',self:f.caught||f.ownP4||f.homeS?'追いつけそう。':'まだ、遅れたまま。',hint:'一つずつ・ペース・家・隣に聞く、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.caught||f.ownP4||f.homeS?3:f.copied||f.askedC2||f.toldB2||f.askedS?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.caught||f.ownP4?'追いつけてきた。':f.copied||f.askedC2?'方法を、見つけた。':'まだ、遅れたまま。聞く・借りる・正直、方法はある。'}
},
quietGroup:{title:'グループで何も言えない',nav:'グループで言えない',num:64,attrs:['soc'],goals:['一言でも発言したい','聞く役でも貢献したい','自分の考えを伝えたい'],chapters:['グループワークが始まる','発言するか黙るか','自分の声を出す'],locations:['教室','教室','教室'],base:['quietStay','nodOnly','agreeOut','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'発言の壁',hp:5,power:1,turns:4,look:'発言が、できない。'},{name:'黙りの中',hp:5,power:1,turns:4,look:'黙っていると、置いていかれる。'},{name:'自分の声',hp:6,power:2,turns:4,look:'自分の声で、話したい。'}],
 talk:[['smallIdea2','小さな意見を言う','一言だけ、発言。'],['askSpace2','「言っていい？」と聞く','隙間を、聞く。'],['shareOpinion2','自分の考えを言う','考えを、口にする。']],
 think:[['cantSpeak','発言できない','言いたいのに、言えない。'],['fearSpeak','外れてるかもで怖い','変に思われそうで怖い。'],['wantSpeak','ちゃんと話したい','本当は、発言したい。']],
 reasonKeys:['cantSpeak','fearSpeak','wantSpeak'],
 stageGrants:[['smallIdea','askQ2','writeIdea'],['askSpace','sayOne','listenRole','shareOpinion']],
 subs:[
  {title:'「あなたはどう思う？」と聞かれた',text:'意見を、求められた。',stat:'soc',min:0,good:{text:'「こう思う」って言えた。',rep:1,mind:1},ok:{text:'場が開いた。',mind:1}},
  {title:'小さな意見を採用してもらえた',text:'言ったことが、役に立った。',stat:'study',min:0,good:{text:'「言ってよかった」と思えた。',mind:1},ok:{text:'自信になった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='smallIdea2'){s.flags.saidI=true;relation(s,'一言言ったら、「いいね」と言ってもらえた。');out.text='「私は、こう思う」\n「いいね、それ」';out.card='smallIdea'}
  if(key==='askSpace2'){s.flags.askedSp=true;out.text='「私も言っていい？」\n「もちろん、聞きたい」';out.card='askSpace'}
  if(key==='shareOpinion2'){s.flags.shared=true;relation(s,'自分の考えを言ったら、聞いてもらえた。');out.text='「私の考えだけど…」\n「うん、聞かせて」';out.card='shareOpinion'}
  if(key==='cantSpeak'){s.reason='cantSpeak';out.text='言いたいのに、言えない。\n「一言だけ」「質問だけ」で始めよう。';out.card='sayOne'}
  if(key==='fearSpeak'){s.reason='fearSpeak';out.text='変に思われそうで、怖い。\n「付箋に書く」「聞く役」で参加しよう。';out.card='writeIdea'}
  if(key==='wantSpeak'){s.reason='wantSpeak';out.text='本当は、発言したい。\n「小さな意見」「一言」で、場を作ろう。';out.card='smallIdea'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='smallIdea'){f.saidI2=true;return{text:'小さな意見を、言った。',meaning:'一言は、参加の始まり。'}}
  if(id==='askQ2'){f.askedQ=true;return{text:'質問だけ、してみた。',meaning:'質問も、意見の一つ。'}}
  if(id==='writeIdea'){f.wroteI=true;return{text:'付箋に、書いて出した。',meaning:'書くと、伝えられる。'}}
  if(id==='askSpace'){f.askedSp2=true;return{text:'「言っていい？」と、聞いた。',meaning:'聞くと、場が開く。'}}
  if(id==='sayOne'){f.saidOne=true;return{text:'一言だけ、口に出した。',meaning:'一言も、勇気。'}}
  if(id==='agreeOut'){f.agreed=true;return{text:'「私もそう思う」と、言った。',meaning:'同調は、入口。'}}
  if(id==='listenRole'){f.listened=true;return{text:'聞く役を、果たした。',meaning:'聞くのも、貢献。'}}
  if(id==='shareOpinion'){f.sharedOp=true;return{text:'自分の考えを、言った。',meaning:'言うのは、勇気。'}}
  if(id==='quietStay'){f.quiet=true;return{text:'黙ったまま、過ごした。',meaning:'黙ると、置いていかれる。'}}
  if(id==='nodOnly'){f.nodded=true;return{text:'頷くだけで、済ませた。',meaning:'頷くだけでは、伝わらない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'黙ってしまうのは、みんなある。':s.stage===1?'一言は、参加の始まり。':'聞くのも、貢献。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'グループワーク。みんなが話し合う中、自分は黙っている。',speaker:'グループのリーダー',quote:'みんなの意見、聞かせて',look:'みんなが、話し合っている。',self:'言えない…',hint:'グループで言えなくて、何がつらい？'};
  if(s.stage===1)return{narrative:'発言するか、黙るか。',speaker:'グループのリーダー',quote:'あなたは？',look:'自分に、目が向く。',self:s.reason==='fearSpeak'?'変に思われそう…':s.reason==='wantSpeak'?'話したい…':'言えない…',hint:'一言・質問・付箋・聞く、方法はある。'};
  return{narrative:'自分の声を、出してみる。',speaker:'グループのリーダー',quote:f.sharedOp||f.saidOne?'「いい意見だね」':'「どう？」',look:'場が、待っている。',self:f.sharedOp||f.saidOne||f.saidI2?'発言できた。':'まだ、黙ったまま。',hint:'考え・一言・同調・聞く役、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.sharedOp||f.saidOne||f.listened?3:f.saidI2||f.askedQ||f.wroteI||f.askedSp2?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.sharedOp||f.saidOne?'発言できた。':f.saidI2||f.askedQ?'一言、言えた。':'まだ、黙ったまま。一言・質問・聞く、方法はある。'}
},
tripAnx:{title:'遠足の日が不安',nav:'遠足の日が不安',num:65,attrs:['ath','soc'],goals:['不安でも楽しみたい','迷子にならないようにしたい','気持ちを伝えたい'],chapters:['遠足の朝','目的地で行動','帰り道'],locations:['学校','遠足先','バス'],base:['tripWorry','packEarly','nearT','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'知らない場所への不安',hp:5,power:1,turns:4,look:'知らない場所は、不安。'},{name:'迷子の怖さ',hp:5,power:1,turns:4,look:'迷子になったら、どうしよう。'},{name:'帰るまで',hp:6,power:2,turns:4,look:'家に帰るまでが、遠足。'}],
 talk:[['buddyRule2','相棒と一緒に行動','離れない、約束。'],['tellAnxious2','「不安」と言う','気持ちを、伝える。'],['toiletAsk2','トイレの場所を聞く','先に、確かめる。']],
 think:[['newPlace','知らない場所が不安','知らない場所は、不安。'],['lostFear','迷子になりそうで怖い','はぐれたら、どうしよう。'],['wantFun','楽しみたい','本当は、楽しみたい。']],
 reasonKeys:['newPlace','lostFear','wantFun'],
 stageGrants:[['packEarly','nearT','mapCheck'],['buddyRule','followLead','toiletAsk','ownPace5','enjoyTrip']],
 subs:[
  {title:'先生が「班から離れないでね」と言った',text:'ルールがあれば、安心。',stat:'soc',min:0,good:{text:'班についていった。',mind:1},ok:{text:'心強かった。',mind:1}},
  {title:'相棒が「はぐれないようにね」と言った',text:'相棒がいると、安心。',stat:'ath',min:0,good:{text:'一緒に行動できた。',rep:1,mind:1},ok:{text:'安心した。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='buddyRule2'){s.flags.buddied=true;relation(s,'相棒と一緒に行動したら、迷子にならなかった。');out.text='「一緒に行動しよう」\n「うん、はぐれないようにね」';out.card='buddyRule'}
  if(key==='tellAnxious2'){s.flags.toldA=true;relation(s,'「不安」と言ったら、「先生の近くにいなさい」と言ってもらえた。');out.text='「ちょっと不安です」\n「先生の近くにいなさい」';out.card='tellAnxious'}
  if(key==='toiletAsk2'){s.flags.askedTl=true;out.text='「トイレどこですか」\n「あっちだよ、確認しておこう」';out.card='toiletAsk'}
  if(key==='newPlace'){s.reason='newPlace';out.text='知らない場所は、不安。\n「地図」「前日準備」で、知ろう。';out.card='mapCheck'}
  if(key==='lostFear'){s.reason='lostFear';out.text='はぐれたら、怖い。\n「相棒と一緒」「先生の近く」で安心。';out.card='buddyRule'}
  if(key==='wantFun'){s.reason='wantFun';out.text='本当は、楽しみたい。\n「自分のペース」「楽しむ」で、気持ちを上げよう。';out.card='ownPace5'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='packEarly'){f.packed=true;return{text:'荷物を、前の日に準備した。',meaning:'準備は、不安を減らす。'}}
  if(id==='nearT'){f.neared=true;return{text:'先生の近くに、いることにした。',meaning:'近くは、安心。'}}
  if(id==='buddyRule'){f.buddied2=true;return{text:'相棒と、一緒に行動した。',meaning:'二人は、迷子防止。'}}
  if(id==='mapCheck'){f.mapped=true;return{text:'行き先の地図を、確かめた。',meaning:'知ると、不安が減る。'}}
  if(id==='tellAnxious'){f.toldA2=true;return{text:'「不安」と、正直に言った。',meaning:'正直は、助けを呼ぶ。'}}
  if(id==='followLead'){f.followed=true;return{text:'リーダーに、ついていった。',meaning:'ついていくと、迷わない。'}}
  if(id==='toiletAsk'){f.askedTl2=true;return{text:'トイレの場所を、確かめた。',meaning:'確かめると、安心。'}}
  if(id==='ownPace5'){f.ownP5=true;return{text:'自分のペースで、行った。',meaning:'ペースが、続く。'}}
  if(id==='enjoyTrip'){f.enjoyed=true;return{text:'楽しむことに、集中した。',meaning:'楽しむは、気持ちを上げる。'}}
  if(id==='tripWorry'){f.worried=true;return{text:'不安なまま、行った。',meaning:'不安だけでは、楽しくない。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'不安は、みんなある。':s.stage===1?'準備は、不安を減らす。':'楽しむは、気持ちを上げる。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'遠足の朝。バスが待っているけど、知らない場所は不安。',speaker:'担任の先生',quote:'班の人と一緒に行動してね',look:'バスが、止まっている。',self:'不安…',hint:'遠足で、何が不安？'};
  if(s.stage===1)return{narrative:'目的地についた。班で行動する時間。',speaker:'班のリーダー',quote:'こっちだよ、ついてきて',look:'知らない場所が、広がる。',self:s.reason==='lostFear'?'はぐれたら怖い…':s.reason==='wantFun'?'楽しみたい…':'不安…',hint:'相棒・先生の近く・地図、方法はある。'};
  return{narrative:'帰り道。今日を振り返る。',speaker:'班のリーダー',quote:f.enjoyed||f.buddied2?'「楽しかったね」':'「もう帰るよ」',look:'バスの窓から、景色が流れる。',self:f.enjoyed||f.buddied2||f.neared?'楽しめた。':'まだ、不安なまま。',hint:'ペース・楽しむ・ついていく・トイレ、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.enjoyed||f.buddied2||f.followed?3:f.packed||f.neared||f.mapped||f.toldA2?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.enjoyed||f.buddied2?'楽しめた。':f.packed||f.mapped?'準備できた。':'まだ、不安なまま。相棒・地図・正直、方法はある。'}
},
refuseLend:{title:'貸してばかりで断りたい',nav:'貸すのを断りたい',num:66,attrs:['soc'],goals:['断りたいけど仲良くしたい','モヤモヤを伝えたい','自分のものを守りたい'],chapters:['また「貸して」と言われた','断るか貸すか','自分の気持ちを伝える'],locations:['教室','教室','廊下'],base:['lendAgain','sayNo3','lendOnce','anger','ignore'],
 start:{mind:4,energy:3},
 monsters:[{name:'断れない気持ち',hp:5,power:1,turns:4,look:'断りたいのに、断れない。'},{name:'嫌がられる恐れ',hp:5,power:1,turns:4,look:'断ると、嫌がられそう。'},{name:'自分の気持ち',hp:6,power:2,turns:4,look:'本当の気持ちを、言いたい。'}],
 talk:[['sayNo4','「今日は」と断る','優しく、断る。'],['explainWhy3','理由を言う','「私も使うから」と。'],['honestNo3','「嫌」と正直に','気持ちを、伝える。']],
 think:[['cantRefuse','断れない','断りたいのに、断れない。'],['fearDislike','嫌がられそう','断ると、嫌がられそう。'],['wantSay','気持ちを言いたい','モヤモヤを、伝えたい。']],
 reasonKeys:['cantRefuse','fearDislike','wantSay'],
 stageGrants:[['explainWhy2','lendOnce','offerAlt'],['honestNo2','keepBoundary','feelUsed','lendLimit','smileSay']],
 subs:[
  {title:'「ありがとう」と言われた',text:'断っても、関係は続く。',stat:'soc',min:0,good:{text:'「また明日ね」と言えた。',rep:1,mind:1},ok:{text:'関係が続いた。',mind:1}},
  {title:'友達が「そうか」と納得した',text:'正直は、通じた。',stat:'study',min:0,good:{text:'「断ってよかった」と思えた。',mind:1},ok:{text:'気持ちが楽になった。',mind:1}}
 ],
 onExplore(s,key){const out={text:'',card:null};
  if(key==='sayNo4'){s.flags.saidNo=true;relation(s,'「今日は」と断ったら、「そうか」と引き下がった。');out.text='「ごめん、今日は自分で使うの」\n「そうか、明日は？」';out.card='sayNo3'}
  if(key==='explainWhy3'){s.flags.explained=true;out.text='「私も使うから」\n「あ、そうか、ごめんね」';out.card='explainWhy2'}
  if(key==='honestNo3'){s.flags.honest=true;relation(s,'「貸しすぎは嫌」と正直に言ったら、「ごめん、知らなかった」と言ってもらえた。');out.text='「貸しすぎは、嫌かも」\n「ごめん、知らなかった」';out.card='honestNo2'}
  if(key==='cantRefuse'){s.reason='cantRefuse';out.text='断りたいのに、断れない。\n「今日だけ」「別を勧める」で折り合い。';out.card='lendOnce'}
  if(key==='fearDislike'){s.reason='fearDislike';out.text='断ると、嫌がられそう。\n「理由を言う」「笑顔で」で、優しく。';out.card='explainWhy2'}
  if(key==='wantSay'){s.reason='wantSay';out.text='モヤモヤを、伝えたい。\n「正直」「回数を決める」で、自分を守る。';out.card='honestNo2'}
  return out;
 },
 onPlay(s,id){const f=s.flags;
  if(id==='sayNo3'){f.saidNo2=true;return{text:'「今日は」と、断った。',meaning:'断るのも、大切。'}}
  if(id==='lendOnce'){f.once=true;return{text:'今日だけ貸した。',meaning:'一回は、折り合い。'}}
  if(id==='explainWhy2'){f.explained2=true;return{text:'理由を、言った。',meaning:'理由があれば、分かりやすい。'}}
  if(id==='offerAlt'){f.offered=true;return{text:'別のものを、勧めた。',meaning:'代替案は、親切。'}}
  if(id==='honestNo2'){f.honest2=true;return{text:'「貸しすぎは嫌」と、正直に言った。',meaning:'正直は、関係を守る。'}}
  if(id==='keepBoundary'){f.kept=true;return{text:'自分のものを、守った。',meaning:'守るのは、権利。'}}
  if(id==='feelUsed'){f.felt=true;return{text:'モヤモヤを、認めた。',meaning:'認めると、次が見える。'}}
  if(id==='lendLimit'){f.limited=true;return{text:'貸す回数を、決めた。',meaning:'決めると、迷わない。'}}
  if(id==='smileSay'){f.smiled=true;return{text:'笑顔で、「ダメ」と言った。',meaning:'優しさは、伝わる。'}}
  if(id==='lendAgain'){f.again=true;return{text:'また、黙って貸した。',meaning:'貸すだけでは、気持ちが溜まる。'}}
  return{text:'',meaning:''};
 },
 watch(s){return s.stage===0?'断れないのは、みんなある。':s.stage===1?'断るのも、大切。':'正直は、関係を守る。'},
 scene(s){const f=s.flags;
  if(s.stage===0)return{narrative:'また「貸して」と言われた。貸しすぎて、自分が使えない。',speaker:'いつも借りる友達',quote:'ねえ、それ貸して',look:'友達が、手を出す。',self:'断りたい…',hint:'貸しすぎで、何がつらい？'};
  if(s.stage===1)return{narrative:'断るか、貸すか。どうするか。',speaker:'いつも借りる友達',quote:'今日も、お願い',look:'手が、差し出される。',self:s.reason==='fearDislike'?'嫌がられそう…':s.reason==='wantSay'?'モヤモヤする…':'断れない…',hint:'断る・今日だけ・別を勧める・理由、方法はある。'};
  return{narrative:'気持ちを、伝えてみる。',speaker:'いつも借りる友達',quote:f.honest2||f.smiled?'「ごめん、知らなかった」':'「明日は？」',look:'友達が、答えを待っている。',self:f.honest2||f.smiled||f.saidNo2?'断れた。':'まだ、貸し続けてる。',hint:'正直・守る・回数・笑顔、選ぼう。'};
 },
 progress(s){const f=s.flags;return f.honest2||f.smiled||f.kept?3:f.saidNo2||f.explained2||f.offered?2:s.reason?1:0},
 situation(s){const f=s.flags;return f.honest2||f.smiled?'断れた。':f.saidNo2||f.explained2?'一回、折り合いついた。':'まだ、貸し続けてる。断る・理由・正直、方法はある。'}
}
};

// ── 共通の処理 ──────────────────────────────────────────────
function snap(s){return {mind:s.mind,energy:s.energy,rep:s.rep,progress:s.progress,monsterHp:s.monsterHp,stats:{...s.stats}}}
function trackMind(s){s.mindLog.push(s.mind)}
// 場面の合間に入るおまけイベント。困っている時の救いにも、順調な時のごほうびにもなる
const subPool=[
 {id:'okashi',text:'お菓子をもらった。',stat:'rep',min:1,good:{text:'「ありがとう！」と笑いあった。',mind:1,rep:1},ok:{text:'少し元気が出た。',mind:1}},
 {id:'home',text:'先生に近ごろのことをほめられた。',stat:'rep',min:3,good:{text:'「いつも助かるよ」と言われた。',mind:1,rep:1},ok:{text:'「がんばってるね」と言われた。',mind:1}},
 {id:'book',text:'図書室で面白そうな本を見つけた。',stat:'study',min:1,good:{text:'役立つ考え方を見つけた。',stat:'study',mind:1},ok:{text:'少しだけ読んで、気分転換できた。',mind:1}},
 {id:'kasa',text:'雨。傘を忘れた子がいた。',stat:'soc',min:1,good:{text:'一緒に入れてあげた。',rep:1},ok:{text:'気にかけておいた。',mind:1}},
 {id:'hakobi',text:'重い荷物を運ぶ人がいた。',stat:'ath',min:1,good:{text:'軽々運べて、感謝された。',rep:1,stat:'ath'},ok:{text:'少し重かったが、届いた。',energy:1}},
 {id:'housou',text:'放送係が堂々と読み上げていた。',stat:'rep',min:4,good:{text:'自分も前に立てる気がした。',mindMax:1},ok:{text:'すごいなと思った。',mind:1}},
 {id:'yotsuba',text:'校庭で四つ葉のクローバーを見つけた。',stat:'rep',min:2,good:{text:'いいことありそうな気分。',mind:1,energy:1},ok:{text:'いいことありそうな気分。',mind:1}},
 {id:'todoke',text:'落とし物を届けた。',stat:'rep',min:1,good:{text:'受付の人に深く礼を言われた。',rep:1},ok:{text:'届けられて、ほっとした。',mind:1}},
 {id:'teate',text:'転んだ子がいて、手当てを手伝った。',stat:'soc',min:1,good:{text:'「ありがとう」と泣き止んだ。',rep:1,mind:1},ok:{text:'保健室まで一緒に行った。',mind:1}},
 {id:'jitaku',text:'日直の仕事を手伝った。',stat:'ath',min:1,good:{text:'早く終わって、ほめられた。',energy:1,rep:1},ok:{text:'終わって、すっきりした。',energy:1}},
 {id:'okawari',text:'給食のおかわり、じゃんけんに勝った。',stat:'rep',min:2,good:{text:'うれしいおかわり。',mind:1,energy:1},ok:{text:'うれしいおかわり。',mind:1}},
 {id:'hanni',text:'先輩がテストの出やすい所を教えてくれた。',stat:'study',min:1,good:{text:'どこを見ればいいか分かった。',stat:'study'},ok:{text:'なんとなく分かった気がした。',mind:1}},
 {id:'usagi',text:'飼育小屋のうさぎの世話をした。',stat:'soc',min:1,good:{text:'うさぎがなついてきた。',mind:1,rep:1},ok:{text:'モフモフで、癒やされた。',mind:1}},
 {id:'souko',text:'体育倉庫の整理を手伝った。',stat:'ath',min:1,good:{text:'体がほぐれて、すっきり。',stat:'ath'},ok:{text:'片付いて、気持ちいい。',energy:1}},
 {id:'sakuhin',text:'図工室で上手な作品を見た。',stat:'study',min:1,good:{text:'作り方のコツが分かった。',stat:'study',mind:1},ok:{text:'きれいだなと思った。',mind:1}},
 {id:'hitori',text:'一人でいる子に気づいた。',stat:'soc',min:2,good:{text:'声をかけたら、笑顔になった。',rep:1,mind:1},ok:{text:'気にかけておいた。',mind:1}},
 {id:'aisatsu',text:'校門で校長先生にあいさつした。',stat:'rep',min:2,good:{text:'大きな声で返してもらえた。',rep:1},ok:{text:'返してもらえた。',mind:1}},
 {id:'uta',text:'好きな歌を口ずさんだ。',stat:'rep',min:1,good:{text:'隣の子が一緒に歌った。',rep:1,mind:1},ok:{text:'気分が明るくなった。',mind:1}},
 {id:'asobi',text:'休み時間の遊びに誘われた。',stat:'soc',min:1,good:{text:'みんなで笑いあった。',rep:1},ok:{text:'見ているだけでも楽しかった。',mind:1}},
 {id:'morning',text:'朝のあいさつ運動に参加した。',stat:'rep',min:1,good:{text:'「おはよう！」が広がった。',rep:1},ok:{text:'元気に言えた。',mind:1}}
];
function pickSubs(n){const pool=[...subPool],out=[];while(out.length<n&&pool.length){out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0])}return out}
// モンスターの毎ターン行動（反撃は実装しない方針）:
// stress=プレッシャーで気持ちを削る / seal=時間のかかる手札を封印 / special=属性・場面別の干渉 / wait=様子見
const MONSTER_ACT={
 stress(s,m){const d=Math.max(0,m.power-Math.min(2,s.clarity||0))+(s.bolster||0)+(s.rep<=0?1:0);if(d>0)s.mind=s.mind>0?Math.max(1,s.mind-d):s.mind-d;return{mdmg:d,counter:monsterFaded(s)&&m.power>0&&d<=0?'正体が見えて、怖さが薄らいだ。':s.rep<=0?'まわりの目が冷たい。孤立が不安を増やし、余計に傷ついた。':s.bolster?'未解決の課題が重なり、プレッシャーが強くなった。':'モンスターの威圧が、気持ちにのしかかった。'}},
 // 時間の消費: 時間がかかる系の手札（コスト2以上優先）を、この場では使えなくする
 seal(s){const pool=available(s).filter(id=>!cards[id].dark);if(!pool.length)return MONSTER_ACT.wait();const rid=pool.find(id=>cards[id].cost>=2)||pool[Math.floor(Math.random()*pool.length)];s.used.push(rid);return{counter:'「'+cards[rid].title+'」は時間がかかる。この場では使えなくなった。',stolen:rid}},
 // 特殊行動: シチュエーション固有の干渉。m.specialがあればそれ、なければ属性プールから
 special(s,m){const pool=m.special||specPool[def(s).attrs[0]]||specPool.soc;const sp=pool[(s.turns-1)%pool.length];
  if(sp.mind)s.mind=s.mind>0?Math.max(1,s.mind-sp.mind):s.mind-sp.mind;
  if(sp.energy)s.energy=Math.max(0,s.energy-sp.energy);
  if(sp.debuff)s.stats[sp.debuff]=clamp(s.stats[sp.debuff]-1,-2,2);
  let stolen=null;if(sp.seal){const pool2=available(s).filter(id=>!cards[id].dark&&cards[id].kind===sp.seal);if(pool2.length){stolen=pool2[Math.floor(Math.random()*pool2.length)];s.used.push(stolen)}}
  return{mdmg:sp.mind||0,counter:sp.text,stolen}},
 wait(){return{counter:'モンスターは様子をうかがっている。'}}
};
// 属性別の特殊行動プール: ストレス値・行動力・デバフ・手札に干渉する
const specPool={
 study:[{text:'難問に出くわして、手が止まった。',mind:1},{text:'書き間違いに気づいて、やり直しになった。',energy:1},{text:'聞きたいことが、言えなくなった。',seal:'talk'}],
 ath:[{text:'失敗したところを、見られてしまった。',mind:1},{text:'息があがって、体が重くなった。',energy:1},{text:'次の動きが、分からなくなった。',debuff:'ath'}],
 soc:[{text:'まわりの目が、気になった。',mind:1},{text:'空気が重くなって、動きづらくなった。',energy:1},{text:'言おうとしたことが、出てこなくなった。',seal:'talk'}]
};
export function monsterFaded(s){return (s.clarity||0)>=2}
export function monsterPower(s,m){return Math.max(0,m.power-Math.min(2,s.clarity||0))}
function monsterAct(s,m){const acts=m.acts||((m.power>=2||m.hp>=6)?['stress','special','seal','stress','special']:(m.hp>=4?['stress','seal','stress','wait','special']:['stress','wait','seal']));let a=acts[(s.turns-1)%acts.length];if(monsterFaded(s)&&a!=='stress')a='wait';return MONSTER_ACT[a](s,m)}
export function monsterSize(m){return m.weak?'small':(m.power>=2||m.hp>=6)?'huge':(m.hp<=3&&m.power<=1)?'small':'normal'}
// 苦手意識: 同じ属性の課題に負け続けると、その属性の手札の消費気持ちが+1される（ストーリー間で持ち越す）
function addLoss(s){
 for(const a of def(s).attrs){s.losses[a]=(s.losses[a]||0)+1;
  if(s.losses[a]>=2&&!s.traumas[a]){s.traumas[a]=true;note(s,statMeta[a].attr+'の場面に苦手意識を持ってしまった。関連する手札の気持ち消費が+1される。');say(s,'event','苦手意識が、ついてしまった…')}
 }
}
export function initial(story='fight',carry=null){
 const d=stories[story];
 const s={story,stage:0,mind:d.start.mind,energy:d.start.energy,rep:carry?carry.rep:1,repStart:carry?carry.rep:1,mindMax:carry?carry.mindMax:6,mindMaxStart:carry?carry.mindMax:6,stats:{study:0,ath:0,soc:0},monsterHp:d.monsters[0].hp,turns:0,slain:[],escaped:[],dead:false,mindLog:[],bonus:null,bolster:0,losses:{},traumas:carry?{...carry.traumas}:{},clarity:0,subPending:Array.isArray(d.subs)?[...d.subs]:pickSubs(d.subs??3),subNow:null,eventIdx:0,map:false,progress:0,goal:0,hand:[...d.base],discovered:[],used:[],flags:{},clues:[],relations:[],growth:[],log:[],explored:[],rested:[],observed:[],passed:[],minused:[],transcript:[],feedback:null,finished:false,reason:null,reflection:null,stageResults:[],stageStart:null};
 // イベント列: メイン(大)の間にサブ(小)を均等配分 → マップの⚪︎になる
 s.eventNodes=[];let qi=0;
 for(let i=0;i<d.monsters.length;i++){s.eventNodes.push({type:'main',idx:i});
  const left=d.monsters.length-1-i;
  if(left>0){const k=Math.ceil((s.subPending.length-qi)/left);for(let j=0;j<k&&qi<s.subPending.length;j++){s.eventNodes.push({type:'sub'});qi++}}}
 sayScene(s);
 // 場面開始時のスナップショット（終了時に「耐えた/敗れたが育った/力負け」を判定するため）
 s.stageStart={mind:s.mind,rep:s.rep,statsSum:s.stats.study+s.stats.ath+s.stats.soc,discoveredN:s.discovered.length,mindMax:s.mindMax};
 return s;
}
export function monster(s){const m=def(s).monsters[s.stage];if(s.progress>=3)return{...m,hp:Math.min(m.hp,2),power:0,weak:true};return m}
export function available(s){return s.hand.filter(id=>!s.used.includes(id));}
export function cardAtk(s,id){const c=cards[id];return Math.max(0,(c.atk||0)+(c.attr&&!c.dark?s.stats[c.attr]:0));}
export function canPlay(s,id){return !s.finished&&!s.feedback&&!s.subNow&&available(s).includes(id)&&s.energy>=cards[id].cost&&s.mind>1;}
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
 // 生き残ったモンスターの行動（威圧・封印・特殊・様子見）。評判が0だと威圧が+1される
 // 威圧は「気持ちがいっぱい」（精神力1）までは削るが直接倒さない。大失敗は自分でコストを払いすぎた時だけ起きる
 let mdmg=0,counter='',stolen=null;
 if(s.monsterHp>0){const r=monsterAct(s,m);mdmg=r.mdmg||0;counter=r.counter||'';stolen=r.stolen||null;}
 // 苦手意識: その属性の手札は、消費する気持ちが+1される
 if(c.attr&&s.traumas[c.attr]){s.mind=s.mind>0?Math.max(1,s.mind-1):s.mind-1;counter+=(counter?'　':'')+'苦手意識で、消費する気持ちが増えた。';}
 s.mind=clamp(s.mind,0,s.mindMax);s.energy=clamp(s.energy,0,5);s.rep=clamp(s.rep,0,5);
 for(const k of ['study','ath','soc'])s.stats[k]=clamp(s.stats[k],-2,2);
 growth(s,'「'+c.title+'」を試した。');
 const killed=s.monsterHp<=0,escaped=!killed&&s.turns>=m.turns;
 if(s.mind<=0){s.dead=true;s.finished=true}
 s.progress=def(s).progress(s);
 s.log.push({stage:s.stage,title:c.title,text,meaning});
 s.feedback={title:c.title,text,meaning,before,after:snap(s),dmg,mdmg,counter,killed,escaped,monster:m.name,stolen};
 say(s,'card',text);
 trackMind(s);
 return true;
}
// 同じ場面で続けてもう1枚出す。フィードバックを閉じるだけで場面・ターンは継続する
export function continueTurn(s){if(!s.feedback)return false;s.feedback=null;return true}
export function setGoal(s,n){if(!Number.isInteger(n)||n<0||n>2)return false;s.goal=n;s.progress=def(s).progress(s);return true}
export function advance(s){
 if(!s.feedback)return false;s.feedback=null;
 if(s.dead){addLoss(s);s.finished=true;return true}
 if(s.subNow){
  // サブイベントを終えて次のノードへ（選ばれなかった場合は「やり過ごした」扱い）
  s.subNow=null;
 }else{
  const failed=s.monsterHp>0;
  if(failed){
   add(s.escaped,s.stage);
   // 場面の結果分類: grown=敗れたが力・評判・発見が育った / endured=心を保って耐え抜いた / plain=心が削られて力負けした
   const st=s.stageStart||{mind:s.mind,rep:s.rep,statsSum:0,discoveredN:0,mindMax:s.mindMax};
   const statsSum=s.stats.study+s.stats.ath+s.stats.soc;
   const grewSt=statsSum>st.statsSum||s.rep>st.rep||s.discovered.length>st.discoveredN||s.mindMax>st.mindMax;
   const kind=grewSt?'grown':(s.mind>=2?'endured':'plain');
   s.stageResults.push({stage:s.stage,kind});
   // 苦手意識がつくのは「力負け」だけ。耐え抜いた・敗れても育った場面にはつかない
   if(kind==='plain')addLoss(s);
   if(kind==='grown')growth(s,'立ち向かって敗れたが、力や評判が育った。');
  }else add(s.slain,s.stage);
  // 強敵（大きなモンスター）を退けると、稀に精神力の上限が上がる
  const m0=monster(s);
  if(!failed&&(m0.power>=2||m0.hp>=6)&&s.mindMax<8){s.mindMax++;s.mind=Math.min(s.mindMax,s.mind+1);growth(s,'強い課題を退けて、心の器が広がった（精神力上限+1）。');}
  if(s.stage===def(s).monsters.length-1){s.finished=true;return true}
  // 逃した課題は次のモンスターを強くする（分岐: 失敗が持ち越される）
  s.bolster=failed?1:0;
 }
 // 次のイベントノードへ。マップ画面を経由してから場面を開く
 s.eventIdx++;
 const n=s.eventNodes[s.eventIdx];
 if(!n){s.finished=true;return true}
 s.map=true;
 if(n.type==='sub'){s.subNow=s.subPending.shift()}
 else{
  s.stage++;s.turns=0;s.clarity=0;s.monsterHp=monster(s).hp;s.energy=Math.min(5,s.energy+1);
  s.stageStart={mind:s.mind,rep:s.rep,statsSum:s.stats.study+s.stats.ath+s.stats.soc,discoveredN:s.discovered.length,mindMax:s.mindMax};
  for(const c of def(s).stageGrants[s.stage-1]||[])if(!s.used.includes(c)&&!s.hand.includes(c))s.hand.push(c);
  sayScene(s);
 }
 return true;
}
// サブイベントで選ぶ。積極的に関わる=パラメータ判定（高いほど良い結果）、気にかける=少し回復、やり過ごす=何もしない
export function chooseSub(s,i){
 if(!s.subNow||s.feedback)return false;
 const ev=s.subNow,before=snap(s);
 let text,meaning,good=false;
 if(i===0){
  const stat=ev.stat==='rep'?s.rep:s.stats[ev.stat];good=stat>=ev.min;const r=good?ev.good:ev.ok;
  if(r.mind)s.mind=Math.min(s.mindMax,s.mind+r.mind);
  if(r.energy)s.energy=Math.min(5,s.energy+r.energy);
  if(r.rep)s.rep=clamp(s.rep+r.rep,0,5);
  if(r.stat)s.stats[r.stat]=clamp(s.stats[r.stat]+1,-2,2);
  if(r.mindMax&&s.mindMax<8){s.mindMax++;s.mind=Math.min(s.mindMax,s.mind+1)}
  text=ev.text+' '+r.text;meaning=good?'力が高いほど、いい結果につながる。':'挑戦した分、経験になる。';
 }else if(i===1){s.mind=Math.min(s.mindMax,s.mind+1);text=ev.text+' 気にかけておいた。';meaning='気にかけるだけでも、次につながる。';}
 else{text=ev.text+' やり過ごした。';meaning='見送ることも、選び方の一つ。';}
 s.progress=def(s).progress(s);
 s.feedback={title:'できごと',text,meaning,before,after:snap(s),dmg:0,mdmg:0,sub:true};
 say(s,'event',text);trackMind(s);return true;
}
export function enterEvent(s){if(!s.map)return false;s.map=false;return true}
export function safety(s,type){
 if(s.finished||s.feedback)return false;
 if(type==='rest'){if(s.rested.includes(s.stage))return false;s.rested.push(s.stage);s.mind=Math.min(s.mindMax,s.mind+2);s.energy=Math.min(5,s.energy+2);growth(s,'休んで、次の作戦を考える余力をつくった。');say(s,'free','静かな場所で、少し休んだ。');trackMind(s);return true}
 if(type==='help'||type==='leave'){s.flags[type]=true;if(type==='help')s.rep=Math.min(5,s.rep+1);s.progress=def(s).progress(s);s.mind=Math.min(s.mindMax,s.mind+1);s.finished=true;growth(s,type==='help'?'困りごとを大人に伝えた。':'安全な場所へ移る選択をした。');trackMind(s);return true}
 return false;
}
export function canExplore(s){return !s.finished&&!s.feedback&&!s.subNow&&s.mind>1}
export function explore(s,key){
 if(!canExplore(s)||s.explored.includes(key))return null;
 const d=def(s),allKeys=[...d.talk.map(o=>o[0]),...d.think.map(o=>o[0])];
 if(!allKeys.includes(key))return null;
 if(d.reasonKeys.includes(key)&&s.reason)return null;
 s.explored.push(key);s.clarity=Math.min(3,(s.clarity||0)+1);
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
 s.mind=Math.min(s.mindMax,s.mind+m.recover);
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
 if(type==='observe'){if(s.observed.includes(s.stage))return false;s.observed.push(s.stage);s.clarity=Math.min(3,(s.clarity||0)+1);const w=def(s).watch(s);note(s,w);s.rep=Math.min(5,s.rep+1);growth(s,'相手の様子や、その場の手がかりを確かめた。');say(s,'free',w);trackMind(s);return {title:'様子を確かめた',text:w,meaning:'じっくり見るだけでも、分かることが増える。'}}
 if(type==='pass'){if(s.passed.includes(s.stage))return false;s.passed.push(s.stage);s.energy=Math.min(5,s.energy+1);const t='すぐには動かず、その場をやり過ごした。\n何も変わらなかったが、少し余力が戻った。';s.log.push({stage:s.stage,title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'});growth(s,'何もしないで、様子を見る時間をつくった。');say(s,'free',t);trackMind(s);return {title:'何もしない',text:t,meaning:'何もしないことも、選べる作戦の一つ。'}}
 return false;
}
export function scene(s){return def(s).scene(s)}
export function summary(s){const f=s.flags;let situation;if(s.dead)situation='気持ちがいっぱいをこえて、その場から逃げ出してしまった。ふりかえって、次の作戦を考えよう。';else if(f.help)situation='大人に困りごとを伝え、次のことを一緒に考えることにした。';else if(f.leave)situation='安全な場所へ移った。問題の続きは、落ち着いてから考えられる。';else situation=def(s).situation(s);const outcome=s.dead?'fail':(f.help||f.leave)?'exit':s.slain.includes(def(s).monsters.length-1)?'clear':s.slain.length?'partial':'survived';
 // 総合評価: 精神力の平均・最終手札・評判・バフ総量・イベント成否から算出
 const mindAvg=s.mindLog.length?s.mindLog.reduce((a,b)=>a+b,0)/s.mindLog.length:s.mind;
 const buffTotal=s.stats.study+s.stats.ath+s.stats.soc;
 const handSize=s.hand.length;
 // レジリエンス評価: 立ち向かう・耐える・失敗しても成長する戦略を高く、苦手意識・評判低下・成長不足・高ストレスを低く
 const repStart=s.repStart??1,repDelta=s.rep-repStart,traumaKeys=Object.keys(s.traumas||{});
 const grew=buffTotal>0||s.discovered.length>=2||repDelta>0||s.mindMax>(s.mindMaxStart??6);
 const praises=[],warns=[];
 // 場面ごとの結果を3型に分ける: endured(耐え抜いた)/grown(敗れたが育った)/plain(力負け)
 let endured=0,grownF=0,plainF=0;
 if(s.stageResults&&s.stageResults.length)for(const r of s.stageResults){if(r.kind==='endured')endured++;else if(r.kind==='grown')grownF++;else plainF++;}
 else{endured=s.escaped.length;grownF=(s.escaped.length&&grew)?1:0} // 記録なし(合成状態)の互換
 if(s.slain.length)praises.push(`立ち向かって、${s.slain.length}つの課題をやっつけた`);
 if(endured)praises.push(`${endured}つの課題を、心を保って耐えてやり過ごした`);
 if(grownF)praises.push(`${grownF}つの課題は失敗しても、力や評判が育った`);
 if(plainF)warns.push('力負けして、苦手な気持ちが残りそうになった場面があった');
 if(repDelta>0)praises.push(`評判が ${repStart} → ${s.rep} に上がった`);
 if(s.discovered.length>=2)praises.push(`新しい作戦を ${s.discovered.length} 個見つけて、考え方が広がった`);
 if(s.mindMax>(s.mindMaxStart??6))praises.push('強い課題を退けて、心の器が広がった');
 if(traumaKeys.length)warns.push(`苦手意識がついてしまった（${traumaKeys.map(k=>statMeta[k].attr).join('・')}）`);
 if(repDelta<0)warns.push(`評判が ${repStart} → ${s.rep} に下がった${repDelta<=-2?'（大きく下がった）':''}`);
 if(buffTotal<=0&&s.discovered.length<2)warns.push('力の成長が少なかった');
 if(mindAvg<=3)warns.push('気持ちがいっぱいになる場面が多かった（いつもしんどかった）');
 const score=s.slain.length*3+endured+grownF*2+Math.max(0,repDelta)+buffTotal+Math.min(2,s.discovered.length)+(mindAvg>=4?1:0)
  -traumaKeys.length*2+Math.min(0,repDelta)+(repDelta<=-2?-1:0)-plainF-(buffTotal<=0&&s.discovered.length<2?1:0)-(mindAvg<=3?1:0)-(s.dead?4:0);
 const tier=score>=10?'すばらしい作戦だった！':score>=6?'よくがんばった':score>=2?'もう少し作戦を広げよう':'次は立て直しから';
 return {situation,relation:s.relations.length?s.relations.join(' '):'今回は、相手との新しい約束や気持ちの共有はまだない。あとから話すこともできる。',growth:s.growth,goal:def(s).goals[s.goal],progress:s.progress,mind:s.mind,energy:s.energy,rep:s.rep,repStart,repDelta,stats:{...s.stats},discovered:s.discovered.length,outcome,slain:s.slain.length,escaped:s.escaped.length,endured,grownFails:grownF,plainFails:plainF,mindAvg,buffTotal,handSize,tier,praises,warns,grew,lowMind:mindAvg<=3,traumas:{...s.traumas},mindMax:s.mindMax}}
