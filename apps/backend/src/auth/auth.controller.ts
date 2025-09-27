import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common';
import { registerSchema } from '@reddit-comments/schemas';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import type { RegisterDTO } from './register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() registerDTO: RegisterDTO) {
    console.log('Données reçues dans le contrôleur:', registerDTO);
    return {
      message: 'Registration received',
      data: registerDTO,
    };
  }
}
