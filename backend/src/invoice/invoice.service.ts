import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InvoiceDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class InvoiceService {
    constructor(private prisma: PrismaService) {}

    async createInvoice(dto: InvoiceDto) {
        try {
            const invoice = await this.prisma.invoice.create({
                data: {
                    title: dto.title,
                    amount: dto.amount,
                    dueDate: dto.dueDate,
                    userId: dto.userId,
                    status: dto.status,
                },
            });
            return invoice;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new ForbiddenException('Credentials already taken');
            }
            throw error;
        }
    }

    async getInvoices() {
        try {
            const invoices = await this.prisma.invoice.findMany();
            return invoices;
        } catch (error) {
            throw error;
        }
    }

    async getInvoice(id: string) {
        try {
            const invoice = await this.prisma.invoice.findUnique({
                where: {
                    id: parseInt(id),
                },
            });
            if (!invoice) throw new NotFoundException('Invoice not found');
            return invoice;
        } catch (error) {
            throw error;
        }
    }

    async updateInvoice(id: string, dto: InvoiceDto) {
        try {
            const invoice = await this.prisma.invoice.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    title: dto.title,
                    amount: dto.amount,
                    dueDate: dto.dueDate,
                    userId: dto.userId,
                    status: dto.status,
                },
            });
            return invoice;
        } catch (error) {
            throw error;
        }
    }

    async deleteInvoice(id: string) {
        try {
            const invoice = await this.prisma.invoice.delete({
                where: {
                    id: parseInt(id),
                },
            });
            return {
                message: 'Invoice deleted successfully ',
            };
        } catch (error) {
            throw error;
        }
    }

    async getInvoicesByUser(id: string) {
        try {
            const invoices = await this.prisma.invoice.findMany({
                where: {
                    userId: parseInt(id),
                },
            });
            return invoices;
        } catch (error) {
            throw error;
        }
    }
}
