import hashids from 'hashids'

type CoffeeCategory =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export type Coffee = {
  id: string
  imageUrl: string
  title: string
  description: string
  price: number
  categories: CoffeeCategory[]
}

export const Coffees: Coffee[] = [
  {
    id: new hashids().encode(1),
    imageUrl: '/coffee/coffee-tradicional.png',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    categories: ['tradicional']
  },
  {
    id: new hashids().encode(2),
    imageUrl: '/coffee/coffee-american.png',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    categories: ['tradicional']
  },
  {
    id: new hashids().encode(3),
    imageUrl: '/coffee/coffee-cream.png',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    categories: ['tradicional']
  },
  {
    id: new hashids().encode(4),
    imageUrl: '/coffee/coffee-ice.png',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    categories: ['tradicional', 'gelado']
  },
  {
    id: new hashids().encode(5),
    imageUrl: '/coffee/coffee-with-milk.png',
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    categories: ['tradicional', 'com leite']
  },
  {
    id: new hashids().encode(6),
    imageUrl: '/coffee/coffee-latte.png',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro do leite e espuma cremosa',
    price: 9.9,
    categories: ['tradicional', 'com leite']
  },
  {
    id: new hashids().encode(7),
    imageUrl: '/coffee/coffee-capuccino.png',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite']
  },
  {
    id: new hashids().encode(8),
    imageUrl: '/coffee/coffee-macchiato.png',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite']
  },
  {
    id: new hashids().encode(9),
    imageUrl: '/coffee/coffee-moccaccino.png',
    title: 'Moccaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    categories: ['tradicional', 'com leite']
  },
  {
    id: new hashids().encode(10),
    imageUrl: '/coffee/coffee-hot-chocolate.png',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    categories: ['especial', 'com leite']
  },
  {
    id: new hashids().encode(11),
    imageUrl: '/coffee/coffee-cuban.png',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    categories: ['especial', 'alcoólico', 'gelado']
  },
  {
    id: new hashids().encode(12),
    imageUrl: '/coffee/coffee-hawaiian.png',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    categories: ['especial']
  },
  {
    id: new hashids().encode(13),
    imageUrl: '/coffee/coffee-arabic.png',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    categories: ['especial']
  },
  {
    id: new hashids().encode(14),
    imageUrl: '/coffee/coffee-irish.png',
    title: 'Irlandês',
    description: 'Bebida e base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    categories: ['especial', 'alcoólico']
  }
]
