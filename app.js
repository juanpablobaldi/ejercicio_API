const express = require ("express");
const app = express();
const cors = require ("cors");

// require RUTAS
const moviesRouter = require ("./routes/movies");
const actorsRouter = require ("./routes/actors");

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cors());
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);


app.listen (3000, function () {
    console.log("el servidor corre en el puerto 3000");
})