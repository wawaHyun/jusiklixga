package com.flux.demo.common.config;

public class CustomExceprion extends RuntimeException {
    private static final long serialVersionUID = 4157898336634273053L;

    public CustomExceprion(String type) {
        System.out.println("MY-ERROR "+type+" 의 예외가 발생했습니다.");
    }
}
