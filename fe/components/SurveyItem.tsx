"use client";

import React from "react";
import { SurveyItemProps } from "@/types";

const SurveyItem = ({ question, no, setNo, setAnswer }: SurveyItemProps) => {

  return (
    <>
      <div className="lg:text-5xl sm:text-3xl text-center p-16">{question}</div>
      <div className="flex flex-row w-auto gap-8">
        <button className="btn-answer" onClick={() => {setAnswer("매우 그렇지 않다")}}>
          <div className="lg:text-2xl sm:text-xl">매우 그렇지 않다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("그렇지 않다")}}>
          <div className="lg:text-2xl sm:text-xl">그렇지 않다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("보통이다")}}>
          <div className="lg:text-2xl sm:text-xl">보통이다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("그렇다")}}>
          <div className="lg:text-2xl sm:text-xl">그렇다</div>
        </button>

        <button className="btn-answer" onClick={() => {setAnswer("매우 그렇다")}}>
          <div className="lg:text-2xl sm:text-xl">매우 그렇다</div>
        </button>
      </div>
    </>
  );
};

export default SurveyItem;
