import ArrowDown from '@/app/_assets/icons/Arrow-Down.svg';
import DeleteIcon from '@/app/_assets/icons/Delete.svg';
import MenuIcon from '@/app/_assets/icons/Menu.svg';
import { Invoice } from '@/app/_types/Invoice';
import { User } from '@/app/_types/User';
import { Stack, SvgIcon } from '@mui/material';
import Image from 'next/image';
import React, { HTMLProps } from 'react';
import CustomCheckbox from '@/app/_components/CustomCheckbox/CustomCheckbox';
//@ts-ignore This library does not have types for TS
import { DateTime } from 'luxon';
import { styles } from './CustomTable.styles';
import Calendar from '@/app/_assets/icons/Calendar-Green.svg';
import Email from '@/app/_assets/icons/Email.svg';
import StatusChip from '../StatusChip/StatusChip';

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
        },
        {
            header: (
                <Stack direction="row" alignItems="center" gap="10px">
                    {'Invoice Id'} <Image src={ArrowDown} alt="arrow-down" />
                </Stack>
            ),
            accessorKey: 'id',
        },
        {
            header: (
                <Stack direction="row" alignItems="center" gap="10px">
                    {'Name'}
                    <Image src={ArrowDown} alt="arrow-down" />
                </Stack>
            ),
            accessorKey: 'name',
        },
        {
            header: (
                <Stack direction="row" alignItems="center" gap="10px">
                    {'Email'} <Image src={ArrowDown} alt="arrow-down" />
                </Stack>
            ),
            accessorKey: 'email',
            cell: ({ row }: any) => (
                <Stack direction="row" alignItems="center" gap="10px">
                    <Image src={Email} alt="calendar" height={20} width={20} />
                    {row.original.email}
                </Stack>
            ),
        },
        {
            header: (
                <Stack direction="row" alignItems="center" gap="10px">
                    {'Due Date'} <Image src={ArrowDown} alt="arrow-down" />
                </Stack>
            ),
            accessorKey: 'dueDate',
            cell: ({ row }: any) => (
                <Stack direction="row" alignItems="center" gap="10px">
                    <Image src={Calendar} alt="calendar" height={20} width={20} />
                    {DateTime.fromISO(row.original.dueDate).toLocaleString(DateTime.DATE_MED)}
                </Stack>
            ),
        },
        {
            header: (
                <Stack direction="row" alignItems="center" gap="10px">
                    {'Status'} <Image src={ArrowDown} alt="arrow-down" />
                </Stack>
            ),
            accessorKey: 'status',
            cell: ({ row }: any) => <StatusChip status={row.original.status} />,
        },
        {
            header: '',
            accessorKey: 'favorite',
            cell: ({ row }: any) => <CustomCheckbox />,
        },
        {
            header: <Image src={DeleteIcon} alt="delete" />,
            accessorKey: 'delete',
            cell: ({ row }: any) => <Image src={MenuIcon} alt="menu" />,
        },
    ];
    return columns;
};

export const formatData = (data: Invoice[], user: User) => {
    return data.map((item) => {
        return {
            id: item.id,
            name: user.name,
            email: user.email,
            dueDate: item.dueDate,
            status: item.status,
            favorite: false,
            delete: false,
        };
    });
};
