import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LinkTypeService } from '@/service/LinkTypeService';
import { Result } from '@/utils';
import { LinkType } from '@/data/types';

@Controller('link-type')
export class LinkTypeController {
  constructor(private linkTypeService: LinkTypeService) {}

  @Post()
  async add(@Body() linkType: LinkType) {
    await this.linkTypeService.add(linkType);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.linkTypeService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.linkTypeService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() linkType: LinkType) {
    await this.linkTypeService.edit(linkType);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.linkTypeService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.linkTypeService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.linkTypeService.paging(page, size);
    return Result.success(list);
  }
} 