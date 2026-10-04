import assert from 'node:assert/strict';
import {initial,explore,play,advance,continueTurn,safety,available,canPlay,canExplore,canMinus,free,minus,setGoal,summary,monster,cardAtk,stories} from './dist/engine.mjs';
// 乱数は決定的に（ランダムイベントはUI装飾。発動有無を別途検証）
const origRandom=Math.random;Math.random=()=>0.99; // おまけイベントは原則offで探索

let a=initial('fight');explore(a,'haru');assert(available(a).includes('relocate'));assert.equal(explore(a,'haru'),null);play(a,'boundary');assert(a.flags.boundary);advance(a);safety(a,'rest');explore(a,'respect');play(a,'promise');advance(a);assert(a.flags.promise);safety(a,'rest');play(a,'relocate');advance(a);assert(a.finished);assert(a.flags.fixed);assert(summary(a).relation.includes('約束'));
let b=initial('sports');explore(b,'movement');const c=initial('sports');explore(c,'noise');play(b,'practice');play(c,'practice');assert(b.mind>c.mind);assert(b.flags.practiced);advance(c);safety(c,'rest');explore(c,'teacher');play(c,'place');advance(c);play(c,'adjust');advance(c);assert(c.finished);assert(c.flags.adjusted);
let d=initial('test');assert.equal(d.mind,5);assert.equal(d.energy,4);explore(d,'teacherT');assert(available(d).includes('mistakes'));assert(available(d).includes('goodnight'));assert.equal(d.rep,2);explore(d,'gaps');assert.equal(explore(d,'panic'),null);play(d,'range');assert(available(d).includes('plan'));advance(d);safety(d,'rest');play(d,'mistakes');advance(d);play(d,'takeTest');advance(d);assert(d.finished);assert(d.flags.tested);assert(summary(d).situation.includes('取り組んだ'));
// join: 理由なしの直球は入れるが、理由が未対応だと足がすくむ。対応カードや仲間・一人遊びも正当解
let j=initial('join');assert.equal(j.mind,4);explore(j,'fear');assert(available(j).includes('selfTalk'));assert.equal(explore(j,'words'),null);j.energy=5;const jm=j.mind;play(j,'peekJoin');assert(j.mind<jm);assert(!j.flags.joined);assert(available(j).includes('selfTalk'));j.feedback=null;play(j,'selfTalk');assert(j.flags.selfTalk);j.feedback={};advance(j);explore(j,'teacherJ');assert(available(j).includes('tipJoin'));play(j,'tipJoin');assert(j.flags.joined);assert(summary(j).situation.length>0);
let j2=initial('join');explore(j2,'soloOK');play(j2,'ownGame');assert(j2.flags.soloOK);assert(j2.rep>=2);
// blame: あせった否定は逆効果、証拠・証言・順番で誤解がほどける
let bl=initial('blame');assert.equal(bl.mind,4);explore(bl,'panicB');assert(available(bl).includes('compose'));assert.equal(explore(bl,'evidence'),null);bl.energy=5;const bm=bl.mind;play(bl,'deny');assert(bl.mind<bm);assert(!bl.flags.cleared);assert(available(bl).includes('compose'));bl.feedback=null;bl.mind=5;play(bl,'compose');assert(bl.flags.composed);bl.feedback={};advance(bl);explore(bl,'eye');assert(available(bl).includes('witness'));assert(available(bl).includes('proveCalm'));play(bl,'proveCalm');assert(bl.flags.cleared);assert(summary(bl).situation.includes('ほどけ'));
let bl2=initial('blame');explore(bl2,'evidence');play(bl2,'findClue');assert(bl2.flags.clueFound);
let bl3=initial('blame');const b3m=bl3.mind;bl3.energy=5;play(bl3,'stay');assert(bl3.mind<b3m); // 黙っていると疑いが残る
// hurt: 痛みが残ると伝えにくい。守る・流す・伝えるの3系統
let h=initial('hurt');assert.equal(h.mind,4);explore(h,'sting');assert(available(h).includes('selfCare'));assert.equal(explore(h,'friendQ'),null);h.energy=5;const hm=h.mind;play(h,'sayStop');assert(h.mind<hm);assert(!h.flags.saidStop);assert(available(h).includes('selfCare'));h.feedback=null;h.mind=5;play(h,'selfCare');assert(h.flags.cared);h.feedback={};advance(h);assert(available(h).includes('replyKind'));play(h,'replyKind');assert(h.flags.mended);assert(summary(h).situation.includes('伝わ'));
let h2=initial('hurt');explore(h2,'laughQ');assert(available(h2).includes('brush'));play(h2,'laughOff');assert(!h2.flags.laughed);assert(available(h2).includes('brush'));h2.feedback=null;play(h2,'brush');assert(h2.flags.brushed);h2.feedback={};advance(h2);h2.mind=5;play(h2,'replyKind');assert(h2.flags.mended); // brush済みならreplyKindが通る
let h3=initial('hurt');play(h3,'walkAway');assert(h3.flags.left);assert(h3.mind>=4);
// alone: 断ることも向社会的。ことばの型があれば気持ちよく断れる
let al=initial('alone');assert.equal(al.mind,4);explore(al,'noWords');assert(available(al).includes('scriptNo'));assert.equal(explore(al,'guilt'),null);al.energy=5;const am=al.mind;play(al,'politeNo');assert(al.mind<am);assert(!al.flags.declined);assert(available(al).includes('scriptNo'));al.feedback=null;al.mind=5;play(al,'scriptNo');assert(al.flags.scripted);al.feedback={};advance(al);assert(available(al).includes('planB'));play(al,'planB');assert(al.flags.declined&&al.flags.promised);assert(summary(al).situation.includes('約束'));
let al2=initial('alone');explore(al2,'guilt');assert(available(al2).includes('bothWays'));play(al2,'bothWays');assert(al2.flags.declined);
let al3=initial('alone');explore(al3,'wantAlone');al3.energy=5;const a3m=al3.mind;play(al3,'joinIn');assert(al3.mind<a3m); // 気が進まない付き合いは疲れる
// lose: 勢いの再戦は敗北ループ。冷ます・学ぶ・讃えるで悔しさを転換
let lo=initial('lose');assert.equal(lo.mind,4);explore(lo,'again');assert(available(lo).includes('smartRematch'));assert.equal(explore(lo,'frustrate'),null);lo.energy=5;const lm=lo.mind;play(lo,'rematch');assert(lo.mind<lm);assert(!lo.flags.clearedL);assert(available(lo).includes('smartRematch'));lo.feedback=null;lo.mind=5;play(lo,'smartRematch');assert(lo.flags.smart);lo.feedback=null;explore(lo,'winnerS');assert(available(lo).includes('askHow'));play(lo,'askHow');assert(lo.flags.clearedL);assert(summary(lo).situation.includes('約束'));
let lo2=initial('lose');explore(lo2,'winnerS');assert(available(lo2).includes('askHow'));lo2.energy=5;play(lo2,'askHow');assert(lo2.flags.clearedL&&lo2.flags.learned);
let lo3=initial('lose');lo3.energy=5;play(lo3,'rematch');lo3.feedback={};advance(lo3);assert(available(lo3).includes('congrats'));lo3.mind=5;const l3m=lo3.mind;play(lo3,'congrats');assert(lo3.mind<l3m);assert(available(lo3).includes('praiseWin')); // 準備なしの讃えは通らない
// change: 理由を知らない抗議はぶつかる。認める・聞く・立て直すで適応
let ch=initial('change');assert.equal(ch.mind,4);explore(ch,'unfair');assert(available(ch).includes('whyAsk'));assert.equal(explore(ch,'disappointed'),null);ch.energy=5;const cm=ch.mind;play(ch,'complain');assert(ch.mind<cm);assert(!ch.flags.clearedC);assert(available(ch).includes('whyAsk'));ch.feedback=null;ch.mind=5;play(ch,'whyAsk');assert(ch.flags.knowsWhy);ch.feedback=null;explore(ch,'chikaF');assert(available(ch).includes('comfort'));play(ch,'comfort');assert(ch.flags.clearedC);
let ch2=initial('change');explore(ch2,'stuckPlan');assert(available(ch2).includes('makeNew'));ch2.energy=5;play(ch2,'makeNew');assert(ch2.flags.clearedC);assert(summary(ch2).situation.includes('楽しみ'));
let ch3=initial('change');play(ch3,'acceptQuick');assert(ch3.flags.swallowed);assert(!ch3.flags.clearedC); // 飲み込みは適応ではない
// picked: 当たるかは他人の決めること。挙げ続ける・聞いて学ぶ・別の役割がある
let pk=initial('picked');assert.equal(pk.mind,4);explore(pk,'unfairPick');assert(available(pk).includes('keepHand'));assert.equal(explore(pk,'giveUpPick'),null);pk.energy=5;play(pk,'keepHand');assert(pk.flags.persist&&pk.flags.clearedP);
let pk2=initial('picked');explore(pk2,'pickedKid');assert(available(pk2).includes('learnWay'));pk2.energy=5;play(pk2,'learnWay');assert(pk2.flags.clearedP);
let pk3=initial('picked');pk3.energy=5;play(pk3,'stopHand');assert(pk3.flags.stopped);assert(!pk3.flags.clearedP); // やめるは楽だがクリアではない
let pk4=initial('picked');pk4.energy=5;play(pk4,'keepHand');pk4.feedback={};advance(pk4);assert(available(pk4).includes('nextTime'));pk4.mind=5;play(pk4,'nextTime');assert(pk4.flags.clearedP); // persist後のnextTimeは通る
// item: 黙って取り返すとぶつかる。先に伝えると、断るもルールも通る
let it=initial('item');assert.equal(it.mind,4);explore(it,'shy');assert(available(it).includes('sayMine'));assert.equal(explore(it,'angry'),null);it.energy=5;const im=it.mind;play(it,'takeBack');assert(it.mind<im);assert(!it.flags.clearedI);assert(available(it).includes('sayMine'));it.feedback=null;it.mind=5;play(it,'sayMine');assert(it.flags.clearedI);
let it2=initial('item');explore(it2,'kenB');assert(available(it2).includes('lendRule'));it2.energy=5;play(it2,'lendRule');assert(it2.flags.clearedI&&it2.flags.agreed);
let it3=initial('item');explore(it3,'hard');assert(available(it3).includes('clearNo'));it3.energy=5;const i3m=it3.mind;play(it3,'clearNo');assert(it3.mind<i3m);assert(available(it3).includes('sayMine')); // 素地なしの断りは通らない
// scold: いきなり反論は言い争い。聞く→説明で誤解がほどける
let sc=initial('scold');assert.equal(sc.mind,4);explore(sc,'notMe');assert(available(sc).includes('explain'));assert.equal(explore(sc,'tooHard'),null);sc.energy=5;const sm=sc.mind;play(sc,'backTalk');assert(sc.mind<sm);assert(!sc.flags.clearedS);sc.feedback=null;sc.mind=5;play(sc,'explain');assert(sc.flags.clearedS);
let sc2=initial('scold');explore(sc2,'friendS');sc2.energy=5;play(sc2,'vent');assert(sc2.flags.vented);assert.equal(sc2.mind,4); // +1からカウンター-1
let sc3=initial('scold');explore(sc3,'scared');assert(available(sc3).includes('smallSay'));sc3.energy=5;play(sc3,'smallSay');assert(sc3.flags.clearedS); // 小さく言っても届く
// forgot: 言い訳だけでは信頼が残らない。正直・先に言う・習慣化で対処
let fg=initial('forgot');assert.equal(fg.mind,4);explore(fg,'lateForgot');assert(available(fg).includes('tellTruth'));assert.equal(explore(fg,'fear'),null);fg.energy=5;const fm=fg.mind;play(fg,'excuse');assert(fg.mind<fm);assert(available(fg).includes('tellTruth'));fg.feedback=null;fg.mind=5;play(fg,'tellTruth');assert(fg.flags.clearedF);
let fg2=initial('forgot');explore(fg2,'repeat');assert(available(fg2).includes('prepareNight'));fg2.energy=5;play(fg2,'prepareNight');assert(fg2.flags.clearedF);
let fg3=initial('forgot');play(fg3,'hideForgot');assert(fg3.flags.hid);assert(!fg3.flags.clearedF); // 隠すは残る
// friend: 空の励ましは空回り。軽く聞く・そばにいる・大人に伝えるが助け
let fr=initial('friend');assert.equal(fr.mind,4);explore(fr,'worry');assert(available(fr).includes('justAsk'));assert.equal(explore(fr,'leaveIt'),null);fr.energy=5;const frm=fr.mind;play(fr,'cheerUp');assert(fr.mind<frm);assert(!fr.flags.clearedG);fr.feedback=null;fr.mind=5;play(fr,'justAsk');assert(fr.flags.askedG);fr.feedback=null;explore(fr,'keiG');assert(available(fr).includes('listenDeep'));play(fr,'listenDeep');assert(fr.flags.clearedG);
let fr2=initial('friend');explore(fr2,'leaveIt');assert(available(fr2).includes('stayNear'));fr2.energy=5;play(fr2,'stayNear');assert(fr2.flags.clearedG);
let fr3=initial('friend');explore(fr3,'teacherG');assert(available(fr3).includes('tellAdult'));fr3.energy=5;play(fr3,'tellAdult');assert(fr3.flags.clearedG);
// confused: 壁を探す・見せる・聞く形はいろいろ。部分だけ聞くには壁が要る
let cq=initial('confused');assert.equal(cq.mind,4);explore(cq,'shyQ');assert(available(cq).includes('handUp'));assert.equal(explore(cq,'everyone'),null);cq.energy=5;const cqm=cq.mind;play(cq,'guess');assert(cq.mind<cqm);assert(!cq.flags.clearedQ);cq.feedback=null;cq.mind=5;play(cq,'handUp');assert(cq.flags.clearedQ);
let cq2=initial('confused');explore(cq2,'snowball');assert(available(cq2).includes('breakDown'));cq2.energy=5;play(cq2,'breakDown');assert(cq2.flags.clearedQ);cq2.mind=5;cq2.energy=5;advance(cq2);assert(available(cq2).includes('askSmall'));play(cq2,'askSmall');assert(cq2.flags.partAsked);
let cq3=initial('confused');explore(cq3,'friendQ');assert(available(cq3).includes('togetherQ'));cq3.energy=5;play(cq3,'togetherQ');assert(cq3.flags.clearedQ);
let cq4=initial('confused');cq4.energy=5;cq4.hand.push('askSmall');play(cq4,'askSmall');assert(cq4.mind<4);assert(available(cq4).includes('breakDown')); // 壁なし部分質問は空回り
// noise: 叫ぶと評判が下がる。守る・移る・伝えるが対処
let nz=initial('noise');assert.equal(nz.mind,4);explore(nz,'ears');assert(available(nz).includes('cover'));assert.equal(explore(nz,'head'),null);nz.energy=5;const nzr=nz.rep;play(nz,'shout');assert(nz.rep<nzr);assert(available(nz).includes('pleaseQ'));nz.feedback=null;nz.mind=5;play(nz,'cover');assert(nz.flags.clearedN);
let nz2=initial('noise');explore(nz2,'head');assert(available(nz2).includes('quietSpot'));nz2.energy=5;play(nz2,'quietSpot');assert(nz2.flags.clearedN);
let nz3=initial('noise');explore(nz3,'teacherN');assert(available(nz3).includes('sayLoud'));nz3.energy=5;play(nz3,'sayLoud');assert(nz3.flags.clearedN);
// role: サボると評判ダウン。認める・聞く・考える・次の目標が整理
let rl=initial('role');assert.equal(rl.mind,4);explore(rl,'sad');assert(available(rl).includes('cryOK'));assert.equal(explore(rl,'unfairR'),null);rl.energy=5;const rlr=rl.rep;play(rl,'skipCheer');assert(rl.rep<rlr);assert(available(rl).includes('cheerRole'));rl.feedback=null;rl.mind=5;play(rl,'cryOK');assert(rl.flags.clearedR);assert(rl.flags.felt);
let rl2=initial('role');explore(rl2,'unfairR');assert(available(rl2).includes('askHow2'));rl2.energy=5;play(rl2,'askHow2');assert(rl2.flags.clearedR);
let rl3=initial('role');explore(rl3,'teacherR');assert(available(rl3).includes('nextChance'));rl3.energy=5;play(rl3,'nextChance');assert(rl3.flags.clearedR);rl3.feedback=null;rl3.mind=5;rl3.energy=5;rl3.stage=1;rl3.hand.push('cheerHard');play(rl3,'cheerHard');assert(rl3.flags.cheered); // 整理してからの応援は届く
let rl4=initial('role');rl4.energy=5;rl4.hand.push('cheerHard');play(rl4,'cheerHard');assert(rl4.mind<4);assert(available(rl4).includes('cheerRole')); // 素地なし応援は空回り
// cheat: 言いふらしは評判ダウン。公平伝え・本人・やり直しが解決
let cx=initial('cheat');assert.equal(cx.mind,4);explore(cx,'tellWhom');assert(available(cx).includes('tellFair'));assert.equal(explore(cx,'betray'),null);cx.energy=5;const cxr=cx.rep;play(cx,'spread');assert(cx.rep<cxr);assert(available(cx).includes('quietTalk'));cx.feedback=null;cx.mind=5;play(cx,'tellFair');assert(cx.flags.clearedX);
let cx2=initial('cheat');explore(cx2,'betray');assert(available(cx2).includes('quietTalk'));cx2.energy=5;play(cx2,'quietTalk');assert(cx2.flags.clearedX);
let cx3=initial('cheat');explore(cx3,'unfairGame');assert(available(cx3).includes('replayRule'));cx3.energy=5;play(cx3,'replayRule');assert(cx3.flags.clearedX);cx3.feedback=null;cx3.mind=5;cx3.energy=5;cx3.stage=1;cx3.hand.push('groupRule');play(cx3,'groupRule');assert(cx3.flags.ruled); // 伝えてからのルール化
let cx4=initial('cheat');cx4.energy=5;cx4.hand.push('groupRule');play(cx4,'groupRule');assert(cx4.mind<4);assert(available(cx4).includes('tellFair')); // 素地なしルール化は空回り
// newClass: 待つだけでは始まらない。あいさつ・一言・共通話題でなじむ
let nc=initial('newClass');assert.equal(nc.mind,4);explore(nc,'noFriends');assert(available(nc).includes('sayHi'));assert.equal(explore(nc,'missOld'),null);nc.energy=5;play(nc,'wait');assert(available(nc).includes('sayHi'));nc.feedback=null;nc.mind=5;play(nc,'sayHi');assert(nc.flags.clearedNC);
let nc2=initial('newClass');explore(nc2,'missOld');assert(available(nc2).includes('visitOld'));nc2.energy=5;play(nc2,'visitOld');assert(nc2.flags.clearedNC);
let nc3=initial('newClass');explore(nc3,'newKid');assert(available(nc3).includes('commonTalk'));nc3.energy=5;play(nc3,'commonTalk');assert(nc3.flags.clearedNC);nc3.feedback=null;nc3.mind=5;nc3.energy=5;nc3.stage=1;nc3.hand.push('lunchJoin');play(nc3,'lunchJoin');assert(nc3.flags.lunched); // 一言あっての一緒に食べる
let nc4=initial('newClass');nc4.energy=5;nc4.hand.push('lunchJoin');play(nc4,'lunchJoin');assert(nc4.mind<4);assert(available(nc4).includes('sayHi')); // 素地なしは空回り
// present: パスは逃げるだけ。一人を見る・ゆっくり・練習で読み切る
let pv=initial('present');assert.equal(pv.mind,4);explore(pv,'eyes');assert(available(pv).includes('lookOne'));assert.equal(explore(pv,'stumble'),null);pv.energy=5;const pvm=pv.mind;play(pv,'skipTurn');assert(pv.mind<pvm);assert(available(pv).includes('slowRead'));pv.feedback=null;pv.mind=5;play(pv,'lookOne');assert(pv.flags.clearedV);
let pv2=initial('present');explore(pv2,'stumble');assert(available(pv2).includes('slowRead'));pv2.energy=5;play(pv2,'slowRead');assert(pv2.flags.clearedV);
let pv3=initial('present');explore(pv3,'buddyP');assert(available(pv3).includes('buddyRead'));pv3.energy=5;play(pv3,'buddyRead');assert(pv3.flags.clearedV);
let pv4=initial('present');pv4.energy=5;pv4.hand.push('breatheRead');play(pv4,'breatheRead');assert(pv4.mind<4);assert(available(pv4).includes('practiceRead')); // 準備なし深呼吸は空回り
// spill: 見ぬふりは評判ダウン。謝る・拭く・頼む・笑うで対処
let sp=initial('spill');assert.equal(sp.mind,4);explore(sp,'embarrass');assert(available(sp).includes('saySorry2'));assert.equal(explore(sp,'how2wipe'),null);sp.energy=5;const spr=sp.rep;play(sp,'hideMistake');assert(sp.rep<spr);assert(available(sp).includes('saySorry2'));sp.feedback=null;sp.mind=5;play(sp,'saySorry2');assert(sp.flags.clearedM);
let sp2=initial('spill');explore(sp2,'teacherM');assert(available(sp2).includes('wipeGood'));sp2.energy=5;play(sp2,'wipeGood');assert(sp2.flags.clearedM);
let sp3=initial('spill');explore(sp3,'teacherM');assert(available(sp3).includes('wipeGood'));sp3.energy=5;play(sp3,'wipeGood');assert(sp3.flags.clearedM);sp3.feedback=null;sp3.mind=5;sp3.energy=5;sp3.stage=1;sp3.hand.push('cleanBoth');play(sp3,'cleanBoth');assert(sp3.flags.cleanedBoth); // 片づけてから両方やる
let sp4=initial('spill');sp4.energy=5;sp4.hand.push('cleanBoth');play(sp4,'cleanBoth');assert(sp4.mind<4);assert(available(sp4).includes('wipeGood')); // 素地なし両方は空回り
// pair: 余っても終わらない。誘う・入る・一人・先生に言う
let pr=initial('pair');assert.equal(pr.mind,4);explore(pr,'noPairAsk');assert(available(pr).includes('askPair'));assert.equal(explore(pr,'hateLeft'),null);pr.energy=5;play(pr,'standStill');assert(available(pr).includes('askPair'));pr.feedback=null;pr.mind=5;play(pr,'askPair');assert(pr.flags.clearedP);
let pr2=initial('pair');explore(pr2,'soloOK');assert(available(pr2).includes('ownExp'));pr2.energy=5;play(pr2,'ownExp');assert(pr2.flags.clearedP); // 一人も正当解
let pr3=initial('pair');explore(pr3,'leftKid');assert(available(pr3).includes('pairUp'));pr3.energy=5;play(pr3,'pairUp');assert(pr3.flags.clearedP);pr3.feedback=null;pr3.mind=5;pr3.energy=5;pr3.stage=1;pr3.hand.push('offerNext');play(pr3,'offerNext');assert(pr3.flags.offered); // 組めてから次の約束
let pr4=initial('pair');pr4.energy=5;pr4.hand.push('offerNext');play(pr4,'offerNext');assert(pr4.mind<4);assert(available(pr4).includes('askPair')); // 素地なし約束は空回り
// promise: 責めるは評判ダウン。聞く・伝える・新約束で整理
let pm=initial('promise');assert.equal(pm.mind,4);explore(pm,'sad');assert(available(pm).includes('tellFeel'));assert.equal(explore(pm,'doubt'),null);pm.energy=5;const pmr=pm.rep;play(pm,'accuse');assert(pm.rep<pmr);assert(available(pm).includes('tellFeel'));pm.feedback=null;pm.mind=5;play(pm,'tellFeel');assert(pm.flags.clearedPr);
let pm2=initial('promise');explore(pm2,'doubt');assert(available(pm2).includes('askWhy2'));pm2.energy=5;play(pm2,'askWhy2');assert(pm2.flags.clearedPr);
let pm3=initial('promise');explore(pm3,'kenP');assert(available(pm3).includes('hearOut2'));pm3.energy=5;play(pm3,'hearOut2');assert(pm3.flags.clearedPr);pm3.feedback=null;pm3.mind=5;pm3.energy=5;pm3.stage=1;pm3.hand.push('bigPromise');play(pm3,'bigPromise');assert(pm3.flags.bigPromised); // 聞いてから大事さを伝える
let pm4=initial('promise');pm4.energy=5;pm4.hand.push('bigPromise');play(pm4,'bigPromise');assert(pm4.mind<4);assert(available(pm4).includes('tellFeel')); // 素地なしは空回り
// duty: 自分もサボるは評判ダウン。声かけ・分担・相談・自分の分だけ
let dt=initial('duty');assert.equal(dt.mind,4);explore(dt,'unfairD');assert(available(dt).includes('splitWork'));assert.equal(explore(dt,'tired'),null);dt.energy=5;const dtr=dt.rep;play(dt,'slackOff');assert(dt.rep<dtr);assert(available(dt).includes('doOwn'));dt.feedback=null;dt.mind=5;play(dt,'splitWork');assert(dt.flags.clearedD);
let dt2=initial('duty');explore(dt2,'slacker');assert(available(dt2).includes('callBack'));dt2.energy=5;play(dt2,'callBack');assert(dt2.flags.clearedD);
let dt3=initial('duty');explore(dt3,'dutyOK');assert(available(dt3).includes('doOwn'));dt3.energy=5;play(dt3,'doOwn');assert(dt3.flags.clearedD);dt3.feedback=null;dt3.mind=5;dt3.energy=5;dt3.stage=1;dt3.hand.push('finishWell');play(dt3,'finishWell');assert(dt3.flags.finishedWell); // 分担してから仕上げ
let dt4=initial('duty');dt4.energy=5;dt4.hand.push('finishWell');play(dt4,'finishWell');assert(dt4.mind<4);assert(available(dt4).includes('splitWork')); // 素地なし仕上げは空回り
// rumor: 大声否定・怒鳴りは評判ダウン。聞く・流す・静かに言う・先生で止める
let ru=initial('rumor');assert.equal(ru.mind,4);explore(ru,'whoDid');assert(available(ru).includes('findOut'));assert.equal(explore(ru,'angry'),null);ru.energy=5;const rur=ru.rep;play(ru,'denyR');assert(ru.rep<rur);assert(available(ru).includes('tellTruth2'));ru.feedback=null;ru.mind=5;play(ru,'findOut');assert(ru.flags.clearedRu);
let ru2=initial('rumor');explore(ru2,'whatThey');assert(available(ru2).includes('laughOff2'));ru2.energy=5;play(ru2,'laughOff2');assert(ru2.flags.clearedRu);
let ru3=initial('rumor');explore(ru3,'teacherRu');assert(available(ru3).includes('teacherStop'));ru3.energy=5;play(ru3,'teacherStop');assert(ru3.flags.clearedRu);ru3.feedback=null;ru3.mind=5;ru3.energy=5;ru3.stage=1;ru3.hand.push('keepAct');play(ru3,'keepAct');assert(ru3.flags.kept); // 対処していつもどおり
let ru4=initial('rumor');ru4.energy=5;ru4.hand.push('keepAct');play(ru4,'keepAct');assert(ru4.mind<4);assert(available(ru4).includes('findOut')); // 素地なしは空回り
// lunch: 隠す・押しつけるは評判ダウン。一口・少なめ・混ぜる・相談で向き合う
let lu=initial('lunch');assert.equal(lu.mind,5);explore(lu,'fearTry');assert(available(lu).includes('littleBite'));assert.equal(explore(lu,'shame'),null);lu.energy=5;const lur=lu.rep;play(lu,'hideFood');assert(lu.rep<lur);assert(available(lu).includes('tellAmount'));lu.feedback=null;lu.mind=5;play(lu,'littleBite');assert(lu.flags.clearedL);
let lu2=initial('lunch');explore(lu2,'friendL');assert(available(lu2).includes('mixFood'));lu2.energy=5;play(lu2,'mixFood');assert(lu2.flags.clearedL);
let lu3=initial('lunch');explore(lu3,'texture');assert(available(lu3).includes('mixFood'));lu3.energy=5;play(lu3,'mixFood');assert(lu3.flags.clearedL);lu3.feedback=null;lu3.mind=5;lu3.energy=5;lu3.stage=1;lu3.hand.push('fullTry');play(lu3,'fullTry');assert(lu3.flags.fullTried); // 試してから完食
let lu4=initial('lunch');lu4.energy=5;lu4.hand.push('fullTry');play(lu4,'fullTry');assert(lu4.mind<5);assert(available(lu4).includes('littleBite')); // 素地なし完食は空回り
// lie: 嘘を重ねる・人のせいにするは評判ダウン。認める・書く・言い直す・約束
let li=initial('lie');assert.equal(li.mind,5);explore(li,'scaredTell');assert(available(li).includes('writeSorry'));assert.equal(explore(li,'whatNow'),null);li.energy=5;const lir=li.rep;play(li,'biggerLie');assert(li.rep<lir);assert(available(li).includes('admitLie'));li.feedback=null;li.mind=5;play(li,'admitLie');assert(li.flags.clearedLie);
let li2=initial('lie');explore(li2,'whatNow');assert(available(li2).includes('admitLie'));li2.energy=5;play(li2,'admitLie');assert(li2.flags.clearedLie);
let li3=initial('lie');explore(li3,'lieKid');assert(available(li3).includes('writeSorry'));li3.energy=5;play(li3,'writeSorry');assert(li3.flags.clearedLie);li3.feedback=null;li3.mind=5;li3.energy=5;li3.stage=1;li3.hand.push('promiseTrue');play(li3,'promiseTrue');assert(li3.flags.promisedT); // 認めてから約束
let li4=initial('lie');li4.energy=5;li4.hand.push('promiseTrue');play(li4,'promiseTrue');assert(li4.mind<5);assert(available(li4).includes('admitLie')); // 素地なし約束は形だけ
// relay: サボるは評判ダウン。短く練習・話す・深呼吸・バトン・走り切る
let re=initial('relay');assert.equal(re.mind,4);explore(re,'teamPress');assert(available(re).includes('teamTalk'));assert.equal(explore(re,'fearFall'),null);re.energy=5;const rer=re.rep;play(re,'skipPractice');assert(re.rep<rer);assert(available(re).includes('shortRun'));re.feedback=null;re.mind=5;play(re,'teamTalk');assert(re.flags.clearedRe);
let re2=initial('relay');explore(re2,'teacherRe');assert(available(re2).includes('shortRun'));re2.energy=5;play(re2,'shortRun');assert(re2.flags.clearedRe);
let re3=initial('relay');explore(re3,'slowSelf');assert(available(re3).includes('shortRun'));re3.energy=5;play(re3,'shortRun');assert(re3.flags.clearedRe);re3.feedback=null;re3.mind=5;re3.energy=5;re3.stage=1;re3.hand.push('batonPass');play(re3,'batonPass');assert(re3.flags.batonOk);re3.feedback=null;re3.mind=5;re3.energy=5;re3.stage=2;re3.hand.push('relayRun');play(re3,'relayRun');assert(re3.flags.ranIt); // 練習→バトン→本番
let re4=initial('relay');re4.energy=5;re4.hand.push('batonPass');play(re4,'batonPass');assert(re4.mind<4);assert(available(re4).includes('shortRun')); // 素地なしバトンは空回り
// sickDay: 隠すは評判ダウン。聞く・要点・少しずつ・計画・追いつく
let sd=initial('sickDay');assert.equal(sd.mind,5);explore(sd,'shyAskS');assert(available(sd).includes('noteKey'));assert.equal(explore(sd,'dontKnow'),null);sd.energy=5;const sdr=sd.rep;play(sd,'hideLate');assert(sd.rep<sdr);assert(available(sd).includes('askMissed'));sd.feedback=null;sd.mind=5;play(sd,'noteKey');assert(sd.flags.clearedS);
let sd2=initial('sickDay');explore(sd2,'tooMuch');assert(available(sd2).includes('bitByBit'));sd2.energy=5;play(sd2,'bitByBit');assert(sd2.flags.clearedS);
let sd3=initial('sickDay');explore(sd3,'teacherSick');assert(available(sd3).includes('askTeacherS'));sd3.energy=5;play(sd3,'askTeacherS');assert(sd3.flags.clearedS);sd3.feedback=null;sd3.mind=5;sd3.energy=5;sd3.stage=1;sd3.hand.push('catchPlan');play(sd3,'catchPlan');assert(sd3.flags.planned);sd3.feedback=null;sd3.mind=5;sd3.energy=5;sd3.hand.push('caughtUp');play(sd3,'caughtUp');assert(sd3.flags.caught); // 聞く→計画→追いつく
let sd4=initial('sickDay');sd4.energy=5;sd4.hand.push('catchPlan');play(sd4,'catchPlan');assert(sd4.mind<5);assert(available(sd4).includes('askMissed')); // 素地なし計画は空回り
let cr=initial('craft');assert.equal(cr.mind,5);explore(cr,'perfect');assert(available(cr).includes('mendBit'));assert.equal(explore(cr,'bogus'),null);cr.energy=5;play(cr,'mendBit');assert(cr.flags.fixed);cr.feedback=null;cr.mind=5;cr.stage=2;cr.hand.push('finishWork');play(cr,'finishWork');assert(cr.flags.done); // 直し→仕上げ
let cr2=initial('craft');explore(cr2,'skillKid');assert(available(cr2).includes('copyGood'));cr2.energy=5;play(cr2,'copyGood');assert(cr2.flags.fixed);cr2.feedback=null;cr2.mind=5;cr2.stage=2;cr2.hand.push('fixIdea');play(cr2,'fixIdea');assert(cr2.flags.reformed); // 真似→新しい形
let cr3=initial('craft');cr3.energy=5;play(cr3,'coverUp');assert(cr3.flags.covered&&cr3.rep===0);assert(available(cr3).includes('mendBit')); // ごまかし→直しへ
let cr4=initial('craft');cr4.energy=5;play(cr4,'throwAway');assert(cr4.flags.threw);assert(available(cr4).includes('partRedo')); // 捨てる→部分直しへ
let cr5=initial('craft');cr5.energy=5;cr5.hand.push('fixIdea');play(cr5,'fixIdea');assert(cr5.mind<5);assert(available(cr5).includes('mendBit')); // 素地なし直しは空回り
let cr6=initial('craft');explore(cr6,'teacherArt');assert(available(cr6).includes('consultArt'));cr6.energy=5;play(cr6,'consultArt');assert(cr6.flags.fixed&&cr6.flags.consulted);
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){const s=initial(story);s.energy=0;s.mind=0;s.finished=true;const t=initial(story);assert(safety(t,'rest'));const e=t.energy;assert(!safety(t,'rest'));assert.equal(t.energy,e);assert(!play(t,'not-a-card'));assert(!setGoal(t,9));assert(!continueTurn(t));t.energy=5;const tId=available(t)[0];assert(play(t,tId));assert(continueTurn(t));assert.equal(t.stage,0);} // continueTurnで場面を継続してもう1枚出せる

