import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../../contexts/AuthContext'
import { CredProps, UserCurrent } from '../../../types/User'
import api from '../api'

const signIn = async ({ email, password }: CredProps) => {
  const res = await api.post(`users/login`, { email, password })

  return res.data
}

export const useSignIn = () => {
  const auth = useAuth()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signIn,
    mutationKey: ['signIn'],
    onSuccess: (data: UserCurrent) => {
      auth.login(data.token)
    },
  })

  return { mutate, isPending, isError, error }
}
