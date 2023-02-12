import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private repository: Repository<Pedido>,
  ) {}

  create(createPedidoDto: CreatePedidoDto) {
    return this.repository.save(createPedidoDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.repository.update(id, updatePedidoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
