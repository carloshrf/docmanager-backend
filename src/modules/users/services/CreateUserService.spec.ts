import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should bea ble to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'cj',
      email: 'cj@email.com',
      password: '123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with an existing email address', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'cj',
      email: 'cj@email.com',
      password: '123',
    });

    expect(
      createUser.execute({
        name: 'cj',
        email: 'cj@email.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
