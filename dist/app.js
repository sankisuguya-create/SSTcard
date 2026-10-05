import {cards,minusCards,stories,statMeta,initial,monster,monsterSize,monsterFaded,monsterPower,cardAtk,explore,available,canPlay,canExplore,canMinus,play,advance,continueTurn,safety,free,minus,scene,summary,setGoal,chooseSub,enterEvent} from './engine.mjs';
const app=document.querySelector('#app'),dialog=document.querySelector('#dialog');
let state=initial(),history=[],previous=null,focusReturn=null;
const sessions={};
const lastVals={};

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
 bolt:'M13 2 4 14h6l-1 8 9-12h-6l1-8z',
 skull:'M12 2a8 8 0 0 0-8 8c0 3 2 5 4 6v3h8v-3c2-1 4-3 4-6a8 8 0 0 0-8-8z M9 11a1.6 1.6 0 1 0 .1 0z M15 11a1.6 1.6 0 1 0 .1 0z M12 14l-1 2h2z',
 list:'M8 6h13 M8 12h13 M8 18h13 M3 6h1 M3 12h1 M3 18h1'
};
const IMG=n=>window.SST_IMGS?.[n]||('img/'+n);
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.cards}"/></svg>`;
const snapshot=()=>history.push(structuredClone(state));
const snapVals=s=>({energy:s.energy,mind:s.mind,rep:s.rep,hp:s.monsterHp,study:s.stats.study,ath:s.stats.ath,soc:s.stats.soc});
function announce(t){document.querySelector('#announce').textContent=t}
function close(){dialog.close();focusReturn?.focus()}
function modal(title,body){
 if(!dialog.open)focusReturn=document.activeElement;
 dialog.innerHTML=`<div class="dialog-head"><h2 id="dialog-title">${title}</h2><button class="quiet small" data-action="close" aria-label="閉じる">${icon('close')}</button></div>${body}`;
 if(!dialog.open)dialog.showModal();
}
dialog.addEventListener('cancel',()=>focusReturn?.focus());

function pip(ic,label,val,max,key,title){
 return `<span class="res" data-res="${key}" title="${title}"><span class="res-label">${icon(ic)} ${label}</span><span class="pips" role="meter" aria-label="${label} ${val} / ${max}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${val}">${Array.from({length:max},(_,i)=>`<i class="${i<val?'on':''}">${icon(ic)}</i>`).join('')}</span><strong class="res-num">${val}<span class="muted"> / ${max}</span></strong><span class="delta-slot"></span></span>`;
}

// 資源・ステータス・モンスターHPの変化をアニメーションで目立たせる
function animateChanges(prev,cur){
 const map={energy:'res',mind:'res',rep:'res',study:'stat',ath:'stat',soc:'stat',hp:'hp'};
 for(const k of Object.keys(map)){
  const d=cur[k]-prev[k];
  if(!d)continue;
  const sel=map[k]==='res'?`.res[data-res="${k}"]`:map[k]==='stat'?`.stat[data-stat="${k}"]`:'.arena';
  const el=document.querySelector(sel);
  if(!el)continue;
  el.classList.add('changed');
  setTimeout(()=>el.classList.remove('changed'),800);
  const slot=el.querySelector('.delta-slot')||el;
  const f=document.createElement('span');
  f.className=`float-delta ${d>0?'up':'down'}`;f.textContent=(d>0?'+':'')+d;
  slot.appendChild(f);setTimeout(()=>f.remove(),1600);
 }
}

function render(){
 const s=state,st=stories[s.story];
 app.innerHTML=`<header class="app-header"><div class="brand"><div class="brand-mark">${icon('cards')}</div><div><div class="brand-name">こころの作戦カード</div><div class="eyebrow">KOKORO CARDS</div></div></div><div class="row"><span class="badge header-note">体験モック</span><button class="quiet small" data-action="guide">${icon('book')}<span class="header-note"> あそびかた</span></button></div></header>
 <div class="layout"><aside>
  <div class="side-label">STORIES ／ おはなし</div>
  <nav class="story-nav" aria-label="ストーリー">${Object.entries(stories).map(([id,t])=>`<button class="story-button ${s.story===id?'selected':''}" data-action="story" data-id="${id}" aria-pressed="${s.story===id}"><span class="story-number">STORY ${t.num}</span><strong>${t.nav}</strong><span>${t.attrs.map(a=>`<span class="attr-tag ${a}">${statMeta[a].attr}</span>`).join('')}</span></button>`).join('')}</nav>
  <div class="side-section goal-section"><div><div class="side-label">今回、大切にしたいこと</div><p class="goal-value">${st.goals[s.goal]}</p><div class="goal-pips" role="meter" aria-label="目的の進み具合 ${s.progress} / 3" aria-valuemin="0" aria-valuemax="3" aria-valuenow="${s.progress}">${[0,1,2].map(i=>`<i class="${i<s.progress?'on':''}"></i>`).join('')}</div></div><button class="small quiet" data-action="goal" ${s.finished||s.feedback?'disabled':''}>目的を変える</button><p class="side-note">何を大切にするかで、<br>作戦の使いどころも変わる。</p></div>
  <div class="side-section clue-section"><div class="side-label">今の手がかり</div>${s.clues.length?s.clues.slice(-3).map(t=>`<div class="side-clue">${t}</div>`).join(''):`<div class="side-clue dim">${scene(s).hint}</div>`}</div>
  <div class="side-section notebook-section"><button class="notebook-button" data-action="notebook">${icon('book')}<span>作戦ノート</span><span class="count">${s.discovered.length}</span></button></div>
  <div class="side-footer">「話す」「考える」で手札が増える。<br>自分に合う作戦を試してみよう。<br><br>数値はおはなしの中の状態です。<br>あなた自身の成績ではありません。</div>
 </aside><main id="main">${s.finished?resultView():playView()}</main></div>`;
}

