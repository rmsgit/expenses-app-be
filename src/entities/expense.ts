import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema()
export class Expense {
  @Prop()
  public title: string;

  @Prop()
  public description?: string;

  @Prop()
  public date: Date;

  @Prop()
  public category: string;

  @Prop()
  public amount: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
