import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';
import { PedidoItem } from './entities/pedido-item.entity';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItem)
    private repository: Repository<PedidoItem>,
  ) {}

  create(createPedidoItemDto: CreatePedidoItemDto) {
    return this.repository.save(createPedidoItemDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePedidoItemDto: UpdatePedidoItemDto) {
    return this.repository.update(id, updatePedidoItemDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
