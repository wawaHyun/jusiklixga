package com.flux.demo.order.domain;

import com.flux.demo.items.domain.ItemModel;
import com.flux.demo.user.domain.UserModel;
import lombok.Data;

// @Entity
@Data
// @Table(name = "orders")
public class OrderModel {
    // @Id
    // @Column(name = "order_id")
    private long orderId;
    // @Column(name = "price")
    private long price;
    // @Column(name = "order_status")
    private String count;
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id")
    private UserModel user;
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "item_id")
    private ItemModel item;
}