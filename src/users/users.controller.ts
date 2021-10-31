import {Body, Controller, Get, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UsersEntity} from "./users.entity";

@Controller('user')
export class UsersController{
    constructor(private readonly userService: UsersService) {
    }

    @Get('all')
    async getAll():Promise<UsersEntity[]>{
        return await this.userService.findAll();
    }


    @Post('signup')
    createUser(@Body() newUser: UsersEntity ){
        this.userService.sigup(newUser);
    }
}