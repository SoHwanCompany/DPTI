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

    public ResultDTO getResult(List<QnADTO> list) {
        ResultDTO result = null;
        Map<String, Object> bodyMap = new HashMap<>();
        bodyMap.put("hash", QUESTION_HASH);

        try {
            JsonNode response = webClient.post().header("project", PROJECT).header("serviceType", SERVICE_TYPE).header("apiKey", API_KEY).bodyValue(bodyMap).retrieve().bodyToMono(JsonNode.class).block();

            // 추후 데이터 전처리
            ObjectMapper mapper = new ObjectMapper();
            ObjectReader reader = mapper.readerFor(new TypeReference<List<String>>() {});
// use it
            JsonNode data = response.get("choices").get(0).get("message").get("content");
            result = ResultDTO.builder().id(Integer.parseInt(data.get("id").toString()))
                    .title(data.get("title").toString())
                    .score(Integer.parseInt(data.get("score").toString()))
                    .description(data.get("description")
                            .toString()).stacks(reader.readValue(data.get("stacks"))).build();
        } catch (Exception e) {
            log.error("Error loading result from LaaS API = {}", e.getMessage());
            List<String> st = Arrays.asList("Java", "Node.js", "C", "Nginx");
            result = ResultDTO.builder().id(872).title("서버 개발자").score(80).description("서버 개발자는 서버를 개발하는 직무입니다.").stacks(st).build();
        }

        return result;
    }
}
