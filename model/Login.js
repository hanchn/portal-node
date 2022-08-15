
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('login', 
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
                    comment: "",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        key: {
        allowNull: true,
                    comment: "",
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