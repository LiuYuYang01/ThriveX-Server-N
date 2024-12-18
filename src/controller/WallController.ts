import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { WallService } from '@/service/WallService';
import { Result } from '@/utils';
import { Wall } from '@/data/types';

@Controller('wall')
export class WallController {
  constructor(private wallService: WallService) {}

  @Post()
  async add(@Body() wall: Wall) {
    await this.wallService.add(wall);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.wallService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.wallService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() wall: Wall) {
    await this.wallService.edit(wall);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.wallService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.wallService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.wallService.paging(page, size);
    return Result.success(list);
  }

  @Get('cate/:id')
  async getByCate(@Param('id') cateId: number) {
    const list = await this.wallService.getByCate(cateId);
    return Result.success(list);
  }

  @Patch(':id/audit')
  async updateAuditStatus(
    @Param('id') id: number,
    @Body('status') status: number
  ) {
    await this.wallService.updateAuditStatus(id, status);
    return Result.success();
  }
} 