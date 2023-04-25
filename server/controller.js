const db = require('./db.json')
let upcomingHouseId = 4
let id = db.length

module.exports = {
    getAllHouses : (req, res) => {
        let allHouses = db
        res.status(200).send(allHouses)
    },
    createHouse : (req, res) => {
        upcomingHouseId++
        let newHouse = {...req.body, id: upcomingHouseId}
        db.push(newHouse)

        res.status(200).send(db)
    },
    deleteHouse : (req, res) => {
        const { house_id } = req.params
        for (let i = 0; i < db.length; i++) {
            if (db[i].id === +house_id) {
                db.splice(i, 1)
            }
        }
        res.status(200).send(db)
    },
    updateHouse : (req, res) => {
        const { house_id } = req.params
        const { type } = req.body

        for (let i = 0; i < db.length; i++) {
            if(db[i].id === +house_id) {
                if(type === 'plus') {
                    db[i].price += 10000
                }
                if (type === 'minus') {
                    db[i].price -= 10000
                }
            }
        }
        res.status(200).send(db)
    }
}