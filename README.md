# 우리 둘의 공간 (Our Space)

두 사람만 로그인해 매일의 상태, 마음, 질문, 추억과 버킷리스트를 함께 기록하는 비공개 커플 웹 앱입니다. 차분한 에디토리얼 타이포그래피, 따뜻한 뉴트럴 팔레트와 제한적인 코랄·라벤더 포인트로 구성했습니다.

## 구조

- `app/`: Next.js App Router 페이지와 레이아웃
- `app/components/`: 앱 셸, 대시보드, 기능별 인터랙티브 화면
- `supabase/schema.sql`: 테이블, 인덱스, 함수, RLS 및 Storage 정책
- `.env.example`: 필요한 환경 변수

화면은 서버 컴포넌트를 기본으로 하고, 입력·테마·낙관적 반응처럼 상호작용이 필요한 경계만 클라이언트 컴포넌트입니다. 데이터 계층은 `couple_id`를 소유권 경계로 삼으며 모든 접근을 RLS로 다시 검사합니다. 오늘의 질문 답변은 일반 테이블 조회로는 자기 답만 볼 수 있고, 두 답이 모두 있을 때만 `revealed_answers()`를 통해 공개됩니다.

## 주요 경로

`/`, `/auth/login`, `/auth/signup`, `/onboarding`, `/pair`, `/app`, `/app/today`, `/app/feelings`, `/app/questions`, `/app/memories`, `/app/bucket-list`, `/app/settings`

## 시작하기

1. Node.js 20 이상과 npm을 준비합니다.
2. `npm install`을 실행합니다.
3. `.env.example`을 `.env.local`로 복사하고 Supabase 값을 입력합니다.
4. Supabase SQL Editor에서 `supabase/schema.sql`을 실행합니다.
5. Supabase Auth에서 이메일/비밀번호와 Magic Link를 활성화합니다.
6. `npm run dev`로 실행하고 `http://localhost:3000`을 엽니다.

현재 UI에는 완성된 제품 흐름을 확인할 수 있도록 현실적인 한국어 데모 데이터가 들어 있습니다. 실제 데이터 연결 시 각 폼의 상태를 Server Action으로 옮기고 Supabase SSR 클라이언트를 연결하면 됩니다. 사진은 `memory-photos/{couple_id}/{memory_id}/{filename}` 경로로 업로드해야 Storage 정책과 일치합니다.

## 배포

Vercel에 저장소를 연결하고 `.env.example`의 키를 프로젝트 환경 변수로 등록합니다. `SUPABASE_SERVICE_ROLE_KEY`는 브라우저 코드에 import하지 마세요. Supabase Auth의 Site URL과 Redirect URL에 배포 도메인을 추가합니다.

## 보안 메모

- 한 사용자는 `couple_members.user_id unique` 제약으로 하나의 커플에만 속합니다.
- 초대 코드는 만료·정원 검사를 하나의 잠금 트랜잭션 함수에서 수행합니다.
- 감정 글과 일일 상태는 작성자만 수정/삭제하고 파트너는 읽고 반응할 수 있습니다.
- 사진 버킷은 비공개이며 객체 경로의 첫 세그먼트와 커플 멤버십을 검증합니다.
- 서비스 역할 키는 마이그레이션·관리용 서버 환경에만 둡니다.

## 품질 확인

`npm run build`와 `npm run lint`를 실행한 뒤 모바일·키보드 탐색·감소된 모션 설정을 확인하세요.

## Cloudflare Workers 배포

이 저장소에는 Cloudflare Workers용 OpenNext 설정이 포함되어 있습니다.

1. `.env.example`을 참고해 로컬 `.env.local`을 만들고 Supabase 값을 설정합니다.
2. `npm install`을 실행합니다.
3. 로컬 Workers 런타임 확인: `npm run preview:cf`
4. Cloudflare 인증: `npx wrangler login`
5. Cloudflare 대시보드/Workers의 Variables and Secrets에 다음 값을 등록합니다.
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (서버 전용 secret)
   - `NEXT_PUBLIC_SITE_URL` (실제 `https://<name>.workers.dev` 또는 커스텀 도메인)
6. 배포: `npm run deploy:cf`
7. 배포 후 Supabase Auth의 Site URL / Redirect URLs에도 실제 Cloudflare 도메인을 등록합니다.

Cloudflare 설정 파일은 `wrangler.jsonc`, OpenNext 설정은 `open-next.config.ts`입니다.
