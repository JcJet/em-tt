import { User } from 'src/user/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';


export default setSeederFactory(User, async (faker) => {
  const user = new User();

  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.age = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
  user.gender = faker.person.gender();
  user.problems = faker.datatype.boolean({ probability: 0.5 })

  return user;
});
