import { Outlet } from 'react-router-dom'
import { Header } from './header'

import { DefaultLayoutContainer } from './style'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
