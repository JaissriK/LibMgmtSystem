import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { Rentals } from "../model/rentals.schema";
import { RentalsService } from "../model/rentals.service";
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/rentals')
export class RentalsController {
    constructor(private readonly rentalsService: RentalsService,
        private jwtService: JwtService
    ) {}

    @Post('/addrental')
    async AddRental(@Res() response, @Body() rentals: Rentals) {
        const newRental = await this.rentalsService.addrental(rentals);
        return response.status(HttpStatus.CREATED).json({newRental})
    }

}
