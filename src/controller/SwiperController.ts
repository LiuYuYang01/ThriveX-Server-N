import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SwiperService } from '@/service/SwiperService';
import { Result } from '@/utils';
import { Swiper } from '@/data/swiper';

@Controller('swiper')
export class SwiperController {
  constructor(private swiperService: SwiperService) {}

  @Post()
  async add(@Body() swiper: Swiper) {
    await this.swiperService.add(swiper);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.swiperService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.swiperService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() swiper: Swiper) {
    await this.swiperService.edit(swiper);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.swiperService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.swiperService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.swiperService.paging(page, size);
    return Result.success(list);
  }
} 