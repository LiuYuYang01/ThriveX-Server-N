import { Injectable } from "@nestjs/common";
import { PrismaService } from "./PrismaService";
import { Cate } from "@/data/cate";

@Injectable()
export class CateService {
  constructor(private prisma: PrismaService) {
  }

  async add(data: Cate) {
    const result = await this.prisma.cate.create({ data });
    console.log(result);
  }

  async get(id: number) {
    const data = await this.prisma.cate.findFirst({ where: { id } });
    return data;
  }

  async list(pattern: string) {
    const list = await this.prisma.cate.findMany();
    if (pattern === "list") return list;

    return list;
  }
}