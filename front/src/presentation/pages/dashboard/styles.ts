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
  max-width: 450px;
  margin: 20px auto;
  padding: 2rem 1.5rem;
  font-family: 'Inter', sans-serif;
  background-color: ${lightGray};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`

export const UserName = styled.div`
  font-size: 1.2rem;
  color: ${deepPurple};
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
`

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${deepPurple};
  margin-bottom: 1rem;
  text-align: left;
`

export const Section = styled.section`
  background: ${white};
  border-radius: 0.7rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 1.2rem;
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0;

  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${electricBlue};
    //margin-bottom: 1.2rem;
    letter-spacing: 0.5px;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${lightGray};
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  button {
    background-color: ${electricBlue};
    color: ${white};
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    flex-grow: 1;
    min-width: 150px;

    &:hover {
      background-color: #0667b3;
    }

    &.secondary {
      background-color: ${lightGray};
      color: ${deepPurple};
      border: 1px solid ${deepPurple};

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
`

export const Placeholder = styled.p`
  color: ${placeholderGray};
  font-size: 1rem;
  text-align: center;
  padding: 20px;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Label = styled.span`
  color: ${darkText};
  font-weight: 500;
`

export const Value = styled.span`
  color: ${deepPurple};
  font-weight: 600;
`
