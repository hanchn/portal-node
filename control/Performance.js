import puppeteer from "puppeteer"
import lighthouse from "lighthouse"
import fs from 'fs'
import { URL } from 'url'
import Performance from '../model/Performance.js'
import Exception from '../exception/index.js'
import DateFile from '../utils/DateFile.js'
import { pagingQuery, findRow, updateRow, addOrUpdateRows, findAll } from '../utils/BasicSql.js'

// import { pagingQuery, findRow, updateRow, addOrUpdateRows, findAll } from '../utils/BasicSql.js'

/**
 * performanceAnalysis
 * 触发性能分析
 * params: {
 *   adress 网站地址
 * }
 */
export const performanceAnalysis = (params) =>
    new Promise(async(resolve) => {
        const { adress } = params
        if (!adress) {
            resolve(Exception({ code: '000001' }))
        }
        const url = adress
        const browser = await puppeteer.launch({
            headless: true, // 调试时设为 false，可显式的运行Chrome
            defaultViewport: null,
        });
        const res = await lighthouse(
            url, {
                port: (new URL(browser.wsEndpoint())).port,
                output: 'json',
                logLevel: 'info',
                locale: 'zh',
                preset: {
                    choices: 'desktop'
                } //'desktop', // 必须的lighthouse模拟Device
            }
        );
        await browser.close();
        if (res) {
            const { report } = res
            fs.writeFileSync(DateFile(), report)
            resolve(Exception({ code: '200000', data: {} }))
        } else {
            resolve(Exception({ code: '000001', data: {} }))
        }

    })



/**
 * findPerformance
 * 分页查询绩效
 * params: {
 *   pageSize 页长,
 *   pageNum 页码
 * }
 */
export const findAllPerformance = (query, params) =>
    new Promise(async(resolve) => {
        const res = await pagingQuery(Performance, query, params)
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })

/**
 * findPerformance
 * 分页查询绩效
 * params: {
 *   pageSize 页长,
 *   pageNum 页码
 * }
 */
export const findPerformance = (params) =>
    new Promise(async(resolve) => {
        const { pageNum, pageSize } = params
        const res = await pagingQuery(Performance, { pageNum, pageSize })
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })

/**
 * findPerformance
 * 查询绩效
 * params: {
 *   jobNumber 工号
 * }
 */
export const findMyPerformance = (params) =>
    new Promise(async(resolve) => {
        const { jobNumber } = params
        if (!jobNumber) {
            resolve(Exception({ code: '000001' }))
            return
        }
        const res = await findRow(Performance, {...params, confirmStatus: '1' })
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })


/**
 * updateMyPerformance
 * 确认绩效
 * params: {
 *   pageSize 页长,
 *   pageNum 页码
 * }
 */
export const updateMyPerformance = (params) =>
    new Promise(async(resolve) => {
        const { confirmStatus, jobNumber, remark } = params
        if (!jobNumber) {
            resolve(Exception({ code: '000001' }))
            return
        }
        const res = await updateRow(Performance, { confirmStatus, remark }, { jobNumber })
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })


/**
 * confirmPerformance
 * 分页查询绩效
 * params: {
 *   pageSize 页长,
 *   pageNum 页码
 * }
 */
export const deletePerformance = (params) => {
    new Promise(async(resolve) => {
        const res = await pagingQuery('Performance', {...params })
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })

}

/**
 * uploadPerformance
 * 批量导入绩效绩效
 * params: []
 */
export const uploadPerformance = (params = [], query) => {
    new Promise(async(resolve) => {
        if (params.length === []) {
            resolve({ code: '000001' })
            return
        }
        const { year, quarter } = { year: 2022, quarter: 3, ...query }
        console.log('year ', year)
        console.log('quarter ', quarter)
        let allPerformance = await findAll(Performance, { confirmStatus: ['1', 1], [Op.not]: [{ year }, { quarter }] })
        if (!allPerformance) {
            resolve(Exception({ code: '000001' }))
        }

        let saveAllPerformance = []
        for (let item in allPerformance) {
            saveAllPerformance.push({ id: allPerformance[item].id, jobNumber: allPerformance[item].jobNumber, confirmStatus: '4' })
        }

        let params_ = [...params]
        for (let item in params_) {
            params_[item] = {
                ...params_[item],
                confirmStatus: '1',
                ...query,
                remark: ''
            }
        }
        params_ = [...saveAllPerformance, ...params_]

        const res = await addOrUpdateRows(Performance, { updateOnDuplicate: ['confirmStatus'] }, params_)
        if (res) {
            resolve(Exception({ code: '200000', data: res }))
        } else {
            resolve(Exception({ code: '000001' }))
        }
    })

}