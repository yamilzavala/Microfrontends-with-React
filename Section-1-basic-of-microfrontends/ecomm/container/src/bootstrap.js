import {mount as mountProducts} from 'products/ProductsIndex'
import {mount as mountCart} from 'cart/CartShow'

console.log('container');

mountProducts(document.getElementById('my-products'));
mountCart(document.getElementById('my-cart'));