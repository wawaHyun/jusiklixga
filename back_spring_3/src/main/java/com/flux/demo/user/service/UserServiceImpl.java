package com.flux.demo.user.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.flux.demo.user.domain.UserModel;
import com.flux.demo.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    @Override
    public Optional<UserModel> findByUsername(String username) {
        return repo.findByUsername(username);
    }

}
