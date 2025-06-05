import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserRepository } from '../../../infra/api/userApi'

export function useLoginViewModel() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await UserRepository.getAll()
            const users = response.data.data

            const foundUser = users.find(
                (u: any) =>
                    u.email === form.email && u.password === form.password
            )

            if (foundUser) {
                localStorage.setItem('user', JSON.stringify(foundUser))
                navigate('/dashboard')
            } else {
                setError('Email ou senha inválidos.')
            }
        } catch (err) {
            console.error(err)
            setError('Erro ao tentar logar.')
        }
    }

    return {
        form,
        handleChange,
        handleSubmit,
        error,
    }
}
