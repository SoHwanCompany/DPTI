package com.sohwan.dpti.api.client;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
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
        this.webClient = WebClient.builder().baseUrl(LAAS_URL).defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE).build();
    }

    public String getQuestion(Map<String, Object> bodyMap) {
        String result = null;
        bodyMap.put("hash", QUESTION_HASH);

        try {
            JsonNode response = webClient.post().header("project", PROJECT).header("serviceType", SERVICE_TYPE).header("apiKey", API_KEY).bodyValue(bodyMap).retrieve().bodyToMono(JsonNode.class).block();

            result = response.get("choices").get(0).get("message").get("content").toString();
        } catch (Exception e) {
            log.error("Error loading question from LaaS API = {}", e.getMessage());
        }

        return result;
    }

    public ResultDTO getResult(Map<String, Object> bodyMap) {
        ResultDTO result = null;
        bodyMap.put("hash", RESULT_HASH);

        try {
            JsonNode response = webClient.post().header("project", PROJECT).header("serviceType", SERVICE_TYPE).header("apiKey", API_KEY).bodyValue(bodyMap).retrieve().bodyToMono(JsonNode.class).block();

            String data = response.get("choices").get(0).get("message").get("content").toString()
                    .replace("\\n", "")
                    .replace("\\", "")
                    .replace("\"{","{")
                    .replace("}\"", "}");

            // 데이터 전처리
            ObjectMapper mapper = new ObjectMapper();
            result = mapper.readValue(data, ResultDTO.class);
        } catch (Exception e) {
            log.error("Error loading result from LaaS API = {}", e.getMessage());
        }

        return result;
    }
}
