import { Injectable } from "@nestjs/common";
import { PrismaService } from "./PrismaService";

@Injectable()
export class CateService {
  constructor(private prisma: PrismaService) {
  }

  get(id: number) {
    const data = this.prisma.cate.findFirst({ where: { id } });
    return data;
  }

  list() {
    const list = this.prisma.cate.findMany();
    return list;
  }
}