type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoopingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): string {
    const total = this.items.reduce((acc, next) => acc + next.price, 0);
    return total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Sua mensagem foi enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}

const shoopingCartLegacy = new ShoopingCartLegacy();

shoopingCartLegacy.addItem({ name: 'Camiseta', price: 49.9 });
shoopingCartLegacy.addItem({ name: 'Caneta', price: 2.9 });
shoopingCartLegacy.addItem({ name: 'Caneca', price: 12.9 });

console.log(shoopingCartLegacy.items);
console.log(shoopingCartLegacy.total());

shoopingCartLegacy.checkout();
