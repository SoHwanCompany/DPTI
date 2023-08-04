import React from "react";

import SurveyItem from "@/components/SurveyItem";

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="text-3xl">DPTI 검사</div>
      <div className="flex flex-col border-solid border-2 border-gray-50 items-center justify-between p-8">
        {/* <SurveyItem/> */}
        <button className="btn-base mt-8">확인</button>
      </div>
      <div className="btn-base mt-8">다음으로</div>
    </div>
  );
};

export default loading;
