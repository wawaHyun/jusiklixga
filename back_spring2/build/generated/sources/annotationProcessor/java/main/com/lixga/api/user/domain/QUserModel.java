package com.lixga.api.user.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserModel is a Querydsl query type for UserModel
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserModel extends EntityPathBase<UserModel> {

    private static final long serialVersionUID = -665348131L;

    public static final QUserModel userModel = new QUserModel("userModel");

    public final StringPath email = createString("email");

    public final StringPath firstName = createString("firstName");

    public final StringPath lastName = createString("lastName");

    public final StringPath password = createString("password");

    public final ListPath<RoleModel, QRoleModel> roles = this.<RoleModel, QRoleModel>createList("roles", RoleModel.class, QRoleModel.class, PathInits.DIRECT2);

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public final StringPath username = createString("username");

    public QUserModel(String variable) {
        super(UserModel.class, forVariable(variable));
    }

    public QUserModel(Path<? extends UserModel> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserModel(PathMetadata metadata) {
        super(UserModel.class, metadata);
    }

}

