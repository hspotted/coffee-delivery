import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BulletsContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  TitleContainer,
} from './style'

import CoffeeHeading from '../../../assets/coffee-heading.png'
import { ListItem } from './list-item'
import backgroundImage from '/heading-background.png'

export function HomeHeader() {
  return (
    <HomeHeaderContainer imageUrl={backgroundImage}>
      <HomeHeaderContent className="container">
        <section>
          <TitleContainer>
            <h3 className="title-xl">
              Encontre o café perfeito para qualquer hora do dia
            </h3>
            <p className="text-l">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <BulletsContainer>
            <ListItem
              label="Compra simples e segura"
              variant="yellow-dark"
              icon={<ShoppingCart weight="fill" />}
            />
            <ListItem
              label="Embalagem mantém o café intacto"
              variant="base-text"
              icon={<Package weight="fill" />}
            />
            <ListItem
              label="Entrega rápida e rastreada"
              variant="yellow"
              icon={<Timer weight="fill" />}
            />
            <ListItem
              label="O café chega fresquinho até você"
              variant="purple"
              icon={<Coffee weight="fill" />}
            />
          </BulletsContainer>
        </section>

        <img
          src={CoffeeHeading}
          alt="Copo de café com rótulo negro com a o logo da coffee delivery"
        />
      </HomeHeaderContent>
    </HomeHeaderContainer>
  )
}
