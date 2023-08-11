export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        name: data.get('name') || null,
        password: data.get('password'),
        passwordConfirm: data.get('passwordConfirm'),
    });
};
