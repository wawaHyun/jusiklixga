package com.lixga.api.user.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QRoleModel is a Querydsl query type for RoleModel
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRoleModel extends EntityPathBase<RoleModel> {

    private static final long serialVersionUID = -668846574L;

    public static final QRoleModel roleModel = new QRoleModel("roleModel");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final EnumPath<RoleName> roleName = createEnum("roleName", RoleName.class);

    public QRoleModel(String variable) {
        super(RoleModel.class, forVariable(variable));
    }

    public QRoleModel(Path<? extends RoleModel> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRoleModel(PathMetadata metadata) {
        super(RoleModel.class, metadata);
    }

}

