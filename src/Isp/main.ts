/**
 Interface segregation principle (Principio de segregação
 de interface ) - os clientes nao devem ser forçados a depender
 de interfaces que nao utilizam
 */

import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistence';
import { Product } from './classes/product';
import { ShoopingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

const noDiscount = new NoDiscount();

const shoopingCart = new ShoopingCart(noDiscount);
const persistence = new Persistency();
const message = new Message();
const order = new Order(shoopingCart, message, persistence);

shoopingCart.addItem(new Product('Camiseta', 49.9));
shoopingCart.addItem(new Product('Caneta', 2.9));
shoopingCart.addItem(new Product('Caneca', 12.9));

console.log(shoopingCart.items);
console.log(shoopingCart.total());

console.log(shoopingCart.totalWithDiscont());

order.checkout();
