import Link from "next/link";
import { AmbientAudio } from "./components/ambient-audio";

export default function Landing() {
  return (
    <main className="landing">
      <nav className="landing-nav"><Link href="/" className="brand"><span className="brand-mark">우</span><span>우리 둘의 공간</span></Link><div><Link href="/auth/login" className="text-link">로그인</Link><Link href="/auth/signup" className="button small">둘만의 공간 만들기</Link></div></nav>
      <section className="landing-hero">
        <div className="landing-photo"><img src="/assets/hero-couple.png" alt="욕실 거울 앞에서 함께 양치하는 커플" /></div>
        <div className="eyebrow"><span className="pulse" /> 오직 우리 둘만</div>
        <h1>우리의 계절이<br/><em>오래 흐르도록.</em></h1>
        <p>서진과 다연의 매일이 잔잔히 이어지는 곳. 말하지 못한 마음과 오래 간직하고 싶은 장면을 둘만의 속도로 남겨요.</p>
        <div className="hero-actions"><Link href="/auth/signup" className="button">우리 공간 시작하기 <span>→</span></Link><Link href="/app" className="ghost-button">데모 둘러보기</Link></div>
        <div className="privacy-line">◌ 광고 없이 · 공개 피드 없이 · 단 두 사람만</div>
      </section>
      <section className="preview-wrap" aria-label="서비스 미리보기">
        <div className="preview-card">
          <div className="preview-top"><span>서진 &amp; 다연</span><span>2026. 08. 27부터</span></div>
          <div className="preview-number"><span>함께한 지</span><strong>2</strong><em>days</em></div>
          <div className="preview-grid"><div><small>서진의 오늘</small><b>잔잔하고 평온해</b><span>01</span></div><div><small>다연의 오늘</small><b>조금 설레는 마음</b><span>02</span></div><div className="wide"><small>오늘의 한마디</small><b>“같은 파도 위에서 천천히 오래 가자.”</b></div></div>
        </div>
      </section>
      <section className="feature-strip"><article><span>01</span><h2>오늘의 우리</h2><p>기분과 에너지, 보고 싶은 마음을 부담 없이 나눠요.</p></article><article><span>02</span><h2>안전한 마음 대화</h2><p>서운함도 탓하지 않는 문장으로 차분하게 전해요.</p></article><article><span>03</span><h2>쌓이는 이야기</h2><p>질문, 추억, 버킷리스트가 둘만의 연대기가 돼요.</p></article></section>
      <AmbientAudio />
    </main>
  );
}
