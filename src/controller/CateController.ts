import { Controller, Get, Post } from '@nestjs/common';

@Controller('/cate')
export class CateController {
  @Get()
  get() {

  }

  @Post('list')
  list(){

  }
}