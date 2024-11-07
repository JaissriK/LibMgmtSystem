import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { CreateRentalDto } from 'src/dto/create-rental.dto';
import { UpdateRentalDto } from 'src/dto/update-rental.dto';
import { RentalService } from 'src/service/rental/rental.service';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  async createRental(
    @Res() response,
    @Body() createRentalDto: CreateRentalDto,
  ) {
    try {
      const newRental = await this.rentalService.createRental(createRentalDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Rental has been created successfully',
        newRental,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Rental not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateRental(
    @Res() response,
    @Param('id') rentalId: string,
    @Body() updateRentalDto: UpdateRentalDto,
  ) {
    try {
      const existingRental = await this.rentalService.updateRental(
        rentalId,
        updateRentalDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Rental has been successfully updated',
        existingRental,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getRentals(@Res() response) {
    try {
      const rentalData = await this.rentalService.getAllRentals();
      return response.status(HttpStatus.OK).json({
        message: 'All rentals data found successfully',
        rentalData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getRental(@Res() response, @Param('id') rentalId: string) {
    try {
      const existingRental = await this.rentalService.getRental(rentalId);
      return response.status(HttpStatus.OK).json({
        message: 'Rental found successfully',
        existingRental,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteRental(@Res() response, @Param('id') rentalId: string) {
    try {
      const deletedRental = await this.rentalService.deleteRental(rentalId);
      return response.status(HttpStatus.OK).json({
        message: 'Rental deleted successfully',
        deletedRental,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
