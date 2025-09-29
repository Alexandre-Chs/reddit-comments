import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.server';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUser(username: string, email: string) {
    return await this.prisma.users.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });
  }

  async addUser(username: string, email: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10);
    return await this.prisma.users.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });
  }
}

// faire que ici on supp du register form notre user, au pire dans settings je rajoute un moyen d'ajouter un user existant ensuite via email.
