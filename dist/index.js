"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _index = _interopRequireDefault(require("./db/index.js"));
var _app = require("./app.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: './.env'
});
(0, _index["default"])().then(function () {
  _app.app.listen(process.env.PORT || 8000, function () {
    console.log("\u2699\uFE0F Server is running at port : ".concat(process.env.PORT));
  });
})["catch"](function (err) {
  console.log("MONGO db connection failed !!! ", err);
});