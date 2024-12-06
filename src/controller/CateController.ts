import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CateService } from "@/service/CateService";
import { Result, getPagingData } from "@/utils";
import { Cate } from "@/data/cate";

@Controller("/cate")
export class CateController {
  constructor(private cateService: CateService) {
  }

  @Post()
  async add(@Body() cate: Cate) {
    await this.cateService.add(cate)
    return Result.success();
  }

  @Get(":id")
  async get(@Param("id") id: number) {
    const data = await this.cateService.get(id);
    return Result.success(data);
  }

  @Post("list")
  async list(@Query("pattern") pattern: string) {
    const list = await this.cateService.list(pattern);
    return Result.success(list);
  }

  @Post("paging")
  async paging(@Query("page") page: number, @Query("size") size: number) {
    const list = await getPagingData("cate", { page, size });
    return Result.success(list);
  }
}