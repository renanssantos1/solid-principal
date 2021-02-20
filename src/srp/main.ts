import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistence';
import { Product } from './entities/product';
import { ShoopingCart } from './entities/shopping-cart';

const shoopingCart = new ShoopingCart();
const persistence = new Persistency();
const message = new Message();
const order = new Order(shoopingCart, message, persistence);

shoopingCart.addItem(new Product('Camiseta', 49.9));
shoopingCart.addItem(new Product('Caneta', 2.9));
shoopingCart.addItem(new Product('Caneca', 12.9));

console.log(shoopingCart.items);
console.log(shoopingCart.total());

order.checkout();
