import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Rentals, RentalsDocument } from "../model/rentals.schema";
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RentalsService {
    constructor(@InjectModel(Rentals.name) private rentalsModel: Model<RentalsDocument>
    ) {}

    async addRental(rentals: Rentals): Promise<Rentals> {
    const newRental = new this.rentalsModel(rentals);
    return newRental.save();
    }

    async getRentals(): Promise<Rentals[]> {
    const getrentals = await this.rentalsModel.find().exec();
    return getrentals;
    }

    async update(id, rentals: Rentals): Promise<Rentals> {
    return await this.rentalsModel.findByIdAndUpdate(id, rentals, {new: true})
    }

    async delete(id): Promise<any> {
    return await this.rentalsModel.findByIdAndDelete(id);
    }

}