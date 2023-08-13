'use client';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices/useFetchInvoices';
import { RootState } from '@/app/_redux/store';
import Loading from '@/app/loading';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatData, getColumns } from './CustomTable.helpers';
import { TableRowStyles, styles } from './CustomTable.styles';
import { CustomTableProps } from './CustomTable.types';

export default function CustomTable(props: CustomTableProps) {
    const { user } = props;
    useFetchInvoices({ userId: user.id });
    const { invoices } = useSelector((state: RootState) => state.invoice);
    const [rowSelection, setRowSelection] = useState({});
    const data = useMemo(() => formatData(invoices, user), [invoices, user]);
    const columns = useMemo(() => getColumns(), []);

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection: rowSelection,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });

    if (columns.length < 1 || invoices.length < 1 || invoices[0].id === '') return <Loading />;

    return (
        <>
            <TableRowStyles />
            {/* @ts-ignore property textAlign is assignable to type string */}
            <table style={styles.table}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                // @ts-ignore property textAlign is assignable to type string
                                <th style={styles.tableHeader} key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr className="tableRow" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot />
            </table>
        </>
    );
}
