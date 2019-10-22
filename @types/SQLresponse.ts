export default interface SQLResponse<R> {
  data: R
  error: any
}

export interface User {
  ID: number
  RegistrationDate: string
  Username: string
  DisplayName: string
  Email: string
  Password: string
}
