import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from './config';
import { TenantsModule } from './tenants/tenants.module';
import { TenancyModule } from './tenancy/tenancy.module';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource),
    TenantsModule,
    TenancyModule,
    UsersModule,
    RoomsModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
