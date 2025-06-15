import { useEffect, useState } from 'react'
import { UserRepository } from '../../../infra/api/userApi'
import { useCurrentUser } from '../../../shared/hooks/useCurrentUser' // importa o hook

type UserBankData = {
    name: string
    accountNumber: string
    agency: string
    balance: number
    cardNumber: string
    cardLimit: number
}

export function useAccountCardViewModel() {
    const { id: userId } = useCurrentUser() // pega o id do user logado
    const [data, setData] = useState<UserBankData | null>(null)

    useEffect(() => {
        UserRepository.getById(userId)
            .then((res) => {
                const user = res.data.data

                if (user.account && user.card) {
                    const formattedData: UserBankData = {
                        name: user.name,
                        accountNumber: user.account.number,
                        agency: user.account.agency,
                        balance: user.account.balance,
                        cardNumber: user.card.number,
                        cardLimit: user.card.limit,
                    }

                    setData(formattedData)
                }
            })
            .catch(() => {
                console.error('Erro ao carregar dados bancários.')
            })
    }, [userId])

    return { data }
}