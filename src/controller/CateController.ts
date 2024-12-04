import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CateService } from "@/service/CateService";
import { Result, toPagingData } from "@/utils";

@Controller("/cate")
export class CateController {
  constructor(private cateService: CateService) {
  }

  @Get(":id")
  async get(@Param("id") id: number) {
    console.log(typeof id);
    const data = await this.cateService.get(id);
    return Result.success(data);
  }

  @Post("list")
  async list() {
    const list = await this.cateService.list();
    return Result.success(list);
  }

  @Post("paging")
  async paging(@Param("id") id: number) {
    const list = await toPagingData("cate", { page: 1, size: 5 });
    return Result.success(list);
  }
}