import { Module } from '@nestjs/common';
import { HomeController } from '@/controller/HomeController';

@Module({
  controllers: [HomeController],
  providers: [],
})
export class HomeModule {
}