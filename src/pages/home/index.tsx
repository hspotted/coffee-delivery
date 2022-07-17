import { Coffees } from '../../utils/coffee-list'
import { CoffeeCard } from './CoffeeCard'
import { HomeHeader } from './header'
import { CoffeeList, CoffeeSection } from './style'

export function HomePage() {
  return (
    <>
      <HomeHeader />
      <CoffeeSection className="container">
        <h2 className="title-l">Nossos cafés</h2>
        <CoffeeList>
          {Coffees.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </CoffeeList>
      </CoffeeSection>
    </>
  )
}
