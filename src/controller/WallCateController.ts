import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { WallCateService } from '@/service/WallCateService';
import { Result } from '@/utils';
import { WallCate } from '@/data/types';

@Controller('wall-cate')
export class WallCateController {
  constructor(private wallCateService: WallCateService) {}

  @Post()
  async add(@Body() wallCate: WallCate) {
    await this.wallCateService.add(wallCate);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.wallCateService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.wallCateService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() wallCate: WallCate) {
    await this.wallCateService.edit(wallCate);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.wallCateService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.wallCateService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.wallCateService.paging(page, size);
    return Result.success(list);
  }
} 