// いつでも選べる作戦（カード不要・場面ごとに1回）と、気持ちがいっぱい時の相談不可
const MAP={fight:{talk:'haru',think:'why',bond:'ask',free1:'distance',strain:'boundary',dark:'anger',repTest:'distance',explore:['haru','mina','why','respect','feeling']},sports:{talk:'teacher',think:'movement',bond:'schedule',free1:'practice',strain:'practice',dark:'anger',repTest:'practice',explore:['noise','teacher','friend']},test:{talk:'teacherT',think:'gaps',bond:'range',free1:'breathe',strain:'easyFirst',dark:'ignore',repTest:'easyFirst',explore:['gaps','teacherT','kei']},join:{talk:'teacherJ',think:'fear',bond:'peekJoin',free1:'soloPlay',strain:'peekJoin',dark:'anger',repTest:'watchPlay',explore:['fear','teacherJ','friend2']},blame:{talk:'teacherB',think:'panicB',bond:'deny',free1:'stay',strain:'deny',dark:'anger',repTest:'stay',explore:['panicB','teacherB','eye']},hurt:{talk:'friendC',think:'sting',bond:'sayStop',free1:'walkAway',strain:'sayStop',dark:'boast',repTest:'walkAway',explore:['sting','friendC','teacherC']},alone:{talk:'teacherD',think:'noWords',bond:'politeNo',free1:'runOff',strain:'politeNo',dark:'ignore',repTest:'runOff',explore:['noWords','teacherD','friendD']},lose:{talk:'teacherE',think:'face',bond:'praiseWin',free1:'quitGame',strain:'rematch',dark:'boast',repTest:'quitGame',explore:['frustrate','teacherE','winnerS']},change:{talk:'teacherP',think:'unfair',bond:'whyAsk',free1:'acceptQuick',strain:'complain',dark:'anger',repTest:'acceptQuick',explore:['unfair','teacherP','chikaF']},picked:{talk:'teacherH',think:'unfairPick',bond:'pickRule',free1:'bigSigh',strain:'keepHand',dark:'ignore',repTest:'bigSigh',explore:['unfairPick','teacherH','pickedKid']},item:{talk:'teacherI',think:'shy',bond:'sayMine',free1:'keepQuiet',strain:'takeBack',dark:'anger',repTest:'keepQuiet',explore:['shy','teacherI','kenB']},scold:{talk:'teacherS',think:'notMe',bond:'saySorry',free1:'goQuiet',strain:'backTalk',dark:'anger',repTest:'goQuiet',explore:['notMe','teacherS','friendS']},forgot:{talk:'teacherF',think:'lateForgot',bond:'tellTruth',free1:'panicF',strain:'excuse',dark:'ignore',repTest:'panicF',explore:['lateForgot','teacherF','friendF']},friend:{talk:'teacherG',think:'worry',bond:'cheerUp',free1:'watchFar',strain:'cheerUp',dark:'ignore',repTest:'watchFar',explore:['worry','teacherG','keiG']},confused:{talk:'teacherQ',think:'shyQ',bond:'handUp',free1:'stare',strain:'guess',dark:'ignore',repTest:'stare',explore:['shyQ','teacherQ','friendQ']},noise:{talk:'teacherN',think:'ears',bond:'sayLoud',free1:'plugEars',strain:'shout',dark:'ignore',repTest:'plugEars',explore:['ears','teacherN','friendN']},role:{talk:'teacherR',think:'unfairR',bond:'askHow2',free1:'dragFeet',strain:'sulkR',dark:'anger',repTest:'dragFeet',explore:['sad','teacherR','pickedOne']},cheat:{talk:'teacherX',think:'tellWhom',bond:'tellFair',free1:'glare',strain:'spread',dark:'ignore',repTest:'glare',explore:['tellWhom','teacherX','friendX']},newClass:{talk:'newKid',think:'noFriends',bond:'sayHi',free1:'wait',strain:'fakeSmile',dark:'ignore',repTest:'wait',explore:['noFriends','newKid','teacherNC']},present:{talk:'teacherP2',think:'eyes',bond:'lookOne',free1:'smallVoice',strain:'skipTurn',dark:'ignore',repTest:'smallVoice',explore:['stumble','teacherP2','buddyP']},spill:{talk:'teacherM',think:'embarrass',bond:'saySorry2',free1:'wipeHalf',strain:'hideMistake',dark:'ignore',repTest:'wipeHalf',explore:['embarrass','teacherM','friendM']},pair:{talk:'teacherA',think:'noPairAsk',bond:'askPair',free1:'followCrowd',strain:'pretendBusy',dark:'ignore',repTest:'followCrowd',explore:['noPairAsk','teacherA','leftKid']},promise:{talk:'kenP',think:'sad',bond:'tellFeel',free1:'actNormal',strain:'accuse',dark:'ignore',repTest:'actNormal',explore:['sad','kenP','teacherPr']},duty:{talk:'slacker',think:'unfairD',bond:'callBack',free1:'doAll',strain:'complainD',dark:'ignore',repTest:'doAll',explore:['unfairD','slacker','teacherD2']},rumor:{talk:'rumorKid',think:'whoDid',bond:'findOut',free1:'pretendR',strain:'snapBack',dark:'ignore',repTest:'denyR',explore:['whoDid','rumorKid','teacherRu']},lunch:{talk:'teacherL',think:'fearTry',bond:'tellAmount',free1:'forceAll',strain:'swapFood',dark:'ignore',repTest:'hideFood',explore:['fearTry','teacherL','friendL']},lie:{talk:'lieKid',think:'scaredTell',bond:'writeSorry',free1:'shutMouth',strain:'blameOther',dark:'ignore',repTest:'biggerLie',explore:['scaredTell','lieKid','teacherLie']},relay:{talk:'captain',think:'teamPress',bond:'teamTalk',free1:'pushHard',strain:'dreadRun',dark:'ignore',repTest:'skipPractice',explore:['teamPress','captain','teacherRe']},sickDay:{talk:'friendSick',think:'shyAskS',bond:'noteKey',free1:'panicLate',strain:'copyOnly',dark:'ignore',repTest:'hideLate',explore:['shyAskS','friendSick','teacherSick']},craft:{talk:'teacherArt',think:'perfect',bond:'consultArt',free1:'throwAway',strain:'coverUp',dark:'ignore',repTest:'coverUp',explore:['perfect','teacherArt','friendArt']},vault:{talk:'coachAsk',think:'fearFall',bond:'askCoach',free1:'skipTurn',strain:'crash',dark:'ignore',repTest:'crash',explore:['fearFall','coachAsk','mateTogether']},meeting:{talk:'askOppose',think:'whyNo',bond:'askReason',free1:'withdraw',strain:'insist',dark:'ignore',repTest:'insist',explore:['whyNo','askOppose','allyTalk']},leader:{talk:'kidWhy',think:'orderBad',bond:'askWhyKid',free1:'ignoreKid',strain:'scoldKid',dark:'ignore',repTest:'scoldKid',explore:['orderBad','kidWhy','senpaiAsk']},late:{talk:'callFirst',think:'sleepy',bond:'callAhead',free1:'makeExcuse',strain:'rush',dark:'ignore',repTest:'rush',explore:['sleepy','callFirst','teacherHabit']},lostBook:{talk:'askLend',think:'forgotPlace',bond:'askFriends',free1:'hideBook',strain:'fakeReturn',dark:'ignore',repTest:'fakeReturn',explore:['forgotPlace','askLend','askLib']},seat:{talk:'oldTalk',think:'lonely',bond:'oldCall',free1:'ignoreNew',strain:'sulkSeat',dark:'ignore',repTest:'sulkSeat',explore:['wantOld','oldTalk','teacherSeat']}};
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){
 const s=initial(story),clueCount=s.clues.length,en=s.energy;
 assert(free(s,'observe'));assert(!free(s,'observe'));assert(s.clues.length>clueCount);
 assert(free(s,'pass'));assert(!free(s,'pass'));assert.equal(s.energy,Math.min(5,en+1));
 assert.equal(advance(s),false); // feedbackが無いので進めない
 s.mind=1;assert(!canExplore(s));
 const keys=MAP[story].talk;assert.equal(explore(s,keys),null);
 safety(s,'rest');assert(canExplore(s));assert(explore(s,keys));
 const s2=initial(story);s2.mind=1;assert(free(s2,'observe'));assert(free(s2,'pass'));assert(safety(s2,'rest'));// いつでも選べる作戦は気持ちがいっぱいでも使える
}
assert(!free(initial('fight'),'bogus'));

