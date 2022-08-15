
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('userMenu', 
    {
        createdAt: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        id: {
        allowNull: true,
                    comment: "唯一序号",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        menu_id: {
        allowNull: true,
                    comment: "菜单id",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: false
    },
        parent_id: {
        allowNull: true,
                    comment: "菜单的父id",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: false
    },
        relation: {
        allowNull: true,
                    comment: "菜单关联关系",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        timestamps: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        updateAt: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        user_id: {
        allowNull: true,
                    comment: "用户id",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: false
    },
    })