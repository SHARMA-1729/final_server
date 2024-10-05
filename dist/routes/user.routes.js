"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userController = require("../controllers/user.controller.js");
var _authMiddleware = require("../middlewares/auth.middleware.js");
var _multerMiddleware = require("../middlewares/multer.middleware.js");
var router = (0, _express.Router)();
router.route("/register").post(_multerMiddleware.upload.fields([{
  name: "avatar",
  maxCount: 1
}]), _userController.registerUser);
router.route("/login").post(_userController.loginUser);
router.route("/change-password").post(_authMiddleware.verifyJWT, _userController.changeCurrentPassword);
router.route("/update-account").patch(_authMiddleware.verifyJWT, _userController.updateAccountDetails);
var _default = exports["default"] = router;