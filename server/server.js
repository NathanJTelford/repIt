const express = require('express');
require('dotenv').config()

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.listen(SERVER_PORT, () => { console.log('Battle Cruiser Operational On StartPort ' + SERVER_PORT) })