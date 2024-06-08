import { Global, Module } from '@nestjs/common';
import { CategoryService } from './category/category.service';
import { StoresService } from './stores/stores.service';

@Global()
@Module({
  providers: [CategoryService, StoresService],
  exports: [CategoryService, StoresService]
})
export class ServicesModule { }
