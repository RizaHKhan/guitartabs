const express = require('express')
const router = require('./router')
const cors = require('cors')

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors())

app.use('/', router)


sequelize.sync()
.then(() => {
    app.listen(config.port)    
    console.log(`Server started on port ${config.port}`)
})
