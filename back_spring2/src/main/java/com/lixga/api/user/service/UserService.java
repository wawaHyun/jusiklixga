package com.lixga.api.user.service;

import java.util.Optional;

import com.lixga.api.user.domain.UserModel;

public interface UserService {
    Optional<UserModel> findByUsername(String username);
}
