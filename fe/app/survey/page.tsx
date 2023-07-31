import React from 'react'
import SurveyItem from "@/components/SurveyItem"
import { surveyList } from "@/constants"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="text-3xl">DPTI 검사</div>
      <div className="border-solid border-2 border-indigo-300">
        검사 영역입니다.
        {surveyList && surveyList.map((e) => (
          <SurveyItem title = {e} />
        ))}
      </div>
      <Link className="btn-base" href="/result">
        다음으로
      </Link>
    </div>
  )
}

export default page