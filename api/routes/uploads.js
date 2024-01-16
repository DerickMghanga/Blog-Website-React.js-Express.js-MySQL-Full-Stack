import express from "express";
import { upload } from "../multer.js";

const router = express.Router();

router.post("/", upload.single('file'), (req, res) => {
    console.log(req.file);
    const { filename } = req.file;

    res.status(200).json(filename);
})

export default router;