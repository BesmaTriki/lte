const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
env.config()
//const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.json()) 
mongoose.connect('mongodb://localhost/brighteducation', {useNewUrlParser : true ,useCreateIndex: true, useUnifiedTopology : true }).then(()=>{
    console.log('Database connected')
})
//app.use(bodyParser) 
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.json());

// routes 
const authRoutes = require('./routes/auth')






app.use('/api',authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)

} )