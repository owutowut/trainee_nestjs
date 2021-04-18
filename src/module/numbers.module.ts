import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NumbersController } from '../controller/numbers.controller';
import { NumbersSchema } from '../schema/numbers.schema';
import { NumbersService } from '../service/numbers.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Numbers", schema: NumbersSchema }])],
  controllers: [NumbersController],
  providers: [NumbersService]
})
export class NumbersModule { }
