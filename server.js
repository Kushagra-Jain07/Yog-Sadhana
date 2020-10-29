const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const reviewRoute = require("./routes/reviewRoute")

const PORT = process.env.PORT || 8080

const URL = "mongodb+srv://kushagra:kushjain@yoga.sas7z.mongodb.net/yogsadhana?retryWrites=true&w=majority"

mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).catch(error => console.log(error.reason))

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(reviewRoute)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`))
