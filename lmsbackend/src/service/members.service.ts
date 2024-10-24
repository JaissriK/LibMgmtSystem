import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Members, MembersDocument } from "../model/members.schema";
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MembersService {
    constructor(@InjectModel(Members.name) private membersModel: Model<MembersDocument>
    ) {}

    async addMember(members: Members): Promise<Members> {
    const newMember = new this.membersModel(members);
    return newMember.save();
    }

    async getMembers(): Promise<Members[]> {
    const getmembers = await this.membersModel.find().exec();
    return getmembers;
    }

    async update(id, members: Members): Promise<Members> {
    return await this.membersModel.findByIdAndUpdate(id, members, {new: true})
    }

    async delete(id): Promise<any> {
    return await this.membersModel.findByIdAndDelete(id);
    }

}