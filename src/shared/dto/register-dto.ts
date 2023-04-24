import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @ApiProperty({
        name: 'username',
        description: 'This is username!'
    })
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @ApiProperty({
        name: 'password',
        description: 'This is user`s password'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;



    @ApiProperty({
        name: 'region',
        description: 'This is user`s region'
    })
    @IsString()
    @IsNotEmpty()
    region: string;


    @ApiProperty({
        name: 'district',
        description: 'This is user`s district'
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    district: string;
}