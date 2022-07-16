import { Outlet } from "react-router-dom"
import { DefaultLayoutContainer } from "./style"

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
