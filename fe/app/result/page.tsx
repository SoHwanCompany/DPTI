"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { result } from "@/api";

const page = () => {
  const userId = useAppSelector((state) => state.userReducer.value);
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);
  const [id, setId] = useState(0);
  const [companies, setCompanies] = useState([]);
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    result(userId, "", "").then((response) => {
      console.log(response)
      setTitle(response.title);
      setPosition(response.title.replace("자", ""));
      setScore(response.score)
      setId(response.id)
      setDescription(response.description);
      setCompanies(response.companies);
      setStacks(response.stacks)
    })
}, [])

  return (
    <>
      <div className="flex flex-col items-center text-3xl justify-center pt-8">DPTI 검사 결과</div>
      <div className="flex min-h-screen flex-row items-center justify-center text-xl">
        <div className="flex-1 flex-col items-center justify-between text-center px-16">
          <div className="text-3xl">{title}</div>
          <Image
            src="/sample.png"
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
            <div className="py-2 text-2xl">{stacks.map((e) => (e + ", ")) }</div>
            <div>등이 있습니다.</div>
          </div>
          <div className="flex flex-col text-center p-8">
            <div>지원해볼만한 회사는</div>
            <div className="py-2 text-2xl">{companies.map((e) => (<Link  target ='_blank' href={`https://www.wanted.co.kr/search?query=${encodeURIComponent(e)}`}>{e} ,</Link>))}</div>
            <div>등이 있습니다.</div>
          </div>
          <div className="flex flex-row items-center justify-center text-center p-8">
            <Link className="btn-base m-2" target ='_blank' href={`https://www.wanted.co.kr/wdlist/518/${id}?country=kr&job_sort=company.response_rate_order&years=0&locations=all`}>
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
