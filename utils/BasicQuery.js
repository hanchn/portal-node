import { resolve } from 'url'
import conn from './Conn.js'

/**
 * paging
 * 分页查询
 * params: {
 *   model 数据模型
 *     {
 *       pageNum 第几页
 *       pageSize 一页条数
 *     }
 *   query 查询条件
 * }
 */
export const paging = (model, query) => {
    const { pageNum: offset, pageSize: limit, where } = { pageNum: 1, pageSize: 10, where: {}, ...query }
    return { offset, limit, where }
}

/**
 * find 
 * 基础查询
 * params: {
 *   model 数据模型
 *   query 查询条件
 *     {
 *       type 0 单行记录查询 
 *            1 查询所有匹配数据
 *            2 分页查询
 *       ...  其他查询条件
 *     }
 * }
 */
export const find = (model, query) =>
    new Promise(async(reslove) => {
        const { type } = { type: 0, ...query }
        const api = model[type === 0 ? 'findOne' : type === 1 ? 'findAll' : 'findAndCountAll']
        let params = type === 2 ? paging(query) : {...query }
        const data = await api({...params })
        reslove(data)
    })


/**
 * update
 * 更新
 * params: {
 * 
 * }
 */
export const update = () => {}

/**
 * insert
 * 更新
 * params: {
 * 
 * }
 */
export const insert = () => {}