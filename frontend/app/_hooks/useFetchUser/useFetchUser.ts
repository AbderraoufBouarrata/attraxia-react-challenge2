import { config } from '@/app/_config/config';
import { getAccessToken } from '@/app/_utils/getAccessToken';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_redux/store';
import { setUser } from '../../_redux/user';

export default function useFetchUser() {
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true);

    //@ts-ignore
    React.useEffect(() => {
        async function fetchUser() {
            const token = getAccessToken();
            const res = await fetch(`${config.API_URL}/user/me`, {
                //@ts-ignore
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

    return { user, loading };
}
