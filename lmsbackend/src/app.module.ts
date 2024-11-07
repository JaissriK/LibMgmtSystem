import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/book.schema';
import { BookService } from './service/book/book.service';
import { BookController } from './controller/book/book.controller';
import { MemberSchema } from './schema/member.schema';
import { MemberService } from './service/member/member.service';
import { MemberController } from './controller/member/member.controller';
import { RentalSchema } from './schema/rental.schema';
import { RentalController } from './controller/rental/rental.controller';
import { RentalService } from './service/rental/rental.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'lmsdb' }),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
    MongooseModule.forFeature([{ name: 'Rental', schema: RentalSchema }]),
  ],
  controllers: [
    AppController,
    BookController,
    MemberController,
    RentalController,
  ],
  providers: [AppService, BookService, MemberService, RentalService],
})
export class AppModule {}
