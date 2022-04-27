var express = require('express');
var router = express.Router();
var olDao = require('../dao/OlDao');

router.get('/', async function(req, res){
    await olDao.add(req, res);
    await olDao.query(req, res);
    res.send(req.online.length + ' users online');
})
module.exports = router;