import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private repository: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.repository.save(createProdutoDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.repository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
