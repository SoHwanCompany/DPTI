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
public class QuestionDTO {
    // 유형 (Q : 질문, A : 대답)
    String type;

    // 질문 번호
    int id;

    // 질문
    String question;

    // 대답 항목
    @Builder.Default
    List<String> answer = new ArrayList<>();
}
