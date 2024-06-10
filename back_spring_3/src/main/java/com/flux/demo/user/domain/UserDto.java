package com.flux.demo.user.domain;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import org.springframework.stereotype.Component;
import java.util.List;

@Data
@Component
public class UserDto {

    long userId;
    String username;
    String password;
    String name;
    String email;
    String regDate;
    String token;
    // List<Role> roles;
}