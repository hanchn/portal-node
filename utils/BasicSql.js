/**
 * 查询所有数据
 * args: {
 *   Model: sql模型
 * }
 */
export const findAll = (Model = null, query = {}, params = {}) =>
    new Promise(async(resolve, reject) => {
        const res = await Model.findAll({
            where: {...query },
            ...params
        })
        if (res) {
            resolve(res)
        } else {
            resolve(false)
        }
    })

/**
 * 分页查询列表
 * args: {
 *   Model: sql模型,
 *   params: {
 *     pageSize: 页长
 *     pageNum: 页码
 *   }
 * }
 */
export const pagingQuery = (Model = null, query, params, order = []) =>
    new Promise(async(resolve) => {
        const { pageSize, pageNum } = params

        let queryWhere = {}
        for (let [key, item] of Object.entries(query)) {
            if (item) {
                queryWhere[key] = item
            }
        }

        const res = await Model.findAndCountAll({
            order,
            where: {
                ...queryWhere
            },
            limit: pageSize - 0,
            offset: (pageNum - 1) * (pageSize - 0)
        })

        if (res) {
            const { count: total, rows: list } = res
            resolve({ list, pageSize, pageNum, total })
        } else {
            resolve(false)
        }
    })

/**
 * 查询一条数据
 * args: {
 *   Model: sql模型,
 *   params: {
 *     
 *   }
 * }
 */
export const findRow = (Model = null, params) =>
    new Promise(async(resolve) => {
        const res = await Model.findOne({
            where: {...params }
        })
        if (res) {
            resolve(true)
        } else {
            resolve(false)
        }
    })

/**
 * 删除行数据
 * args: {
 *   Model: sql模型,
 *   params: {
 *     自定义查询参数
 *   }
 * }
 */
export const deleteRow = (Model = null, params) =>
    new Promise(async(resolve) => {
        const getRow = await Model.findOne({ where: {...params } })
        if (!getRow) {
            resolve(Exception({ code: '000001' }))
            return
        }
        const res = await Model.destroy({ where: {...params } })
        if (res) {
            resolve(res)
        } else {
            resolve(false)
        }
    })

/**
 * 更新行数据
 * args: {
 *   Model: sql模型,
 *   query: {
 *     更新的字段
 *   },
 *   params: {
 *     自定义查询参数
 *   }
 * }
 */
export const updateRow = (Model = null, query, params) =>
    new Promise(async(resolve) => {
        let params_ = {}
        for (let [key, item] of Object.entries(params)) {
            if (item && !query[key]) {
                params_[key] = item
            }
        }
        const res = await Model.update({...params_ }, { where: {...query } })
        if (res) {
            resolve(true)
        } else {
            resolve(false)
        }
    })

/**
 * 批量纯插入
 * args: {
 *   Model: sql模型,
 *   query: {
 *     更新的字段
 *   },
 *   params: {
 *     自定义查询参数
 *   }
 * }
 */
export const addRows = (Model = null, params) =>
    new Promise(async(resolve) => {
        const res = await Model.bulkCreate(params, { updateOnDuplicate: false, returning: true, })
        console.log('res ', res)
        if (res) {
            resolve(true)
        } else {
            resolve(false)
        }
    })

/**
 * 批量插入/更新
 * args: {
 *   Model: sql模型,
 *   query: {
 *     更新的字段
 *   },
 *   params: {
 *     自定义查询参数
 *   }
 * }
 */
export const addOrUpdateRows = (Model = null, query, params) =>
    new Promise(async(resolve) => {
        const res = await Model.bulkCreate(params, { returning: true, updateOnDuplicate: Object.keys(query).length ? true : false, ...query })
        if (res) {
            console.log('res ', res)
            resolve(true)
        } else {
            resolve(false)
        }
    })