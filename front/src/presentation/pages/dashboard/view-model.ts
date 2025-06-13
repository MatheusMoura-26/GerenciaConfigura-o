import { useEffect, useState } from 'react'
import { UserRepository } from '../../../infra/api/userApi'

export function useDashboardViewModel() {
    const userId = 4 // substituir por auth real futuramente
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        UserRepository.getById(userId)
            .then((res) => {
                setUser(res.data.data)
            })
            .finally(() => setLoading(false))
    }, [])

    return {
        user,
        loading,
    }
}
