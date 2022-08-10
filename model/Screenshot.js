
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('screenshot', 
    {
        data: {
        allowNull: true,
                    comment: "图片",
                    type: DataTypes.TEXT,
                    unique: false,
                    primaryKey: false
    },
        id: {
        allowNull: true,
                    comment: "截屏的唯一ID",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        timestamp: {
        allowNull: true,
                    comment: "时间戳",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        timing: {
        allowNull: true,
                    comment: "耗费时间",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
    })