require('dotenv').config({path:'server/config/config.env'});
const app = require('./app');

const connectDatabase = require('./config/database');
connectDatabase();

console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log('Server is running on ',process.env.PORT);
})
