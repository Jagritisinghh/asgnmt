const Book = require("../models/bookModel");

// getBooks
const getAllBooks=async(req,res)=>{
  try {
    const books = await Book.find();
    console.log(books);
    res.send(books);
    res.status(200).json(books);
  }
  catch{
    res.status(500).json({ message: "Error fetching books" });
  }
}



// Getting Books By Id
const getBooksById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Creating a new book
const allowedStatuses = ["unread","reading","read"];

const createBook = async (req, res) => {
  try {
    const { title, author, status,genre, publishedYear,createdAt} = req.body;

    // Check for required fields
    if (!title || !author || !status) {
      return res.status(400).json({ message: "Title, Author, and Status are required." });
    }

    // Validate status
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: `Status must be one of: ${allowedStatuses.join(", ")}` });
    }

    const book = await Book.create({ title, author, status,genre, publishedYear,createdAt });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update a book
const updateBook = async (req, res) =>{
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      });
      if (!book) return res.status(404).json({ message: "book not found"
});
res.status(200).json(book);
} catch (error) {
  res.status(500).json({ message: error.message });
  }

}

// delete a book
const deleteBook = async (req, res) =>{
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "book deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
      }

}

module.exports = {
  getAllBooks,
  getBooksById,
  createBook,
  updateBook,
  deleteBook
};

