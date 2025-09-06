import { Request, Response } from "express";
import { books } from "../models/bookModel";
export function getAllBooks(req: Request, res: Response) 
{
  res.json(books);
}
export function getBookById(req: Request, res: Response) 
{
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
}
