import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CateService } from "@/service/CateService";
import { Result } from "@/utils";
import { Cate } from "@/data/cate";
import { CustomException } from "@/exception/CustomException";

@Controller("/cate")
export class CateController {
  constructor(private cateService: CateService) {
  }

  @Post()
  async add(@Body() cate: Cate) {
    await this.cateService.add(cate);
    return Result.success();
  }

  @Delete("batch")
  async delBatch(@Body() ids: number[]) {
    await this.cateService.delBatch(ids);
    return Result.success();
  }

  @Delete(":id")
  async del(@Param("id") id: number) {
    await this.cateService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() cate: Cate) {
    await this.cateService.edit(cate);
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
    const list = await this.cateService.paging(page, size);
    return Result.success(list);
  }
}