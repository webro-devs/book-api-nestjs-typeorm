import { Book } from 'src/book/book.entity';
import { Profile } from 'src/profile/profile.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'author' })
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Profile, (profile) => profile.author)
  profile: Profile;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];
}
