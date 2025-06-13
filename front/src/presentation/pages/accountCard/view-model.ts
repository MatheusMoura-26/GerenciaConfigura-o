import { useEffect, useState } from 'react'
import { UserRepository } from '../../../infra/api/userApi'

type UserBankData = {
    name: string
    accountNumber: string
    agency: string
    balance: number
    cardNumber: string
    cardLimit: number
}

export function useAccountCardViewModel() {
    const [data, setData] = useState<UserBankData | null>(null)
    const userId = 4 // ← substituir futuramente pelo ID do usuário logado

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
    }, [])

    return { data }
}
