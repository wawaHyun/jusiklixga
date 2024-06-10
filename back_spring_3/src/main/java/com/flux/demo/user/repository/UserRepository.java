package com.flux.demo.user.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.flux.demo.user.domain.UserModel;

@Repository
public interface UserRepository {

    Optional<UserModel> findByUsername(String username);

}
