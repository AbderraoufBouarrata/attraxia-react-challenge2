import { config } from '@/app/_config/config';

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const isCheckboxChecked = data.get('checkbox');

    const pwMatch = data.get('password') === data.get('passwordConfirm');

    if (!pwMatch) return alert('Passwords do not match');

    const res = await fetch(`${config.API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
        }),
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => alert(err));

    if (res.error) {
        alert(res.error + '\n' + res.message);
        return false;
    } else {
        alert('Account created successfully');
        if (isCheckboxChecked === 'on') {
            localStorage.setItem('access_token', res.access_token);
        } else {
            sessionStorage.setItem('access_token', res.access_token);
        }
        return true;
    }
};
