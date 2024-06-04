package com.lixga.api.security.domain;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lixga.api.user.domain.UserModel;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetails{

    private final long userId;
    private final String userName;
    private final String email;
    private final String name;
    @JsonIgnore private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public static UserDetailsImpl build(UserModel user){
        List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role->new SimpleGrantedAuthority(role.getAuthority()))
        .collect(Collectors.toList());

        return new UserDetailsImpl(user.getUserId(), user.getUsername(), user.getEmail(), user.getName(), user.getPassword(), authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
    }
    
}
