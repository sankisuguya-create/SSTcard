import assert from 'node:assert/strict';
import {initial,explore,play,advance,safety,available,canPlay,canExplore,canMinus,free,minus,setGoal,summary,monster,cardAtk,stories} from './dist/engine.mjs';
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
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){const s=initial(story);s.energy=0;s.mind=0;s.finished=true;const t=initial(story);assert(safety(t,'rest'));const e=t.energy;assert(!safety(t,'rest'));assert.equal(t.energy,e);assert(!play(t,'not-a-card'));assert(!setGoal(t,9));}

// いつでも選べる作戦（カード不要・場面ごとに1回）と、気持ちがいっぱい時の相談不可
const MAP={fight:{talk:'haru',think:'why',bond:'ask',free1:'distance',strain:'boundary',dark:'anger',repTest:'distance',explore:['haru','mina','why','respect','feeling']},sports:{talk:'teacher',think:'movement',bond:'schedule',free1:'practice',strain:'practice',dark:'anger',repTest:'practice',explore:['noise','teacher','friend']},test:{talk:'teacherT',think:'gaps',bond:'range',free1:'breathe',strain:'easyFirst',dark:'ignore',repTest:'easyFirst',explore:['gaps','teacherT','kei']},join:{talk:'teacherJ',think:'fear',bond:'peekJoin',free1:'soloPlay',strain:'peekJoin',dark:'anger',repTest:'watchPlay',explore:['fear','teacherJ','friend2']},blame:{talk:'teacherB',think:'panicB',bond:'deny',free1:'stay',strain:'deny',dark:'anger',repTest:'stay',explore:['panicB','teacherB','eye']},hurt:{talk:'friendC',think:'sting',bond:'sayStop',free1:'walkAway',strain:'sayStop',dark:'boast',repTest:'walkAway',explore:['sting','friendC','teacherC']},alone:{talk:'teacherD',think:'noWords',bond:'politeNo',free1:'runOff',strain:'politeNo',dark:'ignore',repTest:'runOff',explore:['noWords','teacherD','friendD']},lose:{talk:'teacherE',think:'face',bond:'praiseWin',free1:'quitGame',strain:'rematch',dark:'boast',repTest:'quitGame',explore:['frustrate','teacherE','winnerS']},change:{talk:'teacherP',think:'unfair',bond:'whyAsk',free1:'acceptQuick',strain:'complain',dark:'anger',repTest:'acceptQuick',explore:['unfair','teacherP','chikaF']},picked:{talk:'teacherH',think:'unfairPick',bond:'pickRule',free1:'bigSigh',strain:'keepHand',dark:'ignore',repTest:'bigSigh',explore:['unfairPick','teacherH','pickedKid']},item:{talk:'teacherI',think:'shy',bond:'sayMine',free1:'keepQuiet',strain:'takeBack',dark:'anger',repTest:'keepQuiet',explore:['shy','teacherI','kenB']},scold:{talk:'teacherS',think:'notMe',bond:'saySorry',free1:'goQuiet',strain:'backTalk',dark:'anger',repTest:'goQuiet',explore:['notMe','teacherS','friendS']},forgot:{talk:'teacherF',think:'lateForgot',bond:'tellTruth',free1:'panicF',strain:'excuse',dark:'ignore',repTest:'panicF',explore:['lateForgot','teacherF','friendF']},friend:{talk:'teacherG',think:'worry',bond:'cheerUp',free1:'watchFar',strain:'cheerUp',dark:'ignore',repTest:'watchFar',explore:['worry','teacherG','keiG']},confused:{talk:'teacherQ',think:'shyQ',bond:'handUp',free1:'stare',strain:'guess',dark:'ignore',repTest:'stare',explore:['shyQ','teacherQ','friendQ']},noise:{talk:'teacherN',think:'ears',bond:'sayLoud',free1:'plugEars',strain:'shout',dark:'ignore',repTest:'plugEars',explore:['ears','teacherN','friendN']},role:{talk:'teacherR',think:'unfairR',bond:'askHow2',free1:'dragFeet',strain:'sulkR',dark:'anger',repTest:'dragFeet',explore:['sad','teacherR','pickedOne']},cheat:{talk:'teacherX',think:'tellWhom',bond:'tellFair',free1:'glare',strain:'spread',dark:'ignore',repTest:'glare',explore:['tellWhom','teacherX','friendX']}};
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){
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
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){
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
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){
 const s=initial(story);assert(!canMinus(s));
 const strainId=MAP[story].strain;
 const before=s.mind;s.energy=5;assert(play(s,strainId));assert(s.mind<before);s.feedback=null;
 // 精神力1以下: ふだんのカードは出せず、マイナスカードだけ出せる
 s.mind=1;assert(!canPlay(s,available(s)[0]));assert(canMinus(s));
 const st=s.mind,rp=s.rep,socB=s.stats.soc,athB=s.stats.ath,stdB=s.stats.study;
 assert(minus(s,'vent'));assert.equal(s.mind,st+2);assert.equal(s.rep,Math.max(0,rp-1));assert.equal(s.stats.soc,socB-1); // 文句は評判と社交性を下げる
 assert.equal(minus(s,'vent'),null); // 場面ごと1回
 s.mind=1;assert(minus(s,'cry'));assert.equal(s.mind,3);assert(!canMinus(s)); // 回復したら手札が戻る
 s.mind=1;assert(minus(s,'skip'));assert.equal(s.mind,2);assert.equal(s.stats.ath,athB-1); // さぼるは運動能力を下げる
 s.mind=1;const l2=s.rep;assert(minus(s,'lash'));assert.equal(s.mind,4);assert.equal(s.rep,Math.max(0,l2-1));assert.equal(s.stats.soc,socB-2);
 s.mind=1;assert(minus(s,'fail'));assert.equal(s.mind,4);assert.equal(s.stats.study,stdB-1); // 失敗するはかしこさを下げる
 s.minused=[];s.mind=1;assert.equal(minus(s,'bogus'),null);assert(!minus(s,'sleep'));// 存在しないカード
 // 場面が変われば同じマイナスカードも再び使える
 s.feedback=null;s.mind=6;s.energy=5;const id0=available(s)[0];assert(play(s,id0));assert(advance(s));s.mind=1;assert(minus(s,'vent'));
}
assert.equal(minus(initial('fight'),'vent'),null); // 精神力が足りていれば出せない

// モンスター戦闘: 攻撃・反撃・ターン上限・撃破・逃走
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){
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
for(const story of ['fight','sports','test','join','blame','hurt','alone','lose','change','picked','item','scold','forgot','friend','confused','noise','role','cheat']){for(const goal of [0,1,2]){const s=initial(story);setGoal(s,goal);for(const k of MAP[story].explore)explore(s,k);s.energy=5;s.mind=6;walk(s,3)}}
Math.random=origRandom;
console.log('PASS: branches, context-sensitive outcomes, monster battle, dark/minus cards, buffs, safety, resource bounds; explored',explored,'moves');
