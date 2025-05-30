import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLoginViewModel() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Logando com: ${form.email}`);
        navigate('/dashboard');
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
}