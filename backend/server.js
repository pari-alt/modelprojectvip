const express= require('express');
const cors= require('cors');
const myrouting= require('./routing/route');

const myapp = express();
require('dotenv').config();
require("./database/connect");
const myport= process.env.PORTNO || 8800

myapp.use(express.json());
myapp.use(cors());
myapp.use("/api",myrouting);

myapp.get("/",(req,res)=>{
      res.send("This is default api for try");
});



myapp.listen(myport,()=>{
    console.log(`server is running at : ${myport} `);
});
