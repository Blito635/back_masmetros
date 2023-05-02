const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./src/routes')

const  {json, urlencoded}= express;

const app = express();
const port = process.env.PORT || 8000;

app.use(json());

app.use(urlencoded({estended: false}));




const corsOption = {
    origin:'*',
    optionsSuccessStatus:200
}

app.use(cors(corsOption));

app.use(router)


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})