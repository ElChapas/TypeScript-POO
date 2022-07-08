import { ProductHttpService } from './services/product.http.service';

(async () => {
  const productService = new ProductHttpService;
  console.log('---------------------------------------------------------');
  const products = await productService.getAll();
  console.log(products);

  await productService.update(110, {price: 500})
  // console.log(await productService.findOne(110));


})();
