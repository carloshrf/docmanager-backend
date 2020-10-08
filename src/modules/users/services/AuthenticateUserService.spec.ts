import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'cj',
      email: 'cj@email.com',
      password: '12345678',
    });

    const response = await authenticateUser.execute({
      email: 'cj@email.com',
      password: '12345678',
    });

    expect(response).toHaveProperty('token');
  });
});
