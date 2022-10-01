const express = require('express')
const router = express.Router();
const db = require('../models');
router.get("/all", (req,res)=> {
    db.Todo.findAll().then(todos => res.send(todos));
});
//by id
router.get("/find/:id", (req, res) => {
    db.Todo.findAll({
      where: {
        id: req.params.id
      }
    }).then(todo => res.send(todo));
  });
//new data
router.post('/new', (req,res)=> {
    db.Todo.create({
        text: req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
});
//delete
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("success"));
});

//edit

router.put("/edit", (req, res) => {
    db.Todo.update({
        text: req.body.text
    },
    {
        where: {id : req.body.id}
    }).then(()=> res.send("success"));
})

module.exports = router;