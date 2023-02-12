import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Pedido } from './entities/pedido.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
