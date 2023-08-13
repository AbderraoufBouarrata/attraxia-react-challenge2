import { config } from '@/app/_config/config';
import { getAccessToken } from '@/app/_utils/getAccessToken';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_redux/store';
import { setUser } from '../../_redux/user';

export default function useFetchUser() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchUser() {
            const token = getAccessToken();
            if (!token) return setLoading(false);
            const res = await fetch(`${config.API_URL}/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => data)
                .catch((err) => alert(err));

            setLoading(false);
            if (res.statusCode === 401) {
                alert(res.error + '\n' + res.message);
            } else {
                dispatch(setUser(res));
            }
        }
        fetchUser();
    }, []);
    return { loading };
}
