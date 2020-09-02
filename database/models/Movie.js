const config = require("../config/database");

module.exports = function (sequelize, dataTypes) {
    let alias = "Movie";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(100) ,
            allowNull: false
        },
        rating: {
            type: dataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false    
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "movies",
        timeStamps: false,
        underscored: true
    };

    let Movie = sequelize.define(alias, cols, config);

    // Pelicula.associate = function (models) {
    //     Pelicula.belongsToMany(models.Actor, {
    //         as: "actors",
    //         through: "actor_movie",
    //         foreignKey: "movie_id",
    //         otherKey: "actor_id",
    //         timestamps: false
    //     });
        
    // }

    return Movie;

}