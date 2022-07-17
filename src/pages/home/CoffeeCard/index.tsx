import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { useCheckout } from '../../../contexts/checkout-context'
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
  const { coffees, addProduct, updateProductQuantity } = useCheckout()

  const [quantity, setQuantity] = useState<number>(
    coffees.find((c) => c.id === coffee.id)?.quantity ?? 1
  )

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1))
  }, [quantity])

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }, [quantity])

  const handleAddProductToCheckout = useCallback(() => {
    let existingCoffee = coffees.find((c) => c.id === coffee.id)
    if (existingCoffee) updateProductQuantity(coffee.id, quantity)
    else {
      const newExistingCoffee = {
        id: coffee.id,
        quantity: quantity,
        price: coffee.price
      }
      addProduct(newExistingCoffee)
    }
  }, [quantity, coffees])

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
