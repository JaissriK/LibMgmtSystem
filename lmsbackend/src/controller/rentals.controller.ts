import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res, NotFoundException } from "@nestjs/common";
import { Rentals } from "../model/rentals.schema";
import { RentalsService } from "../service/rentals.service";
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/rentals')
export class RentalsController {
    constructor(private readonly rentalsService: RentalsService
    ) {}

    @Post('/addrental')
    async addRental(@Res() response, @Body() rentals: Rentals) {
        const newRental = await this.rentalsService.addRental(rentals);
        return response.status(HttpStatus.CREATED).json({
            message:'Rental added successfully!',
            post: newRental})
    }

    @Get('getrentals')
    async getRentals(@Res() response) {
        const getrentals = await this.rentalsService.getRentals();
        return response.status(HttpStatus.OK).json(getrentals);
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() rentals: Rentals) {
        const updatedRental = await this.rentalsService.update(id, rentals);
        if(!updatedRental) {
            throw new NotFoundException('Rental does not exist!');
        }
        return response.status(HttpStatus.OK).json({
            message: 'Rental has been updated!',
            post: updatedRental});
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedRental = await this.rentalsService.delete(id);
        if(!deletedRental) {
            throw new NotFoundException('Rental does not exist!');
        }
        return response.status(HttpStatus.OK).json({
            message: 'Rental has been deleted!',
            post: deletedRental});
    }




}
