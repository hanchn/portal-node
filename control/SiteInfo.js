import SiteInfo from '../model/Siteinfo.js'
import Exception from '../exception/index.js'
import { pagingQuery, updateRow, deleteRow, findRow } from '../utils/BasicSql.js'



/** * queryAllSiteInfo
 * 分页查询维护的站点
 * params: {
 *   pageSize 页长,
 *   pageNum 页码
 * }
 */
export const queryAllSiteInfo = (query, params) =>
    new Promise(async(resolve) => {
        const res = await pagingQuery(SiteInfo, query, params, [
            ['id', 'DESC']
        ])
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })

/**
 * addOrUpateSiteInfo
 * 添加或者编辑站点信息
 * params: {
 *   ...
 * }
 */
export const addOrUpateSiteInfo = (query) =>
    new Promise(async(resolve) => {
        const { id } = query
        let res
        if (id) {
            res = await updateRow(SiteInfo, { id }, query)
        } else {
            let params = {...query }
            delete params.id
            let hasParams = {...params }
            delete hasParams.address
            const hasRow = await findRow(SiteInfo, hasParams)
            if (hasRow) {
                res = false
                resolve(Exception({ code: '000005' }))
                return
            } else {
                res = await SiteInfo.create({...params })
            }
        }
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }

    })

/**
 * removeSite
 * 删除一个站点记录
 * params: {
 *   ...
 * }
 */
export const removeSite = (query) =>
    new Promise(async(resolve) => {
        const { id } = query
        let res
        if (id) {
            res = await deleteRow(SiteInfo, { id }, query)
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })