"use client";

import React, { useState, ChangeEvent } from 'react';
import { SurveyItemProps } from "@/types"

const SurveyItem = ({ title }: SurveyItemProps) => {
  const [selectedValue, setSelectedValue] = useState(""); // 사용자가 선택한 값을 상태로 관리

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div>{title}</div>
      <div className="flex">
        <div>매우 그렇지 않다.</div>
        <div className="radio-buttons">
          {/* 5개의 라디오 버튼을 생성하고, value 값으로 각 원의 등급을 표시 */}
          <label>
            <input
              type="radio"
              name="rating"
              value="1"
              checked={selectedValue === "1"}
              onChange={handleRadioChange}
            />
            원1
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="2"
              checked={selectedValue === "2"}
              onChange={handleRadioChange}
            />
            원2
          </label>
          {/* 나머지 원들도 동일하게 생성 */}
          <label>
            <input
              type="radio"
              name="rating"
              value="3"
              checked={selectedValue === "3"}
              onChange={handleRadioChange}
            />
            원3
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="4"
              checked={selectedValue === "4"}
              onChange={handleRadioChange}
            />
            원4
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="5"
              checked={selectedValue === "5"}
              onChange={handleRadioChange}
            />
            원5
          </label>
        </div>
        <div>매우 그렇다.</div>
      </div>
    </>
  )
}

export default SurveyItem