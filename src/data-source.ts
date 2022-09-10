import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2005',
  database: 'postgres',
  logger: 'debug',
  entities: [join(__dirname, '**', '*.entity.{ts, js}')],
  migrationsTableName: 'migration',
  migrations: ['./migration/*.{ts, js}'],
});
