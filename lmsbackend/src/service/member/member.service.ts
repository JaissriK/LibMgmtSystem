import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateMemberDto } from 'src/dto/update-member.dto';
import { CreateMemberDto } from 'src/dto/create-member.dto';
import { IMember } from 'src/interface/member.interface';

@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private memberModel: Model<IMember>) {}

  async createMember(createMemberDto: CreateMemberDto): Promise<IMember> {
    const newMember = await new this.memberModel(createMemberDto);
    return newMember.save();
  }

  async updateMember(
    memberId: string,
    updateMemberDto: UpdateMemberDto,
  ): Promise<IMember> {
    const existingMember = await this.memberModel.findByIdAndUpdate(
      memberId,
      updateMemberDto,
      { new: true },
    );
    if (!existingMember) {
      throw new NotFoundException(`Member #${memberId} not found`);
    }
    return existingMember;
  }
  async getAllMembers(): Promise<IMember[]> {
    const memberData = await this.memberModel.find();
    if (!memberData || memberData.length == 0) {
      throw new NotFoundException(`Members data not found!`);
    }
    return memberData;
  }
  async getMember(memberId: string): Promise<IMember> {
    const existingMember = await this.memberModel.findById(memberId).exec();
    if (!existingMember) {
      throw new NotFoundException(`Member #${memberId} not found`);
    }
    return existingMember;
  }
  async deleteMember(memberId: string): Promise<IMember> {
    const deletedMember = await this.memberModel.findByIdAndDelete(memberId);
    if (!deletedMember) {
      throw new NotFoundException(`Member #${memberId} not found`);
    }
    return deletedMember;
  }
}
