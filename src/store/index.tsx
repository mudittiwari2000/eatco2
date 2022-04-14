import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

interface IUser {
  firstName: string
  lastName: string
  email: string
}

class UsersStore {
  users: Array<IUser> = []

  constructor() {
    makeAutoObservable(this)
  }
}

const StoreContext = createContext<UsersStore>(new UsersStore())

const StoreProvider: React.FC<{ store: UsersStore }> = ({
  store,
  children,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>

const useStore = () => {
  return useContext(StoreContext)
}

export { UsersStore, StoreProvider, useStore }
