const express = require('express')
const app = express();
const cors = require('cors');
const { connection } = require('./connection')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const userRoute = require('./routes/user')






//middlewares

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))




// connection

connection().then(() => {
    console.log('connection successful...')
})


// routes
app.use(userRoute)






//server creation
app.listen(process.env.PORT || 5000, (err) => {

    if (err) {
        console.log(err, "err in server creation");
    }
    else {
        console.log(`server has started on port ${process.env.PORT || 5000}`);
    }
})