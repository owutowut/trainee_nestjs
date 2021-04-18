import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NumbersDocument = Numbers & Document;
@Schema()
export class Numbers {
    @Prop()
    number: number;

    @Prop({ type: Date , default: Date.now})
    createDate: Date;

    @Prop()
    primeNumber: number[];
}

export const NumbersSchema = SchemaFactory.createForClass(Numbers);