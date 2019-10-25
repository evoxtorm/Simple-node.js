const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a api');
});

/* Say Something */
router.post('/saysomt',(req, res) => {
 try
 {
  let data = req.body;
  res.send(composeGreet(data.name));
 }catch(e)
 {
  res.send('something bad happen');
 }
});

let composeGreet= function(name)
{
  return "hello " + name +"\n";
};


module.exports = router;
module.exports.composeGreet = composeGreet;
