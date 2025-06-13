import styled from 'styled-components'

export const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  font-family: 'Inter', sans-serif;
`

export const UserName = styled.div`
  font-size: 1.1rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
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
  border-radius: 0.7rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 1.2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.15rem;
    font-weight: 600;
    color: #2563eb;
    margin-bottom: 1.2rem;
    letter-spacing: 0.5px;
  }
`

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const AccountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Label = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 1rem;
`

export const Value = styled.span`
  color: #1e293b;
  font-weight: 600;
  font-size: 1.05rem;
`

export const Balance = styled(Value)`
  color: #22c55e;
  font-size: 1.15rem;
`

export const CardBox = styled.div`
  background: linear-gradient(90deg, #2563eb 60%, #60a5fa 100%);
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  color: #fff;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const CardNumber = styled.div`
  font-size: 1.25rem;
  letter-spacing: 2px;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 0.7rem;
`

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SmallLabel = styled.div`
  font-size: 0.85rem;
  color: #dbeafe;
  font-weight: 400;
`

export const CardValue = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
`

export const Placeholder = styled.p`
  color: #64748b;
  font-size: 1rem;
  text-align: center;
`
