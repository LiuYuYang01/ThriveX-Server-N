import { Controller, Get, Post } from '@nestjs/common';
import { CateService } from '../service/CateService';

@Controller('/cate')
export class CateController {
  constructor(private cateServce: CateService) {
  }

  @Get()
  get() {

  }

  @Post('list')
  list() {
    return this.cateServce.list();
  }
}