package com.lixga.api.user.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

import com.lixga.api.article.model.Article;
import com.lixga.api.common.BaseEntity;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@Entity(name = "users")
public class User extends BaseEntity {

    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String phone;

    @Column(name = "address_id")
    private Long addressId;

    private String job;

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<Article> article;

}