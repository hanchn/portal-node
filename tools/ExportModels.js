import fs from 'fs'
import conn from '../utils/Conn.js'
import config from '../Config/config.js'
const { database } = config

let findTables = `select TABLE_NAME from INFORMATION_SCHEMA.Tables where table_schema = "${database}"`

export const exportModels = async() => {
    let tables = await conn().query(findTables)
    tables = tables[0]
    tables.map(async({ TABLE_NAME }) => {
        let model = {}
        let table = await conn().query(`select * from information_schema.columns where table_schema= "${database}" and table_name = "${TABLE_NAME}"`)
        for (let item in table[0]) {
            const { COLUMN_NAME, IS_NULLABLE, COLUMN_COMMENT, DATA_TYPE, COLUMN_KEY } = table[0][item]
            model[COLUMN_NAME.split('\n')[0]] = {
                allowNull: IS_NULLABLE === 'YES' ? true : COLUMN_KEY === 'PRI' ? true : false,
                comment: `"${COLUMN_COMMENT}"`,
                type: "DataTypes." + columnType(DATA_TYPE),
                unique: COLUMN_KEY === 'UNI' ? true : false,
                primaryKey: COLUMN_KEY === 'PRI' ? true : false
            }
        }
        let tpl = await exportTpl({
            table: TABLE_NAME,
            model
        })
        const name = titleCase([TABLE_NAME])
        try {
            fs.statSync(`./control/${name}.js`)
        } catch (err) {
            fs.writeFileSync(`./control/${name}.js`, `import ${name} from '../model/${name}.js'
import Exceptions from '../exception/index.js'
/**
 * find${name}
 * params: {}
 */
export const find${name} = (params = {}) => {}

/**
 * add${name}
 * params: {}
 */
export const add${name} = (params = {}) => {}

/**
 * update${name}
 * params: {}
 */
export const update${name} = (params = {}) => {}

/**
 * delete${name}
 * params: {}
 */
export const delete${name} = (params = {}) => {}
            `)
        }
        try {
            fs.statSync(`./routes/${name}.js`)
        } catch (err) {
            fs.writeFileSync(`./routes/${name}.js`, `import express from 'express'
import { find${name}, add${name}, update${name}, delete${name} } from '../model/${name}.js'

router.get('/${name}', async(req, res, next) => {})
router.post('/${name}', async(req, res, next) => {})
router.get('/find${name}', async(req, res, next) => {})
router.post('/add${name}', async(req, res, next) => {})
router.post('/update${name}', async(req, res, next) => {})
router.post('/delete${name}', async(req, res, next) => {})
const router = express.Router()
export default router
            `)
        }

        fs.writeFileSync(`./model/${titleCase([TABLE_NAME])}.js`, tpl)
    })
}

exportModels()

const columnType = (COLUMN_TYPE = 'int') => {
    switch (COLUMN_TYPE) {
        case 'int':
            return "INTEGER"
        case 'tinyint':
            return "INTEGER"
        case 'varchar':
            return "STRING"
        case 'text':
            return "TEXT"
        case 'tinytext':
            return "TEXT('tiny')"
        case 'datetime':
            return "DATE"
        default:
            return COLUMN_TYPE
    }
}

const exportTpl = (params) =>
    new Promise((reslove) => {
        let model = params.model
        let modelTpl = ''
        for (let [key, item] of Object.entries(model)) {
            let rowModel = ``
            for (let [rowKey, rowItem] of Object.entries(item)) {
                if (rowKey === 'primaryKey') {
                    rowModel += `${rowKey}: ${rowItem}`
                } else {
                    rowModel += `${rowKey}: ${rowItem},
                    `
                }

            }
            modelTpl += `
        ${key}: {
        ${rowModel}
    },`
        }

        const tpl = `
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('${params.table}', 
    {${modelTpl }
    })`
        reslove(tpl)
    })



const titleCase = (strList) => {
    let str = strList[0]
    let newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
    return newStr;
}