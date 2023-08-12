import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Invoice } from '../_types/Invoice';

export interface InvoiceState {
    invoices: Invoice;
}

const initialState: InvoiceState = {
    invoices: {
        id: '',
        title: '',
        amount: 0,
        dueDate: '',
        createdAt: '',
        updatedAt: '',
        status: 'Cancel',
        userId: 0,
    },
};

export const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        setInvoice: (state, action: PayloadAction<Invoice>) => {
            state.invoices = action.payload;
        },
    },
});

export const { setInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
