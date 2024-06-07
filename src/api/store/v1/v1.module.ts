import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';

@Module({
  controllers: [CategoriesController]
})
export class V1Module {}
