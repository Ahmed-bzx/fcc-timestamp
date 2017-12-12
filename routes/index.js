var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/:time', (req, res, next) => {
  let time = req.params.time;
  let unixDate = null;
  let naturalDate = null;

  if (isNaN(time)) {
    // Check Date Validation
    if (moment(time, 'LL').format() !== 'Invalid date') {
      naturalDate = time;
      unixDate = moment(time, 'LL').unix();
    }
  } else {
    unixDate = Number(time);
    naturalDate = moment.unix(unixDate).format('LL');
  }

  res.json({ unix: unixDate, natural: naturalDate });
});

module.exports = router;
