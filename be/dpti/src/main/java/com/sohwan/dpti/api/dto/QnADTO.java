package com.sohwan.dpti.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class QnADTO {

    // 질문
    String question;

    // 대답 항목
    String answer;
}
