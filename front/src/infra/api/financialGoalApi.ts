import { api } from './axios'

export const FinancialGoalRepository = {
    async create(goalData: any) {
        return api.post('/v1/financial-goal', goalData)
    },

    async update(id: number, goalData: any) {
        return api.put(`/v1/financial-goal/${id}`, goalData)
    },

    async delete(id: number) {
        return api.delete(`/v1/financial-goal/${id}`)
    },
}
