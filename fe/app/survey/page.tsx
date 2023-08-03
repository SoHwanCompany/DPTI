"use client";
import React, { useEffect, useState } from "react";
import SurveyItem from "@/components/SurveyItem";
import { surveyList } from "@/constants";
import Link from "next/link";

import { generate, reset } from "@/redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const page = () => {
  const count = useAppSelector((state) => state.userReducer.value);
  const dispatch = useAppDispatch();
  const [no, setNo] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    dispatch(generate());
  }, []);

  useEffect(() => {
    // 번호가 바뀌면 그 번호로 요청한다.
    // setQuestion(`hi ${no}`);
    setQuestion(surveyList)
  }, [no]);

  const confirmAnswer = () => {
    if (answer) {
      setNo(no + 1);
    }
  }

  if (question.length > 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="text-3xl">DPTI 검사</div>
        <div className="flex flex-col border-solid border-2 border-gray-50 items-center justify-between p-8">
          검사 영역입니다. {count} / {no} / {answer}
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
