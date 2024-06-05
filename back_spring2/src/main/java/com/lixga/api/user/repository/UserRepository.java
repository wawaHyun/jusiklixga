package com.lixga.api.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixga.api.user.domain.UserModel;

@Repository
public interface UserRepository extends JpaRepository{

    Optional<UserModel> findByUsername(String username);
    
}
