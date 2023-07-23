import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { CategorysService } from './categorys.service';

@Controller('categorys')
export class CategorysController {
  constructor(private categorysService: CategorysService) {}
  @Post()
  create(@Body() dto: { NameCategory: string }) {
    return this.categorysService.createCategory(dto);
  }
  @Get()
  getAll() {
    return this.categorysService.getAllCategory();
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.categorysService.deleteCategory(params.id);
  }
}
