import { Product } from '../models/product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Product["categoryId"];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

