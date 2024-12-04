import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  hello() {
    return 'Hello ThriveX';
  }
}
