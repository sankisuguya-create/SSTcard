import assert from 'node:assert/strict';
import {initial,explore,play,advance,safety,available,canPlay,canExplore,free,setGoal,summary} from './dist/engine.mjs';
let a=initial('fight');explore(a,'haru');assert(available(a).includes('relocate'));assert.equal(explore(a,'haru'),null);play(a,'boundary');assert(a.flags.boundary);advance(a);safety(a,'rest');explore(a,'respect');play(a,'promise');advance(a);assert(a.flags.promise);safety(a,'rest');play(a,'relocate');advance(a);assert(a.finished);assert(a.flags.fixed);assert(summary(a).relation.includes('約束'));
let b=initial('sports');explore(b,'movement');const c=initial('sports');explore(c,'noise');play(b,'practice');play(c,'practice');assert(b.stress<c.stress);assert(b.flags.practiced);advance(c);explore(c,'teacher');safety(c,'rest');play(c,'place');advance(c);play(c,'adjust');advance(c);assert(c.finished);assert(c.flags.adjusted);
for(const story of ['fight','sports']){const s=initial(story);s.energy=0;s.stress=6;assert(safety(s,'help'));assert(s.finished);const t=initial(story);assert(safety(t,'rest'));const e=t.energy;assert(!safety(t,'rest'));assert.equal(t.energy,e);assert(!play(t,'not-a-card'));assert(!setGoal(t,9));}

// いつでも選べる作戦（カード不要・場面ごとに1回）と、気持ちがいっぱい時の相談不可
for(const story of ['fight','sports']){
 const s=initial(story),clueCount=s.clues.length,en=s.energy;
 assert(free(s,'observe'));assert(!free(s,'observe'));assert(s.clues.length>clueCount);
 assert(free(s,'pass'));assert(!free(s,'pass'));assert.equal(s.energy,Math.min(5,en+1));
 assert.equal(advance(s),false); // feedbackが無いので進めない
 s.stress=5;assert(!canExplore(s));
 const keys=story==='fight'?'haru':'teacher';assert.equal(explore(s,keys),null);
 safety(s,'rest');assert(canExplore(s));assert(explore(s,keys));
 const s2=initial(story);s2.stress=5;assert(free(s2,'observe'));assert(free(s2,'pass'));assert(safety(s2,'rest'));// いつでも選べる作戦は気持ちがいっぱいでも使える
}
assert(!free(initial('fight'),'bogus'));

// いいなと思う人: 向社会的な行動で増え、一人でやる行動・自問では増えない（上限5）
for(const story of ['fight','sports']){
 const s=initial(story);assert.equal(s.liked,1);
 explore(s,story==='fight'?'haru':'teacher');assert.equal(s.liked,2);
 explore(s,story==='fight'?'why':'movement');assert.equal(s.liked,2);
 s.energy=5;play(s,story==='fight'?'ask':'schedule');assert.equal(s.liked,3);s.feedback=null;
 play(s,story==='fight'?'distance':'practice');assert.equal(s.liked,3);s.feedback=null;
}
{
 const s=initial('fight'),l=s.liked;
 assert(free(s,'observe'));assert.equal(s.liked,l+1);
 assert(free(s,'pass'));assert.equal(s.liked,l+1);
 const s2=initial('fight');assert(safety(s2,'help'));assert.equal(s2.liked,2);
 const s3=initial('fight');s3.liked=5;explore(s3,'mina');assert.equal(s3.liked,5);play(s3,'boundary');assert.equal(s3.liked,5);
}
let explored=0;function walk(s,depth){assert(s.stress>=0&&s.stress<=6);assert(s.energy>=0&&s.energy<=5);assert(s.progress>=0&&s.progress<=3);assert(s.liked>=0&&s.liked<=5);if(depth===0||s.finished)return;const ids=available(s).filter(id=>canPlay(s,id));for(const id of ids){const t=structuredClone(s);assert(play(t,id));assert(t.feedback.text.length>0,id);advance(t);explored++;walk(t,depth-1)}}for(const story of ['fight','sports']){for(const goal of [0,1,2]){const s=initial(story);setGoal(s,goal);if(story==='fight'){for(const k of ['haru','mina','why','respect','feeling'])explore(s,k)}else{explore(s,'noise');explore(s,'teacher');explore(s,'friend')}s.energy=5;walk(s,3)}}console.log('PASS: branches, context-sensitive outcomes, safety, resource bounds; explored',explored,'moves');
