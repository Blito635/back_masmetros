const router = require('express').Router();

router.route('/').get((req,res)=>{
    msg = `Hello ${req.query.name || "world"} from request`;
    res.json({msg});
})

module.exports = router;