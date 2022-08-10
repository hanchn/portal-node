import Sequelize from 'sequelize'
import config from '../config/config.js'
const { database, username, userpwd, dialect, host, port, logging } = config
const conn = () => new Sequelize(
        database,
        username,
        userpwd, {
            dialect,
            host,
            port,
            logging
        }
    )
    /**
     * 创建模型 
     * args: {
     *   table 表名
     *   params 传参
     * }
     */
export const sequelize = (table, params) => conn().define(`${table}`, {...params }, { freezeTableName: true, table, timestamps: false })


export default conn