const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/name' , (req , res) => res.send('My Name is Prakash'));

app.get('/home' , (req , res) => res.send('Welcome to our Home'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))