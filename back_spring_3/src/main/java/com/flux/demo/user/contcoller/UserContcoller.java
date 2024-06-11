package com.flux.demo.user.contcoller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flux.demo.common.domain.Messenger;
import com.flux.demo.user.domain.UserDto;
import com.flux.demo.user.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@RequestMapping(path="/api/worker")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
@RestController
public class UserContcoller {

    private final UserService service;

      @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody UserDto userDto){
        return ResponseEntity.ok("SUCCESS");
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String accessToken){
        log.info("1- logout request : {}", accessToken);
        return ResponseEntity.ok("SUCCESS");
    }

}
