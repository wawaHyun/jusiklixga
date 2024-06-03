package com.lixga.api.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;
import org.springframework.stereotype.Repository;

import com.lixga.api.user.domain.UserModel;

@Repository
public class UserRepository extends JpaRepositoryFactory{

    Optional<UserModel> findByUsername(String username);
    
}
