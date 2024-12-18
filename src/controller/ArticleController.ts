import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ArticleService } from '@/service/ArticleService';
import { Result } from '@/utils';
import { Article } from '@/data/types';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async add(@Body() article: Article) {
    const data = await this.articleService.add(article);
    return Result.success(data);
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.articleService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.articleService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() article: Article) {
    await this.articleService.edit(article);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.articleService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.articleService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(
    @Query('page') page: number,
    @Query('size') size: number
  ) {
    const data = await this.articleService.paging(page, size);
    return Result.success(data);
  }
}
