import { DataTypes } from "sequelize"
import { sequelize } from '../utils/Conn.js'
export default sequelize('role', {
    id: {
        allowNull: true,
        comment: "角色id",
        type: DataTypes.INTEGER,
        unique: false,
        primaryKey: true
    },
    name: {
        allowNull: true,
        comment: "角色名",
        type: DataTypes.STRING,
        unique: false,
        primaryKey: false
    },
})