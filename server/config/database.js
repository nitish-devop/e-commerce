const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(`Connected to ${data.connection.db.databaseName}`)
    }).catch((err)=>{
        console.log(`Error in connecting to mongodb : ${err}`);
    })
}

module.exports = connectDatabase;