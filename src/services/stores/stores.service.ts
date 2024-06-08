import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreDto } from './dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) { }

  async getAll() {
    const stores = await this.prisma.store.findMany({})
    return stores
  }

  create(dto: CreateStoreDto) {
    return this.prisma.store.create({ data: dto })
  }
}
