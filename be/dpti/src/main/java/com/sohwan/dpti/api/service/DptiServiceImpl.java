package com.sohwan.dpti.api.service;

import com.sohwan.dpti.api.client.WantedLaaSClient;
import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;
import com.sohwan.dpti.api.repository.QnARedisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DptiServiceImpl implements DptiService {

    private final WantedLaaSClient wantedLaaSClient;
    private final QnARedisRepository qnARedisRepository;

    public String getQuestion(String id, int no, QnADTO qnADTO) {
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> paramsMap = new HashMap<>();

        if (qnADTO != null) {
            qnARedisRepository.set(id + no, qnADTO);
            paramsMap.put("question", qnADTO.getQuestion());
            paramsMap.put("answer", qnADTO.getAnswer());
        }

        map.put("params", paramsMap);
        return wantedLaaSClient.getQuestion(map);
    }

    public ResultDTO getResult(String id, QnADTO qnADTO) {
        List<QnADTO> list = new ArrayList<>(qnARedisRepository.getList(id));
        list.add(qnADTO);
        return wantedLaaSClient.getResult(list);
    }
}

