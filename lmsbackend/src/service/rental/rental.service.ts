import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRentalDto } from 'src/dto/create-rental.dto';
import { IRental } from 'src/interface/rental.interface';
import { Model } from 'mongoose';
import { UpdateRentalDto } from 'src/dto/update-rental.dto';

@Injectable()
export class RentalService {
  constructor(@InjectModel('Rental') private rentalModel: Model<IRental>) {}

  async createRental(createRentalDto: CreateRentalDto): Promise<IRental> {
    const newRental = await new this.rentalModel(createRentalDto);
    return newRental.save();
  }

  async updateRental(
    rentalId: string,
    updateRentalDto: UpdateRentalDto,
  ): Promise<IRental> {
    const existingRental = await this.rentalModel.findByIdAndUpdate(
      rentalId,
      updateRentalDto,
      { new: true },
    );
    if (!existingRental) {
      throw new NotFoundException(`Rental #${rentalId} not found`);
    }
    return existingRental;
  }
  async getAllRentals(): Promise<IRental[]> {
    const rentalData = await this.rentalModel.find();
    if (!rentalData || rentalData.length == 0) {
      throw new NotFoundException(`Rentals data not found!`);
    }
    return rentalData;
  }
  async getRental(rentalId: string): Promise<IRental> {
    const existingRental = await this.rentalModel.findById(rentalId).exec();
    if (!existingRental) {
      throw new NotFoundException(`Rental #${rentalId} not found`);
    }
    return existingRental;
  }
  async deleteRental(rentalId: string): Promise<IRental> {
    const deletedRental = await this.rentalModel.findByIdAndDelete(rentalId);
    if (!deletedRental) {
      throw new NotFoundException(`Rental #${rentalId} not found`);
    }
    return deletedRental;
  }
}
