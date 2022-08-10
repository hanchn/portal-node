import express from 'express'
import { queryAllSiteInfo, addOrUpateSiteInfo, removeSite } from '../control/SiteInfo.js'
const router = express.Router()



/**
 * 获取性能列表
 */
router.get('/', async(req, res, next) => {
    const { siteName, siteAddress, scenes, siteId, terminalId, pageNum, pageSize } = {
        siteName: null,
        siteAddress: null,
        scenes: null,
        siteId: null,
        terminalId: null,
        pageNum: 1,
        pageSize: 10,
        ...req.query
    }
    const data = await queryAllSiteInfo({
        siteName,
        siteAddress,
        scenes,
        siteId,
        terminalId
    }, { pageNum, pageSize })
    res.json({...data });
})

router.post('/addOrUpateSiteInfo', async(req, res, next) => {
    const { id, address, scenesId, siteId, terminalId } = {
        id: null,
        address: null,
        scenesId: null,
        siteId: null,
        terminalId: null,
        ...req.body
    }
    const data = await addOrUpateSiteInfo({
        id,
        address,
        scenesId,
        siteId,
        terminalId
    })
    res.json({...data });
})


/**
 * 获取性能列表
 */
router.get('/delete', async(req, res, next) => {
    const { id } = { id: null, ...req.query }
    const data = await removeSite({ id })
    res.json({...data });
})

export default router