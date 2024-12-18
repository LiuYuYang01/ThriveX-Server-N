import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RecordService } from '@/service/RecordService';
import { Result } from '@/utils';
import { Record } from '@/data/types';

@Controller('record')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Post()
  async add(@Body() record: Record) {
    await this.recordService.add(record);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.recordService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.recordService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() record: Record) {
    await this.recordService.edit(record);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.recordService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.recordService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.recordService.paging(page, size);
    return Result.success(list);
  }
} 