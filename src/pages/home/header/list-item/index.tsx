import { ReactNode } from 'react'
import { Color } from '../../../../styles/themes/default'
import { IconContainer, ListItemContainer } from './style'

interface ListItemProps {
  icon: ReactNode
  label: string
  variant: Color
}

export function ListItem({ icon, variant, label }: ListItemProps) {
  return (
    <ListItemContainer>
      <IconContainer variant={variant}>{icon}</IconContainer>
      {label}
    </ListItemContainer>
  )
}
