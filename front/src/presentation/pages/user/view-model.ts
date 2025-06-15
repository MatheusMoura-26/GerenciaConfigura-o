import { useEffect, useState } from 'react'
import { UserRepository } from '../../../infra/api/userApi'
import { useCurrentUser } from '../../../shared/hooks/useCurrentUser'
import { useNavigate } from 'react-router-dom'


export type FormState = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    cpf: string
    birthdate: string
    account: any
    card: any
    limitManagement: any
    news: any[]
}

export function useUserProfileViewModel() {
    const navigate = useNavigate()
    const { id: userId } = useCurrentUser() // agora vem do contexto
    const [form, setForm] = useState<FormState>({
        id: userId,
        name: '',
        email: '',
        phone: '',
        password: '',
        cpf: '',
        birthdate: '',
        account: {},
        card: {},
        limitManagement: {},
        news: [],
    })

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        UserRepository.getById(userId)
            .then((res) => {
                const user = res.data.data

                setForm({
                    id: user.id ?? 0,
                    name: user.name ?? '',
                    email: user.email ?? '',
                    phone: user.phone ?? '',
                    password: '',
                    cpf: user.cpf ?? '',
                    birthdate: user.birthdate ?? '',

                    account: {
                        id: user.account?.id ?? 0,
                        userId: user.account?.userId ?? user.id,
                        number: user.account?.number ?? '',
                        agency: user.account?.agency ?? '',
                        balance: user.account?.balance ?? 0,
                        limit: user.account?.limit ?? 0,
                    },

                    card: {
                        id: user.card?.id ?? 0,
                        userId: user.card?.userId ?? user.id,
                        number: user.card?.number ?? '',
                        limit: user.card?.limit ?? 0,
                    },

                    limitManagement: {
                        id: user.limitManagement?.id ?? 0,
                        userId: user.limitManagement?.userId ?? user.id,
                        maxLimitAllowed: user.limitManagement?.maxLimitAllowed ?? 0,
                        requestedIncrease: user.limitManagement?.requestedIncrease ?? 0,
                    },

                    news: (user.news ?? []).map((n: any) => ({
                        id: n.id ?? 0,
                        userId: n.userId ?? user.id,
                        title: n.title ?? '',
                        content: n.content ?? '',
                    })),
                })
            })
            .catch(() => {
                setError('Erro ao carregar dados do usuário.')
            })
    }, [userId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const payload = {
                ...form,
                password: form.password || undefined,
            }
            await UserRepository.update(userId, payload)
            // ✅ Redirecionar após sucesso
            navigate('/dashboard')
        } catch (err) {
            setError('Erro ao salvar alterações.')
            console.log('Deu ruim boy', err)
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        error,
        loading,
        handleChange,
        handleSubmit,
    }
}
