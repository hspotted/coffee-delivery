import styled from 'styled-components'

export const CoffeeSection = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
