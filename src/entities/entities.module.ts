import { Module } from '@nestjs/common';
import { Category } from './category';

@Module({
  exports: [Category],
})
export class EntitiesModule {}
