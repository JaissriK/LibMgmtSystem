import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { Books } from "../model/books.schema";
import { BooksService } from "../model/books.service";
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/books')
export class BooksController {
    constructor(private readonly booksService: BooksService
    ) {}

    @Post('/addbook')
    async AddBook(@Res() response, @Body() books: Books) {
        const newBook = await this.booksService.addbook(books);
        return response.status(HttpStatus.CREATED).json({newBook})
    }

}


