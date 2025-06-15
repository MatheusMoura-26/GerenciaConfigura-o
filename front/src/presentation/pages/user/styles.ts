import styled from 'styled-components'

// Paleta reutilizada
const deepPurple = '#6C5CE7'
const mintGreen = '#00CEC9'
const lightGray = '#F2F2F2'
const white = '#FFFFFF'
const electricBlue = '#0984E3'
const darkText = '#333333'
const placeholderGray = '#A0A0A0'

export const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  font-family: 'Inter', sans-serif;
  background-color: ${lightGray};
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${darkText};
  margin-bottom: 2rem;
  text-align: center;
`

export const Section = styled.section`
  background: ${white};
  border-radius: 0.7rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 1.2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.15rem;
    font-weight: 600;
    color: ${electricBlue};
    margin-bottom: 1.2rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label`
  font-size: 0.95rem;
  color: ${darkText};
  font-weight: 500;
`

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid ${placeholderGray};
  border-radius: 0.3rem;
  font-size: 1rem;
  background-color: ${white};
  color: ${darkText};
`

export const Button = styled.button`
  padding: 0.6rem;
  background: ${deepPurple};
  color: ${white};
  font-weight: 600;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${electricBlue};
  }

  &:disabled {
    background: ${placeholderGray};
    cursor: not-allowed;
  }
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 0.95rem;
`

export const Placeholder = styled.p`
  color: ${placeholderGray};
  font-size: 1rem;
  text-align: center;
`
