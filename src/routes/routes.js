import express from 'express'
import {Authentication} from '../middleware/index.js'


export const Routes = express.Router()

Routes.post("/create/user", Authentication.signup)
Routes.post("/login", Authentication.login)

