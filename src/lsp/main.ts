/**
 * Liskov substitution principle (Principio da substitucao de Liskov)
 * Se 0(x) é uma propriedade demostravel dos objetos x de tipo T. entao
 * 0(y) deve ser verdadeiro para objetos y de tipo S onde é
 * um subtipo de T.
 *
 * Mais simples - Subtipos precisam ser substituiveis por seus
 * subtipos
 *
 * -> Mais simples ainda - Se meu programa espera um Animal, algo do tipo
 * Cachorro (que herda de Animal) dever servir como
 * quqlquer outro animal.
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
