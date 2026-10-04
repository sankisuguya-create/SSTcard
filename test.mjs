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
for(const story of ['fight','sports','test','join','blame','hurt']){const s=initial(story);s.energy=0;s.mind=0;s.finished=true;const t=initial(story);assert(safety(t,'rest'));const e=t.energy;assert(!safety(t,'rest'));assert.equal(t.energy,e);assert(!play(t,'not-a-card'));assert(!setGoal(t,9));}

// いつでも選べる作戦（カード不要・場面ごとに1回）と、気持ちがいっぱい時の相談不可
const MAP={fight:{talk:'haru',think:'why',bond:'ask',free1:'distance',strain:'boundary',dark:'anger',repTest:'distance',explore:['haru','mina','why','respect','feeling']},sports:{talk:'teacher',think:'movement',bond:'schedule',free1:'practice',strain:'practice',dark:'anger',repTest:'practice',explore:['noise','teacher','friend']},test:{talk:'teacherT',think:'gaps',bond:'range',free1:'breathe',strain:'easyFirst',dark:'ignore',repTest:'easyFirst',explore:['gaps','teacherT','kei']},join:{talk:'teacherJ',think:'fear',bond:'peekJoin',free1:'soloPlay',strain:'peekJoin',dark:'anger',repTest:'watchPlay',explore:['fear','teacherJ','friend2']},blame:{talk:'teacherB',think:'panicB',bond:'deny',free1:'stay',strain:'deny',dark:'anger',repTest:'stay',explore:['panicB','teacherB','eye']},hurt:{talk:'friendC',think:'sting',bond:'sayStop',free1:'walkAway',strain:'sayStop',dark:'boast',repTest:'walkAway',explore:['sting','friendC','teacherC']}};
for(const story of ['fight','sports','test','join','blame','hurt']){
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
for(const story of ['fight','sports','test','join','blame','hurt']){
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
for(const story of ['fight','sports','test','join','blame','hurt']){
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
for(const story of ['fight','sports','test','join','blame','hurt']){
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
for(const story of ['fight','sports','test','join','blame','hurt']){for(const goal of [0,1,2]){const s=initial(story);setGoal(s,goal);for(const k of MAP[story].explore)explore(s,k);s.energy=5;s.mind=6;walk(s,3)}}
Math.random=origRandom;
console.log('PASS: branches, context-sensitive outcomes, monster battle, dark/minus cards, buffs, safety, resource bounds; explored',explored,'moves');
