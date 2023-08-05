"use client";
import { add, reset } from "@/redux/historySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import SurveyItem from "@/components/SurveyItem";
import SurveyItemSkeleton from "@/components/SurveyItemSkeleton";
import { survey } from "@/api";

const page = () => {
  const history = useAppSelector((state) => state.historyReducer.history);
  const dispatch = useAppDispatch();
  const limit = 10;
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [no, setNo] = useState(0);
  const [question, setQuestion] = useState("");
  const [len, setLen] = useState(1);

  useEffect(() => {
    dispatch(reset());
    survey(history).then((response: any) => {
      setQuestion(response);
      setIsLoading(true);
      console.log(history)
    });
  }, []);

  useEffect(() => {
    survey(history).then((response: any) => {
      console.log(history)
      setQuestion(response);
      setIsLoading(true);
    });
    setNo(no + 1);
    setIsLoading(false);
  }, [len])

  const confirmAnswer = () => {
    dispatch(add(history + " " + question + "라는 질문에 " + answer + "라고 대답했다."));
    setLen(history.length);
  };

  if (question.length > 0) {
    return (
      <>
        <div className="absolute right-0 text-xl text-gray-500">
          Development Position Type Indicator
        </div>
        <Link href="/" className="flex flex-col items-center justify-between p-8 text-3xl">
          DPTI 검사
        </Link>
        <div className="flex min-h-screen flex-col items-center p-8">
          <div className="flex flex-col items-center justify-between pb-8">
            <div className="text-xl">{no <= limit ? `${no} / ${limit}` : ""}</div>
            {isLoading ? (
              <SurveyItem question={question} no={no} setNo={setNo} setAnswer={setAnswer} />
            ) : (
              <SurveyItemSkeleton />
            )}

            {no === limit ? (
              <Link className="btn-base mt-8" href="/result">
                결과 보러 가기
              </Link>
            ) : isLoading && no < limit ? (
              <button className="btn-base mt-12" onClick={() => confirmAnswer()}>
                확인
              </button>
            ) : (
              <>
                <Link className="btn-base mt-8" href="/">
                  홈으로
                </Link>
                <Link href="/" className="pt-8 text-gray-500 animate-pulse">
                  너무 오래 화면이 바뀌지 않으면 홈으로 버튼을 눌러주세요
                </Link>
              </>
            )}
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
        <div className="flex flex-col items-center justify-between p-8 text-3xl">DPTI 검사</div>
        <div className="flex min-h-screen flex-col items-center p-8">
          <div className="flex flex-col items-center justify-between p-8">
            <SurveyItemSkeleton />
            {/* <button className="btn-base mt-8 animate-pulse"></button> */}
          </div>
          {/* <button>gen</button>
        <button>gen</button>
        <button>gen</button> */}
          <Link className="btn-base" href="/">
            홈으로
          </Link>
          <Link href="/" className="pt-8 text-gray-500 animate-pulse">
            화면이 넘어가지 않으면 홈으로 버튼을 눌러주세요
          </Link>
          {/* <div className="btn-base mt-8 animate-pulse	">다음으로</div> */}
        </div>
      </>
    );
  }
};

export default page;
