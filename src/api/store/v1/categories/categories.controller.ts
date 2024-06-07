import { Controller, Get } from '@nestjs/common';
import { CategoryService } from 'src/services/category/category.service';

@Controller('api/stroe/v1/categories')
export class CategoriesController {
  constructor(private categoryService: CategoryService) { }

  @Get('')
  index() {
    return this.categoryService.getAll()
  }
}
