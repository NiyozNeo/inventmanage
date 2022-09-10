import 'reflect-metadata';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const AppDataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2005',
  database: 'postgres',
  logger: 'debug',
  synchronize: true,
  name: 'default',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrationsTableName: 'migration',
  migrations: ['./migration/*.{ts, js}'],
};
