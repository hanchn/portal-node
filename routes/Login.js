import express from 'express'
import { findLogin, addLogin, updateLogin, deleteLogin } from '../model/Login.js'

router.get('/Login', async(req, res, next) => {})
router.post('/Login', async(req, res, next) => {})
router.get('/findLogin', async(req, res, next) => {})
router.post('/addLogin', async(req, res, next) => {})
router.post('/updateLogin', async(req, res, next) => {})
router.post('/deleteLogin', async(req, res, next) => {})
const router = express.Router()
export default router
            