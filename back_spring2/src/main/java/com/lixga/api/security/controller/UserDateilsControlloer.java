package com.lixga.api.security.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.lixga.api.security.service.UserDetailsServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@Log
@Component
@RequiredArgsConstructor
public class UserDateilsControlloer implements AuthenticationProvider {

    private final UserDetailsServiceImpl detailsServiceImpl;
    
    @Value("${jwt.secret:secret-key}")
    private String securityKey;
    
    @Value("${jwt.expiration:3600000}")
    private long validtyInMs = 3600000; // 1h

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'authenticate'");
    }

    @Override
    public boolean supports(Class<?> authentication) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'supports'");
    }
    
}
