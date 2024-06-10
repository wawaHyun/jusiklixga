package com.flux.demo.items.domain;

import java.util.ArrayList;
import java.util.List;
import com.flux.demo.order.domain.OrderModel;
import lombok.Builder;
import lombok.Data;

// @Entity
@Data
// @Table(name = "items")
public class ItemModel {
    // @Id
    // @Column(name = "item_id")
    private long itemId;
    // @Column(name = "item_brand")
    private String itemBrand;
    // @Column(name = "model_no")
    private String modelNo;
    // @Column(name = "item_name")
    private String itemName;
    // @Column(name = "item_color")
    private String itemColor;
    // @Column(name = "release_date")
    private String releaseDate;
    // @Column(name = "sold_out")
    private Boolean soldOut;
    // @OneToMany(mappedBy = "item")
    private List<OrderModel> orders = new ArrayList<>();

    @Builder
    public ItemModel(String itemBrand, String itemName, String itemColor) {
        this.itemBrand = itemBrand;
        this.itemName = itemName;
        this.itemColor = itemColor;
    }

}