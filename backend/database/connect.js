const mongoose = require('mongoose');
const dburl= process.env.DATABASE;

const mydatabase= mongoose.connect(dburl).then(()=>{
    console.log("db connected");
})

module.exports= mydatabase;