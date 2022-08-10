import express from 'express'
import { findUserMenu, addUserMenu, updateUserMenu, deleteUserMenu } from '../model/UserMenu.js'

router.get('/UserMenu', async(req, res, next) => {})
router.post('/UserMenu', async(req, res, next) => {})
router.get('/findUserMenu', async(req, res, next) => {})
router.post('/addUserMenu', async(req, res, next) => {})
router.post('/updateUserMenu', async(req, res, next) => {})
router.post('/deleteUserMenu', async(req, res, next) => {})
const router = express.Router()
export default router
            