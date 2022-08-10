import { DataTypes } from "sequelize"
import { sequelize } from '../utils/Conn.js'
export default sequelize('user', {
    avatar: {
        allowNull: true,
        comment: "头像",
        type: DataTypes.STRING,
        unique: false,
        primaryKey: false
    },
    id: {
        allowNull: true,
        comment: "用户id",
        type: DataTypes.INTEGER,
        unique: false,
        primaryKey: true
    },
    name: {
        allowNull: true,
        comment: "昵称",
        type: DataTypes.STRING,
        unique: false,
        primaryKey: false
    },
    role_id: {
        allowNull: true,
        comment: "角色id",
        type: DataTypes.INTEGER,
        unique: false,
        primaryKey: false
    },
    username: {
        allowNull: true,
        comment: "用户名",
        type: DataTypes.STRING,
        unique: false,
        primaryKey: false
    },
    userpwd: {
        allowNull: true,
        comment: "用户密码",
        type: DataTypes.STRING,
        unique: false,
        primaryKey: false
    },
})