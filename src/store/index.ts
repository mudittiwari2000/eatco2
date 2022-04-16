import { createContext, useContext } from 'react'
import RegisterStore from './registerStore'

interface Store {
  registerStore: RegisterStore
}

const store: Store = {
  registerStore: new RegisterStore(),
}

const StoreContext = createContext(store)

const useStore = () => {
  return useContext(StoreContext)
}

export { store, useStore }
