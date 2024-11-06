import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  Put,
  Req,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Books } from '../model/books.schema';
import { BooksService } from '../service/books.service';
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/addbook')
  async addBook(@Res() response, @Body() books: Books) {
    const newBook = await this.booksService.addBook(books);
    return response.status(HttpStatus.CREATED).json({
      message: 'Book added successfully!',
      post: newBook,
    });
  }

  @Get('/getbooks')
  async getBooks(@Res() response) {
    const getbooks = await this.booksService.getBooks();
    return response.status(HttpStatus.OK).json(getbooks);
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() books: Books) {
    const updatedBook = await this.booksService.update(id, books);
    if (!updatedBook) {
      throw new NotFoundException('Book does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Book has been updated!',
      post: updatedBook,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedBook = await this.booksService.delete(id);
    if (!deletedBook) {
      throw new NotFoundException('Book does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message: 'Book has been deleted!',
      post: deletedBook,
    });
  }
}
