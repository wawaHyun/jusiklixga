package com.lixga.api.items.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lixga.api.items.domain.ItemModel;

@Repository
public interface ItemRepository extends JpaRepository<ItemModel, Long>{
    
}
