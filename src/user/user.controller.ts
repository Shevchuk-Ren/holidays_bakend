import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, BlockUserDto } from './user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/block')
  blockUser(@Body() dto: BlockUserDto) {
    return this.userService.blockUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return ' обновленный пользователь ';
  }
  // @Post('/login')
  // findForLogin(@Body() dto: LoginUserDto) {
  //   return this.userService.findForLogin(dto);
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  findOneById(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/daysOff/:id')
  findDaysOffByUser(@Body('id') id: number) {
    return this.userService.findDaysOffByUser(id);
  }
}
