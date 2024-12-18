import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RouteService } from '@/service/RouteService';
import { Result } from '@/utils';
import { Route } from '@/data/types';

@Controller('route')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Post()
  async add(@Body() route: Route) {
    await this.routeService.add(route);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.routeService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.routeService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() route: Route) {
    await this.routeService.edit(route);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.routeService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.routeService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.routeService.paging(page, size);
    return Result.success(list);
  }

  @Get('role/:roleId')
  async getRoutesByRoleId(@Param('roleId') roleId: number) {
    const list = await this.routeService.getRoutesByRoleId(roleId);
    return Result.success(list);
  }

  @Post('role/:roleId')
  async assignRoutes(
    @Param('roleId') roleId: number,
    @Body() routeIds: number[]
  ) {
    await this.routeService.assignRoutes(roleId, routeIds);
    return Result.success();
  }
} 