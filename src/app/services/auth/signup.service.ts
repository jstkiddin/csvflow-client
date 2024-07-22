import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../../contexts/AuthContext'
import { CredProps, UserCurrent } from '../../../types/User'
import api from '../api'

const signUp = async ({ email, password }: CredProps) => {
  const res = await api.post('users/register', { email, password })
  return res.data
}

export const useSignUp = () => {
  const auth = useAuth()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signUp,
    mutationKey: ['signUp'],
    onSuccess: (data: UserCurrent) => {
      auth.login(data.token)
    },
  })
  return { mutate, isPending, isError, error }
}
