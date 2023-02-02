// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'postgres',
      entities: [`${__dirname}/typeorm/entities/*{.js,.ts}`],
      synchronize: true, // do not use in prod
    }),
    UsersModule,
  ],
})
export class AppModule {}
