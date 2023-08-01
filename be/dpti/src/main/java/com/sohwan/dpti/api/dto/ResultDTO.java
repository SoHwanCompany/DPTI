package com.sohwan.dpti.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ResultDTO {
    // 유형 (Q : 질문, A : 대답)
    String type;

    // 직업 번호
    int id;

    // 직무 명
    String title;

    // 적성 점수
    int score;

    // 직무 설명
    String description;
}
