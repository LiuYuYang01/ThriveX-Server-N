import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Route } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class RouteService {
  constructor(private prisma: PrismaService) {}

  async add(route: Route) {
    await this.prisma.route.create({ data: route });
  }

  async del(id: number) {
    await this.prisma.route.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.route.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(route: Route) {
    const { id, ...data } = route;
    await this.prisma.route.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.route.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.route.findMany();
  }

  async paging(page: number, size: number) {
    return await getPagingData("route", { page, size });
  }

  // 获取角色的路由权限
  async getRoutesByRoleId(roleId: number) {
    // 先获取角色路由关联
    const routeRoles = await this.prisma.route_role.findMany({
      where: { role_id: roleId }
    });
    
    // 再获取路由详情
    const routeIds = routeRoles.map(rr => rr.route_id);
    const routes = await this.prisma.route.findMany({
      where: {
        id: { in: routeIds }
      }
    });

    return routes;
  }

  // 分配路由权限
  async assignRoutes(roleId: number, routeIds: number[]) {
    // 先删除原有权限
    await this.prisma.route_role.deleteMany({
      where: { role_id: roleId }
    });

    // 批量创建新权限
    const data = routeIds.map(routeId => ({
      role_id: roleId,
      route_id: routeId
    }));

    await this.prisma.route_role.createMany({ data });
  }
} 