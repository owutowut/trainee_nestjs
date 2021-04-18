import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NumberDto, NumberIdDto } from '../dto/numbers.dto';
import { NumbersService } from '../service/numbers.service';

@Controller("numbers")
export class NumbersController {
    constructor(private readonly numbersService: NumbersService) { }

    @Post()
    async create(@Body() numberDto: NumberDto) {
        return await this.numbersService.create(numberDto)
    }

    @Get()
    findAll(): Promise<NumberDto[]> {
        return this.numbersService.findAll();
    }

    @Get()
    findOne(@Body() numberIdDto: NumberIdDto) {
        return this.numbersService.findOne(numberIdDto.id);
    }

    @Delete()
    delete(@Body() numberIdDto: NumberIdDto) {
        return this.numbersService.delete(numberIdDto.id);
    }

    @Put()
    update(@Body() numberIdDto: NumberIdDto) {
        return this.numbersService.update(numberIdDto);
    }

}
