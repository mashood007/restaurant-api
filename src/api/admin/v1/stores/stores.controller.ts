import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStoreDto } from 'src/services/stores/dto';
import { StoresService } from 'src/services/stores/stores.service';

@Controller('api/admin/v1/stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) { }

  @Get("")
  index() {
    return this.storesService.getAll()
  }

  @Post("")
  create(@Body() createDto: CreateStoreDto) {
    return this.storesService.create(createDto)
  }
}
