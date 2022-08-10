
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('address', 
    {
        id: {
        allowNull: false,
                    comment: "主键",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        scenes: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: false
    },
        siteAddress: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.TEXT,
                    unique: false,
                    primaryKey: false
    },
        siteId: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: false
    },
        siteName: {
        allowNull: false,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
    })