"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [["/app","⌂","홈"],["/app/today","☀","오늘"],["/app/feelings","♡","마음"],["/app/questions","?","질문"],["/app/memories","▧","추억"],["/app/bucket-list","✓","버킷리스트"]];
export function AppShell({children}:{children:React.ReactNode}) {
 const path=usePathname(); const [dark,setDark]=useState(false); const [open,setOpen]=useState(false);
 useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light"},[dark]);
 return <div className="app-shell">
   <aside className={open?"sidebar open":"sidebar"}>
    <Link href="/app" className="brand"><span className="brand-mark">우</span><span>우리 둘의 공간<small>Seojin &amp; Dayeon</small></span></Link>
    <nav>{nav.map(([href,icon,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={path===href?"active":""}><span>{icon}</span>{label}{label==="마음"&&<i>1</i>}</Link>)}</nav>
    <div className="sidebar-bottom"><Link href="/app/settings"><span>⚙</span> 설정</Link><button onClick={()=>setDark(!dark)} aria-label="테마 전환"><span>{dark?"☀":"☾"}</span> {dark?"라이트 모드":"다크 모드"}</button><div className="couple-mini"><div className="avatar a">서</div><div><b>서진 &amp; 다연</b><small>함께한 지 2일</small></div><span>•••</span></div></div>
   </aside>
   <header className="mobile-head"><button onClick={()=>setOpen(!open)} aria-label="메뉴 열기">☰</button><span className="brand"><span className="brand-mark">우</span>우리 둘의 공간</span><div className="avatar a">서</div></header>
   <main className="app-main">{children}</main>
   <nav className="bottom-nav">{nav.slice(0,5).map(([href,icon,label])=><Link key={href} href={href} className={path===href?"active":""}><span>{icon}</span><small>{label}</small></Link>)}</nav>
 </div>
}
