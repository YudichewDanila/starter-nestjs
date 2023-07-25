import { Products } from 'src/products/products.enity';
import { ShopingCart } from 'src/shopingcart/shopingcart.enity';

export class CreateOrderShopingDto {
  IdShopingCart: ShopingCart;
  IdProducts: Products;
  CountProduct: number;
}
