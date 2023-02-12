import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class PedidoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, { nullable: false })
  produto: Produto;

  @ManyToOne(() => Pedido, { nullable: false })
  pedido: Pedido;

  @Column({ nullable: false, type: 'float' })
  quantidade: number;

  @Column({ nullable: false, type: 'float' })
  valorUnitario: number;

  @Column({ nullable: false, type: 'float' })
  valorTotal: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
