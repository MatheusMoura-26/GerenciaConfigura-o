import { useEffect, useState } from 'react'
import { UserRepository } from '../../../infra/api/userApi'
import { useCurrentUser } from '../../../shared/hooks/useCurrentUser'

export function useDashboardViewModel() {
    const { id: userId } = useCurrentUser() // <-- agora vem do localStorage
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        UserRepository.getById(userId)
            .then((res) => {
                setUser(res.data.data)
            })
            .finally(() => setLoading(false))
    }, [userId])

    return {
        user,
        loading,
    }
}
