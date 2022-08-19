const router = require('express').Router();
const {notes} = require('../db/db.json');
const {v4: uuidv4} = require('uuid');
const {createNote} = require('../Js-folder/notes');
const { get } = require('./htmlroutes');

router.get('/notes', (req,res)=>{
    res.json(notes);
});
module.exports = router;