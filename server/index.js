import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import adminLoginRoute from "./routes/admin-login.js";
import managerLoginRoute from "./routes/manager-login.js";

// config .env
config();

// creating an express application
const app = express();

// adding cors to app & support of json
app.use(cors());
app.use(express.json());

// home route
app.get('/', (req, res) => {
    res.status(200).send('Hello World!!');
})

app.use('/admin-login', adminLoginRoute);
app.use('/manager-login', managerLoginRoute);

// listening at port 5000
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening at Port: ${PORT}`)
})