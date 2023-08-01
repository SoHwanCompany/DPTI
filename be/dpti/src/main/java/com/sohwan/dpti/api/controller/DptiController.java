package com.sohwan.dpti.api.controller;

import com.sohwan.dpti.api.dto.QuestionDTO;
import com.sohwan.dpti.api.service.DptiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dpti")
@RequiredArgsConstructor

public class DptiController {
    private final DptiService dptiService;
}
