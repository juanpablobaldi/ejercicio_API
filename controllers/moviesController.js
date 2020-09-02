const db = require ("../database/models");

module.exports = {
    getAll: function(req,res) {
        db.Movie.findAll ()
            .then( function (result) {
                return res.status(200).json (result)     
            })  
    },
    getById: function(req,res) {
        db.Movie.findByPk (req.params.id)
            .then( function (result) {
                return res.status(200).json (result)     
            })   
    },
    create: function(req,res) {
        db.Movie.create ( {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
            .then( function (result) {
                return res.status(201).json (result)     
            })   
    }
}