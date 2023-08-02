package com.sohwan.dpti.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ResultDTO {

    // 직무 명
    String title;

    // 적성 점수
    int score;

    // 직무 설명
    String description;

    // 추천 기업
    @Builder.Default
    List<String> companies = new ArrayList<>();
}
