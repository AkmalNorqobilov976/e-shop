import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class LoginDTO {
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
}