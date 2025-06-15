import { useEffect, useState } from 'react'
import { FinancialGoal } from '../../../domain/entities/FinancialGoal'
import { UserRepository } from '../../../infra/api/userApi'
import { FinancialGoalRepository } from '../../../infra/api/financialGoalApi'
import { useCurrentUser } from '../../../shared/hooks/useCurrentUser'
import { useNavigate } from 'react-router-dom'

type FormState = {
    goalAmount: string
    savedAmount: string
}

export function useFinancialGoalsViewModel() {
    const navigate = useNavigate()
    const { id: userId } = useCurrentUser() // agora vem do contexto
    const [goal, setGoal] = useState<FinancialGoal | null>(null)
    const [form, setForm] = useState<FormState>({ goalAmount: '', savedAmount: '' })
    const [editingId, setEditingId] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        UserRepository.getById(userId)
            .then((res) => {
                const g = res.data.data?.financialGoal

                if (g) {
                    setGoal(g)
                    setForm({
                        goalAmount: String(g.goalAmount),
                        savedAmount: String(g.savedAmount),
                    })
                    setEditingId(g.id)
                } else {
                    setGoal(null)
                    setForm({ goalAmount: '', savedAmount: '' })
                    setEditingId(null)
                }
            })
            .catch(() => {
                setError('Erro ao buscar metas financeiras.')
            })
    }, [userId])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError(null)

        const data = {
            userId,
            goalAmount: Number(form.goalAmount),
            savedAmount: Number(form.savedAmount),
        }

        try {
            if (editingId) {
                await FinancialGoalRepository.update(editingId, data)
                navigate('/dashboard')
            } else {
                await FinancialGoalRepository.create(data)
                navigate('/dashboard')
            }

            const res = await UserRepository.getById(userId)
            const updatedGoal = res.data.data?.financialGoal

            if (updatedGoal) {
                setGoal(updatedGoal)
                setForm({
                    goalAmount: String(updatedGoal.goalAmount),
                    savedAmount: String(updatedGoal.savedAmount),
                })
                setEditingId(updatedGoal.id)
            }
        } catch {
            setError('Erro ao salvar a meta financeira.')
        }
    }

    async function handleDelete(id: number) {
        try {
            await FinancialGoalRepository.delete(id)
            setGoal(null)
            setForm({ goalAmount: '', savedAmount: '' })
            setEditingId(null)
        } catch {
            setError('Erro ao excluir meta financeira.')
        }
    }

    function handleCancel() {
        if (goal) {
            setForm({
                goalAmount: String(goal.goalAmount),
                savedAmount: String(goal.savedAmount),
            })
            setEditingId(goal.id)
        } else {
            setForm({ goalAmount: '', savedAmount: '' })
            setEditingId(null)
        }
        setError(null)
    }

    return {
        goal,
        form,
        error,
        editingId,
        handleChange,
        handleSubmit,
        handleDelete,
        handleCancel,
    }
}
