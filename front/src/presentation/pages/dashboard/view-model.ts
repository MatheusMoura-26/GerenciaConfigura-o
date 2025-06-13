export function useDashboardViewModel() {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    return { user }
}