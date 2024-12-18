import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ConfigService } from '@/service/ConfigService';
import { Result } from '@/utils';
import { Config } from '@/data/types';

@Controller('config')
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Post()
  async add(@Body() config: Config) {
    await this.configService.add(config);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() names: string[]) {
    await this.configService.delBatch(names);
    return Result.success();
  }

  @Delete(':name')
  async del(@Param('name') name: string) {
    await this.configService.del(name);
    return Result.success();
  }

  @Patch()
  async edit(@Body() config: Config) {
    await this.configService.edit(config);
    return Result.success();
  }

  @Get(':name')
  async get(@Param('name') name: string) {
    const data = await this.configService.get(name);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.configService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.configService.paging(page, size);
    return Result.success(list);
  }

  @Get('group/:group')
  async getByGroup(@Param('group') group: string) {
    const list = await this.configService.getByGroup(group);
    return Result.success(list);
  }
} 