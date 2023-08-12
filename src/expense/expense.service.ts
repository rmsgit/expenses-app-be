import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from '../entities/expense';
import { Category } from '../entities/category';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}
  create(createExpenseDto: CreateExpenseDto) {
    return this.expenseModel.create(createExpenseDto);
  }

  findAll(query: { category?: string }) {
    return this.expenseModel.find(query);
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return this.expenseModel.findByIdAndUpdate(id, updateExpenseDto);
  }

  async summary() {
    const categories = await this.categoryModel.find();
    const categoryNameList = categories.map((c) => c.name);
    return categoryNameList;
  }

  remove(id: string) {
    return this.expenseModel.findByIdAndDelete(id);
  }
}
