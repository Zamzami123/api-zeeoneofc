__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Chieko V-6',
            namaowner: 'Bang Zaki',
            instagram: 'zaki.blitar',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
