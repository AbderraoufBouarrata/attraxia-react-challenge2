import { config } from '@/app/_config/config';
import useFetchUser from '@/app/_hooks/useFetchUser/useFetchUser';
import { getAccessToken } from '@/app/_utils/getAccessToken';

//this was made to create quick data for testing
export const generateInvoices = async (id: number) => {
    const randomData = [
        {
            title: 'Flashset',
            amount: 622.71,
            dueDate: '2024-03-10T03:07:55Z',

            userId: id,
            status: 'Cancel',
        },
        {
            title: 'Blogpad',
            amount: 828.49,
            dueDate: '2024-02-18T07:50:02Z',
            userId: id,
            status: 'Pending',
        },
        {
            title: 'Skimia',
            amount: 646.99,
            dueDate: '2024-05-26T22:55:54Z',
            userId: id,
            status: 'Cancel',
        },
        {
            title: 'Rhynyx',
            amount: 143.65,
            dueDate: '2023-12-03T23:32:28Z',
            userId: id,
            status: 'Complete',
        },
        {
            title: 'Plambee',
            amount: 81.86,
            dueDate: '2023-11-29T08:26:14Z',
            userId: id,
            status: 'Cancel',
        },
        {
            title: 'Brightdog',
            amount: 895.44,
            dueDate: '2024-09-28T19:02:10Z',
            userId: id,
            status: 'Complete',
        },
        {
            title: 'Zoomlounge',
            amount: 792.74,
            dueDate: '2024-08-16T08:38:42Z',
            userId: id,
            status: 'Complete',
        },
        {
            title: 'Voolith',
            amount: 414.53,
            dueDate: '2024-03-20T10:35:06Z',
            userId: id,
            status: 'Complete',
        },
        {
            title: 'Dabfeed',
            amount: 984.21,
            dueDate: '2024-10-08T21:24:33Z',
            userId: id,
            status: 'Pending',
        },
        {
            title: 'Yoveo',
            amount: 764.59,
            dueDate: '2024-02-05T12:51:53Z',
            userId: id,
            status: 'Complete',
        },
    ];
    const token = getAccessToken();

    randomData.forEach(async (invoice) => {
        const res = await fetch(`${config.API_URL}/invoice/create`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: JSON.stringify(invoice),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => alert(err));

        if (res.error) return alert(res.error + '\n' + res.message);
        location.reload();
    });
};
