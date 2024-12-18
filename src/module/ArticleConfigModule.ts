import { Module } from '@nestjs/common';
import { ArticleConfigController } from '@/controller/ArticleConfigController';
import { ArticleConfigService } from '@/service/ArticleConfigService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleConfigController],
  providers: [ArticleConfigService],
})
export class ArticleConfigModule {} 