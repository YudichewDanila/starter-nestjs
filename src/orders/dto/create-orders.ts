import { ShopingCart } from 'src/shopingcart/shopingcart.enity';
import { PointOrders } from 'src/point-orders/point-orders.enity';

export class CreateOrdersDto {
  IdShopingCart: ShopingCart;
  IdPointOrders: PointOrders;
  DataProducts: Date;
  StatusOrder: boolean;
  FullPrice: number;
}
