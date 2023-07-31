import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center text-3xl justify-between pt-8">DPTI 검사 결과</div>
      <div className="flex min-h-screen flex-row items-center p-8">
        <div className="flex-1 flex-col items-center justify-between px-16">
          <div className="flex-1 flex-col items-center justify-between text-3xl">
            프론트엔드 개발자
          </div>
          <Image src="/sample.png" width={480} height={480} alt="result image" />
          <div className="flex flex-col items-center justify-between text-xl">
            프론트엔드 개발에 소질이 있으시군요!
          </div>
          <div className="flex flex-col items-center justify-between text-xl">
            프론트엔드는 웹페이지의 화면을 구현하는 직무입니다.
          </div>
        </div>

        <div className="flex-1 flex-col items-center justify-between px-16">
          <div className="flex flex-col items-center justify-between text-xl p-8">
            <div>관련 스택으로는</div>
            <div > HTML, CSS, JAVASCRIPT, REACT.JS, NEXT.JS TAILWIND</div>
            <div>등이 있습니다.</div>
          </div>
          <div className="flex flex-col items-center justify-between text-xl p-8">
            <div>지원해볼만한 회사는</div>
            <div className="py-2 text-2xl">네이버, 쿠팡, 당근마켓</div>
            <div>등이 있습니다.</div>
          </div>
          <div className="flex flex-row items-center justify-center text-xl p-8">
              <Link className="btn-base m-2" href={`https://naver.com`}>
                원티드에서 더 알아보기
              </Link>
              <Link className="btn-base" href="/">
                다시하러 가기
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
