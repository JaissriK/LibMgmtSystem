import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res, NotFoundException } from "@nestjs/common";
import { Members } from "../model/members.schema";
import { MembersService } from "../service/members.service";
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/members')
export class MembersController {
    constructor(private readonly membersService: MembersService
    ) {}

    @Post('/addmember')
    async addMember(@Res() response, @Body() members: Members) {
        const newMember = await this.membersService.addMember(members);
        return response.status(HttpStatus.CREATED).json({
            message:'Member added successfully!',
            post: newMember})
    }

    @Get('getmembers')
    async getMembers(@Res() response) {
        const getmembers = await this.membersService.getMembers();
        return response.status(HttpStatus.OK).json(getmembers);
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() members: Members) {
        const updatedMember = await this.membersService.update(id, members);
        if(!updatedMember) {
            throw new NotFoundException('Member does not exist!');
        }
        return response.status(HttpStatus.OK).json({
            message: 'Member has been updated!',
            post: updatedMember});
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedMember = await this.membersService.delete(id);
        if(!deletedMember) {
            throw new NotFoundException('Member does not exist!');
        }
        return response.status(HttpStatus.OK).json({
            message: 'Member has been deleted!',
            post: deletedMember});
    }
}
