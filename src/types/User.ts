export interface UserCurrent {
  token: string
  user: User
}

export interface CredProps {
  email: string
  password: string
}

export interface User {
  id: string
  email: string
}
