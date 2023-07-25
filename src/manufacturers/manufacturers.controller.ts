import { Body, Controller, Post, Get } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturersDto } from './dto/create-manufacturers';

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private manufacturersService: ManufacturersService) {}
  @Post()
  create(@Body() dto: CreateManufacturersDto) {
    return this.manufacturersService.createManyfacturer(dto);
  }
  @Get()
  getAll() {
    return this.manufacturersService.getAllManyfacturer();
  }
}
