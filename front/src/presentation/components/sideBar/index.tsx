import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    SidebarContainer,
    ToggleButton,
    SidebarItem,
    SidebarWrapper,
    SidebarLabel
} from './styles'
import { FiMenu } from 'react-icons/fi'
import { FaUser, FaChartPie, FaBullseye, FaCreditCard, FaNewspaper } from 'react-icons/fa'

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <SidebarContainer isOpen={isOpen}>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                <FiMenu size={20} />
            </ToggleButton>

            <SidebarWrapper>
                <SidebarItem>
                    <FaChartPie />
                    {isOpen && <SidebarLabel><Link to="/dashboard">Dashboard</Link></SidebarLabel>}
                </SidebarItem>
                <SidebarItem>
                    <FaUser />
                    {isOpen && <SidebarLabel><Link to="/profile">Perfil</Link></SidebarLabel>}
                </SidebarItem>
                <SidebarItem>
                    <FaBullseye />
                    {isOpen && <SidebarLabel><Link to="/goals">Metas</Link></SidebarLabel>}
                </SidebarItem>
                <SidebarItem>
                    <FaCreditCard />
                    {isOpen && <SidebarLabel><Link to="/account">Conta e Cartão</Link></SidebarLabel>}
                </SidebarItem>
                <SidebarItem>
                    <FaNewspaper />
                    {isOpen && <SidebarLabel><Link to="/news">Notícias</Link></SidebarLabel>}
                </SidebarItem>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
