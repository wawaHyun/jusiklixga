package com.lixga.api.common.config;

import com.lixga.api.common.component.interceptor.AuthInterceptor;
import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;

@Configuration
@ComponentScan("controller")
public class WebMvcConfig implements WebMvcConfigurer {

private final AuthInterceptor authInterceptor = null;
@Override
public void addInterceptors(InterceptorRegistry registry) {
registry.addInterceptor(authInterceptor)
.excludePathPatterns("/api/auth/**")
.addPathPatterns("/api/**");
// WebMvcConfigurer.super.addInterceptors(registry);
}
}
