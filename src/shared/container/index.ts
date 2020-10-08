import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersReposiroty from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersReposiroty,
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);
