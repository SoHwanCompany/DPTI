package com.sohwan.dpti.api.service;

import com.sohwan.dpti.api.client.WantedClient;
import com.sohwan.dpti.api.client.WantedLaaSClient;
import com.sohwan.dpti.api.dto.ResultDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DptiServiceImpl implements DptiService {

    private final WantedClient wantedClient;
    private final WantedLaaSClient wantedLaaSClient;

    public String getQuestion(String history) {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> paramsMap = new HashMap<>();
        paramsMap.put("history", history);
        map.put("params", paramsMap);

        return wantedLaaSClient.getQuestion(map);
    }

    public ResultDTO getResult(String history) {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> paramsMap = new HashMap<>();
        paramsMap.put("history", history);
        map.put("params", paramsMap);

        ResultDTO result = wantedLaaSClient.getResult(map);

        if(result != null) {
            result.setCompanies(wantedClient.getCompanies(result.getId()));
        }

        return result;
    }
}

