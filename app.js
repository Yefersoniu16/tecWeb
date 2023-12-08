const express = require('express');

const app = express();

const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

const tiposProyecto = require('./routes/tipoProyecto');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/tiposproyectos', tiposProyecto);


module.exports = app;