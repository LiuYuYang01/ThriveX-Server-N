import { Module } from '@nestjs/common';
import { UserController } from '@/controller/UserController';
import { UserService } from "@/service/UserService";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}