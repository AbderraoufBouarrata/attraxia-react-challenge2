export function getAccessToken(): string | null {
    const local_storage_token = localStorage.getItem('access_token');
    const session_storage_token = sessionStorage.getItem('access_token');

    if (local_storage_token) {
        return local_storage_token;
    }
    if (session_storage_token) {
        return session_storage_token;
    }
    return null;
}
