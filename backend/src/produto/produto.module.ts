import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Produto } from './entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
