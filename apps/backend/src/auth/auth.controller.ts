import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import type { RegisterDTO } from './register.dto';
import { registerSchema } from '@reddit-comments/schemas';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() registerDTO: RegisterDTO) {
    const { userName, email, password, teamName } = registerDTO;

    const userExist = await this.authService.getUser(userName, email);
    if (userExist) return { errors: [{ message: 'User already exist' }] };

    await this.authService.addUserAndTeam(userName, email, password, teamName);

    return {
      message: 'Registration received',
      data: registerDTO,
    };
  }
}
