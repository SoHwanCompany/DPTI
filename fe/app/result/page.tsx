"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { add, reset } from "@/redux/historySlice";

import { result } from "@/api";

import { imgMatching } from "@/constants";

const page = () => {
  const history = useAppSelector((state) => state.historyReducer.history);

  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);
  const [id, setId] = useState(0);
  const [companies, setCompanies] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    result(history).then((response) => {
      setTitle(response.title);
      setPosition(response.title.replace("자", ""));
      setScore(response.score);
      setId(response.id);
      setDescription(response.description);
      setCompanies(response.companies);
      setStacks(response.stacks);
      setIsLoading(true);
    });
  }, []);

  const imgUrl = `/${imgMatching(title, id)}.png`;

  if (title.length === 0) {
    <>
      <div>오류가 발생했어요</div>
      <Link className="btn-base" href="/">
        홈으로
      </Link>
    </>;
  }
  if (title.length > 0 && isLoading) {
    return (
      <>
        <div className="absolute right-0 text-xl text-gray-500">
          Development Position Type Indicator
        </div>
        <Link href="/" className="flex flex-col items-center text-3xl justify-center pt-8">
          DPTI 검사 결과
        </Link>
        <div className="flex min-h-screen flex-row items-center text-xl">
          <div className="flex-1 flex-col text-center px-16">
            <div className="text-3xl">{title}</div>
            <Image
              priority
              src={imgUrl}
              width={480}
              height={480}
              alt="result image"
              className="m-auto p-8"
            />
            <div className="">{position}에 소질이 있으시군요!</div>
            <div className="">{description}</div>
          </div>

          <div className="flex-1 flex-col items-center justify-between px-16 text-center text-xl ">
            <div className=" text-2xl p-8">
              <div>적성 점수는 {score}점입니다.</div>
            </div>

            <div className="flex flex-col text-center p-8">
              <div>관련 스택으로는</div>
              <div className="py-2 text-2xl">{stacks.map((e, key) => e + ", ")}</div>
              <div>등이 있습니다.</div>
            </div>
            <div className="flex flex-col text-center p-8">
              <div>지원해볼만한 회사는</div>
              <div className="py-2 text-2xl">
                {companies.map((e, key) => (
                  <Link
                    target="_blank"
                    href={`https://www.wanted.co.kr/search?query=${encodeURIComponent(e)}`}
                  >
                    {e} ,
                  </Link>
                ))}
              </div>
              <div>등이 있습니다.</div>
            </div>
            <div className="flex flex-row items-center justify-center text-center p-8">
              <Link
                className="btn-base m-2"
                target="_blank"
                href={`https://www.wanted.co.kr/wdlist/518/${id}?country=kr&job_sort=company.response_rate_order&years=0&locations=all`}
              >
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
  } else {
    return (
      <>
        <div className="absolute right-0 text-xl text-gray-500">
          Development Position Type Indicator
        </div>
        <Link href="/" className="flex flex-col items-center text-3xl justify-center pt-8">
          DPTI 검사 결과
        </Link>
        <div className="flex min-h-screen flex-row items-center text-xl">
          <div className="flex-1 flex-col text-center px-16">
            <div className="text-3xl"></div>
            <Image
              priority
              src="/default.png"
              width={480}
              height={480}
              alt="result image"
              className="m-auto p-8 animate-pulse"
            />
            <div className=""></div>
            <div className=""></div>
          </div>

          <div className="flex-1 flex-col items-center justify-between px-16 text-center text-xl ">
            <div className=" text-2xl p-8">
              <div></div>
            </div>

            <div className="flex flex-col text-center p-8">
              <div></div>
              <div className="py-2 text-2xl"></div>
              <div></div>
            </div>
            <div className="flex flex-col text-center p-8">
              <div></div>
              <div className="py-2 text-2xl"></div>
              <div></div>
            </div>
            <div className="flex flex-row items-center justify-center text-center p-8">
              <button className="btn-base m-2"></button>
              <button className="btn-base"></button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default page;
