
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('menu', 
    {
        id: {
        allowNull: true,
                    comment: "菜单主键",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        name: {
        allowNull: true,
                    comment: "菜单名",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        parent_id: {
        allowNull: true,
                    comment: "父菜单id",
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
        type: {
        allowNull: true,
                    comment: "菜单类别（1 目录 2 菜单 3 文件 4 外部地址  5 外部系统）",
                    type: DataTypes.enum,
                    unique: false,
                    primaryKey: false
    },
    })