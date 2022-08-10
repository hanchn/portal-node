import express from 'express'
import { findUser, addUser, updateUser, deleteUser } from '../model/User.js'

router.get('/User', async(req, res, next) => {})
router.post('/User', async(req, res, next) => {})
router.get('/findUser', async(req, res, next) => {})
router.post('/addUser', async(req, res, next) => {})
router.post('/updateUser', async(req, res, next) => {})
router.post('/deleteUser', async(req, res, next) => {})
const router = express.Router()
export default router
            