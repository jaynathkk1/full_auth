const { signup, login } = require("../controller/authController");
const { signupValidation, loginValidation } = require("../midleware/authValidator");

const router = require("express").Router();


router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router;