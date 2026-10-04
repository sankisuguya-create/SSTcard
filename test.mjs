import assert from 'node:assert/strict';
import {initial,explore,play,advance,safety,available,canPlay,canExplore,canMinus,free,minus,setGoal,summary} from './dist/engine.mjs';
let a=initial('fight');explore(a,'haru');assert(available(a).includes('relocate'));assert.equal(explore(a,'haru'),null);play(a,'boundary');assert(a.flags.boundary);advance(a);safety(a,'rest');explore(a,'respect');play(a,'promise');advance(a);assert(a.flags.promise);safety(a,'rest');play(a,'relocate');advance(a);assert(a.finished);assert(a.flags.fixed);assert(summary(a).relation.includes('約束'));
let b=initial('sports');explore(b,'movement');const c=initial('sports');explore(c,'noise');play(b,'practice');play(c,'practice');assert(b.stress<c.stress);assert(b.flags.practiced);advance(c);safety(c,'rest');explore(c,'teacher');play(c,'place');advance(c);play(c,'adjust');advance(c);assert(c.finished);assert(c.flags.adjusted);
let d=initial('test');assert.equal(d.stress,1);assert.equal(d.energy,4);explore(d,'teacherT');assert(available(d).includes('mistakes'));assert(available(d).includes('goodnight'));assert.equal(d.liked,2);explore(d,'gaps');assert.equal(explore(d,'panic'),null);play(d,'range');assert(available(d).includes('plan'));advance(d);safety(d,'rest');play(d,'mistakes');advance(d);play(d,'takeTest');advance(d);assert(d.finished);assert(d.flags.tested);assert(summary(d).situation.includes('取り組んだ'));
for(const story of ['fight','sports','test']){const s=initial(story);s.energy=0;s.stress=6;assert(safety(s,'help'));assert(s.finished);const t=initial(story);assert(safety(t,'rest'));const e=t.energy;assert(!safety(t,'rest'));assert.equal(t.energy,e);assert(!play(t,'not-a-card'));assert(!setGoal(t,9));}

// いつでも選べる作戦（カード不要・場面ごとに1回）と、気持ちがいっぱい時の相談不可
for(const story of ['fight','sports','test']){
 const s=initial(story),clueCount=s.clues.length,en=s.energy;
 assert(free(s,'observe'));assert(!free(s,'observe'));assert(s.clues.length>clueCount);
 assert(free(s,'pass'));assert(!free(s,'pass'));assert.equal(s.energy,Math.min(5,en+1));
 assert.equal(advance(s),false); // feedbackが無いので進めない
 s.stress=5;assert(!canExplore(s));
 const keys=story==='fight'?'haru':story==='sports'?'teacher':'teacherT';assert.equal(explore(s,keys),null);
 safety(s,'rest');assert(canExplore(s));assert(explore(s,keys));
 const s2=initial(story);s2.stress=5;assert(free(s2,'observe'));assert(free(s2,'pass'));assert(safety(s2,'rest'));// いつでも選べる作戦は気持ちがいっぱいでも使える
}
assert(!free(initial('fight'),'bogus'));

// いいなと思う人: 向社会的な行動で増え、一人でやる行動・自問では増えない（上限5）
for(const story of ['fight','sports','test']){
 const s=initial(story);assert.equal(s.liked,1);
 explore(s,story==='fight'?'haru':story==='sports'?'teacher':'teacherT');assert.equal(s.liked,2);
 explore(s,story==='fight'?'why':story==='sports'?'movement':'gaps');assert.equal(s.liked,2);
 s.energy=5;play(s,story==='fight'?'ask':story==='sports'?'schedule':'range');assert.equal(s.liked,3);s.feedback=null;
 play(s,story==='fight'?'distance':story==='sports'?'practice':'breathe');assert.equal(s.liked,3);s.feedback=null;
}
{
 const s=initial('fight'),l=s.liked;
 assert(free(s,'observe'));assert.equal(s.liked,l+1);
 assert(free(s,'pass'));assert.equal(s.liked,l+1);
 const s2=initial('fight');assert(safety(s2,'help'));assert.equal(s2.liked,2);
 const s3=initial('fight');s3.liked=5;explore(s3,'mina');assert.equal(s3.liked,5);play(s3,'boundary');assert.equal(s3.liked,5);
}

// ストレスコストとマイナスカード（ストレス5以上で手札がマイナス化）
for(const story of ['fight','sports','test']){
 const s=initial(story);assert(!canMinus(s));
 const strainId=story==='fight'?'boundary':story==='sports'?'practice':'easyFirst';
 const before=s.stress;s.energy=5;assert(play(s,strainId));assert(s.stress>before);s.feedback=null;
 // ストレス5以上: ふだんのカードは出せず、マイナスカードだけ出せる
 s.stress=5;assert(!canPlay(s,available(s)[0]));assert(canMinus(s));
 const st=s.stress,lk=s.liked;
 assert(minus(s,'vent'));assert.equal(s.stress,st-2);assert.equal(s.liked,Math.max(0,lk-1));
 assert.equal(minus(s,'vent'),null); // 場面ごと1回
 s.stress=5;assert(minus(s,'cry'));assert.equal(s.stress,3);assert(!canMinus(s)); // 回復したら手札が戻る
 s.stress=5;assert(minus(s,'skip'));assert.equal(s.stress,4);
 s.stress=5;const l2=s.liked;assert(minus(s,'lash'));assert.equal(s.stress,2);assert.equal(s.liked,Math.max(0,l2-1));
 s.stress=5;assert(minus(s,'fail'));assert.equal(s.stress,2);
 s.minused=[];s.stress=5;assert.equal(minus(s,'bogus'),null);assert(!minus(s,'sleep'));// 存在しないカード
 // 場面が変われば同じマイナスカードも再び使える
 s.feedback=null;s.stress=0;s.energy=5;const id0=available(s)[0];assert(play(s,id0));assert(advance(s));s.stress=5;assert(minus(s,'vent'));
}
assert.equal(minus(initial('fight'),'vent'),null); // ストレス5未満では出せない
let explored=0;function walk(s,depth){assert(s.stress>=0&&s.stress<=6);assert(s.energy>=0&&s.energy<=5);assert(s.progress>=0&&s.progress<=3);assert(s.liked>=0&&s.liked<=5);if(depth===0||s.finished)return;const ids=available(s).filter(id=>canPlay(s,id));for(const id of ids){const t=structuredClone(s);assert(play(t,id));assert(t.feedback.text.length>0,id);advance(t);explored++;walk(t,depth-1)}}for(const story of ['fight','sports','test']){for(const goal of [0,1,2]){const s=initial(story);setGoal(s,goal);if(story==='fight'){for(const k of ['haru','mina','why','respect','feeling'])explore(s,k)}else if(story==='sports'){explore(s,'noise');explore(s,'teacher');explore(s,'friend')}else{explore(s,'gaps');explore(s,'teacherT');explore(s,'kei')}s.energy=5;walk(s,3)}}console.log('PASS: branches, context-sensitive outcomes, safety, resource bounds; explored',explored,'moves');
