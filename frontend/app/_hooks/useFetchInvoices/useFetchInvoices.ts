import { config } from '@/app/_config/config';
import { setInvoice } from '@/app/_redux/invoice';
import { getAccessToken } from '@/app/_utils/getAccessToken';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_redux/store';
import { useFetchInvoicesProps } from './useFetchInvoices.types';

export default function useFetchInvoices(props: useFetchInvoicesProps) {
    const { userId } = props;
    const { invoices } = useSelector((state: RootState) => state.invoice);
    const token = getAccessToken();
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        async function fetchInvoices() {
            setLoading(true);
            const res = await fetch(`${config.API_URL}/invoice/getByUser/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => data)
                .catch((err) => alert(err));
            setLoading(false);
            if (res.error) return alert(res.error + '\n' + res.message);
            dispatch(setInvoice(res));
        }
        fetchInvoices();
    }, []);

    return { invoices, loading };
}
