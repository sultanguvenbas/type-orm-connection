import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity])],
    providers:[UsersService],
    controllers:[UsersController],
    exports:[TypeOrmModule,UsersModule]
})
export class UsersModule{}