// 評判: 向社会的な行動で増え、一人でやる行動・自問では増えない（上限5）
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){
 const s=initial(story);assert.equal(s.rep,1);
 explore(s,MAP[story].talk);assert.equal(s.rep,2);
 explore(s,MAP[story].think);assert.equal(s.rep,2);
 s.energy=5;play(s,MAP[story].bond);assert.equal(s.rep,3);s.feedback=null;
 play(s,MAP[story].free1);assert.equal(s.rep,3);s.feedback=null;
}
{
 const s=initial('fight'),l=s.rep;
 assert(free(s,'observe'));assert.equal(s.rep,l+1);
 assert(free(s,'pass'));assert.equal(s.rep,l+1);
 const s2=initial('fight');assert(safety(s2,'help'));assert.equal(s2.rep,2);
 const s3=initial('fight');s3.rep=5;explore(s3,'mina');assert.equal(s3.rep,5);play(s3,'boundary');assert.equal(s3.rep,5);
}

// 精神力コストとマイナスカード（精神力1以下で手札がマイナス化）
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){
 const s=initial(story);assert(!canMinus(s));
 const strainId=MAP[story].strain;
 const before=s.mind;s.energy=5;assert(play(s,strainId));assert(s.mind<before);s.feedback=null;
 // 精神力1以下: ふだんのカードは出せず、マイナスカードだけ出せる
 s.mind=1;assert(!canPlay(s,available(s)[0]));assert(canMinus(s));
 const st=s.mind,rp=s.rep,socB=s.stats.soc,athB=s.stats.ath,stdB=s.stats.study;
 assert(minus(s,'grumble'));assert.equal(s.mind,st+2);assert.equal(s.rep,Math.max(0,rp-1));assert.equal(s.stats.soc,socB-1); // 文句は評判と社交性を下げる
 assert.equal(minus(s,'grumble'),null); // 場面ごと1回
 s.mind=1;assert(minus(s,'cry'));assert.equal(s.mind,3);assert(!canMinus(s)); // 回復したら手札が戻る
 s.mind=1;assert(minus(s,'skip'));assert.equal(s.mind,2);assert.equal(s.stats.ath,athB-1); // さぼるは運動能力を下げる
 s.mind=1;const l2=s.rep;assert(minus(s,'lash'));assert.equal(s.mind,4);assert.equal(s.rep,Math.max(0,l2-1));assert.equal(s.stats.soc,socB-2);
 s.mind=1;assert(minus(s,'fail'));assert.equal(s.mind,4);assert.equal(s.stats.study,stdB-1); // 失敗するはかしこさを下げる
 s.minused=[];s.mind=1;assert.equal(minus(s,'bogus'),null);assert(!minus(s,'sleep'));// 存在しないカード
 // 場面が変われば同じマイナスカードも再び使える
 s.feedback=null;s.mind=6;s.energy=5;const id0=available(s)[0];assert(play(s,id0));assert(advance(s));s.mind=1;assert(minus(s,'grumble'));
}
assert.equal(minus(initial('fight'),'vent'),null); // 精神力が足りていれば出せない

