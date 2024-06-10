package com.flux.demo.common;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "hello world";
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello hello world";
    }
}