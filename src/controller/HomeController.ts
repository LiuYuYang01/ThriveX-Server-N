import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '../service/ArticleService';

@Controller()
export class HomeController {
  constructor(
    private articleService: ArticleService,
  ) {
  }

  @Get()
  hello() {
    return 'Hello ThriveX';
  }
}
