package com.sohwan.dpti.api.client;

import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class WantedLaaSClient {
    private final static String LAAS_URL = "https://api-laas.wanted.co.kr/api/preset/chat/completions";
    private final WebClient webClient;

    @Value("${wanted.LaaS.project}")
    private String PROJECT;

    @Value("${wanted.LaaS.serviceType}")
    private String SERVICE_TYPE;

    @Value("${wanted.LaaS.apiKey}")
    private String API_KEY;

    @Value("${wanted.LaaS.questionHash}")
    private String QUESTION_HASH;

    @Value("${wanted.LaaS.resultHash}")
    private String RESULT_HASH;

    public WantedLaaSClient() {
        // webClient 기본 설정
        System.out.println("webclient");
        this.webClient = WebClient.builder()
                .baseUrl(LAAS_URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    public String getQuestion(Map<String, Object> bodyMap) {
        String result = null;
        bodyMap.put("hash", QUESTION_HASH);

        try {
            JsonNode response = webClient
                    .post()
                    .header("project", PROJECT)
                    .header("serviceType", SERVICE_TYPE)
                    .header("apiKey", API_KEY)
                    .bodyValue(bodyMap)
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();

            result = response.get("choices").get(0).get("message").get("content").toString();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    public ResultDTO getResult(List<QnADTO> list) {
        ResultDTO result = null;
        Map<String, Object> bodyMap = new HashMap<>();
        bodyMap.put("hash", QUESTION_HASH);

        try {
            JsonNode response = webClient
                    .post()
                    .header("project", PROJECT)
                    .header("serviceType", SERVICE_TYPE)
                    .header("apiKey", API_KEY)
                    .bodyValue(bodyMap)
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }
}
