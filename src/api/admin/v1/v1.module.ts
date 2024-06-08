import { Module } from '@nestjs/common';
import { StoresController } from './stores/stores.controller';

@Module({
  controllers: [StoresController]
})
export class V1Module {}
