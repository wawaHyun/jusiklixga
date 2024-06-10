package com.flux.demo.user.domain;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.GrantedAuthority;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoleModel implements Serializable {

    Integer id;

    RoleName roleName;

    public RoleModel(RoleName roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName.toString();
    }
}