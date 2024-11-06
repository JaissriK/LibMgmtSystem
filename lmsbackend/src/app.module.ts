import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path/posix';
import { BooksController } from './controller/books.controller';
import { BooksService } from './service/books.service';
import { MembersController } from './controller/members.controller';
import { MembersService } from './service/members.service';
import { RentalsController } from './controller/rentals.controller';
import { RentalsService } from './service/rentals.service';
import { Books, BooksSchema } from './model/books.schema';
import { Members, MembersSchema } from './model/members.schema';
import { Rentals, RentalsSchema } from './model/rentals.schema';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
    MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
    MongooseModule.forFeature([{ name: Members.name, schema: MembersSchema }]),
    MongooseModule.forFeature([{ name: Rentals.name, schema: RentalsSchema }]),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    BookModule,
  ],
  controllers: [
    AppController,
    BooksController,
    MembersController,
    RentalsController,
  ],
  providers: [AppService, BooksService, MembersService, RentalsService],
})
export class AppModule {}
