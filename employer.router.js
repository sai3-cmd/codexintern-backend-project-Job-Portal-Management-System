import { Router } from "express"
import { signup, login, logout, currentEmployee, updateDetails, updatePassword } from "../controllers/employeer.controller.js"
import empAuth from "../middlewares/empAuth.middleware.js"

const router = Router()

router.route("/signup").post(signup)
router.route("/login").post(login)

router.route("/logout").get(empAuth, logout)

router.route("/current-employee").get(empAuth, currentEmployee)

router.route("/update").patch(empAuth, updateDetails)
router.route("/update/password").patch(empAuth, updatePassword)

export default router