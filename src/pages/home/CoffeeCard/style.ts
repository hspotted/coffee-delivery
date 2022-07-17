import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  text-align: center;
  position: relative;
  padding: 1.25rem;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }
`

export const CategoryListContainer = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  margin-top: 92px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    background: ${({ theme }) => theme.colors['yellow-light']};
    border-radius: 100px;

    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const Name = styled.h3`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1.25rem;

  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors['base-label']};
  margin-top: 0.5rem;
  margin-bottom: 2.0625rem;
`
export const CoffeeCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const PriceTag = styled.span`
  color: ${({ theme }) => theme.colors['base-text']};

  ::before {
    content: '€';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    margin-right: 5px;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItemQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  span {
    padding: 1rem 0;
    text-align: center;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const ItemQuantityButton = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  transition: color 0.2s;
  background: transparent;
  outline: 0;
  border: 0;
  cursor: pointer !important;

  :hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const AddProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  cursor: pointer !important;

  width: 38px;
  height: 38px;

  background: ${({ theme }) => theme.colors['purple-dark']};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 6px;
  outline: none;
  border: none;

  transition: colors 0.2s;

  :hover {
    background: ${({ theme }) => theme.colors['purple']};
  }
`
