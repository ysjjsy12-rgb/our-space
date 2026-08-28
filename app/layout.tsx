import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "우리 둘의 공간 · Our Space", description: "사랑하는 두 사람만의 조용한 기록과 대화 공간" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
