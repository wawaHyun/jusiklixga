package com.lixga.api.board.service;

import java.util.*;

import com.lixga.api.board.model.Board;
import com.lixga.api.board.model.BoardDto;
import com.lixga.api.common.service.CommandService;
import com.lixga.api.common.service.QueryService;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {

    List<BoardDto> findBoardsByTitle(String name);

    default Board dtoToEntity(BoardDto dto) {
        return Board.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목 private String title;
    }

    default BoardDto entityToDto(Board ent) {
        return BoardDto.builder()
                .id(ent.getId())
                .title(ent.getTitle())
                .description(ent.getDescription())
                .modDate(String.valueOf(ent.getModDate()))
                .regDate(String.valueOf(ent.getRegDate()))
                .build();
    }

    // --------------------------------------------------------------------
    // command

    // query

}
