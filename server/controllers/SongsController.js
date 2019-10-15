const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll()
            res.send(songs)
            } catch(err) {
            res.status(500).send({
                error: "An error has occured while searching the song index"
            })
        }
    },

    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch(err) {
            res.status(500).send({
                error: "An error occured while inserting the new song"
            })
        }
    }
}