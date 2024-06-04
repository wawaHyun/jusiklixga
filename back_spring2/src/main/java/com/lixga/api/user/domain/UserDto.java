package com.lixga.api.user.domain;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.stereotype.Component;
import java.util.List;
@Data @Component
public class UserDto {
    @Schema private long userId;
    @Schema private String username;
    @Schema private String password;
    @Schema private String name;
    @Schema private String email;
    @Schema private String regDate;
    @Schema private String token;
    @Schema private List<Role> roles;
}