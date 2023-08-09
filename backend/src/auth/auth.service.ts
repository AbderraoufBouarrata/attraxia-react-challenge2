import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) {}
    async signUp(dto: AuthDto) {
        //generate the password hash
        const hash = await argon.hash(dto.password);

        //save the user in the database
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                },
                // we can use select to return the user with the role
            });

            delete user.password;

            //return the saved user
            return this.signToken(user.id, user.email);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new ForbiddenException('Credentials already taken');
            }
            throw error;
        }
    }
    async signIn(dto: AuthDto) {
        // find the user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        // if the user is not found throw an error
        if (!user) throw new ForbiddenException('Invalid credentials');

        // compare the password hash with the password hash in the database
        const passwordMatches = await argon.verify(user.password, dto.password);
        if (!passwordMatches)
            throw new ForbiddenException('Incorrect credentials');

        // if the password is not correct throw an error

        // return user
        delete user.password;
        return this.signToken(user.id, user.email);
    }

    async signToken(
        userId: number,
        email: string,
    ): Promise<{ access_token: string }> {
        const payload = { sub: userId, email };
        const secret = this.config.get<string>('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '7d',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}
