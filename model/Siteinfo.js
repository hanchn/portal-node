
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('siteinfo', 
    {
        address: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        id: {
        allowNull: true,
                    comment: "主键",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        scenesId: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        siteId: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        terminalId: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
    })