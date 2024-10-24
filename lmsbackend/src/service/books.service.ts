import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Books, BooksDocument } from "../model/books.schema";
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Books.name) private booksModel: Model<BooksDocument>
    ) {}

    async addBook(books: Books): Promise<Books> {
    const newBook = new this.booksModel(books);
    return newBook.save();
    }

    async getBooks(): Promise<Books[]> {
    const getbooks = await this.booksModel.find().exec();
    return getbooks;
    }

    async update(id, books: Books): Promise<Books> {
    return await this.booksModel.findByIdAndUpdate(id, books, {new: true})
    }

    async delete(id): Promise<any> {
    return await this.booksModel.findByIdAndDelete(id);
    }

}