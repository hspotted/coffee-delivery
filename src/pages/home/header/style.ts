import { rgba } from 'polished'
import styled from 'styled-components'

interface HomeHeaderContainerProps {
  imageUrl: string
}

export const HomeHeaderContainer = styled.div<HomeHeaderContainerProps>`
  width: 100%;
  height: 34rem;
  background: ${({ theme, imageUrl }) => `url(${imageUrl}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors.white} 0%,
        ${rgba(theme.colors.background, 0.2)} 50%,
        ${theme.colors.background} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeHeaderContent = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > section {
    display: flex;
    flex-direction: column;

    gap: 4.125rem;
  }

  > img {
    width: 100%;
    max-width: 476px;
  }
`

export const TitleContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  h3 {
    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-stretch: 100;
  }
`

export const HeaderBackgroundImage = styled.img`
  width: 100%;
  overflow: hidden;
`

export const BulletsContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
