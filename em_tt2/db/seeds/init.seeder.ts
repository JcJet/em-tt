import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';

import UserSeeder from './user.seeder';
import userFactory from 'db/factories/user.factory';

export default class InitSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [UserSeeder],
      factories: [userFactory],
    });
  }
}
