import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from "./config/db.js";
import userRouters from "./routes/usersRoutes.js";
import studentsRouters from "./routes/studentsRoutes.js";

const app = express();

/**dot env config */
dotenv.config();
const PORT = process.env.PORT;

/**db connection */
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**cors */
app.use(cors());

app.get('/',(req, res) => {
    return res.status(200).json({
        message: "API RUNNING SUCCESSFULLY!!!"
    });
});

/** import the and use the sub router */
app.use('/users', userRouters);
app.use("/students", studentsRouters);

app.listen(PORT, () => {
    console.log(`SERVER STARTED ${PORT}`.bold.yellow);
});
