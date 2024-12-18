import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticleConfigService } from '@/service/ArticleConfigService';
import { Result } from '@/utils';
import { ArticleConfig } from '@/data/types';

@Controller('article-config')
export class ArticleConfigController {
  constructor(private articleConfigService: ArticleConfigService) {}

  @Post()
  async add(@Body() config: ArticleConfig) {
    await this.articleConfigService.add(config);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.articleConfigService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() config: ArticleConfig) {
    await this.articleConfigService.edit(config);
    return Result.success();
  }

  @Get('article/:id')
  async getByArticleId(@Param('id') articleId: number) {
    const data = await this.articleConfigService.getByArticleId(articleId);
    return Result.success(data);
  }
} 