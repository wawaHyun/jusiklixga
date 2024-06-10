package com.lixga.api.user.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.stereotype.Component;
import java.util.List;

@Data
@Component
public class UserDto {
    @Id
    @GeneratedValue()
    long userId;
    String username;
    String password;
    String name;
    String email;
    String regDate;
    String token;
    // List<Role> roles;
}