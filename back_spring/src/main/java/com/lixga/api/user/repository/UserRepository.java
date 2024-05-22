package com.lixga.api.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixga.api.user.model.User;
import com.lixga.api.user.model.UserDto;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    void deleteAllById(Long id);

    List<UserDto> findUsersByName(String name);

    List<UserDto> findByUsername(String username);

    Optional<User> findUsersByUsername(String username);
}
