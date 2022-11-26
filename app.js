import express from 'express';
import cors from 'cors'


import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

// db
import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/tuiter");
console.log("env variable:")
console.log(process.env.DB_CONNECTION_STRING)
console.log("mongodb+srv://buithuytien1313:25011993@cluster0.xybi1r2.mongodb.net/?retryWrites=true&w=majority")
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());


TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);