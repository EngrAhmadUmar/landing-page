export const AUTH_TOKEN = 'auth-token';
export const USER = 'user';
export const logoutUser = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USER)
    
    ;
}