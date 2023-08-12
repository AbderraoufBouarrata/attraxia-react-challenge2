import { config } from '@/app/_config/config';
import { getAccessToken } from '@/app/_utils/getAccessToken';

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get('name');
    console.log(name);
    const email = data.get('email');
    const token = getAccessToken();

    const res = await fetch(`${config.API_URL}/user`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
        body: JSON.stringify({ name, email }),
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => alert(err));
    console.log(res);
    if (res.error) {
        alert(res.error + '\n' + res.message);
    } else {
        alert('Profile updated successfully');
    }
};
