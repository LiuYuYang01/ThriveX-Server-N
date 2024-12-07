import { Injectable, Query } from "@nestjs/common";
import { PrismaService } from "./PrismaService";
import { Cate } from "@/data/cate";
import { getPagingData, Result } from "@/utils";

@Injectable()
export class CateService {
  constructor(private prisma: PrismaService) {
  }

  async add(cate: Cate) {
    await this.prisma.cate.create({ data: cate });
  }

  async del(id: number) {
    await this.prisma.cate.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.cate.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(cate: Cate) {
    const { id, ...data } = cate;
    await this.prisma.cate.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    const data = await this.prisma.cate.findFirst({ where: { id } });
    return data;
  }

  async list(pattern: string) {
    const list = await this.prisma.cate.findMany();
    if (pattern === "list") return list;
    return this.toTree(list);
  }

  async paging(page: number, size: number) {
    const list = await getPagingData("cate", { page, size });
    return list;
  }

  toTree(data: Cate[]): Cate[] {
    const map: { [key: number]: Cate } = {};
    const tree: Cate[] = [];

    data.forEach(item => {
      map[item.id] = { ...item, children: [] };
    });

    data.forEach(item => {
      if (item.level === 0) {
        tree.push(map[item.id]);
      } else {
        if (map[item.level]) {
          map[item.level].children!.push(map[item.id]);
        }
      }
    });

    return tree;
  }
}