const express = require('express');
const router = express.Router();
const connection = require('../mysql/mysql');
const submitForm=require("../controller/ContactForm")
const { sendConfirmationEmail } = require('../controller/email');


router.post("/submit",submitForm)

router.post('/send', sendConfirmationEmail);

// testing purpose
router.get('/', (req, res) => {
  res.send("API is working");
});

module.exports = router;