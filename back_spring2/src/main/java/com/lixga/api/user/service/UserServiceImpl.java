package com.lixga.api.user.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.lixga.api.user.domain.UserModel;
import com.lixga.api.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository repo;

    @Override
    public Optional<UserModel> findByUsername(String username) {
       return repo.findByUsername(username);
    }
    
}
