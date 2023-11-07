import express from 'express'
import {Authentication} from '../middleware/index.js'
import store from "../video/video.js"
import store1 from "../recipe/recipe.js"




export const Routes = express.Router();
import upload  from  '../middleware/uploadVideo.js';
import  upload1 from '../middleware/uploadRecipe.js';

Routes.post('/storeVideo', upload.single('videoUrl'),store )
Routes.post('/storeRecipe', upload1.single('thumbnail'),store1 )
Routes.post("/create/user", Authentication.signup)
Routes.post("/login", Authentication.login)

