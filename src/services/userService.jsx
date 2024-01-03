export const getUserId = () => {
    const userData = localStorage.getItem('userData')

    if (userData) {
        const user = JSON.parse(userData)
        return user.id
    }
}