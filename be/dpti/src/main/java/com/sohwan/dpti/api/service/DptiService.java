package com.sohwan.dpti.api.service;

import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;

public interface DptiService {
    String getQuestion(String id, int no, QnADTO qnADTO);

    ResultDTO getResult(String id, QnADTO qnADTO);
}
