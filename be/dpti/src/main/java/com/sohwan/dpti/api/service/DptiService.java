package com.sohwan.dpti.api.service;

import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;

public interface DptiService {
    String getQuestion(String history);

    ResultDTO getResult(String history);
}
