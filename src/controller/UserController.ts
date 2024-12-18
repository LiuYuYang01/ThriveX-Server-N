import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "@/service/UserService";

@Controller("/user")
export class UserController {
  constructor(
    private userService: UserService
  ) {
  }

  @Post("list")
  list() {
    return this.userService.list();
  }
}
