import axios from 'axios';
import { Product } from './models/product.model';
(async () => {
  async function getProducts(): Promise<Product[]> {
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // Usamos <Product[]> para indicar que data es un array de productos.
    return data;
  }

  console.log('------------------------');
  const products = await getProducts();
  products.map(i => {
    console.log(`${i.title} - $${i.price}`);

  })
})();
