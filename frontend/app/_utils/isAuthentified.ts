export const isAuthentified = () => {
    const session_storage_token = sessionStorage.getItem('access_token');
    const local_storage_token = localStorage.getItem('access_token');
    if (session_storage_token || local_storage_token) {
        return true;
    } else {
        alert('You are not authentified');
        return false;
    }
};
