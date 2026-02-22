const express = require('express');
const dns = require('node:dns');
const dotenv = require('dotenv');
const  connectToDatabase  = require('./db/db');

dotenv.config();
dns.setServers(['1.1.1.1']);

const app = express();

connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Elishsn .. Backend is running");
});

