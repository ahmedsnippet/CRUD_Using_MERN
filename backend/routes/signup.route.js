import express from 'express'
import { create } from '../controllers/signup.controller.js'

const route = express.Router()

route.post("/creat", create)


export default route