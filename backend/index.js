import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/user.route.js';
import signup from './routes/signup.route.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

dotenv.config({
    path: './.env'
})


const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
    .then(() => { 
        console.log('DB Connected Successfully')
        app.listen(PORT, () => {
            console.log('Server is Running On Port : ' + PORT)
        })
    })
    .catch(error => console.log(error))



app.use("/api", route)
app.use("/api", signup)