import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['background']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 5;
`

export const ActionsNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}
export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0 0.5rem;
  position: relative;
  cursor: pointer;

  border-radius: 6px;
  border: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};

    border-radius: 50%;
  }

  font-size: 14px;

  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`${variant}-light`]};
    color: ${({ theme }) => theme.colors[`${variant}-dark`]};
    span {
      background: ${({ theme }) => theme.colors[`${variant}-dark`]};
    }
  `}
  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`${variant}`]};
      }
    `}
`
