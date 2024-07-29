import { Product } from 'src/products/schemas/product.schema';

export class CreateOrderDto {
  readonly orderNumber: number;
  readonly products: Product[];
  readonly totalItems: number;
  readonly totalValue: number;
}
