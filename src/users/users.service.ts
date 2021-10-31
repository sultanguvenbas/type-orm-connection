import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./users.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService{
    constructor(@InjectRepository(UsersEntity) private userRepo: Repository<UsersEntity>) {}

    findAll(): Promise<UsersEntity[]>{
        return this.userRepo.find();
    }

    sigup(data: UsersEntity){
        this.userRepo.insert(data);
    }
}