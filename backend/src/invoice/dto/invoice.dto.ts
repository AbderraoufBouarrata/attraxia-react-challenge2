import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InvoiceDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsDateString() // Use IsDateString instead of IsDate
    @IsNotEmpty()
    dueDate: Date;

    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
