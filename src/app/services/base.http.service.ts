import axios from 'axios'
import {Category} from '../models/category.model'
import { Product } from '../models/product.model'

export class BaseHttpService<TypeClass>{


  constructor(private url: string){

  }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }
}

(async () => {

  const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products')
  const products = await productService.getAll()
  console.log(products);

  const categoryService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/categories')
  const categories = await categoryService.getAll()
  console.log(categories);

})()


