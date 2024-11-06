import { Module } from '@nestjs/common';
import { BooksService } from 'src/service/books.service';
import { BooksController } from 'src/controller/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BooksSchema } from 'src/model/books.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    MongooseModule.forFeature([{ name: 'Books', schema: BooksSchema }]),
  ],

  providers: [BooksService],
  controllers: [BooksController],
})
export class BookModule {}
