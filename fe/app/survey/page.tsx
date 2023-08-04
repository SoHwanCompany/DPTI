"use client";
import { generate, reset } from "@/redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import SurveyItem from "@/components/SurveyItem";
import SurveyItemSkeleton from "@/components/SurveyItemSkeleton";
import { firstSurvey, survey } from "@/api";

const page = () => {
  const userId = useAppSelector((state) => state.userReducer.value);
  const dispatch = useAppDispatch();
  const [no, setNo] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(generate());
    console.log(userId);
    firstSurvey(userId, no).then((response: any) => {
      console.log(response);
      // const q: string = response.data;
      setQuestion(response);
      setIsLoading(true);
    });
  }, []);

  const confirmAnswer = () => {
    if (answer) {
      survey(userId, no + 1, question, answer).then((response: any) => {
        console.log(response);
        // const q: string = response.data;
        setQuestion(response);
        setIsLoading(true);
      });
      setNo(no + 1);
      setIsLoading(false);
    }
  };

  if (question.length > 0) {
    return (
      <>
        <div className="absolute right-0 text-xl text-gray-500">
          Development Position Type Indicator
        </div>
        <div className="flex flex-col items-center justify-between p-8 text-3xl">DPTI 검사</div>
        <div className="flex min-h-screen flex-col items-center p-8">
          <div className="flex flex-col items-center justify-between pb-8">
            <div className="text-xl">
              {no} / {10}
            </div>
            {/* 검사 영역입니다. {userId} / {no} / {answer} */}
            {isLoading ? (
              <SurveyItem question={question} no={no} setNo={setNo} setAnswer={setAnswer} />
            ) : (
              <SurveyItemSkeleton />
            )}

            {isLoading ? (
              <button className="btn-base mt-12" onClick={() => confirmAnswer()}>
                확인
              </button>
            ) : (
              ""
            )}
          </div>
          {no > 9 ? (
            <Link className="btn-base mt-8" href="/result">
              결과 보러 가기
            </Link>
          ) : (
            ""
          )}
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
            <button className="btn-base mt-8 animate-pulse"></button>
          </div>
          {/* <button>gen</button>
        <button>gen</button>
        <button>gen</button> */}
          {/* <div className="btn-base mt-8 animate-pulse	">다음으로</div> */}
        </div>
      </>
    );
  }
};

export default page;
