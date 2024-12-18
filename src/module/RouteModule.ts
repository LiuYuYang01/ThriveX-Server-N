import { Module } from '@nestjs/common';
import { RouteController } from '@/controller/RouteController';
import { RouteService } from '@/service/RouteService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [RouteController],
  providers: [RouteService],
})
export class RouteModule {} 