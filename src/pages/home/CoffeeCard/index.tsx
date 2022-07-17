import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Coffee } from '../../../utils/coffee-list'
import { formatAsDecimal } from '../../../utils/number'
import {
  AddProductButton,
  BuyContainer,
  CategoryListContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  Description,
  ItemQuantityButton,
  ItemQuantityContainer,
  Name,
  PriceTag
} from './style'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (quantity === 1 ? 1 : prevQuantity - 1))
  }, [])

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }, [])

  const handleAddProductToCheckout = useCallback(() => {}, [])

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageUrl} alt="" />
      <CategoryListContainer>
        {coffee.categories.map((category) => (
          <li className="tag" key={category}>
            {category}
          </li>
        ))}
      </CategoryListContainer>
      <Name className="title-s">{coffee.title}</Name>
      <Description className="text-s">{coffee.description}</Description>
      <CoffeeCardFooter>
        <PriceTag className="title-m">{formatAsDecimal(coffee.price)}</PriceTag>
        <BuyContainer>
          <ItemQuantityContainer>
            <ItemQuantityButton onClick={handleDecreaseQuantity}>
              <Minus weight="bold" size={14} />
            </ItemQuantityButton>
            <span className="text-m">{quantity}</span>
            <ItemQuantityButton onClick={handleIncreaseQuantity}>
              <Plus weight="bold" size={14} />
            </ItemQuantityButton>
          </ItemQuantityContainer>
          <AddProductButton onClick={handleAddProductToCheckout}>
            <ShoppingCart size={22} />
          </AddProductButton>
        </BuyContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
