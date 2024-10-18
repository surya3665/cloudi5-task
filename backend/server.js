const express = require("express")
const cors = require("cors")
require("dotenv").config()
const cookieParser = require("cookie-parser")
const apiRouter = require("./routes")
const connectDB = require("./config/db")
const app = express()
connectDB()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log("server was started on "+PORT)
})