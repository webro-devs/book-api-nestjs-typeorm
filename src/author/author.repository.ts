import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, InsertResult, UpdateResult } from 'typeorm';

//import { CreateBenefitDto, UpdateBenefitDto } from './dto';
import { Author } from './author.entity';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async getAll() {
    return this.authorRepository.createQueryBuilder().getManyAndCount();
  }

  async getById(id: string): Promise<Author> {
    return this.authorRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.authorRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async create(values): Promise<InsertResult> {
    return this.authorRepository
      .createQueryBuilder()
      .insert()
      .into(Author)
      .values(values as unknown as Author)
      .execute();
  }

  async update(values, id: string): Promise<UpdateResult> {
    return this.authorRepository
      .createQueryBuilder()
      .update(Author)
      .set(values as unknown as Author)
      .where('id = :id', { id })
      .execute();
  }
}
