import { IsInt, Length, Min, Max } from 'class-validator';
export class CreateAdminDto {
    @IsInt()
    @Min(0)
    @Max(10)
    readonly id: number;
    @Length(4, 18)
    readonly username: string;
    @Length(4, 18)
    readonly password: string;
}
