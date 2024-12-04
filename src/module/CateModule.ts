import { Module } from '@nestjs/common';
import { CateController } from '@/controller/CateController';
import { CateService } from '@/service/CateService';

@Module({
  controllers: [CateController],
  providers: [CateService],
})
export class CateModule {
}