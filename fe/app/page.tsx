import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 ">
      <div className="flex flex-col items-center">
        <div className="text-xl">Development Position Type Indicator</div>
        <div className="text-4xl font-bold p-8">DPTI</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl">자신에게 맞는 직무를 찾아보세요.</div>
        <Link href="/survey" className="animate-pulse p-16 text-gray-500 text-2xl">
          찾으러 가기
        </Link>
      </div>

      <div className="flex flex-col items-center font-semibold">
        <div>해당 페이지는 2023 조코딩 해커톤에서 제작되었습니다.</div>
        <div>재미로만 봐주세요! (과몰입 금지)</div>
        <div className="pt-8 text-gray-500">&copy;COPYRIGHT 소환컴퍼니</div>
      </div>
    </main>
  );
}
