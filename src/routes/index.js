const router = require('express').Router();

const helloRoute = require('./hello');

router.use('/hello', helloRoute);

const pokeRoute = require('./pokemon');

router.use('/pokemon', pokeRoute);


const dataPokeRoute = require('./datapokemon');

router.use('/datapokemon', dataPokeRoute);

module.exports = router;