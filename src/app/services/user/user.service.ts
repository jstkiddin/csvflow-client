import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../contexts/AuthContext'

import api from '../api'

const getCurrentUser = async () => {
  try {
    const res = await api.get(`users/`)
    return res.data
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const useCurrentUser = () => {
  const auth = useAuth()

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: getCurrentUser,
  })

  if (error?.message === 'Request failed with status code 401') {
    auth.logout()
  }

  return { data, isLoading, isError, error, isSuccess }
}
