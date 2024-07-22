import { useMutation } from '@tanstack/react-query'
import { ImportData } from '../../../types/types'

import api from '../api'

const importTransaction = async (data: ImportData) => {
  const res = await api.post('transactions/import', data)
  return res.data
}

export const useUpload = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: importTransaction,
    mutationKey: ['importTransaction'],
    onSuccess: data => {
      // auth.login(data.token)
      console.log('import', data)
    },
  })
  return { mutate, isPending, isError, error }
}
