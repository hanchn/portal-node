import express from 'express'
import ExcelToJson from '../tools/ExcelToJson.js'
import { performanceAnalysis, findAllPerformance, findMyPerformance, updateMyPerformance, uploadPerformance } from '../control/Performance.js'
const router = express.Router()


/**
 * 获取性能列表
 */
// router.get('/', async(req, res, next) => {
//     res.json({ test: 'Hello World !' });
// })


/**
 * 获取性能列表
 */
// router.post('/', async(req, res, next) => {
//     const { adress } = {
//         siteId: 1,
//         adress: null,
//         ...req.body
//     }
//     const data = await performanceAnalysis({ adress })
//     res.json({...data });
// })


/**
 * 获取性能列表
 */
router.get('/', async(req, res, next) => {
    const { year, quarter, name, jobNumber, confirmStatus, pageNum, pageSize } = {
        name: null,
        year: null,
        quarter: null,
        jobNumber: null,
        confirmStatus: null,
        pageNum: 1,
        pageSize: 10,
        ...req.query
    }
    let query = {}
    for (let [key, value] of Object.entries({ year, quarter, name, jobNumber, confirmStatus })) {
        if (value !== null) {
            query[key] = value
        }
    }
    const data = await findAllPerformance(query, { pageNum, pageSize })
    res.json({...data });
})

/**
 * 获取当前用户绩效
 */
router.get('/findByJobNumber', async(req, res, next) => {
    const params = { jobNumber: null, ...req.query }
    const data = await findMyPerformance(params)
    res.json({...data });
})


/**
 * 确认绩效
 */
router.post('/updateByJobNumber', async(req, res, next) => {
    const params = { jobNumber: null, confirmStatus: 1, remark: null, ...req.body }
    const data = await updateMyPerformance(params)
    res.json({...data });
})

/**
 * 导入绩效模板
 */

router.post('/upload', async(req, res, next) => {
    const { year, quarter } = { year: null, quarter: null, ...req.body }
    if (!year || !quarter) {
        res.json(Exception({ code: '200000', data: res }))
        return
    }
    let excelData = await ExcelToJson(req.files.file)
    for (let item in excelData) {
        excelData[item] = {
            department: excelData[item]['部门'],
            name: excelData[item]['姓名'],
            jobNumber: excelData[item]['工号'],
            performanceLevel: excelData[item]['绩效等级'],
            performanceFactor: excelData[item]['绩效系数']
        }
    }
    const uploadStatus = await uploadPerformance(excelData, { year, quarter })
    res.json({})
})


export default router