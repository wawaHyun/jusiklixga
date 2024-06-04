package com.lixga.api.article.model;

import com.lixga.api.board.model.Board;
import com.lixga.api.common.BaseEntity;
import com.lixga.api.user.model.User;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
@ToString(exclude = { "id" })
@Entity(name = "articles")
public class Article extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User writer;

    public static Article of(String title, String content) {
        Article article = new Article();
        article.title = title;
        article.content = content;

        return article;
    }

}
