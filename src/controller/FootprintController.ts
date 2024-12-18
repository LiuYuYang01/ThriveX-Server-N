import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FootprintService } from '@/service/FootprintService';
import { Result } from '@/utils';
import { Footprint } from '@/data/types';

@Controller('footprint')
export class FootprintController {
  constructor(private footprintService: FootprintService) {}

  @Post()
  async add(@Body() footprint: Footprint) {
    await this.footprintService.add(footprint);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.footprintService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.footprintService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() footprint: Footprint) {
    await this.footprintService.edit(footprint);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.footprintService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.footprintService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.footprintService.paging(page, size);
    return Result.success(list);
  }
} 