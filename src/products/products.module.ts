import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './Products.entity';
import { ProductsController } from './Products.controller';
import { ProductsService } from './Products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
