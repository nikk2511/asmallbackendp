require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
//Math.random
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('nikhil')
})
app.get('/login', (req, res) => {
    res.send('<h1>my name is nikhil singh</h1>')
})
app.get('/youtube',(req, res) =>{
    res.send('<a href="https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2">click here</a>')
} )

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})