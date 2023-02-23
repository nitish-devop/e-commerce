require('dotenv').config({path:'server/config/config.env'});
const app = require('./app');
// handling uncaught exception
process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err}`);
    console.log(`Server is shutting down due to uncaught exception.`);
   process.exit(1);
})



const connectDatabase = require('./config/database');
connectDatabase();

console.log(process.env.PORT)
const server = app.listen(process.env.PORT,()=>{
    console.log('Server is running on ',process.env.PORT);
})

// Unhandled Rejection
process.on('unhandledRejection',(err)=>{
    console.log(`Error : ${err}`);
    console.log(`Server is shutting down due to unhandled rejection.`);
    server.close(()=>process.exit(1));
})
