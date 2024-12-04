import { Controller, Get, Post } from '@nestjs/common';
import { CateService } from '../service/CateService';

@Controller('/cate')
export class CateController {
  constructor(private cateService: CateService) {
  }

  @Get()
  get() {

  }

  @Post('list')
  list() {
    return this.cateService.list();
  }
}