import {cards,minusCards,stories,initial,explore,available,canPlay,canExplore,canMinus,play,advance,safety,free,minus,scene,summary,setGoal} from './engine.mjs';
const app=document.querySelector('#app'),dialog=document.querySelector('#dialog');
let state=initial(),history=[],previous=null,focusReturn=null;
const sessions={};

const paths={
 cards:'M4 7h12v14H4z M9 3h11v14',
 message:'M21 11a8 8 0 0 1-8 8H6l-4 3V7a5 5 0 0 1 5-5h9a5 5 0 0 1 5 5z M7 8h9 M7 12h6',
 search:'M20 20l-5-5 M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
 door:'M13 3H4v18h9 M13 12h9 M18 8l4 4-4 4',
 puzzle:'M4 4h6a2 2 0 1 0 4 0h6v6a2 2 0 1 0 0 4v6h-6a2 2 0 1 0-4 0H4v-6a2 2 0 1 0 0-4z',
 heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z',
 hand:'M8 12V5a2 2 0 0 1 4 0v7 M12 8a2 2 0 0 1 4 0v5 M16 10a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-3l-4-6a2 2 0 0 1 3-2l2 2',
 people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M13 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M17 3a4 4 0 0 1 0 8 M22 21v-2a4 4 0 0 0-3-3.9',
 clock:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0 M12 6v6l4 2',
 flag:'M4 22V3 M4 3c5-4 10 4 16 0v10c-6 4-11-4-16 0',
 book:'M3 3h7a3 3 0 0 1 3 3v16a4 4 0 0 0-4-2H3z M13 6a3 3 0 0 1 3-3h6v17h-5a4 4 0 0 0-4 2',
 spark:'M12 2l2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7z',
 pause:'M8 4v16 M16 4v16',
 undo:'M3 9h11a7 7 0 0 1 0 14 M3 9l5-5 M3 9l5 5',
 close:'M6 6l12 12 M18 6L6 18',
 check:'M4 12l5 5L20 6',
 sun:'M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 eye:'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
 bolt:'M13 2 4 14h6l-1 8 9-12h-6l1-8z'
};
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.cards}"/></svg>`;
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const snapshot=()=>history.push(structuredClone(state));
function announce(t){document.querySelector('#announce').textContent=t}
function close(){dialog.close();focusReturn?.focus()}
function modal(title,body){
 if(!dialog.open)focusReturn=document.activeElement;
 dialog.innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${title}</h2><button class="quiet small" data-action="close" aria-label="閉じる">${icon('close')}</button></div>${body}`;
 if(!dialog.open)dialog.showModal();
}
dialog.addEventListener('cancel',()=>focusReturn?.focus());

function pip(ic,label,val,max,title){
 return `<span class="res" title="${title}"><span class="res-label">${icon(ic)} ${label}</span><span class="pips" role="meter" aria-label="${label} ${val} / ${max}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${val}">${Array.from({length:max},(_,i)=>`<i class="${i<val?'on':''}">${icon(ic)}</i>`).join('')}</span><strong class="res-num">${val}<span class="muted"> / ${max}</span></strong></span>`;
}

function render(){
 const s=state,st=stories[s.story];
 app.innerHTML=`<header class="app-header"><div class="brand"><div class="brand-mark">${icon('cards')}</div><div><div class="brand-name">こころの作戦カード</div><div class="eyebrow">KOKORO CARDS</div></div></div><div class="row"><span class="badge header-note">体験モック</span><button class="quiet small" data-action="guide">${icon('book')}<span class="header-note"> あそびかた</span></button></div></header>
 <div class="layout"><aside>
  <div class="side-label">STORIES ／ おはなし</div>
  <nav class="story-nav" aria-label="ストーリー">${Object.entries(stories).map(([id,t])=>`<button class="story-button ${s.story===id?'selected':''}" data-action="story" data-id="${id}" aria-pressed="${s.story===id}"><span class="story-number">STORY ${t.num}</span><strong>${t.nav}</strong><span>3つの場面 ・ 約5分</span></button>`).join('')}</nav>
  <div class="side-section goal-section"><div><div class="side-label">今回、大切にしたいこと</div><p class="goal-value">${st.goals[s.goal]}</p><div class="goal-pips" role="meter" aria-label="目的の進み具合 ${s.progress} / 3" aria-valuemin="0" aria-valuemax="3" aria-valuenow="${s.progress}">${[0,1,2].map(i=>`<i class="${i<s.progress?'on':''}"></i>`).join('')}</div></div><button class="small quiet" data-action="goal" ${s.finished||s.feedback?'disabled':''}>目的を変える</button><p class="side-note">何を大切にするかで、<br>作戦の使いどころも変わる。</p></div>
  <div class="side-section notebook-section"><div class="side-label">見つけたこと</div><button class="notebook-button" data-action="notebook">${icon('book')}<span>作戦ノート</span><span class="count">${s.discovered.length}</span></button></div>
  <div class="side-footer">「話す」「考える」で手札が増える。<br>自分に合う作戦を試してみよう。<br><br>数値はおはなしの中の状態です。<br>あなた自身の成績ではありません。</div>
 </aside><main id="main">${s.finished?resultView():playView()}</main></div>`;
}

function playView(){
 const s=state,st=stories[s.story],sc=scene(s),busy=!!s.feedback,calm=canExplore(s);
 return `
 <div class="title-row"><div><div class="chapter-label">STORY ${st.num} ／ ${st.chapters[s.stage]}</div><h1>${st.title}</h1></div><div class="steps" aria-label="場面 ${s.stage+1} / 3">${[0,1,2].map(n=>`${n?'<span class="step-line"></span>':''}<span class="step ${n===s.stage?'current':n<s.stage?'done':''}">${n<s.stage?'✓':n+1}</span>`).join('')}</div></div>
 <div class="play-grid">
  <section class="board" aria-label="今の場面">
   <div class="board-header"><span class="row">${icon(s.story==='fight'?'puzzle':'flag')}${st.locations[s.stage]}</span><span class="badge">場面 ${s.stage+1} / 3</span></div>
   <div class="scene-body">
    <div class="story-flow">
     <p class="narrative">${sc.narrative}</p>
     <div class="speech"><span class="avatar">${sc.speaker.slice(0,1)}</span><div><div class="speaker">${sc.speaker}</div><div class="bubble">「${sc.quote}」</div><div class="look">${icon('eye')} ${sc.look}</div></div></div>
     <div class="speech self"><span class="avatar self">自分</span><div><div class="speaker">こころの声</div><div class="bubble">${sc.self}</div></div></div>
    </div>
    <div class="clue-panel"><h3>${icon('search')} 今の手がかり</h3>${s.clues.length?s.clues.slice(-3).map(t=>`<div class="clue"><span class="tag">分かったこと</span>${t}</div>`).join(''):`<div class="clue"><span class="tag">まだ分からないこと</span>${sc.hint}</div>`}<div class="clue"><span class="tag">大切にしたいこと</span>${st.goals[s.goal]}</div></div>
   </div>
  </section>
  <aside class="rail" aria-label="作戦の選び方">
   <div class="rail-label">考える・相談する</div>
   <button class="rail-card" data-action="think" ${calm?'':'disabled'}>
    <span class="rail-icon">${icon('spark')}</span>
    <span class="rail-text"><strong>自分に問う</strong><span>こころの中を確かめて、新しい作戦を見つける</span></span>
   </button>
   <button class="rail-card" data-action="talk" ${calm?'':'disabled'}>
    <span class="rail-icon">${icon('message')}</span>
    <span class="rail-text"><strong>話す・相談する</strong><span>相手やまわりの人に、話を聞く</span></span>
   </button>
   <p class="rail-note ${calm?'':'warn'}">${calm?'※ 気持ちがいっぱいの時は使えない':'いまは気持ちがいっぱいで、じっくり考えられない。「少し休む」「離れる」で落ち着こう。'}</p>
   <div class="rail-label">いつでも選べる</div>
   <div class="quick-actions">${quickActions(s,busy)}</div>
  </aside>
 </div>
 ${s.feedback?feedbackView():handZone(s)}`;
}

function quickActions(s,busy){
 const items=[
  ['observe','eye','きき返す','相手の様子や言葉を確かめる',!s.observed.includes(s.stage)],
  ['pass','pause','何もしない','この場をやり過ごす',!s.passed.includes(s.stage)],
  ['rest','sun','少し休む','こころと体を休める',!s.rested.includes(s.stage)],
  ['leave','door','離れる・逃げる','安全な場所へ移る',true],
  ['help','people','大人に相談','助けを求める',true]
 ];
 return items.map(([a,ic,t,sub,ok])=>`<button class="quick" data-action="${a}" ${busy||!ok?'disabled':''}>${icon(ic)}<span><strong>${t}</strong><span>${sub}</span></span></button>`).join('');
}

function resources(s){
 return `<div class="resources" aria-label="のこりの力">
  ${pip('bolt','行動力',s.energy,5,'作戦カードを出すための力。休むと少し戻る')}
  ${pip('heart','こころの余裕',6-s.stress,6,'ストレスが増えると減る。なくなる前に休もう')}
  ${pip('people','いいなと思う人',s.liked,5,'あなたのことを「いいな」と思ってくれている人。話したり相談したりすると増える')}
 </div>`;
}

function handZone(s){
 if(canMinus(s)){
  const mids=Object.keys(minusCards),rest=mids.length-s.minused.filter(x=>x.startsWith(s.stage+':')).length;
  return `<section class="hand-zone" aria-label="手札">
   <div class="hand-heading">
    <h2>${icon('cards')} 手札 <span class="badge minus-badge">マイナスカード</span></h2>
    ${resources(s)}
   </div>
   <div class="notice minus-notice">気持ちがいっぱいで、ふだんの作戦は出せない。赤いマイナスカードか、「いつでも選べる」作戦で、まず気持ちを整えよう。</div>
   ${rest?`<div class="hand fan">${mids.map((id,i)=>minusCardView(id,i,mids.length)).join('')}</div>`
     :`<p class="empty-note">この場面のマイナスカードはもう使った。「少し休む」「離れる」など、いつでも選べる作戦で落ち着こう。</p>`}
  </section>`;
 }
 const ids=available(s),n=ids.length;
 return `<section class="hand-zone" aria-label="手札">
  <div class="hand-heading">
   <h2>${icon('cards')} 手札 <span class="badge">${n}枚</span></h2>
   ${resources(s)}
  </div>
  ${n?`<div class="hand fan">${ids.map((id,i)=>cardView(id,i,n)).join('')}</div>`
    :`<p class="empty-note">使える手札がない。「話す・相談する」「自分に問う」で増やせる。いつでも選べる作戦もある。</p>`}
 </section>`;
}

function fanStyle(i,n){
 const rot=(i-(n-1)/2)*3.4,dy=Math.abs(i-(n-1)/2)*5;
 const w=176,step=n>1?Math.min(106,(860-w)/(n-1)):0;
 return `${i?`margin-left:${Math.round(step-w)}px;`:''}--rot:${rot.toFixed(1)}deg;--dy:${dy.toFixed(0)}px`;
}

function minusCardView(id,i,n){
 const m=minusCards[id],used=state.minused.includes(state.stage+':'+id);
 return `<button class="game-card minus" data-action="minus" data-id="${id}" ${used?'disabled':''} style="${fanStyle(i,n)}" aria-label="${m.title}、マイナスカード、ストレス${m.recover}回復${used?'、この場面ではもう使った':''}"><div class="card-top"><span>マイナス</span><span>ストレス回復 ${m.recover}</span></div><div class="card-inner"><span class="card-icon">${icon(m.icon)}</span><div class="card-title">${m.title}</div><div class="card-desc">${m.desc}</div><div class="card-bottom">${used?'この場面ではもう使った':m.liked?'まわりへの印象が残る':'気持ちが楽になる'}</div></div></button>`;
}

function cardView(id,i,n){
 const c=cards[id],allowed=canPlay(state,id);
 return `<button class="game-card ${c.kind}" data-action="card" data-id="${id}" ${!allowed?'disabled':''} style="${fanStyle(i,n)}" aria-label="${c.title}、行動力${c.cost}${c.strain?`、ストレス${c.strain}`:''}${!allowed?'、今は行動力や休憩が必要':''}"><div class="card-top"><span>${c.label}</span><span class="costs"><span>行動力 ${c.cost}</span>${c.strain?`<span class="stress-cost">ストレス ${c.strain}</span>`:''}</span></div>${state.discovered.includes(id)?'<span class="new-tag">発見した作戦</span>':''}<div class="card-inner"><span class="card-icon">${icon(c.icon)}</span><div class="card-title">${c.title}</div><div class="card-desc">${c.desc}</div><div class="card-bottom">${allowed?c.hint:'休んで行動力を整えると使える'}</div></div></button>`;
}

function feedbackView(){
 const f=state.feedback;
 return `<section class="feedback" tabindex="-1" id="feedback"><div class="eyebrow">YOUR CHOICE ／ 試してみた</div><h2>「${f.title}」を使った</h2><p>${f.text}</p><div class="changes"><span class="change">ストレス ${f.before.stress} → ${f.after.stress}</span><span class="change">余力 ${f.before.energy} → ${f.after.energy}</span><span class="change">目的 ${f.before.progress} → ${f.after.progress}</span>${f.after.liked>f.before.liked?`<span class="change liked-up">いいなと思う人 ${f.before.liked} → ${f.after.liked}</span>`:''}</div><div class="notice">${icon('spark')} ${f.meaning}</div><div class="feedback-actions"><button data-action="undo">別の作戦を試す</button><button class="primary" data-action="next">${state.stage===2?'今回をふりかえる':'次の場面へ'}</button></div></section>`;
}

function resultView(){
 const s=state,r=summary(s);
 return `<div class="result-header"><div class="eyebrow">YOUR STORY ／ 今回のふりかえり</div><h1>選んだ作戦が、経験になった。</h1><p class="muted">うまくいったことも、まだ気になることも。次の作戦の手がかりにしよう。</p></div>
 <div class="result-grid">
  <section class="result-box wide praise-box"><h3>${icon('spark')}今回のふりかえりで、あなたが積み上げたもの</h3>
   <div class="praise-grid">
    <div class="praise-item"><div class="praise-num">${icon('people')} ${r.liked}<span>人</span></div><div class="praise-label">あなたをいいなと思う人</div><p class="smalltext">${r.liked>=4?'たくさんの人と、心がつながった。':r.liked>=3?'話したり相談したりするたびに、あなたの味方が増えた。':'あなたをいいなと思う人は、いつでも近くにいる。'}</p></div>
    <div class="praise-item"><div class="praise-num">${icon('cards')} ${r.discovered}<span>個</span></div><div class="praise-label">見つけた作戦</div><p class="smalltext">${r.discovered>=4?'考え方がぐっと広がった。いろいろな作戦を試せる。':r.discovered>=2?'新しい考え方が増えた。':'知っている作戦を、大切に使った。'}</p></div>
   </div>
  </section>
  <section class="result-box"><h3>${icon('flag')}状況はどうなった？</h3><p>${r.situation}</p><div class="changes"><span class="change">${r.goal}：${r.progress===3?'進められた':r.progress?'少し進んだ':'これから考えられる'}</span></div></section>
  <section class="result-box"><h3>${icon('heart')}自分の状態</h3><p>ストレス ${r.stress} / 6　・　余力 ${r.energy} / 5　・　いいなと思う人 ${r.liked} 人</p><p class="smalltext muted">気持ちが残っていても、伝えられたことや見つけたことは残ります。</p></section>
  <section class="result-box"><h3>${icon('people')}関係に残ったこと</h3><p>${r.relation}</p></section>
  <section class="result-box"><h3>${icon('spark')}自分に増えた経験</h3>${r.growth.length?r.growth.slice(-4).map(t=>`<p class="smalltext">・${t}</p>`).join(''):'<p>今回は、立ち止まって次を考える時間をつくった。</p>'}</section>
  <section class="result-box wide"><h3>${icon('cards')}今回の作戦の道すじ</h3><div class="timeline">${s.log.length?s.log.map((l,i)=>`<span>${i+1}. ${l.title}</span>`).join(''):'<span>いつでも選べる作戦を使った</span>'}</div>${previous&&previous.story===s.story?`<div class="comparison"><strong>前に試した道すじ</strong><br>${previous.titles.join(' ／ ')||'休憩・離脱・援助を選んだ'}<br>${previous.situation}</div>`:''}</section>
  <section class="result-box wide"><h3>${icon('book')}次に使ってみたい作戦は？</h3><div class="row" style="flex-wrap:wrap">${[...new Set([...s.used,...s.discovered])].slice(0,6).map(id=>`<button class="small ${s.reflection===id?'primary':''}" data-action="reflection" data-id="${id}" aria-pressed="${s.reflection===id}">${cards[id].title}</button>`).join('')}<button class="small ${s.reflection==='defer'?'primary':''}" data-action="reflection" data-id="defer">今は決めない</button></div>${s.reflection?'<p class="smalltext muted" style="margin-top:10px">次の作戦として、この画面に記録しました。</p>':''}</section>
 </div>
 <div class="result-actions"><button class="primary" data-action="replay">同じおはなしを、別の作戦で</button><button data-action="undo" ${!history.length?'disabled':''}>最後の選択に戻る</button><button data-action="story" data-id="${s.story==='fight'?'sports':'fight'}">もう一つのおはなしへ</button></div>`;
}

function showExplore(type){
 const s=state;let opts;
 if(s.story==='fight')opts=type==='talk'?[['haru','ハルに、理由を聞く','何がじゃまだったのか、確かめる。'],['mina','ミナに、話を聞く','見ていた人の手がかりをもらう。']]:[['why','大切なのは、飾りを残すこと？','何を守りたいか考える。'],['respect','先に相談してほしかった？','嫌だったことを、具体的にする。'],['feeling','頑張ったことを知ってほしい？','自分の気持ちに言葉をつける。']];
 else opts=type==='talk'?[['teacher','先生に、過ごし方を相談する','音や休憩について聞いてみる。'],['friend','ソラに、気持ちを話す','楽しみではない気持ちも伝えてみる。']]:[['movement','動き方が分からないのかな','スタートなど、何をすればよいか不安。'],['judgment','人に見られるのが心配かな','遅いところを見られるのが気になる。'],['noise','音や人の多さがつらいのかな','にぎやかな場所だと、体がぎゅっとなる。'],['unknown','まだ、よく分からない','練習の中で確かめることもできる。']];
 modal(type==='talk'?'誰と、何を話そう？':'自分に問う',`<p class="dialog-copy">${type==='talk'?'話すことで、新しい手がかりや作戦が見つかります。':'この物語の自分に、近いものを選ぼう。正解はありません。'}${s.story==='sports'&&type==='think'&&s.reason?' 今回の気がかりは選択済みです。別の条件は、ふりかえりからやり直せます。':''}</p><div class="dialog-options">${opts.map(([id,title,desc])=>`<button data-action="explore" data-id="${id}" ${s.explored.includes(id)||(s.story==='sports'&&type==='think'&&s.reason)?'disabled':''}><strong>${title}${s.explored.includes(id)?' ✓':''}</strong><span>${desc}</span></button>`).join('')}</div>`);
}

function showNotebook(){
 modal('見つけた作戦ノート',`<p class="dialog-copy">発見した作戦と、試した経験。この物語の中の記録です。</p><div class="notebook-list">${[...new Set([...state.discovered,...state.used])].map(id=>`<div class="notebook-item"><strong>${cards[id].title}</strong><span>${state.used.includes(id)?'✓ 試した':'＋ 発見した'} ・ ${cards[id].hint}</span></div>`).join('')||'<p class="empty-note">「話す」「自分に問う」で、最初の作戦を見つけよう。</p>'}</div><div class="dialog-footer"><button class="primary" data-action="close">おはなしに戻る</button></div>`);
}

function dispatch(action,id){
 if(action==='close'){close();return}
 if(action==='guide'){modal('あそびかた',`<div class="dialog-options"><p><strong>1. 場面と、今の手札を見る</strong><br>何を大切にしたいか、目的を選べます。</p><p><strong>2. 話す・考える・カードを使う</strong><br>会話や自問自答で手札が増えます。カードの数字は使う行動力と、かかるストレスです。気持ちがいっぱい（こころの余裕が1以下）の時は、じっくり考える作戦は使えず、手札が赤いマイナスカードに変わります。気持ちを出して落ち着くか、休む・離れるで回復できます。話したり相談したりすると、「いいなと思う人」が増えます。</p><p><strong>3. 結果を見て、選び直す</strong><br>同じカードでも、状況によって結果が変わります。きき返す・何もしない・休む・離れる・助けを求めることは、いつでも選べます。</p></div><div class="notice">登場人物や数値は架空です。合計点や順位はありません。このモックはページを閉じると記録が消えます。</div><button class="primary" data-action="close">おはなしに戻る</button>`);return}
 if(action==='story'){if(!stories[id]||id===state.story)return;sessions[state.story]={state:structuredClone(state),history:structuredClone(history),previous};const saved=sessions[id];state=saved?saved.state:initial(id);history=saved?saved.history:[];previous=saved?saved.previous:null;render();window.scrollTo(0,0);return}
 if(action==='goal'){modal('今回、大切にしたいこと',`<p class="dialog-copy">途中で目的を変えても大丈夫。</p><div class="dialog-options">${stories[state.story].goals.map((g,n)=>`<button data-action="setGoal" data-id="${n}" ${state.goal===n?'aria-current="true"':''}>${state.goal===n?'✓ ':''}${g}</button>`).join('')}</div>`);return}
 if(action==='setGoal'){snapshot();setGoal(state,Number(id));close();render();return}
 if(action==='notebook'){showNotebook();return}
 if(action==='talk'||action==='think'){showExplore(action);return}
 if(action==='explore'){snapshot();const out=explore(state,id);if(!out){history.pop();return}render();modal('新しい作戦を見つけた',`<p class="dialog-copy">${out.text}</p>${out.card?`<div class="acquired"><span class="eyebrow">NEW CARD ／ 手札に追加</span><strong>${cards[out.card].title}</strong><p>${cards[out.card].desc}</p>${id==='teacher'?'<p class="smalltext">「休憩の合図を決める」も加わりました。</p>':''}</div>`:''}<div class="dialog-footer"><button class="primary" data-action="close">手札を見る</button></div>`);announce('新しい作戦を手札に追加しました');return}
 if(action==='observe'||action==='pass'){snapshot();const out=free(state,action);if(!out){history.pop();return}render();modal(out.title,`<p class="dialog-copy">${out.text}</p><div class="notice">${icon('spark')} ${out.meaning}</div>${action==='observe'?'<p class="smalltext muted">「今の手がかり」に加わりました。</p>':''}<div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);announce(out.text);return}
 if(action==='minus'){snapshot();const out=minus(state,id);if(!out){history.pop();return}render();modal(out.title,`<p class="dialog-copy">${out.text}</p><div class="changes"><span class="change">ストレス ${state.stress} / 6 になった</span>${minusCards[id].liked?`<span class="change liked-down">いいなと思う人 ${minusCards[id].liked}</span>`:''}</div><div class="notice">${icon('spark')} ${out.meaning}</div>${minusCards[id].liked?'<p class="smalltext muted">気持ちは楽になったけれど、まわりへの印象が少し残った。</p>':''}<div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);announce(out.text);return}
 if(action==='card'){if(!canPlay(state,id))return;const c=cards[id];modal('この作戦を試してみる？',`<div class="acquired"><span class="eyebrow">${c.label} ／ 行動力 ${c.cost}${c.strain?` ・ ストレス ${c.strain}`:''}</span><strong>${c.title}</strong><p>${c.desc}</p></div><p class="dialog-copy">${c.hint}。どうなるか、試して確かめよう。</p><div class="dialog-footer row"><button data-action="close">手札に戻る</button><button class="primary" data-action="play" data-id="${id}">このカードを使う</button></div>`);return}
 if(action==='play'){if(!canPlay(state,id))return;snapshot();play(state,id);close();render();document.querySelector('#feedback')?.focus();announce(state.feedback.text);return}
 if(action==='next'){advance(state);render();window.scrollTo(0,0);return}
 if(action==='undo'){if(!history.length)return;if(state.finished){const r=summary(state);previous={story:state.story,titles:state.log.map(x=>x.title),situation:r.situation}}state=history.pop();render();return}
 if(action==='rest'){snapshot();if(!safety(state,'rest')){history.pop();return}render();modal('少し、ひと休み',`<p class="dialog-copy">静かな場所で休んだ。気になることは残っていても、次を考える余力ができた。</p><div class="changes"><span class="change">ストレス ${state.stress} / 6</span><span class="change">余力 ${state.energy} / 5</span></div><p class="smalltext muted">この場面での回復は1回。離れる・助けを求めることは、このあとも選べます。</p><div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);return}
 if(action==='leave'||action==='help'){modal(action==='leave'?'安全な場所へ移ろう':'大人に困りごとを伝えよう',`<p class="dialog-copy">${action==='leave'?'この場面はいったん終えて、落ち着ける場所へ移ります。問題の続きは、あとで考えられます。':'先生に困りごとを伝え、次のことを一緒に考えます。一人で解決しなくても大丈夫。'}</p><div class="dialog-footer row"><button data-action="close">おはなしに戻る</button><button class="primary" data-action="safeEnd" data-id="${action}">この作戦を選ぶ</button></div>`);return}
 if(action==='safeEnd'){snapshot();safety(state,id);close();render();window.scrollTo(0,0);return}
 if(action==='replay'){const r=summary(state);previous={story:state.story,titles:state.log.map(x=>x.title),situation:r.situation};state=initial(state.story);history=[];render();window.scrollTo(0,0);return}
 if(action==='reflection'){state.reflection=id;render();return}
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(b&&!b.disabled)dispatch(b.dataset.action,b.dataset.id)});
render();
// Optional browser integration; shares the same validated game actions as the UI.
if(document.modelContext?.registerTool){const ac=new AbortController();const list=[{name:'read_story_state',description:'Read the current fictional story, hand and parameters.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({story:state.story,stage:state.stage,stress:state.stress,energy:state.energy,liked:state.liked,hand:available(state).map(id=>({id,title:cards[id].title,playable:canPlay(state,id)})),finished:state.finished})},{name:'play_story_card',description:'Play an available card and show its outcome in the current fictional story.',inputSchema:{type:'object',properties:{cardId:{type:'string'}},required:['cardId'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{if(!input||typeof input.cardId!=='string'||!canPlay(state,input.cardId))throw Error('This card cannot be played now.');dispatch('play',input.cardId);return {outcome:state.feedback.text,stress:state.stress,energy:state.energy}}}];for(const t of list){try{Promise.resolve(document.modelContext.registerTool(t,{signal:ac.signal})).catch(()=>{})}catch{}}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
