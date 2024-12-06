import { Router } from "express"
import {
    signup
} from "../controllers/jobSeeker.controller.js"
import upload from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/signup").post(upload.single("resume"), signup)

export default router