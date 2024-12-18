import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TagService } from '@/service/TagService';
import { Result } from '@/utils';
import { Tag } from '@/data/types';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) {}

  @Post()
  async add(@Body() tag: Tag) {
    await this.tagService.add(tag);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.tagService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.tagService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() tag: Tag) {
    await this.tagService.edit(tag);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.tagService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.tagService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.tagService.paging(page, size);
    return Result.success(list);
  }
} 