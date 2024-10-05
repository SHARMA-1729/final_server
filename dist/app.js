import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({
  limit: "16kb"
}));
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}));
app.use(express.static("public"));
app.use(cookieParser());
import userRouter from "./routes/user.routes.js";
// import foodRouter from "./routes/fooditem.routes.js";
// import foodrestaurant from './routes/restaurant.routes.js'
// import menuRouter from './routes/menu.routes.js'

app.use("/api/v1/users", userRouter);
// app.use('/api/v1/foods', foodRouter);
// app.use('/api/v1/resto',foodrestaurant);
// app.use('/api/v1/resto/:id',foodrestaurant);
// app.use('/api/v1/menu/:id', menuRouter);
// app.use('/api/v1/menu/', menuRouter);

app.get('/', (req, res) => {
  console.log("hello");
  res.send("Hello, world!"); // Sending a response to the client
});
export { app };