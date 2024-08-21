// src/domain/interfaces/BookRepository.ts
import { IBook } from '../../infrastructure/models/BookModel';
import { Book } from '../entities/Book';

export interface BookRepository {
  findAll(): Promise<IBook[]>;
  findById(id: string): Promise<IBook | null>;
  create(book: Book): Promise<IBook>;
  update(book: Book): Promise<IBook | null>;
  delete(id: string): Promise<void>;
}
