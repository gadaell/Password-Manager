const router = require("express").Router();
const  Passwords = require('../models/Passwords');

router.get('/api/passwords', (req, res) => {
  console.log('Test');
  });

  router.get('/api/passwords/:id', (req, res) => {
    console.log('Test');
  });

  router.post('/api/passwords', (req, res) => {
  console.log('Test');
    
  });

  router.post('/api/passwords:id', (req, res) => {
    console.log('Test2');
  });

  router.delete('/api/passwords/:id', (req, res) => {
    console.log('Test2');
 });


module.exports = router;