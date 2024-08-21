// src/infrastructure/repositories/MongoBookRepository.ts
import { Book } from '../../domain/entities/Book';
import { BookRepository } from '../../domain/interfaces/BookRepository';
import { BookModel, IBook } from '../models/BookModel';

export class MongoBookRepository implements BookRepository {
  async findAll(): Promise<IBook[]> {
    return await BookModel.find();
  }

  async findById(id: string): Promise<IBook | null> {
    return await BookModel.findById(id);
  }

  async create(book: Book): Promise<IBook> {
    const newBook = new BookModel(book);
    await newBook.save();
    return newBook;
  }

  async update(book: Book): Promise<IBook | null> {
    return await BookModel.findByIdAndUpdate(book.id, book);
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}
