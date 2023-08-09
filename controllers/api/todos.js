const Todo = require('../../models/todo')

module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonTodos,
    jsonTodo
}


function jsonTodo (_, res) {
    res.json(res.locals.data.todo)
}

function jsonTodos (_, res) {
    res.json(res.locals.data.todos)
}


//create//
async function create(req, res, next){
    try{
        const todo = await Todo.create(req.body)
        res.locals.data.todo = todo
    } catch (error) {
        res.stats(400).json({ msg: error.message })
    }
}

//read//

async function indexComplete(req,res,next) {
    try {
        const todos = await Todo.find({ completed: true})
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.stats(400).json({ msg: error.message })
    }
}

async function indexNotComplete(req,res,next) {
    try {
        const todos = await Todo.find({ completed: false})
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.stats(400).json({ msg: error.message })
    }

    async function show (req,res,next) {
        try {
            const todo = await Todo.findOne({_id:req.params.id })
            res.locals.data.todo = todo
            next()
        } catch (error) {
            res.status(400).json({error: error.message })
        }
    }

 async function update (req,res,next){
    try {
        const todo = await Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.locals.data.todo = todo 
        next()
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}


    async function destroy(req,res,next) {
        try {
            const todo = await Todo.findByIdAndDelete(req.params.id)
            res.locals.data.todo = todo
            next()
        } catch (error) {
            res.stats(400).json({ msg: error.message })
        }
    }
}