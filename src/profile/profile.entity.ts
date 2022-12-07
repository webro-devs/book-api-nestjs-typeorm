import { Author } from 'src/author/author.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'profile' })
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @OneToOne(() => Author, (author) => author.profile)
  author: Author;
}
