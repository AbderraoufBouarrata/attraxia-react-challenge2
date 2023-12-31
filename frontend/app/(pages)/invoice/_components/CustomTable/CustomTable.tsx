'use client';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices/useFetchInvoices';
import { RootState } from '@/app/_redux/store';
import Loading from '@/app/loading';

import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomPagination from '../CustomPagination/CustomPagination';
import Toolbar from '../Toolbar/Toolbar';
import { formatData, getColumns } from './CustomTable.helpers';
import { Asc, Desc, styles } from './CustomTable.styles';
import { CustomTableProps } from './CustomTable.types';
import './CustomTable.styles.css';

export default function CustomTable(props: CustomTableProps) {
    const { user } = props;
    useFetchInvoices({ userId: user.id });
    const { invoices } = useSelector((state: RootState) => state.invoice);
    const [visibleRows, setVisibleRows] = useState<any>([]);
    const columns = useMemo(() => getColumns(), []);
    const [rowSelection, setRowSelection] = useState({});
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState('');
    const rows = useMemo(() => {
        const temp = formatData(invoices, user);
        setVisibleRows(temp);
        return temp;
    }, [invoices, user]);
    const table = useReactTable({
        data: visibleRows,
        //@ts-ignore
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection: rowSelection,
            sorting: sorting,
            globalFilter: filtering,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        //@ts-ignore
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        debugTable: true,
    });

    if (columns.length < 1 || invoices.length < 1 || invoices[0].id === '' || !table) return <Loading />;

    return (
        <>
            <Toolbar rows={rows} setVisibleRows={setVisibleRows} setFiltering={setFiltering} />
            {/* @ts-ignore property textAlign is assignable to type string */}
            <table style={styles.table}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                // @ts-ignore property textAlign is assignable to type string
                                <th style={styles.tableHeader} key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {
                                        {
                                            asc: <Asc />,
                                            desc: <Desc />, // @ts-ignore
                                        }[header.column.getIsSorted() ?? null]
                                    }
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
            <CustomPagination table={table} />
        </>
    );
}