// 中央上部: パズドラ風。大きなモンスターイラスト＋ダイアログ（タップで履歴）
function arena(s){
 const m=monster(s),left=m.turns-s.turns,img=IMG(`mon-${s.story}-${s.stage}.webp`);
 const size=monsterSize(m),faded=monsterFaded(s),ep=monsterPower(s,m)+(s.bolster||0)+(s.rep<=0?1:0),bg=stories[s.story].bg||'class';
 return `<div class="arena ${s.monsterHp<=0?'beaten':''} size-${size} ${faded?'faded':''}" aria-label="立ちはだかるもの ${m.name}、体力 ${Math.max(0,s.monsterHp)} / ${m.hp}">
  <img class="arena-bg" src="${IMG(`bg-${bg}.webp`)}" alt="" aria-hidden="true" onerror="this.style.display='none'">
  <img class="arena-img" src="${img}" alt="${m.name}のイラスト" width="640" height="427" onerror="this.style.display='none'">
  <div class="arena-top">
   <div class="arena-name">${m.name}<span class="arena-look">${m.look}</span></div>
   <div class="arena-meta"><span class="badge">のこり ${left} 手</span>${faded?'<span class="badge seen">正体が見えて弱くなった</span>':''}${m.power?`<span class="badge monster-power">${ep>0?`プレッシャー 精神力-${ep}${s.bolster?' (前の課題が影響)':''}`:'プレッシャーは弱まった'}</span>`:''}</div>
  </div>
  <div class="arena-bottom"><div class="hp-bar" role="meter" aria-label="モンスターの体力 ${Math.max(0,s.monsterHp)} / ${m.hp}"><span class="delta-slot"></span>${Array.from({length:m.hp},(_,i)=>`<i class="${i<s.monsterHp?'on':''}"></i>`).join('')}</div></div>
 </div>`;
}

function dlgBox(s){
 const sc=scene(s);
 return `<button class="dlg-box" data-action="history" aria-label="これまでの様子を見る">
  <p class="dlg-narr">${sc.narrative}</p>
  <div class="dlg-speech"><span class="avatar">${sc.speaker.slice(0,1)}</span><div class="dlg-lines"><div class="speaker">${sc.speaker}</div><div class="bubble">「${sc.quote}」</div><div class="look">${icon('eye')} ${sc.look}</div></div></div>
  <div class="dlg-speech self"><span class="avatar self">自分</span><div class="dlg-lines"><div class="speaker">こころの声</div><div class="bubble">${sc.self}</div></div></div>
  <span class="dlg-hint">${icon('list')} タップで、これまでの様子</span>
 </button>`;
}

