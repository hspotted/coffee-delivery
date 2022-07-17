import styled from 'styled-components'
import { Color } from '../../../../styles/themes/default'

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
`

interface IconContainerProps {
  variant: Color
}

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Base/Text */
  background: ${({ theme, variant }) => theme.colors[`${variant}`]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1000px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`
