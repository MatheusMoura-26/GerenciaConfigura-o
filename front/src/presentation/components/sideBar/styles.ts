import styled from 'styled-components'

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '220px' : '60px')};
  background: #198754; // Verde uniforme (Bootstrap green)
  color: white;
  padding: 24px 10px 20px 10px;
  transition: width 0.3s cubic-bezier(.4,0,.2,1);
  overflow: hidden;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(20, 83, 45, 0.08);
  display: flex;
  flex-direction: column;
  align-items: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
`

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-bottom: 32px;
  font-size: 1.5rem;
  align-self: flex-end;
  transition: color 0.2s;
  &:hover {
    color: #d1fae5;
  }
`

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 90%;
  margin: 0 auto;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  svg {
    font-size: 1.4rem;
    color: #fff;
    min-width: 24px;
    transition: color 0.2s;
  }
  &:hover {
    background: #157347; // Verde mais escuro no hover
    svg {
      color: #d1fae5;
    }
    a, span {
      color: #d1fae5;
    }
  }
`

export const SidebarLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  transition: color 0.2s;
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #d1fae5;
    }
  }
`