import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RoleService } from '@/service/RoleService';
import { Result } from '@/utils';
import { Role } from '@/data/types';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async add(@Body() role: Role) {
    await this.roleService.add(role);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.roleService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.roleService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() role: Role) {
    await this.roleService.edit(role);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.roleService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.roleService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.roleService.paging(page, size);
    return Result.success(list);
  }

  @Get('mark/:mark')
  async getByMark(@Param('mark') mark: string) {
    const data = await this.roleService.getByMark(mark);
    return Result.success(data);
  }
} 