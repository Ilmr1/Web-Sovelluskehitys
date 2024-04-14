import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';
import {createThumbnail} from "../../middlewares.js";

const router = express.Router();



const upload = multer({ dest: 'uploads/' })



router.post('/', upload.single('file'), createThumbnail, postCat);


export default router;