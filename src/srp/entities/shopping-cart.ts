import { CartItem } from './interfaces/cart-item';

export class ShoopingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
