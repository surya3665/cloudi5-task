const router = require("express").Router();

const { sendFormData } = require("../controllers/auth.controller")

router.post("/send",sendFormData)

module.exports=router