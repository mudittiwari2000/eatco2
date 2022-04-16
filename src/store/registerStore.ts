import { makeAutoObservable, runInAction } from 'mobx'

export type BusinessType = 'Restaurant' | 'Caterer' | 'Private Company' | ''
export type Country = 'DA' | 'SE' | ''

export default class RegisterStore {
  email = ''
  businessType: BusinessType = ''
  country: Country = ''
  cvr = ''
  registeredBusinessName = ''
  streetName = ''
  zip = ''
  city = ''

  setEmail(email: string) {
    runInAction(() => {
      this.email = email
    })
  }

  setBusinessType(businessType: BusinessType) {
    runInAction(() => {
      this.businessType = businessType
    })
  }

  setCountry(country: Country) {
    runInAction(() => {
      this.country = country
    })
  }

  setCvr(cvr: string) {
    runInAction(() => {
      this.cvr = cvr
    })
  }

  setRegisteredBusinessName(registeredBusinessName: string) {
    runInAction(() => {
      this.registeredBusinessName = registeredBusinessName
    })
  }

  setStreetName(streetName: string) {
    runInAction(() => {
      this.streetName = streetName
    })
  }

  setZip(zip: string) {
    runInAction(() => {
      this.zip = zip
    })
  }

  setCity(city: string) {
    runInAction(() => {
      this.city = city
    })
  }

  constructor() {
    makeAutoObservable(this)
  }
}
