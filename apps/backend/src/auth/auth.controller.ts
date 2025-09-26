import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() body: any) {
    // Simple example: just return the received data
    return {
      message: 'Registration received',
      data: body,
    };
  }
}
