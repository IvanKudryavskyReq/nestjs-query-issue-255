import * as dotenv from 'dotenv'
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { DataSource } from 'typeorm';

dotenv.config();

export const DB_CONFIG: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? '123',
  database: process.env.DB_DATABASE ?? 'postgres',
  entities: [__dirname + '/src/entities/*.entity{.ts,.js}'],
  synchronize: true,
};

export const dataSource = new DataSource(DB_CONFIG);
