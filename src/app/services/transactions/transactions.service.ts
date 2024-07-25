import { useMutation } from '@tanstack/react-query'
import { ImportData } from '../../../types/types'

import api from '../api'

const importTransaction = async (data: ImportData) => {
  const res = await api.post('transactions/import', data)
  return res.data
}

export const useUpload = () => {
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: importTransaction,
    mutationKey: ['importTransaction'],
    onSuccess: data => {
      console.log('import', data)
    },
  })
  console.log('isSuccess', isSuccess)
  return { mutate, isPending, isError, error, isSuccess }
}
