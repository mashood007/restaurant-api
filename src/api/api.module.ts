import { Module } from '@nestjs/common';
import { StoreModule } from './store/store.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [StoreModule, CustomersModule]
})
export class ApiModule {}
