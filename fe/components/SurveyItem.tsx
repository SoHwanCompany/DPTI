"use client";

import React, { useState, ChangeEvent } from "react";
import { SurveyItemProps } from "@/types";

const SurveyItem = ({ question, no, setNo, setAnswer }: SurveyItemProps) => {
  const [selectedValue, setSelectedValue] = useState(""); // 사용자가 선택한 값을 상태로 관리

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="text-7xl text-center p-8">{question}</div>
      <div className="flex flex-row w-auto gap-8">
        <button className="btn-answer" onClick={() => {setAnswer("매우 그렇지 않다.")}}>
          <div className="text-2xl">매우 그렇지 않다.</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("그렇지 않다.")}}>
          <div className="text-2xl">그렇지 않다.</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("보통이다")}}>
          <div className="text-2xl">보통이다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("그렇다.")}}>
          <div className="text-2xl">그렇다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("매우 그렇다.")}}>
          <div className="text-2xl">매우 그렇다.</div>
        </button>
      </div>
    </>
  );
};

export default SurveyItem;
