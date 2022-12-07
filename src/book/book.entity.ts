import { Author } from 'src/author/author.entity';
import { Category } from 'src/category/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'book' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'title',
  })
  title: string;

  @Column()
  year: string;

  @ManyToMany(() => Category, (category) => category.books)
  categories: Category[];

  @ManyToMany(() => Author, (author) => author.books)
  authors: Author[];
}
