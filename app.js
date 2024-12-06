import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())  // For handling JSON data
app.use(express.urlencoded())  // http://localhost:3000/login?username=iamrahul&password=1234
app.use(express.static("public/temp"))

app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(cookieParser())



import employeerRouter from "./routes/employeer.router.js"
import jobSeekerRouter from "./routes/jobSeeker.route.js"


app.use("/api/v1/employeer", employeerRouter)
app.use("/api/v1/jobseeker", jobSeekerRouter)



export default app