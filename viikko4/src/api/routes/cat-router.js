import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';

const router = express.Router();



const upload = multer({ dest: 'uploads/' })



router.post('/',  upload.single('file'), postCat);

export default router;