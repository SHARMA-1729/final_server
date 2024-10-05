"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = exports.app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(_express["default"].json({
  limit: "16kb"
}));
app.use(_express["default"].urlencoded({
  extended: true,
  limit: "16kb"
}));
app.use(_express["default"]["static"]("public"));
app.use((0, _cookieParser["default"])());
// import foodRouter from "./routes/fooditem.routes.js";
// import foodrestaurant from './routes/restaurant.routes.js'
// import menuRouter from './routes/menu.routes.js'

app.use("/api/v1/users", _userRoutes["default"]);
// app.use('/api/v1/foods', foodRouter);
// app.use('/api/v1/resto',foodrestaurant);
// app.use('/api/v1/resto/:id',foodrestaurant);
// app.use('/api/v1/menu/:id', menuRouter);
// app.use('/api/v1/menu/', menuRouter);

app.get('/', function (req, res) {
  console.log("hello");
  res.send("Hello, world!"); // Sending a response to the client
});