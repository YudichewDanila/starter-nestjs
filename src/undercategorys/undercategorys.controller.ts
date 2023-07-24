import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { UndercategorysService } from './undercategorys.service';
import { CreateUnderCategoryDto } from './dto/create-undercategory';

@Controller('undercategorys')
export class UndercategorysController {
  constructor(private undercategorysService: UndercategorysService) {}
  @Post()
  create(@Body() dto: CreateUnderCategoryDto) {
    return this.undercategorysService.CreateUnderCategory(dto);
  }
  @Get()
  getAll() {
    return this.undercategorysService.getAllUnderCategory();
  }
  @Get(':id')
  getId(@Param() params) {
    return this.undercategorysService.getIdUnderCategory(params.id);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.undercategorysService.deleteUnderCategory(params.id);
  }
}