const SUB_BG={okashi:'bg-class',committee:'bg-class',move:'bg-hall',basketball:'bg-yard',cleaning:'bg-class',beetle:'bg-yard',button:'bg-class',lostFound:'bg-hall',picture:'bg-class',shuffle:'bg-class',nurse:'bg-hall',madoboshi:'bg-class',lunchWin:'bg-lunch',lunchTalk:'bg-lunch',cleanPool:'bg-yard',collect:'bg-class',watering:'bg-yard',crying:'bg-hall',bookDrop:'bg-lib',watching:'bg-gym',extraRent:'bg-lib'};
function mapView(){
 const s=state,st=stories[s.story];
 const nodes=s.eventNodes.map((n,i)=>{
  const cls=n.type==='main'?'main':'sub',done=i<s.eventIdx,now=i===s.eventIdx;
  return `${i?'<span class="map-link"></span>':''}<span class="map-node ${cls} ${done?'done':''} ${now?'now':''}" title="${cls==='main'?'おおきな できごと':'できごと'}">${done?icon('check'):cls==='main'?icon('skull'):icon('sun')}</span>`;
 }).join('');
 return `
 <div class="title-row"><div><div class="chapter-label">おはなしマップ</div><h1>${st.title}</h1></div></div>
 <section class="map-view" aria-label="おはなしマップ">
  <div class="map-track">${nodes}</div>
  <p class="map-note">おおきな○は課題、ちいさな○はできごと。次の○へ進もう。</p>
  <button class="primary map-next" data-action="enter">つぎのできごとへ</button>
 </section>`;
}
function subView(){
 const s=state,st=stories[s.story],ev=s.subNow,bg=SUB_BG[ev.id]||('bg-'+st.bg);
 const CH=[['積極的に関わる','力があるほど、いい結果になりやすい','spark'],['気にかける','様子を見て、少し気持ちを整える','eye'],['やり過ごす','何もせず、次へ進む','pause']];
 return `
 <div class="title-row"><div><div class="chapter-label">できごと</div><h1>${st.title}</h1></div></div>
 <section class="sub-view" aria-label="できごと">
  <div class="sub-illus"><img src="${IMG(`${bg}.webp`)}" alt="" aria-hidden="true"><div class="sub-caption">${ev.text}</div></div>
  <div class="sub-choices">${CH.map(([t,d,ic],i)=>`<button class="sub-choice" data-action="subChoose" data-id="${i}"><span class="rail-icon">${icon(ic)}</span><span class="rail-text"><strong>${t}</strong><span>${d}</span></span></button>`).join('')}</div>
 </section>`;
}
function playView(){
 const s=state;
 if(s.map&&!s.finished)return mapView();
 if(s.subNow&&!s.feedback)return subView();
 const st=stories[s.story],busy=!!s.feedback,calm=canExplore(s),full=s.mind<=1;
 return `
 <div class="title-row"><div><div class="chapter-label">STORY ${st.num} ／ ${st.chapters[s.stage]}</div><h1>${st.title}</h1></div><div class="steps" aria-label="場面 ${s.stage+1} / 3">${[0,1,2].map(n=>`${n?'<span class="step-line"></span>':''}<span class="step ${n===s.stage?'current':n<s.stage?(s.slain.includes(n)?'slain':'done'):''}">${n<s.stage?(s.slain.includes(n)?'✓':'〜'):n+1}</span>`).join('')}</div></div>
 <div class="play-grid">
  <section class="board" aria-label="今の場面">
   ${arena(s)}
   ${dlgBox(s)}
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
   <p class="rail-note ${full?'warn':''}">${full?'いまは気持ちがいっぱいで、じっくり考えられない。「少し休む」「離れる」で落ち着こう。':'※ 気持ちがいっぱいの時は使えない'}</p>
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

// 中央下部: パラメータ（資源＋バフ）と手札
function resources(s){
 return `<div class="resources" aria-label="のこりの力">
  ${pip('bolt','行動力',s.energy,5,'energy','作戦カードを出すための力。休むと少し戻る')}
  ${pip('heart','精神力',s.mind,s.mindMax,'mind','つかれると減る。1以下で「気持ちがいっぱい」、0で大失敗に。休むと戻る')}
  ${pip('people','評判',s.rep,5,'rep','まわりからの見られ方。話したり相談したりすると上がる。0だとモンスターの威圧が強くなる')}
 </div>`;
}

function statsStrip(s){
 return `<div class="stats-strip" aria-label="身についた力（バフ・デバフ）">
  <span class="stats-caption">${icon('spark')} 身についた力</span>
  ${['study','ath','soc'].map(k=>`<span class="stat" data-stat="${k}" title="同じ系統の作戦の攻撃力が上下する"><span class="stat-icon">${icon(k==='study'?'book':k==='ath'?'bolt':'people')}</span><span class="stat-name">${statMeta[k].label}</span><span class="stat-val ${s.stats[k]>0?'plus':s.stats[k]<0?'minus':'zero'}">${s.stats[k]>0?'+':''}${s.stats[k]}</span><span class="delta-slot"></span></span>`).join('')}
  ${['study','ath','soc'].filter(k=>s.traumas&&s.traumas[k]).map(k=>`<span class="stat trauma" title="${statMeta[k].attr}の課題に何度も負けて、苦手意識がついた。関連する手札の気持ち消費が+1"><span class="stat-icon">${icon('eye')}</span><span class="stat-name">${statMeta[k].label}に苦手意識</span></span>`).join('')}
 </div>`;
}

function handZone(s){
 const head=`<div class="hand-heading"><h2>${icon('cards')} 手札</h2></div>`;
 const params=body=>`<div class="hand-row">
  <div class="param-col buff-col" aria-label="力（バフ・デバフ）">${statsStrip(s)}</div>
  <div class="fan-area">${body}</div>
  <div class="param-col res-col" aria-label="こころと行動の資源">${resources(s)}</div>
 </div>`;
 if(canMinus(s)){
  const mids=Object.keys(minusCards),rest=mids.length-s.minused.filter(x=>x.startsWith(s.stage+':')).length;
  return `<section class="hand-zone" aria-label="手札">
   ${head}
   <div class="notice minus-notice"><span class="badge minus-badge">マイナスカード</span> 気持ちがいっぱいで、ふだんの作戦は出せない。赤いマイナスカードか、「いつでも選べる」作戦で、まず気持ちを整えよう。</div>
   ${params(rest?`<div class="hand fan">${mids.map((id,i)=>minusCardView(id,i,mids.length)).join('')}</div>`
     :`<p class="empty-note">この場面のマイナスカードはもう使った。「少し休む」「離れる」など、いつでも選べる作戦で落ち着こう。</p>`)}
  </section>`;
 }
 const ids=available(s),n=ids.length;
 return `<section class="hand-zone" aria-label="手札">
  ${head}
  ${params(n?`<div class="hand fan">${ids.map((id,i)=>cardView(id,i,n)).join('')}</div>`
    :`<p class="empty-note">使える手札がない。「話す・相談する」「自分に問う」で増やせる。いつでも選べる作戦もある。</p>`)}
 </section>`;
}

function fanStyle(i,n){
 const rot=(i-(n-1)/2)*3.4,dy=Math.abs(i-(n-1)/2)*5;
 const w=176,step=n>1?Math.min(106,(860-w)/(n-1)):0;
 return `${i?`margin-left:${Math.round(step-w)}px;`:''}--rot:${rot.toFixed(1)}deg;--dy:${dy.toFixed(0)}px`;
}

function minusCardView(id,i,n){
 const m=minusCards[id],used=state.minused.includes(state.stage+':'+id);
 const dnLabel=m.dn?`・${statMeta[m.dn].label}-1`:'';
 return `<button class="game-card minus" data-action="minus" data-id="${id}" ${used?'disabled':''} style="${fanStyle(i,n)}" aria-label="${m.title}、マイナスカード、精神力${m.recover}回復${m.rep?'、評判が下がる':''}${dnLabel?'、'+statMeta[m.dn].label+'が下がる':''}${used?'、この場面ではもう使った':''}"><div class="card-top"><span>マイナス</span><span>精神力 +${m.recover}</span></div><div class="card-inner"><span class="card-icon">${icon(m.icon)}</span><div class="card-title">${m.title}</div><div class="card-desc">${m.desc}</div><div class="card-bottom">${used?'この場面ではもう使った':((m.rep?'評判-1':'')+dnLabel)||'気持ちが楽になる'}</div></div></button>`;
}

function cardView(id,i,n){
 const s=state,c=cards[id],allowed=canPlay(s,id),atk=cardAtk(s,id);
 const mod=c.attr&&!c.dark&&s.stats[c.attr]!==0?`<span class="stat-mod ${s.stats[c.attr]>0?'up':'down'}">${statMeta[c.attr].label}${s.stats[c.attr]>0?'+':''}${s.stats[c.attr]}</span>`:'';
 const tr=c.attr&&state.traumas&&state.traumas[c.attr];
 const costLine=c.dark?`<span class="stress-cost">精神力 +${c.heal}</span><span class="rep-down">評判 -1</span>`:`<span>行動力 ${c.cost}</span>${c.strain||tr?`<span class="stress-cost">精神力 ${(c.strain||0)+(tr?1:0)}${tr?'・苦手意識':''}</span>`:''}`;
 const atkLine=atk>0?`<span class="atk">攻撃 ${atk}${mod?'↑':''}</span>`:'';
 return `<button class="game-card ${c.kind} ${c.dark?'dark':''}" data-action="card" data-id="${id}" ${!allowed?'disabled':''} style="${fanStyle(i,n)}" aria-label="${c.title}${c.dark?'、評判を下げるカード':''}、行動力${c.cost}${c.strain?`、精神力${c.strain}消費`:''}${atk>0?`、攻撃${atk}`:''}${!allowed?'、今は行動力や休憩が必要':''}"><div class="card-top"><span>${c.label}</span><span class="costs">${costLine}</span></div>${state.discovered.includes(id)?'<span class="new-tag">発見した作戦</span>':''}${c.dark?'<span class="dark-tag">評判↓</span>':''}<div class="card-inner"><span class="card-icon">${icon(c.icon)}</span><div class="card-title">${c.title}</div><div class="card-desc">${c.desc}</div><div class="card-bottom">${mod}${atkLine}${allowed?c.hint:'休んで行動力を整えると使える'}</div></div></button>`;
}

function changeChip(label,b,a){return a===b?'':`<span class="change ${a>b?'up':'down'}">${label} ${b} → ${a}</span>`}

function feedbackView(){
 const f=state.feedback,s=state;
 const chips=[
  changeChip('精神力',f.before.mind,f.after.mind),
  changeChip('行動力',f.before.energy,f.after.energy),
  changeChip('評判',f.before.rep,f.after.rep),
  ...['study','ath','soc'].map(k=>changeChip(statMeta[k].label,f.before.stats[k],f.after.stats[k])),
  f.dmg>0?`<span class="change hit">${icon('skull')} ${f.monster}に ${f.dmg} ダメージ</span>`:'',
  f.mdmg>0?`<span class="change down">モンスター 精神力 -${f.mdmg}</span>`:'',
  f.stolen?`<span class="change down">「${cards[f.stolen].title}」を使いにくくされた</span>`:''
 ].filter(Boolean).join('');
 const extra=f.killed?`<div class="notice clear-notice">${icon('skull')} 「${f.monster}」を退いた！ 次の場面へ進める。</div>`:f.escaped?`<div class="notice">手がつきた。モンスターはいったん立ち去った… 次の場面でまた現れる。</div>`:'';
 return `<section class="feedback" tabindex="-1" id="feedback"><div class="eyebrow">YOUR CHOICE ／ 試してみた</div><h2>「${f.title}」を使った</h2><p>${f.text}</p>${f.counter?`<p class="monster-act">${f.counter}</p>`:''}<div class="changes">${chips}</div>${s.dead?`<div class="notice fail-notice">${icon('skull')} 精神力が0になった。気持ちがあふれて、その場から逃げ出してしまった…</div>`:''}${extra}<div class="notice">${icon('spark')} ${f.meaning}</div><div class="feedback-actions"><button data-action="undo" ${s.dead?'disabled':''}>別の作戦を試す</button>${!s.dead&&!f.killed&&!f.escaped&&s.turns<monster(s).turns?`<button data-action="continue">もう一枚、作戦を試す（のこり ${monster(s).turns-s.turns}手）</button>`:''}<button class="primary" data-action="next">${s.dead?'ふりかえりへ':f.sub?'つぎへ':f.killed||f.escaped?'次の場面へ':state.stage===2?'今回をふりかえる':'次の場面へ'}</button></div></section>`;
}

function resultView(){
 const s=state,r=summary(s);
 const head=r.outcome==='fail'?{h:'気持ちがあふれて、大失敗になった。',sub:'「いっぱいいっぱい」のサインに気づけなかった…休む・離れる・出す作戦を早めに使おう。'}
  :r.outcome==='clear'?{h:'モンスターを退いた！',sub:'選んだ作戦が、課題にきちんと届いた。'}
  :r.outcome==='partial'?{h:'いくつかのモンスターを退いた。',sub:'全部は届かなかったけれど、試した経験は残っている。'}
  :r.outcome==='exit'?{h:'安全な場所へ移って、ふりかえった。',sub:'助けを求めることも、大事な作戦の一つ。'}
  :{h:'モンスターはまだ残っている。',sub:'時間切れだったけれど、見つけた作戦は次に使える。'};
 const tierClass=r.outcome==='fail'?'fail':!r.warns.length&&r.praises.length>=3?'great':r.warns.length>r.praises.length?'warn':'good';
 const axes=[
  ['精神力の平均',r.mindAvg.toFixed(1)+' / 6',Math.min(1,r.mindAvg/6),r.lowMind?'いつもしんどかった…':''],
  ['手札の数',r.handSize+' 枚',Math.min(1,r.handSize/12),''],
  ['評判',r.rep+' / 5',r.rep/5,''],
  ['バフの総量',(r.buffTotal>=0?'+':'')+r.buffTotal,Math.min(1,Math.max(0,r.buffTotal)/6),''],
  ['モンスターを退いた数',r.slain+' / 3',r.slain/3,'']
 ];
 return `<div class="result-header"><div class="eyebrow">YOUR STORY ／ 今回のふりかえり</div><h1>${head.h}</h1><p class="muted">${head.sub}</p></div>
 <div class="result-grid">
  <section class="result-box wide praise-box"><h3>${icon('spark')}今回のふりかえりで、あなたが積み上げたもの</h3>
   <div class="tier-banner ${tierClass}">${icon('flag')} 総合: ${r.tier}</div>
   <div class="resilience">
    ${r.praises.length?`<div class="res-col good"><div class="res-label">できたこと・育ったもの</div>${r.praises.map(p=>`<div class="res-item">${icon('check')} ${p}</div>`).join('')}</div>`:''}
    ${r.warns.length?`<div class="res-col warn"><div class="res-label">あと一歩・気をつけたいこと</div>${r.warns.map(w=>`<div class="res-item">${icon('pause')} ${w}</div>`).join('')}</div>`:''}
   </div>
   <div class="axis-list">${axes.map(([l,v,ratio,note])=>`<div class="axis"><span class="axis-label">${l}</span><span class="axis-bar"><i style="width:${Math.round(ratio*100)}%"></i></span><strong>${v}</strong>${note?`<span class="axis-note">${note}</span>`:''}</div>`).join('')}</div>
  </section>
  <section class="result-box"><h3>${icon('flag')}状況はどうなった？</h3><p>${r.situation}</p><div class="changes"><span class="change">${r.goal}：${r.progress===3?'進められた':r.progress?'少し進んだ':'これから考えられる'}</span></div></section>
  <section class="result-box"><h3>${icon('heart')}自分の状態</h3><p>精神力 ${r.mind} / ${r.mindMax}　・　行動力 ${r.energy} / 5　・　評判 ${r.rep} / 5</p><p>かしこさ ${r.stats.study>=0?'+':''}${r.stats.study}　・　運動能力 ${r.stats.ath>=0?'+':''}${r.stats.ath}　・　社交性 ${r.stats.soc>=0?'+':''}${r.stats.soc}</p>${Object.keys(r.traumas||{}).length?`<p class="trauma-note">ついてしまった苦手意識: ${Object.keys(r.traumas).map(k=>statMeta[k].attr).join('・')}（関連する手札の気持ち消費が+1。次の物語にも持ち越される）</p>`:''}<p class="smalltext muted">次の物語を選ぶと、評判・苦手意識・精神力の上限を引き継ぐ。気持ちが残っていても、伝えられたことや見つけたことは残ります。</p></section>
  <section class="result-box"><h3>${icon('people')}関係に残ったこと</h3><p>${r.relation}</p></section>
  <section class="result-box"><h3>${icon('spark')}自分に増えた経験</h3>${r.growth.length?r.growth.slice(-4).map(t=>`<p class="smalltext">・${t}</p>`).join(''):'<p>今回は、立ち止まって次を考える時間をつくった。</p>'}</section>
  <section class="result-box wide"><h3>${icon('cards')}今回の作戦の道すじ</h3><div class="timeline">${s.log.length?s.log.map((l,i)=>`<span>${i+1}. ${l.title}</span>`).join(''):'<span>いつでも選べる作戦を使った</span>'}</div>${previous&&previous.story===s.story?`<div class="comparison"><strong>前に試した道すじ</strong><br>${previous.titles.join(' ／ ')||'休憩・離脱・援助を選んだ'}<br>${previous.situation}</div>`:''}</section>
  <section class="result-box wide"><h3>${icon('book')}次に使ってみたい作戦は？</h3><div class="row" style="flex-wrap:wrap">${[...new Set([...s.used,...s.discovered])].slice(0,6).map(id=>`<button class="small ${s.reflection===id?'primary':''}" data-action="reflection" data-id="${id}" aria-pressed="${s.reflection===id}">${cards[id].title}</button>`).join('')}<button class="small ${s.reflection==='defer'?'primary':''}" data-action="reflection" data-id="defer">今は決めない</button></div>${s.reflection?'<p class="smalltext muted" style="margin-top:10px">次の作戦として、この画面に記録しました。</p>':''}</section>
 </div>
 <div class="result-actions"><button class="primary" data-action="replay">同じおはなしを、別の作戦で</button><button data-action="undo" ${!history.length?'disabled':''}>最後の選択に戻る</button>${Object.keys(stories).filter(k=>k!==s.story).map(k=>`<button data-action="story" data-id="${k}">「${stories[k].nav}」へ</button>`).join('')}</div>`;
}

function showExplore(type){
 const s=state,d=stories[s.story];
 const opts=(type==='talk'?d.talk:d.think);
 modal(type==='talk'?'誰と、何を話そう？':'自分に問う',`<p class="dialog-copy">${type==='talk'?'話すことで、新しい手がかりや作戦が見つかります。':'この物語の自分に、近いものを選ぼう。正解はありません。'}${type==='think'&&s.reason?' 今回の気がかりは選択済みです。別の条件は、ふりかえりからやり直せます。':''}</p><div class="dialog-options">${opts.map(([id,title,desc])=>`<button data-action="explore" data-id="${id}" ${s.explored.includes(id)||(type==='think'&&s.reason&&d.reasonKeys.includes(id))?'disabled':''}><strong>${title}${s.explored.includes(id)?' ✓':''}</strong><span>${desc}</span></button>`).join('')}</div>`);
}

function showNotebook(){
 modal('見つけた作戦ノート',`<p class="dialog-copy">発見した作戦と、試した経験。この物語の中の記録です。</p><div class="notebook-list">${[...new Set([...state.discovered,...state.used])].map(id=>`<div class="notebook-item"><strong>${cards[id].title}</strong><span>${state.used.includes(id)?'✓ 試した':'＋ 発見した'} ・ ${cards[id].hint}</span></div>`).join('')||'<p class="empty-note">「話す」「自分に問う」で、最初の作戦を見つけよう。</p>'}</div><div class="dialog-footer"><button class="primary" data-action="close">おはなしに戻る</button></div>`);
}

// ダイアログをタップすると、これまでの様子（履歴）が出る
function showHistory(){
 const s=state;
 const rows=s.transcript.map(e=>{
  if(e.who==='scene')return `<div class="hist-scene"><span class="hist-tag">${stories[s.story].chapters[e.stage]||''}</span><p>${e.narrative}</p><div class="dlg-speech"><span class="avatar">${e.speaker.slice(0,1)}</span><div class="dlg-lines"><div class="speaker">${e.speaker}</div><div class="bubble">「${e.quote}」</div><div class="look">${icon('eye')} ${e.look}</div></div></div><div class="dlg-speech self"><span class="avatar self">自分</span><div class="dlg-lines"><div class="speaker">こころの声</div><div class="bubble">${e.self}</div></div></div></div>`;
  return `<div class="hist-line ${e.who}"><span class="hist-tag">${{card:'作戦',minus:'気持ちを出す',free:'自由な行動',explore:'話す・考える',event:'できごと'}[e.who]||''}</span><p>${e.text}</p></div>`;
 }).join('');
 modal('これまでの様子',`<div class="history-list">${rows||'<p class="empty-note">まだ記録はありません。</p>'}</div><div class="dialog-footer"><button class="primary" data-action="close">おはなしに戻る</button></div>`);
}

function afterMutate(){
 const cur=snapVals(state);
 render();
 animateChanges(lastVals.cur||cur,cur);
 lastVals.cur=cur;
}

function dispatch(action,id){
 if(action==='close'){close();return}
 if(action==='guide'){modal('あそびかた',`<div class="dialog-options"><p><strong>1. 立ちはだかるモンスターを見る</strong><br>おはなしの課題が、モンスターになって立ちはだかる。作戦カードで攻撃して、体力を0にするとクリア。手（ターン）が尽きると、モンスターはいったん立ち去る。</p><p><strong>2. 資源を管理する</strong><br>作戦には行動力と精神力のコストがある。精神力が1以下になると「気持ちがいっぱい」で手札が赤いマイナスカードに変わり、0になると大失敗。話す・相談すると評判が上がり、評判が0だとモンスターの威圧が強くなる。</p><p><strong>3. 力を育てる</strong><br>作戦を試すと、かしこさ・運動能力・社交性が育つ（バフ）。同じ系統の作戦が強くなる。ダークカードや一部のカードは、力を下げる（デバフ）こともある。</p></div><div class="notice">登場人物や数値は架空です。合計点や順位はありません。このモックはページを閉じると記録が消えます。</div><button class="primary" data-action="close">おはなしに戻る</button>`);return}
 if(action==='history'){showHistory();return}
 if(action==='enter'){enterEvent(state);render();return}
 if(action==='subChoose'){snapshot();if(!chooseSub(state,+id)){history.pop();return}afterMutate();announce(state.feedback.text);render();return}
 if(action==='story'){if(!stories[id]||id===state.story)return;const carry=state.finished?{rep:state.rep,traumas:state.traumas,mindMax:state.mindMax,losses:state.losses}:null;sessions[state.story]={state:structuredClone(state),history:structuredClone(history),previous};const saved=sessions[id];state=saved?saved.state:initial(id,carry);history=saved?saved.history:[];previous=saved?saved.previous:null;lastVals.cur=null;render();window.scrollTo(0,0);return}
 if(action==='goal'){modal('今回、大切にしたいこと',`<p class="dialog-copy">途中で目的を変えても大丈夫。</p><div class="dialog-options">${stories[state.story].goals.map((g,n)=>`<button data-action="setGoal" data-id="${n}" ${state.goal===n?'aria-current="true"':''}>${state.goal===n?'✓ ':''}${g}</button>`).join('')}</div>`);return}
 if(action==='setGoal'){snapshot();setGoal(state,Number(id));close();render();return}
 if(action==='notebook'){showNotebook();return}
 if(action==='talk'||action==='think'){showExplore(action);return}
 if(action==='explore'){snapshot();const rp=state.rep;const out=explore(state,id);if(!out){history.pop();return}afterMutate();modal('新しい作戦を見つけた',`<p class="dialog-copy">${out.text}</p>${state.rep>rp?`<div class="changes"><span class="change up">評判 ${rp} → ${state.rep}</span></div>`:''}${out.card?`<div class="acquired"><span class="eyebrow">NEW CARD ／ 手札に追加</span><strong>${cards[out.card].title}</strong><p>${cards[out.card].desc}</p>${id==='teacher'?'<p class="smalltext">「休憩の合図を決める」も加わりました。</p>':''}</div>`:''}<div class="dialog-footer"><button class="primary" data-action="close">手札を見る</button></div>`);announce('新しい作戦を手札に追加しました');return}
 if(action==='observe'||action==='pass'){snapshot();const rp=state.rep;const out=free(state,action);if(!out){history.pop();return}afterMutate();modal(out.title,`<p class="dialog-copy">${out.text}</p>${state.rep>rp?`<div class="changes"><span class="change up">評判 ${rp} → ${state.rep}</span></div>`:''}<div class="notice">${icon('spark')} ${out.meaning}</div>${action==='observe'?'<p class="smalltext muted">「今の手がかり」に加わりました。</p>':''}<div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);announce(out.text);return}
 if(action==='minus'){snapshot();const out=minus(state,id);if(!out){history.pop();return}afterMutate();modal(out.title,`<p class="dialog-copy">${out.text}</p><div class="changes"><span class="change up">精神力 +${out.recover}</span>${out.rep?`<span class="change down">評判 ${out.rep}</span>`:''}${out.dn?`<span class="change down">${statMeta[out.dn].label} -1</span>`:''}</div><div class="notice">${icon('spark')} ${out.meaning}</div>${out.rep||out.dn?'<p class="smalltext muted">気持ちは楽になったけれど、まわりや自分への影響が少し残った。</p>':''}<div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);announce(out.text);return}
 if(action==='card'){if(!canPlay(state,id))return;const c=cards[id],atk=cardAtk(state,id),tr2=c.attr&&state.traumas&&state.traumas[c.attr];modal('この作戦を試してみる？',`<div class="acquired"><span class="eyebrow">${c.label} ／ 行動力 ${c.cost}${c.strain||tr2?` ・ 精神力 ${(c.strain||0)+(tr2?1:0)}${tr2?'・苦手意識':''}`:''}${c.dark?` ・ 精神力 +${c.heal} ・ 評判 -1`:''}${atk>0?` ・ 攻撃 ${atk}`:''}</span><strong>${c.title}</strong><p>${c.desc}</p></div><p class="dialog-copy">${c.hint}。どうなるか、試して確かめよう。</p><div class="dialog-footer row"><button data-action="close">手札に戻る</button><button class="primary" data-action="play" data-id="${id}">このカードを使う</button></div>`);return}
 if(action==='play'){if(!canPlay(state,id))return;snapshot();play(state,id);close();afterMutate();document.querySelector('#feedback')?.focus();announce(state.feedback.text);return}
 if(action==='continue'){continueTurn(state);afterMutate();return}
 if(action==='next'){advance(state);afterMutate();window.scrollTo(0,0);return}
 if(action==='undo'){if(!history.length)return;if(state.finished){const r=summary(state);previous={story:state.story,titles:state.log.map(x=>x.title),situation:r.situation}}state=history.pop();lastVals.cur=null;render();return}
 if(action==='rest'){snapshot();if(!safety(state,'rest')){history.pop();return}afterMutate();modal('少し、ひと休み',`<p class="dialog-copy">静かな場所で休んだ。気になることは残っていても、次を考える余力ができた。</p><div class="changes"><span class="change">精神力 ${state.mind} / ${state.mindMax}</span><span class="change">行動力 ${state.energy} / 5</span></div><p class="smalltext muted">この場面での回復は1回。離れる・助けを求めることは、このあとも選べます。</p><div class="dialog-footer"><button class="primary" data-action="close">次の作戦を考える</button></div>`);return}
 if(action==='leave'||action==='help'){modal(action==='leave'?'安全な場所へ移ろう':'大人に困りごとを伝えよう',`<p class="dialog-copy">${action==='leave'?'この場面はいったん終えて、落ち着ける場所へ移ります。問題の続きは、あとで考えられます。':'先生に困りごとを伝え、次のことを一緒に考えます。一人で解決しなくても大丈夫。'}</p><div class="dialog-footer row"><button data-action="close">おはなしに戻る</button><button class="primary" data-action="safeEnd" data-id="${action}">この作戦を選ぶ</button></div>`);return}
 if(action==='safeEnd'){snapshot();safety(state,id);close();afterMutate();window.scrollTo(0,0);return}
 if(action==='replay'){const r=summary(state);previous={story:state.story,titles:state.log.map(x=>x.title),situation:r.situation};state=initial(state.story);history=[];lastVals.cur=null;render();window.scrollTo(0,0);return}
 if(action==='reflection'){state.reflection=id;render();return}
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(b&&!b.disabled)dispatch(b.dataset.action,b.dataset.id)});
render();
lastVals.cur=snapVals(state);
// Optional browser integration; shares the same validated game actions as the UI.
if(document.modelContext?.registerTool){const ac=new AbortController();const list=[{name:'read_story_state',description:'Read the current fictional story, hand and parameters.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({story:state.story,stage:state.stage,mind:state.mind,energy:state.energy,rep:state.rep,stats:{...state.stats},monster:monster(state).name,monsterHp:state.monsterHp,hand:available(state).map(id=>({id,title:cards[id].title,playable:canPlay(state,id)})),finished:state.finished})},{name:'play_story_card',description:'Play an available card and show its outcome in the current fictional story.',inputSchema:{type:'object',properties:{cardId:{type:'string'}},required:['cardId'],additionalProperties:false},annotations:{readOnlyHint:false},execute:input=>{if(!input||typeof input.cardId!=='string'||!canPlay(state,input.cardId))throw Error('This card cannot be played now.');dispatch('play',input.cardId);return {outcome:state.feedback.text,mind:state.mind,energy:state.energy,monsterHp:state.monsterHp}}}];for(const t of list){try{Promise.resolve(document.modelContext.registerTool(t,{signal:ac.signal})).catch(()=>{})}catch{}}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
