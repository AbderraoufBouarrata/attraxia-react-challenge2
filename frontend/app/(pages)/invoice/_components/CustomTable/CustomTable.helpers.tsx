import DeleteIcon from '@/app/_assets/icons/Delete.svg';
import CustomCheckbox from '@/app/_components/CustomCheckbox/CustomCheckbox';
import { Invoice } from '@/app/_types/Invoice';
import { User } from '@/app/_types/User';
import { Stack } from '@mui/material';
import Image from 'next/image';
import React, { HTMLProps } from 'react';
import Calendar from '@/app/_assets/icons/Calendar-Green.svg';
import Email from '@/app/_assets/icons/Email.svg';
import CustomAvatar from '@/app/_components/CustomAvatar/CustomAvatar';
import { DateTime } from 'luxon';
import CustomMenu from '../CustomMenu/CustomMenu';
import StatusChip from '../StatusChip/StatusChip';
import { styles } from './CustomTable.styles';

function IndeterminateCheckbox({ indeterminate, className = '', ...rest }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const ref = React.useRef<HTMLInputElement>(null!);

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return <input type="checkbox" ref={ref} className={className + 'cursor-pointer'} {...rest} />;
}

export const getColumns = () => {
    const columns = [
        {
            id: 'select',
            header: ({ table }: any) => (
                <IndeterminateCheckbox
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                        style: styles.checkbox,
                    }}
                />
            ),
            cell: ({ row }: any) => (
                <div className="px-1">
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                            style: styles.checkbox,
                        }}
                    />
                </div>
            ),
            enableSorting: false,
        },
        {
            header: 'Invoice ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',

            accessorKey: 'name',
            cell: ({ row }: any) => (
                <Stack direction="row" alignItems="center" gap="10px">
                    <CustomAvatar src={`https://i.pravatar.cc/300?u=${row.index}`} name={row.original.name} sx={{ width: '40px', height: '40px' }} />
                    {row.original.name}
                </Stack>
            ),
        },
        {
            header: 'Email',
            accessorKey: 'email',
            cell: ({ row }: any) => (
                <Stack direction="row" alignItems="center" gap="10px">
                    <Image src={Email} alt="calendar" height={20} width={20} />
                    {row.original.email}
                </Stack>
            ),
        },
        {
            header: 'Due Date',
            accessorKey: 'dueDate',
            cell: ({ row }: any) => (
                <Stack direction="row" alignItems="center" gap="10px">
                    <Image src={Calendar} alt="calendar" height={20} width={20} />
                    {DateTime.fromISO(row.original.dueDate).toLocaleString(DateTime.DATE_MED)}
                </Stack>
            ),
            sortingFns: {
                asc: (rowA: any, rowB: any, columnId: any) => {
                    return DateTime.fromISO(rowA.original.dueDate) > DateTime.fromISO(rowB.original.dueDate) ? 1 : -1;
                },
            },
        },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({ row }: any) => <StatusChip status={row.original.status} />,
        },
        {
            header: '',
            accessorKey: 'favorite',
            cell: ({ row }: any) => <CustomCheckbox />,
            enableSorting: false,
        },
        {
            header: <Image src={DeleteIcon} alt="delete" />,
            accessorKey: 'delete',
            cell: ({ row }: any) => <CustomMenu />,
            enableSorting: false,
        },
    ];
    return columns;
};

export const formatData = (data: Invoice[], user: User) => {
    return data.map((item) => {
        return {
            id: item.id,
            name: user.name || 'Unnamed Profile',
            email: user.email,
            dueDate: item.dueDate,
            status: item.status,
            favorite: false,
            delete: false,
        };
    });
};
