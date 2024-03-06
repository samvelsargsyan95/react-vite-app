import logo from '/vite.svg'
import './Header.scss'
import { useState } from 'react'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
  height: 70px;
  box-shadow: 0 5px 5px lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
`
let interval = null

export default function Header() {
    const [now, setNow] = useState(new Date())
    clearInterval(interval)
    interval = setInterval(() => setNow(new Date()), 1000)
    
    let logoName = 'Logo Name'

    return (
      <HeaderContainer>
        <img src={logo} alt={logoName} />
        <span>Date: { now.toLocaleTimeString() }</span>
      </HeaderContainer>
    )
}
  