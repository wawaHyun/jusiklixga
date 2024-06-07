package com.lixga.api.items.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QItemModel is a Querydsl query type for ItemModel
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QItemModel extends EntityPathBase<ItemModel> {

    private static final long serialVersionUID = 744746356L;

    public static final QItemModel itemModel = new QItemModel("itemModel");

    public final StringPath itemBrand = createString("itemBrand");

    public final StringPath itemColor = createString("itemColor");

    public final NumberPath<Long> itemId = createNumber("itemId", Long.class);

    public final StringPath itemName = createString("itemName");

    public final StringPath modelNo = createString("modelNo");

    public final ListPath<com.lixga.api.order.domain.OrderModel, com.lixga.api.order.domain.QOrderModel> orders = this.<com.lixga.api.order.domain.OrderModel, com.lixga.api.order.domain.QOrderModel>createList("orders", com.lixga.api.order.domain.OrderModel.class, com.lixga.api.order.domain.QOrderModel.class, PathInits.DIRECT2);

    public final StringPath releaseDate = createString("releaseDate");

    public final BooleanPath soldOut = createBoolean("soldOut");

    public QItemModel(String variable) {
        super(ItemModel.class, forVariable(variable));
    }

    public QItemModel(Path<? extends ItemModel> path) {
        super(path.getType(), path.getMetadata());
    }

    public QItemModel(PathMetadata metadata) {
        super(ItemModel.class, metadata);
    }

}

