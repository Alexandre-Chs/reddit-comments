import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() body: any) {
    return {
      message: 'Registration received',
      data: body,
    };
  }

  @Get('test')
  test() {
    console.log('Test endpoint hit');
    return {
      message: 'Test endpoint is working',
    };
  }
}
