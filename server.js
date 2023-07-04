const dotenv = require('dotenv').config();
const express =  require('express');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors');

const app = express();

// Middleware - using next()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(
 {
  origin: [
    "http://localhost:3000",
    "https://mern-task-app.onrender.com"
  ]
 }
));


//  Routes
app.get("/", (req, res, next) => {
  res.send("Home page");
})

// Handle routes
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5555

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT,  () => {
      console.log(`Server running on port: ${PORT}`)
    })
  } catch(error) {
    console.log(error)
  }
}

startServer();
