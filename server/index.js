require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
