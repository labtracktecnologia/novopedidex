import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
