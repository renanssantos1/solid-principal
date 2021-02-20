import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoopingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this.items.reduce((acc, next) => acc + next.price, 0).toFixed(2);
  }

  totalWithDiscont(): number {
    return this.discount.calculateDiscount(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
