import { Controller, Post, Body, UsePipes, Session, Get } from '@nestjs/common';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import type { RegisterDTO } from './register.dto';
import type { LoginDTO } from './login.dto';
import { loginSchema, registerSchema } from '@reddit-comments/schemas';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() registerDTO: RegisterDTO, @Session() session) {
    const { userName, email, password } = registerDTO;

    const userExist = await this.authService.getUser(userName, email);
    if (userExist)
      return { errors: [{ message: 'User already exist', ok: false }] };

    const user = await this.authService.addUser(userName, email, password);

    session.userId = user.id;

    return { message: 'Registration successful', ok: true };
  }

  @Get('me')
  async me(@Session() session) {
    if (!session.userId) return { user: null };

    const me = await this.authService.getUserById(session.userId);
    return { user: me };
  }

  @Post('logout')
  async logout(@Session() session) {
    session.destroy();
    return { message: 'Logout successful', ok: true };
  }

  @Post('login')
  @UsePipes(new ZodValidationPipe(loginSchema))
  async login(@Body() LoginDTO: LoginDTO, @Session() session) {
    const { email, password } = LoginDTO;
    console.log('le email et password recu sont', email, password);

    const user = await this.authService.getUserRegister(email, password);
    if (!user) return { errors: [{ message: 'User not found', ok: false }] };

    session.userId = user.id;

    return { message: 'Login successful', ok: true };
  }
}
