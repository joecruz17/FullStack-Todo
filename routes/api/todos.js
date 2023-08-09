const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

//index incomplete
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)
//index complete
router.get('/', todoCtrl.indexComplete, todoCtrl.jsonTodos)
//delete
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
//update
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)
//create
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)
//show 
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router