import React, { useState, ChangeEvent } from "react";

const SurveyItemSkeleton = () => {
  const [selectedValue, setSelectedValue] = useState(""); // 사용자가 선택한 값을 상태로 관리

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="lg:text-5xl sm:text-3xl text-center p-16">&nbsp;</div>
      <div className="flex flex-row w-auto gap-8 animate-pulse	">
        <button className="btn-answer">
          <div className="lg:text-2xl sm:text-xl"></div>
        </button>
        <button className="btn-answer">
          <div className="lg:text-2xl sm:text-xl"></div>
        </button>
        <button className="btn-answer">
          <div className="lg:text-2xl sm:text-xl"></div>
        </button>
        <button className="btn-answer">
          <div className="lg:text-2xl sm:text-xl"></div>
        </button>
        <button className="btn-answer">
          <div className="lg:text-2xl sm:text-xl"></div>
        </button>
      </div>
    </>
  );
};

export default SurveyItemSkeleton;
