"use client";
import { generate, reset } from "@/redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import SurveyItem from "@/components/SurveyItem";
import { firstSurvey, survey } from "@/api";

const page = () => {
  const userId = useAppSelector((state) => state.userReducer.value);
  const dispatch = useAppDispatch();
  const [no, setNo] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    dispatch(generate());
    console.log(userId)
    firstSurvey(userId, no).then((response:any) => {
      console.log(response)
      // const q: string = response.data;
      setQuestion(response);
    })
  }, []);

  const confirmAnswer = () => {
    if (answer) {
      survey(userId, no + 1, question, answer).then((response:any) => {
        console.log(response)
        // const q: string = response.data;
        setQuestion(response);
      })
      setNo(no + 1);
    }
  }

  if (question.length > 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="text-3xl">DPTI 검사</div>
        <div className="flex flex-col border-solid border-2 border-gray-50 items-center justify-between p-8">
          검사 영역입니다. {userId} / {no} / {answer}
          <SurveyItem question={question} no={no} setNo={setNo} setAnswer={setAnswer} />
          <button className="btn-base mt-8" onClick={() => confirmAnswer()}>확인</button>
        </div>
        <button onClick={() => dispatch(generate())}>gen</button>
        <button onClick={() => dispatch(reset())}>gen</button>
        <button onClick={() => setNo(no + 1)}>gen</button>
          <Link className="btn-base mt-8" href="/result">
            다음으로
          </Link>
      </div>
    );
  }
};

export default page;
