import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.productsService.deleteProduct(params.id);
  }
  @Get()
  getAll(@Query() params: any) {
    const param = { take: params.take, page: params.page };
    return this.productsService.getAllProduct(param);
  }
  @Get('/serch')
  getSerch(@Query() params) {
    return this.productsService.serchProduct(params.serch.slice(0, -1));
  }
  @Get('/category')
  getCategory(@Query() params: any) {
    const param = {
      take: params.take == 'undefined' ? '5' : params.take,
      page: params.page == 'undefined' ? '1' : params.page,
      price: params.price == 'undefined' ? '0-999999' : params.price,
      manifacturs:
        params.manifacturs == '/' ||
        params.manifacturs == 'undefined/' ||
        params.manifacturs == '' ||
        params.manifacturs == null
          ? ''
          : params.manifacturs,
      undercategory: params.undercategory,
    };
    return this.productsService.getCategoryProduct(param);
  }
}
