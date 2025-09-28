import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import type { RegisterDTO } from './register.dto';
import { registerSchema } from '@reddit-comments/schemas';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() registerDTO: RegisterDTO) {
    return {
      message: 'Registration received',
      data: registerDTO,
    };
  }
}
