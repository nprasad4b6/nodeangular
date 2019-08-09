const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')
const apirouter = require('./server/routes/api')

const api = require('./server/routes/api')

const Port = process.env.port || 3000

const app = express()

app.use(express.static(path.join(__dirname,'dist/meanstack')))

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

// app.use('/api', api)

app.use(apirouter)

app.get('*', (req,res)=> {
    // res.render(path.join(__dirname,'dist/meanstack/index.html'))
    res.renderFile(path.join(__dirname,'dist/meanstack/index.html'))
})

app.listen(Port, ()=>{
    console.log(`listenes on port ${Port}`)
})