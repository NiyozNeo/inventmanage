import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getTenantConnection } from '../tenancy/tenancy.utils';
import { Repository } from 'typeorm';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { Tenant } from './tenant.entity';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantsRepository: Repository<Tenant>,
  ) {}

  async create(createTenantDto: CreateTenantDto) {
    try {
      let tenant = this.tenantsRepository.create(createTenantDto);

      tenant.name = createTenantDto.name;

      tenant = await this.tenantsRepository.save(tenant);

      const schemaName = `tenant_${tenant.name}`;
      await this.tenantsRepository.manager.query(
        `CREATE SCHEMA IF NOT EXISTS "${schemaName}"`,
      );

      const connection = await getTenantConnection(tenant.name);

      await connection.runMigrations();
      await connection.close();

      return tenant;
    } catch (error) {
      console.log(error);

      return new InternalServerErrorException();
    }
  }
  async findAll(): Promise<Tenant[]> {
    return this.tenantsRepository.find();
  }
}
