package com.sohwan.dpti.api.controller;

import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;
import com.sohwan.dpti.api.service.DptiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1/dpti")
@RequiredArgsConstructor
public class DptiController {

    private final DptiService dptiService;

    @PostMapping
    public ResponseEntity<String> getQuestion(@RequestBody Map<String, Object> map) {
        String history = map.get("history").toString();
        log.info("Sending a question to user {}", history);
        return new ResponseEntity<>(dptiService.getQuestion(history), HttpStatus.OK);
    }

    @PostMapping("/result")
    public ResponseEntity<ResultDTO> getResult(@RequestBody Map<String, Object> map) {
        String history = map.get("history").toString();
        log.info("Sending a result to user {}", history);
        return new ResponseEntity<>(dptiService.getResult(history), HttpStatus.OK);
    }
}
