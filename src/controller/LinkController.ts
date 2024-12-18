import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LinkService } from '@/service/LinkService';
import { Result } from '@/utils';
import { Link } from '@/data/types';

@Controller('link')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Post()
  async add(@Body() link: Link) {
    await this.linkService.add(link);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.linkService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.linkService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() link: Link) {
    await this.linkService.edit(link);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.linkService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.linkService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.linkService.paging(page, size);
    return Result.success(list);
  }
} 