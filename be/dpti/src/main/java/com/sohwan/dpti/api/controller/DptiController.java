package com.sohwan.dpti.api.controller;

import com.sohwan.dpti.api.dto.QnADTO;
import com.sohwan.dpti.api.dto.ResultDTO;
import com.sohwan.dpti.api.service.DptiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/dpti")
@RequiredArgsConstructor
public class DptiController {

    private final DptiService dptiService;

    @PostMapping
    public ResponseEntity<String> getQuestion(@RequestParam String id, @RequestParam int no, @RequestBody(required = false) QnADTO qnADTO) {
        return new ResponseEntity<>(dptiService.getQuestion(id, no, qnADTO), HttpStatus.OK);
    }

    @PostMapping("/result")
    public ResponseEntity<ResultDTO> getResult(@RequestParam String id, @RequestBody QnADTO qnADTO) {
        return new ResponseEntity<>(dptiService.getResult(id, qnADTO), HttpStatus.OK);
    }
}
