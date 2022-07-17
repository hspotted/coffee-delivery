import { createContext, useCallback, useContext, useState } from 'react'

export type CheckoutCoffee = {
  id: string
  price: number
  quantity: number
}

interface CheckoutContextData {
  coffees: CheckoutCoffee[]
  addProduct: (coffee: CheckoutCoffee) => void
  updateProductQuantity: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
  numberOfItems: number
  totalAmount: number
  reset: () => void
}

const CheckoutContext = createContext<CheckoutContextData>(
  {} as CheckoutContextData
)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [coffees, setCoffees] = useState<CheckoutCoffee[]>([])

  const addProduct = useCallback(
    (coffee: CheckoutCoffee) => {
      setCoffees([
        ...coffees,
        {
          id: coffee.id,
          price: coffee.price,
          quantity: coffee.quantity
        }
      ])
    },
    [coffees]
  )

  const updateProductQuantity = useCallback(
    (id: string, quantity: number) => {
      const updatedCoffees = coffees.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            quantity
          }
        }

        return coffee
      })

      setCoffees(updatedCoffees)
    },
    [coffees]
  )

  const removeProduct = useCallback(
    (id: string) => {
      setCoffees(coffees.filter((c) => c.id !== id))
    },
    [coffees]
  )

  const numberOfItems = coffees.reduce(
    (acc, coffee) => acc + coffee.quantity,
    0
  )

  const totalAmount = coffees.reduce(
    (acc, coffee) => acc + coffee.quantity * coffee.price,
    0
  )

  const reset = () => setCoffees([])

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        numberOfItems,
        totalAmount,
        addProduct,
        updateProductQuantity,
        removeProduct,
        reset
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
