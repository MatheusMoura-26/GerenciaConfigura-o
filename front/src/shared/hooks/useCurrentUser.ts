// src/shared/hooks/useCurrentUser.ts
export function useCurrentUser() {
    const userString = localStorage.getItem('user')
    if (!userString) throw new Error('Usuário não está logado.')
    const user = JSON.parse(userString)
    return user
}
