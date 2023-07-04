const express = require('express');
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');

const router = express.Router();

// Create a Task Route - CREATE
router.post("/", createTask)

// READ ALL tasks
router.get("/", getTasks)

// get A task - READ One
router.get("/:id", getTask)

//  DELETE task
router.delete("/:id", deleteTask)

//  UPDATE task
router.put("/:id", updateTask)
// router.patch("/api/tasks/:id", updateTask) update single field


module.exports = router;
