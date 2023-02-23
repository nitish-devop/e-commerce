const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(`Connected to ${data.connection.db.databaseName}`)
    })
}

module.exports = connectDatabase;