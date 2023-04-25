const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const controller = require('./controller')
const { getAllHouses, createHouse, deleteHouse, updateHouse} = controller

//routes
app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:house_id', updateHouse)
app.delete('/api/houses/:house_id', deleteHouse)




app.listen(4004, () => console.log(`Listening on port 4004`))