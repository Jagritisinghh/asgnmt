const express = require("express");
const router = express.Router();
const { 
    getAllBooks,getBooksById,createBook,updateBook,deleteBook} = require("../controller/bookController");


router.get("/", getAllBooks);
router.get("/:id",getBooksById);
router.post("/create",createBook);
router.put("/update/:id",updateBook);
router.delete("/delete/:id",deleteBook);

module.exports = router;

