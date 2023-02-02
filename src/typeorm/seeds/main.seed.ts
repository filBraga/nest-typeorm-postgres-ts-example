// main.seed.ts

import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../database/data-source';
import { User } from '../entities/user.entity';
import { UserSeed } from './user.seeds';

const dataSource = new DataSource(dataSourceOptions);
const userRepository = dataSource.getRepository(User);

async function connect() {
  try {
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
    await dataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source connect', err);
  }
}

async function disconnect() {
  try {
    await dataSource.destroy();

    console.log('Data Source disconnected!');
  } catch (err) {
    console.error('Error during Data Source disconnect', err);
  }
}

async function seed() {
  const user = await userRepository.save(UserSeed());
  console.log({ user });
  console.log('created seeds');
}

async function runSeed() {
  await connect();
  await seed();
  await disconnect();
}

runSeed();
