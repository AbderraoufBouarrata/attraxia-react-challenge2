import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { InvoiceDto } from './dto';
import { InvoiceService } from './invoice.service';

@UseGuards(JwtGuard)
@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService) {}

    @Get('get')
    getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @Get('get/:id')
    getInvoice(@Param() params: any) {
        return this.invoiceService.getInvoice(params.id);
    }

    @Get('getByUser/:id')
    getInvoicesByUser(@Param() params: any) {
        return this.invoiceService.getInvoicesByUser(params.id);
    }

    @Post('create')
    signUp(@Body() dto: InvoiceDto) {
        return this.invoiceService.createInvoice(dto);
    }

    @Patch('update/:id')
    updateInvoice(@Param() params: any, @Body() dto: InvoiceDto) {
        return this.invoiceService.updateInvoice(params.id, dto);
    }

    @Delete('delete/:id')
    deleteInvoice(@Param() params: any) {
        return this.invoiceService.deleteInvoice(params.id);
    }
}
