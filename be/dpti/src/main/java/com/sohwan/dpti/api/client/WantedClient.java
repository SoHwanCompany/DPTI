package com.sohwan.dpti.api.client;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class WantedClient {

    private final static String WANTED_URL = "https://openapi.wanted.jobs/v1/jobs";
    private final WebClient webClient;

    @Value("${wanted.clientId}")
    private String CLIENT_ID;

    @Value("${wanted.clientSecret}")
    private String CLIENT_SECRET;

    public WantedClient() {
        // webClient 기본 설정
        this.webClient = WebClient.builder()
                .baseUrl(WANTED_URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    public List<String> getCompanies(int id) {
        List<String> companies = new ArrayList<>();
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(WANTED_URL)
                .queryParam("category_tags", id)
                .queryParam("sort", "job.popularity_order")
                .queryParam("offset", 0)
                .queryParam("limit", 3);

        try {
            JsonNode response = webClient
                    .get()
                    .uri(builder.toUriString())
                    .header("wanted-client-id", CLIENT_ID)
                    .header("wanted-client-secret", CLIENT_SECRET)
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();

            for (int i = 0, size = response.get("data").size(); i < size; i++) {
                companies.add(response.get("data").get(i).get("company").get("name").asText());
            }
        } catch (Exception e) {
            log.error("Error loading companies from Wanted API = {}", e.getMessage());
        }

        return companies;
    }
}