// モンスター戦闘: 攻撃・反撃・ターン上限・撃破・逃走
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){
 const s=initial(story),m=monster(s);
 assert.equal(s.monsterHp,m.hp);assert.equal(s.turns,0);
 // ダークカードは攻撃しないが、評判と社交性を下げて精神力を回復する
 const darkId=MAP[story].dark;
 s.mind=2;s.energy=5;const hp0=s.monsterHp;assert(play(s,darkId));
 assert.equal(s.monsterHp,hp0); // ダメージなし
 assert.equal(s.rep,0);assert.equal(s.stats.soc,-1);assert(s.mind>=1); // 反撃(power+評判0)を引いても楽になる分だけ残る
 assert.equal(s.feedback.dmg,0);
 s.feedback=null;
 // 評判0なら反撃が+1される（power>0の場面で、評判0と3を比較）
 const repTestId=MAP[story].repTest;
 const lo=initial(story),hi=initial(story);
 for(const q of [lo,hi]){q.stage=1;q.monsterHp=99;q.turns=0;q.mind=4;q.energy=5}
 lo.rep=0;hi.rep=3;
 assert(play(lo,repTestId));assert(play(hi,repTestId));
 assert.equal(lo.feedback.mdmg,monster(lo).power+1);
 assert.equal(hi.feedback.mdmg,monster(hi).power);
 // カードの攻撃でモンスターにダメージが入る
 const atkS=initial(story);atkS.energy=5;atkS.mind=6;
 const atkId=available(atkS).find(x=>cardAtk(atkS,x)>0);assert(atkId);
 const hpB=atkS.monsterHp;assert(play(atkS,atkId));assert.equal(atkS.monsterHp,hpB-atkS.feedback.dmg);assert(atkS.feedback.dmg>0);
 // ターン上限: 尽きるとモンスターは立ち去る（escaped）
 s.stage=0;s.monsterHp=99;s.turns=monster(s).turns;s.mind=6;s.feedback=null;
 const atk2=available(s).find(x=>canPlay(s,x));assert(play(s,atk2));assert(s.feedback.escaped);assert(!s.feedback.killed);
 advance(s);assert(s.escaped.includes(0));assert(s.slain.length===0);
}
// ターン上限と撃破の進行を直接確認
{
 const s=initial('test');s.energy=5;s.mind=6;
 // 不安の影 hp3: range(atk1+study)+easyFirst(atk2+study)で撃破可能
 explore(s,'gaps');s.feedback=null;
 play(s,'easyFirst');const f1=s.feedback;
 assert(f1.dmg>=2||f1.killed||s.monsterHp<3);
 if(!f1.killed){s.feedback=null;play(s,'range')}
 const f=s.feedback;assert(f.killed||f.escaped||s.monsterHp<=0);
 advance(s);assert(s.slain.includes(0)||s.escaped.includes(0));assert.equal(s.stage,1);assert.equal(s.turns,0);assert.equal(s.monsterHp,monster(s).hp);
 // ターンを尽きさせると escaped
 s.mind=6;s.energy=5;
 while(!s.finished&&monster(s)&&s.turns<monster(s).turns){const id=available(s).find(x=>canPlay(s,x));if(!id)break;s.feedback=null;play(s,id)}
 if(!s.finished){advance(s)}
 // 大失敗: 精神力0でfinished（mind2でstrain1+effect-1=0になるboundaryを撃つ）
 const f2=initial('fight');f2.mind=2;f2.energy=5;f2.stage=1;f2.monsterHp=99;f2.turns=0;
 assert(play(f2,'boundary'));assert(f2.dead);assert(f2.finished);assert.equal(summary(f2).outcome,'fail');
}
// 精神力の平均が低いと「しんどい」評価が出る
{
 const s=initial('test');s.mind=1;s.mindLog=[1,1,2,1];s.finished=true;
 const r=summary(s);assert(r.lowMind);assert.equal(r.outcome,'survived');
 const s2=initial('test');s2.mindLog=[5,5,5,5,6];s2.finished=true;
 const r2=summary(s2);assert(!r2.lowMind);assert(r2.tier);
}
// カードの攻撃力はバフで上下する
{
 const s=initial('test');const baseAtk=cardAtk(s,'easyFirst');assert.equal(baseAtk,2);
 s.stats.study=1;assert.equal(cardAtk(s,'easyFirst'),3);
 s.stats.study=-2;assert.equal(cardAtk(s,'easyFirst'),0); // 下限0
 s.stats.study=0;play(s,'easyFirst');assert.equal(s.stats.study,1); // up: 試すと育つ
}
// ランダムイベントが発動する場合の効果
Math.random=()=>0.1;
{
 const s=initial('fight');s.energy=5;s.mind=5;play(s,'boundary');advance(s);
 assert(s.bonus); // おまけイベントが発動した
}
Math.random=origRandom;

