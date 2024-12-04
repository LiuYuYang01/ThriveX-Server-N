import { Controller, Get } from '@nestjs/common';

@Controller("/article")
export class ArticleController {
  @Get()
  list() {
    return 'Hello ThriveX';
  }
}
