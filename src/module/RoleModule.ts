import { Module } from '@nestjs/common';
import { RoleController } from '@/controller/RoleController';
import { RoleService } from '@/service/RoleService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {} 