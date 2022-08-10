import express from 'express'
import { findMenu, addMenu, updateMenu, deleteMenu } from '../model/Menu.js'

router.get('/Menu', async(req, res, next) => {})
router.post('/Menu', async(req, res, next) => {})
router.get('/findMenu', async(req, res, next) => {})
router.post('/addMenu', async(req, res, next) => {})
router.post('/updateMenu', async(req, res, next) => {})
router.post('/deleteMenu', async(req, res, next) => {})

export const findMenu = () => {}
const router = express.Router()
export default router
            