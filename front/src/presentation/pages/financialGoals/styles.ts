import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
`

export const Section = styled.section`
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  input {
    flex: 1 1 150px;
    padding: 0.5rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.25rem;
  }
  button {
    padding: 0.5rem 1rem;
    background: #2563eb;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    &:not(:first-child) {
      background: #64748b;
    }
  }
`

export const Placeholder = styled.p`
  color: #64748b;
  font-size: 1rem;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  margin-top: 1rem;
  font-size: 1rem;
`

export const GoalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
`

export const Progress = styled.div`
  margin-top: 0.5rem;
  span {
    font-size: 0.95rem;
    color: #334155;
  }
`

export const Bar = styled.div`
  background: #e2e8f0;
  border-radius: 0.25rem;
  height: 8px;
  width: 200px;
  margin-top: 0.25rem;
  overflow: hidden;
`

export const Fill = styled.div<{ width: number }>`
  background: #22c55e;
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 0.3s;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    background: #f59e42;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    &:last-child {
      background: #ef4444;
    }
  }
`
