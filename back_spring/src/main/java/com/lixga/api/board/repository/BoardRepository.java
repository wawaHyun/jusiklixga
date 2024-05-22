package com.lixga.api.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixga.api.board.model.Board;
import com.lixga.api.board.model.BoardDto;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    List<BoardDto> findBoardsByTitle(String name);

}
