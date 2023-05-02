const router = require('express').Router();
const fetch = require("node-fetch")
const apiPoke = "https://pokeapi.co/api/v2/pokemon"

router.route('/').get((req,res)=>{
    //limit=20&offset=${req.query.offset}
    fetch(`${apiPoke}?limit=20&offset=${req.query.offset}`)
    .then(promesaFetch=> promesaFetch.json())
    .then(contenido => {msg = contenido;
        res.json(msg);
        console.log(msg);
    })
})

module.exports = router;