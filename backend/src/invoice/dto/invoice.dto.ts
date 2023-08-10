import {
    IsDateString,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsIn,
    IsOptional,
} from 'class-validator';

export class InvoiceDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    amount?: number;

    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    dueDate?: Date;

    @IsIn(['Complete', 'Pending', 'Cancel'])
    @IsNotEmpty()
    @IsOptional()
    status?: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
