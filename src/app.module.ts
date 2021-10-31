import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/users.entity";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host:'localhost',
        port: 5432,
        username:'postgres',
        database: 'testtypeorm',
          synchronize: true,
          migrationsRun: true,
        entities: [UsersEntity],
      }),
      UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
