"use client";
import Link from "next/link";
import { useState } from "react";

export function Dashboard(){
 const [liked,setLiked]=useState(false);
 return <div className="dashboard page-enter">
  <header className="page-head"><div><p>2026년 8월 28일 금요일</p><h1>좋은 오후예요, 서진님.</h1></div><div className="head-actions"><button aria-label="알림">♢<i /></button><div className="avatar a">서</div></div></header>
  <section className="dday-hero"><div className="orb one"/><div className="orb two"/><div className="hero-copy"><div className="eyebrow"><span className="pulse"/> 우리의 시간</div><h2><span>함께한 지</span><strong>2</strong><em>days</em></h2><p>2026년 8월 27일부터, 같은 파도 위를 걷는 중</p><div className="faces"><div className="avatar a">서</div><div className="avatar b">다</div><span>서진 &amp; 다연</span></div></div><blockquote><span>오늘의 문장</span>“서로의 하루를 궁금해하는 마음이<br/>사랑을 오래 자라게 해요.”</blockquote></section>
  <div className="section-title"><div><span>OUR WINDOWS · D+2</span><h2>서진과 다연의 창</h2></div><Link href="/app/today">내 상태 업데이트 <b>→</b></Link></div>
  <section className="mood-grid">
   <article className="mood-card coral"><div className="card-top"><div className="person"><div className="avatar a">서</div><div><b>서진</b><small>12분 전</small></div></div><span>01</span></div><h3>잔잔하고 평온해</h3><p>느린 음악을 들으며 걷고 싶은 오후야.</p><div className="meters"><label>에너지 <span><i style={{width:"68%"}}/></span><b>68%</b></label><label>보고 싶은 마음 <span><i style={{width:"84%"}}/></span><b>84%</b></label></div></article>
   <article className="mood-card lavender"><div className="card-top"><div className="person"><div className="avatar b">다</div><div><b>다연</b><small>1시간 전</small></div></div><span>02</span></div><h3>조금 설레는 마음</h3><p>일찍 끝나면 조용한 카페에 같이 갈까?</p><div className="meters"><label>에너지 <span><i style={{width:"82%"}}/></span><b>82%</b></label><label>보고 싶은 마음 <span><i style={{width:"91%"}}/></span><b>91%</b></label></div></article>
  </section>
  <section className="bento">
   <article className="want-card"><div className="icon-bubble peach">01</div><div><small>오늘 먹고 싶은 것</small><h3>따뜻한 샤브샤브</h3><p>서진과 다연의 선택이 통했어요</p></div><span className="match">취향 일치!</span></article>
   <article className="want-card"><div className="icon-bubble purple">♧</div><div><small>오늘 하고 싶은 것</small><h3>한강 따라 걷기</h3><p>선선해지면 천천히 걸어요</p></div><span>→</span></article>
   <article className="note-card"><div className="note-head"><span>LOVING NOTE</span><button onClick={()=>setLiked(!liked)} className={liked?"liked":""} aria-label="좋아요">♡</button></div><blockquote>“오늘 아침 졸린 목소리로<br/>잘 다녀오라고 해줘서 고마워.<br/><em>그 한마디가 하루 종일 따뜻했어.</em>”</blockquote><div className="note-author"><div className="avatar b">다</div><div><b>다연이 보냄</b><small>오늘 오전 8:42</small></div></div></article>
   <article className="feeling-card"><div><span>마음 알림</span><i>읽지 않음</i></div><h3>다연님이 나누고 싶은<br/>마음이 있어요.</h3><p>급하지 않아요. 서로에게 여유가 생겼을 때 천천히 읽어보세요.</p><Link href="/app/feelings">마음 확인하기 →</Link></article>
  </section>
  <section className="weekly"><div><span>처음 맞는 우리의 주</span><h2>2일 중 2일, 마음을 나눴어요</h2><p>작은 안부가 우리 사이를 더 단단하게 만들어요.</p></div><div className="week-days">{[["월",""],["화",""],["수",""],["목","✓"],["금","✓"],["토",""],["일",""]].map(([d,s],i)=><div key={d} className={s==="✓"?"done":i>4?"future":"miss"}><small>{d}</small><span>{s}</span></div>)}</div><div className="streak"><strong>♥ 2</strong><span>일 연속 기록 중</span></div></section>
  <footer className="dashboard-footer"><span>둘만의 공간은 안전하게 보호되고 있어요 · 모든 기록은 오직 두 사람만 볼 수 있어요</span><span>마지막 동기화 방금 전</span></footer>
 </div>
}
