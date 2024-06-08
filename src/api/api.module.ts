import { Module } from '@nestjs/common';
import { StoreModule } from './store/store.module';
import { CustomersModule } from './customers/customers.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [StoreModule, CustomersModule, AdminModule]
})
export class ApiModule {}
