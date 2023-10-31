/* eslint-disable prettier/prettier */
import { Allow, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { ProductEntity } from "src/entities/product.entity";

export class BaseProductDto{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly title:ProductEntity

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price: ProductEntity
}

