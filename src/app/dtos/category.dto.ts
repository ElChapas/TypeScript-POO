import { IsEnum, IsNotEmpty, IsUrl, Length, validate, validateOrReject } from 'class-validator';
import { Category, AccessType } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'hello';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    dto.access = AccessType.PUBLIC;
    await validateOrReject(dto);
    console.log('All Good');

  } catch (error) {
    console.log(error);
  }
})();
