import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateProductsDto } from './dto/create-Products.dto';
import { Products } from './Products.entity';
import { CONNECTION } from '../tenancy/tenancy.symbols';

@Injectable()
export class ProductsService {
  private readonly ProductsRepository: Repository<Products>;

  constructor(
    @Inject(CONNECTION) connection: Connection,
  ) {    
    this.ProductsRepository = connection.getRepository(Products);
  }

  async create(createUsersDto: CreateProductsDto): Promise<Products> {
    const products = new Products();
    products.name = createUsersDto.name;

    return await this.ProductsRepository.save(products);
  }

  async findAll(): Promise<Products[]> {
    return this.ProductsRepository.find();
  }
}
