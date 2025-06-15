// src/shared/components/Logo.tsx
import styled from 'styled-components'

const LogoImage = styled.img`
  position: fixed;
  top: -60px;
  left: 20px;
  width: 250px;
  z-index: 1000;
`

export function Logo() {
    return <LogoImage src="/LOGO-removebg-preview.png" alt="logo" />
}