import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  orderNumber?: string;

  @Prop({ type: [{ type: Object }] })
  products: Product[];

  @Prop({ required: true })
  totalItems: number;

  @Prop({ required: true })
  totalValue: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
