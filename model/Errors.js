
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('errors', 
    {
        column: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        description: {
        allowNull: true,
                    comment: "描述",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        id: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        line: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        source: {
        allowNull: true,
                    comment: "来源",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        url: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
    })