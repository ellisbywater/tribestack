const router = require('express').Router()

// Task Model
const Task = require('../../models/Task')

// @route  GET api/v1/tasks
// @desc   GET All Tasks
// @access Public
router.post('/', (req, res) => {
    const newTask = new Task({
        name: req.body.name
    })
    newTask.save().then(task => res.json(task))
})

// @route  POST api/v1/tasks
// @desc   CREATE a Task
// @access Public
router.get('/', (req, res) => {
    Task.find()
        .sort({ date: -1})
        .then(tasks => res.json(tasks))
})

// @route  DELETE api/v1/tasks/:id
// @desc   DELETE a Task
// @access Public
router.delete('/:id', (req, res) => {
    Task.findById(req.params.id)
        .then(task => task.remote()
            .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router