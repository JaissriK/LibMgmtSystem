import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { Members } from "../model/members.schema";
import { MembersService } from "../model/members.service";
//import { JwtService } from '@nestjs/jwt';

@Controller('/api/v1/members')
export class MembersController {
    constructor(private readonly membersService: MembersService
    ) {}

    @Post('/addmember')
    async AddMember(@Res() response, @Body() members: Members) {
        const newMember = await this.membersService.addmember(members);
        return response.status(HttpStatus.CREATED).json({newMember})
    }

}
