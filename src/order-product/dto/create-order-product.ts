import { Products } from 'src/products/products.enity';
import { Orders } from 'src/orders/orders.enity';
import { PointOrders } from 'src/point-orders/point-orders.enity';
import { ShopingCart } from 'src/shopingcart/shopingcart.enity';

export class CreateOrderProductDto {
  IdShopingCart: ShopingCart;
  IdPointOrders: PointOrders;
  DataProducts: Date;
  StatusOrder: boolean;
  IdOrders: Orders;
  FullPrice: number;
  shopingCart: [
    {
      IdOrders: number;
      CountProduct: number;
      IdProducts: Products;
    },
  ];
}
