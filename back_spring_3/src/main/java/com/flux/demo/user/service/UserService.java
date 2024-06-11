package com.flux.demo.user.service;

import java.util.Optional;

import com.flux.demo.user.domain.UserDto;
import com.flux.demo.user.domain.UserModel;

public interface UserService {
    Optional<UserModel> findByUsername(String username);
}