let explored=0;function walk(s,depth){assert(s.mind>=0&&s.mind<=6);assert(s.energy>=0&&s.energy<=5);assert(s.progress>=0&&s.progress<=3);assert(s.rep>=0&&s.rep<=5);for(const k of ['study','ath','soc'])assert(s.stats[k]>=-2&&s.stats[k]<=2);assert(s.monsterHp>=-20);if(depth===0||s.finished)return;const ids=available(s).filter(id=>canPlay(s,id));for(const id of ids){const t=structuredClone(s);assert(play(t,id));assert(t.feedback.text.length>0,id);advance(t);explored++;walk(t,depth-1)}}
Math.random=()=>0.99;
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat','newClass','present','spill','pair','promise','duty','rumor','lunch','lie','relay','sickDay','craft','vault','meeting','leader','late','lostBook','seat']){for(const goal of [0,1,2]){const s=initial(story);setGoal(s,goal);for(const k of MAP[story].explore)explore(s,k);s.energy=5;s.mind=6;walk(s,3)}}
Math.random=origRandom;
console.log('PASS: branches, context-sensitive outcomes, monster battle, dark/minus cards, buffs, safety, resource bounds; explored',explored,'moves');
let va=initial('vault');assert.equal(va.mind,5);explore(va,'fearFall');assert(available(va).includes('handsFirst'));va.energy=5;play(va,'handsFirst');assert(va.flags.practiced);va.feedback=null;va.mind=5;va.stage=2;va.hand.push('clearJump');play(va,'clearJump');assert(va.flags.cleared); // 手つき練習→跳び越え
let va2=initial('vault');va2.energy=5;play(va2,'skipTurn');assert(va2.flags.skipped);assert(available(va2).includes('askCoach')); // やり過ごし→コツ聞きへ
let va3=initial('vault');va3.energy=5;va3.hand.push('bigTry');play(va3,'bigTry');assert(va3.mind<5);assert(available(va3).includes('splitJump')); // 素地なし跳びは空回り
let va4=initial('vault');explore(va4,'mateTogether');va4.energy=5;play(va4,'together');assert(va4.flags.practiced);va4.feedback=null;va4.mind=5;va4.stage=2;va4.hand.push('bigTry');play(va4,'bigTry');assert(va4.flags.bigJumped); // 一緒に練習→思いっきり
let mt=initial('meeting');explore(mt,'whyNo');assert(available(mt).includes('listenMore'));mt.energy=5;play(mt,'listenMore');assert(mt.flags.heard);mt.feedback=null;mt.mind=5;mt.stage=2;mt.hand.push('rePropose');play(mt,'rePropose');assert(mt.flags.reProposed); // 聞く→再提案
let mt2=initial('meeting');mt2.energy=5;play(mt2,'insist');assert(mt2.flags.insisted&&mt2.rep===0);assert(available(mt2).includes('listenMore')); // 言い張り→聞くへ
let mt3=initial('meeting');mt3.energy=5;mt3.hand.push('rePropose');play(mt3,'rePropose');assert(mt3.mind<5);assert(available(mt3).includes('listenMore')); // 素地なし提案は空回り
let mt4=initial('meeting');explore(mt4,'badWords');mt4.energy=5;play(mt4,'soften');assert(mt4.flags.softened);mt4.feedback=null;mt4.mind=5;mt4.stage=2;mt4.hand.push('acceptNo');play(mt4,'acceptNo');assert(mt4.flags.accepted); // 言い方→受け入れも結末
let ld=initial('leader');explore(ld,'kidWhy');assert(available(ld).includes('askWhyKid'));ld.energy=5;play(ld,'askWhyKid');assert(ld.flags.heardK);ld.feedback=null;ld.mind=5;ld.stage=2;ld.hand.push('tryLead');play(ld,'tryLead');assert(ld.flags.led); // 聞く→まとめる
let ld2=initial('leader');ld2.energy=5;play(ld2,'scoldKid');assert(ld2.flags.scolded&&ld2.rep===0);assert(available(ld2).includes('askWhyKid')); // 叱る→聞くへ
let ld3=initial('leader');ld3.energy=5;ld3.hand.push('tryLead');play(ld3,'tryLead');assert(ld3.mind<5);assert(available(ld3).includes('askWhyKid')); // 素地なしまとめは空回り
let ld4=initial('leader');explore(ld4,'senpaiAsk');ld4.energy=5;play(ld4,'letKid');assert(ld4.flags.delegated);ld4.feedback=null;ld4.mind=5;ld4.stage=2;ld4.hand.push('leadWay');play(ld4,'leadWay');assert(ld4.flags.united); // 任せる→まとまる
let lt=initial('late');explore(lt,'sleepy');assert(available(lt).includes('earlyNight'));lt.energy=5;play(lt,'earlyNight');assert(lt.flags.prepared);lt.feedback=null;lt.mind=5;lt.stage=2;lt.hand.push('newHabit');play(lt,'newHabit');assert(lt.flags.habit); // 前日準備→習慣
let lt2=initial('late');lt2.energy=5;play(lt2,'rush');assert(lt2.flags.rushed);assert(available(lt2).includes('calmWalk')); // あわて→落ち着きへ
let lt3=initial('late');lt3.energy=5;lt3.hand.push('arriveCalm');play(lt3,'arriveCalm');assert(lt3.mind<5);assert(available(lt3).includes('calmWalk')); // 素地なし登校は空回り
let lt4=initial('late');explore(lt4,'callFirst');lt4.energy=5;play(lt4,'callAhead');assert(lt4.flags.told);lt4.feedback=null;lt4.mind=5;lt4.stage=2;lt4.hand.push('arriveCalm');play(lt4,'arriveCalm');assert(lt4.flags.arrived); // 連絡→落ち着いて登校
let lb=initial('lostBook');explore(lb,'forgotPlace');assert(available(lb).includes('checkBag'));lb.energy=5;play(lb,'checkBag');assert(lb.flags.searched);lb.feedback=null;lb.mind=5;lb.stage=2;lb.hand.push('foundIt');play(lb,'foundIt');assert(lb.flags.found); // カバン→見つかった
let lb2=initial('lostBook');lb2.energy=5;play(lb2,'fakeReturn');assert(lb2.flags.faked&&lb2.rep===0);assert(available(lb2).includes('tellLost')); // ふり→正直へ
let lb3=initial('lostBook');lb3.energy=5;lb3.hand.push('ownUp');play(lb3,'ownUp');assert(lb3.mind<5);assert(available(lb3).includes('tellLost')); // 素地なし詫びは空回り
let lb4=initial('lostBook');explore(lb4,'askLib');assert(available(lb4).includes('tellLost'));lb4.energy=5;play(lb4,'tellLost');assert(lb4.flags.told);lb4.feedback=null;lb4.mind=5;lb4.stage=2;lb4.hand.push('ownUp');play(lb4,'ownUp');assert(lb4.flags.owned); // 相談→詫びる
let st=initial('seat');explore(st,'wantOld');assert(available(st).includes('meetBreak'));st.energy=5;play(st,'meetBreak');assert(st.flags.meetPlanned);st.feedback=null;st.mind=5;st.stage=2;st.hand.push('keepBond');play(st,'keepBond');assert(st.flags.bondKept); // 約束→仲良しのまま
let st2=initial('seat');st2.energy=5;play(st2,'sulkSeat');assert(st2.flags.sulked);assert(available(st2).includes('meetBreak')); // 文句→約束へ
let st3=initial('seat');st3.energy=5;st3.hand.push('smileSeat');play(st3,'smileSeat');assert(st3.mind<5);assert(available(st3).includes('newFriend')); // 素地なし楽しむは空回り
let st4=initial('seat');explore(st4,'teacherSeat');assert(available(st4).includes('seatPlan'));st4.energy=5;play(st4,'seatPlan');assert(st4.flags.plannedS);st4.feedback=null;st4.mind=5;st4.stage=2;st4.hand.push('keepBond');play(st4,'keepBond');assert(st4.flags.bondKept); // 作戦→仲良しのまま
