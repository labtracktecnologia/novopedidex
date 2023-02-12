import { Module } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { PedidoItem } from './entities/pedido-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoItem]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PedidoItemController],
  providers: [PedidoItemService],
})
export class PedidoItemModule {}
