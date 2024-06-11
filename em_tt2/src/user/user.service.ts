import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async solveProblems(): Promise<number> {
    const updateResult = await this.usersRepository.update(
        {
          problems: true
        },
        { problems: false },
      );
    return updateResult.affected;
  }
}
