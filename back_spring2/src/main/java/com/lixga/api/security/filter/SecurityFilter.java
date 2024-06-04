package com.lixga.api.security.filter;

import java.io.IOException;

import org.springframework.web.filter.OncePerRequestFilter;

import com.lixga.api.security.domain.SecurityProvider;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter{

    private final SecurityProvider provider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                // String token = provider.resolve
    }
    
}
