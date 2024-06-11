
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    
    const userFactory = await factoryManager.get(User);

    // Insert many records in database.
    for (let i = 0; i < 200; i++) {
      await userFactory.saveMany(10000);
    }
    
  }
}
