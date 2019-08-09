const express = require('express')
const mongoose = require('mongoose');
const Video = require('../models/video')

const apirouter = express.Router()

const url = 'mongodb+srv://prasad:prasad@12345@cluster0-5c9fw.mongodb.net/db_dev?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(`error in mongoose is ${error}`)
    } else {
        console.log(`connected to db successfully`)
    }
});

apirouter.post('/videos', async (req, res) => {
    const video = new Video({
        title:"title2",
        url:"url2",
        description:"description2"
    })
    await video.save()
    const videos = await Video.find({})
    console.log(videos)
    res.send('from post')
})

apirouter.get('/videos', async (req, res) => {
    const videos = await Video.find({})
    console.log(videos)
    res.send(videos)
})

apirouter.get('*', async (req, res) => {
    res.send("default page")
})

module.exports = apirouter