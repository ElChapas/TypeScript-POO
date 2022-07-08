import {ProductMemoryService} from './services/product-memory.sevice'

const productService = new ProductMemoryService();

productService.create({
  title: 'P1',
  categoryId: '1',
  description: 'Lorem impsum',
  images: ['photo.org'],
  price: 100
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Hi'
})

const res = productService.findOne(productId);

console.log(res);



