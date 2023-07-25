import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProduct } from './order-product.enity';
import { OrdersService } from 'src/orders/orders.service';
import { OrderShopingcartService } from 'src/order-shopingcart/order-shopingcart.service';
import { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private OrderProductRepository: Repository<OrderProduct>,
    private orderService: OrdersService,
    private orderShopingcartService: OrderShopingcartService,
  ) {}
  async createManyfacturer(dto) {
    const orderproduct = await this.OrderProductRepository.save(dto);
    return orderproduct;
  }

  async createpay(id, value, shopingCartId) {
    const checkout = new YooCheckout({
      shopId: process.env.shopId,
      secretKey: process.env.secretKey,
    });
    const idempotenceKey = id;
    const createPayload: ICreatePayment = {
      amount: {
        value: value,
        currency: 'RUB',
      },
      confirmation: {
        type: 'redirect',
        return_url: process.env.return_url,
      },
    };

    try {
      const payment = await checkout.createPayment(
        createPayload,
        idempotenceKey,
      );
      const payInterval = setInterval(async () => {
        const pay = await checkout.getPayment(payment.id);
        if (pay.status === 'waiting_for_capture') {
          this.orderService.updateOrders(idempotenceKey);
          this.orderShopingcartService.deleteAllOrderShopingCart(shopingCartId);
          clearInterval(payInterval);
        }
      }, 10000);
      return payment;
    } catch (error) {
      console.error(error);
    }
  }

  async getManyfacturer(IdOrders: number) {
    const manyfacturer = this.OrderProductRepository.find({
      where: { IdOrders: { id: IdOrders } },
    });
    return manyfacturer;
  }
}
