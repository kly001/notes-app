const express = require('express');
const mongoose = require('mongoose');
const app = express();


const PORT = process.env.PORT || 8080

app.use(express.json());

const dbPath = 'mongodb+srv://jsmastery:jsmastery123@notes.gw5ht.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(dbPath, {
    dbName:'notes',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("Connected to the DB.")
})
.catch((err) => console.log("Error connecting to the DB"))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))