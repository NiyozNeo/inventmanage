import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { Products } from './Products.entity';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  create(@Body() createProductsDto: CreateProductsDto): Promise<Products> {
    return this.ProductsService.create(createProductsDto);
  }

  @Get()
  findAll(): Promise<Products[]> {
    return this.ProductsService.findAll();
  }
}
