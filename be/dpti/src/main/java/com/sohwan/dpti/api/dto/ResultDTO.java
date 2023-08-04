package com.sohwan.dpti.api.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    // 직무 ID
    int id;

    // 직무 명
    String title;

    // 적성 점수
    int score;

    // 관련 스택
    @Builder.Default
    List<String> stacks = new ArrayList<>();

    // 직무 설명
    String description;

    // 관련 기업
    @Builder.Default
    List<String> companies = new ArrayList<>();

    @JsonCreator
    public ResultDTO(@JsonProperty("id") int id,
                      @JsonProperty("title") String title,
                      @JsonProperty("score") int score,
                      @JsonProperty("stacks") List<String> stacks,
                      @JsonProperty("description") String description) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.stacks = stacks;
        this.description = description;
    }

    public void setCompanies(List<String> companies) {
        this.companies = companies;
    }
}
