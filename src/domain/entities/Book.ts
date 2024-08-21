// src/domain/entities/Book.ts
export class Book {
  constructor(
    public readonly id: string,
    public title: string,
    public author: string,
    public publishedDate: Date
  ) {}
}
