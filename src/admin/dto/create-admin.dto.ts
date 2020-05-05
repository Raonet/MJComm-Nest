import { IsInt, Length, Min, Max } from 'class-validator';
export class CreateAdminDto {
    readonly username: string;
    readonly password: string;
}
