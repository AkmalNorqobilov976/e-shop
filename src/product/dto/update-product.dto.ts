import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumberString } from "class-validator";
export class UpdateProductDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    // @IsNotEmpty()
    image: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsNumberString()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    owner: string;
}
