import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from '../entities/category';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {
    this.initialize().then(console.log);
  }

  async initialize() {
    const count = await this.categoryModel.count();
    if (count === 0) {
      await this.categoryModel.create([
        { name: 'Food' },
        { name: 'Household' },
        { name: 'Social Life' },
        { name: 'Transportation' },
        { name: 'Health' },
        { name: 'Miscellaneous' },
      ]);
    }
  }
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create({ name: createCategoryDto.name });
  }

  findAll() {
    return this.categoryModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
