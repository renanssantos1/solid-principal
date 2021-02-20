import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistency } from '../services/persistence';
import { ShoopingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoopingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com o total de ${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
