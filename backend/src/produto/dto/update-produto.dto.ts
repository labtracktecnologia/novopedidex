import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @IsNotEmpty({ message: 'Informe o nome do produto' })
  @MinLength(5, { message: 'O nome deve ter pelo menos 5 caracteres' })
  @MaxLength(200, { message: 'O nome deve ter no máximo 200 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'Informe o preço do produto' })
  preco: number;

  @IsNotEmpty({ message: 'Informe o estoque do produto' })
  estoque: number;
}
