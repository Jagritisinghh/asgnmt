const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/conn');

dotenv.config();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
app.get("/", (req, res) => {
  console.log("Jagriti Singh");
  res.send("Welcome to the API");
});

// Import and use routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/v1/books', bookRoutes);


module.exports = app;
