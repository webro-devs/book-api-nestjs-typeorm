import { Book } from 'src/book/book.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'title',
  })
  title: string;

  @ManyToMany(() => Book, (book) => book.categories)
  books: Book[];
}
