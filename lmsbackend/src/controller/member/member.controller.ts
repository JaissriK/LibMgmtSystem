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
import { CreateMemberDto } from 'src/dto/create-member.dto';
import { UpdateMemberDto } from 'src/dto/update-member.dto';
import { MemberService } from 'src/service/member/member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  async createMember(
    @Res() response,
    @Body() createMemberDto: CreateMemberDto,
  ) {
    try {
      const newMember = await this.memberService.createMember(createMemberDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Member has been created successfully',
        newMember,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Member not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateMember(
    @Res() response,
    @Param('id') memberId: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    try {
      const existingMember = await this.memberService.updateMember(
        memberId,
        updateMemberDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Member has been successfully updated',
        existingMember,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getMembers(@Res() response) {
    try {
      const memberData = await this.memberService.getAllMembers();
      return response.status(HttpStatus.OK).json({
        message: 'All members data found successfully',
        memberData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getMember(@Res() response, @Param('id') memberId: string) {
    try {
      const existingMember = await this.memberService.getMember(memberId);
      return response.status(HttpStatus.OK).json({
        message: 'Member found successfully',
        existingMember,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteMember(@Res() response, @Param('id') memberId: string) {
    try {
      const deletedMember = await this.memberService.deleteMember(memberId);
      return response.status(HttpStatus.OK).json({
        message: 'Member deleted successfully',
        deletedMember,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
