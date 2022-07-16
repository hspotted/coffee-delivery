import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../components/illustrations/logo'
import { ActionsNav, HeaderButton, HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ActionsNav>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto, PT
        </HeaderButton>
        <NavLink to="/checkout">
          <HeaderButton variant="yellow">
            <span>3</span>
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </ActionsNav>
    </HeaderContainer>
  )
}
