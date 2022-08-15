
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('role', 
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
        timestamps: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        updatedAt: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
    })