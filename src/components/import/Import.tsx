import { Button, FormControl, Input } from '@chakra-ui/react'
import Papa from 'papaparse'
import { memo, useEffect, useState } from 'react'
import { useUpload } from '../../app/services/transactions/transactions.service'
import { CSVData } from '../../types/types'

const Import = () => {
  const [data, setData] = useState<CSVData[]>([])
  const [fileName, setFileName] = useState<string>('')

  const { mutate, isPending, isError, error } = useUpload()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setFileName(file.name)
      Papa.parse<CSVData>(file, {
        header: true,
        skipEmptyLines: true,
        complete: result => {
          const dataModif = result.data.map(record => ({
            id: record['TransactionId'],
            status: record['Status'],
            type: record['Type'],
            clientName: record['ClientName'],
            amount: record['Amount'],
          }))
          setData(dataModif)
        },
      })
    }
  }

  useEffect(() => {
    if (data.length) {
      mutate({ fileName, data })
    }
  }, [data])

  return (
    <>
      <FormControl>
        <Button>
          Import
          <Input
            type="file"
            accept=".csv"
            // hidden
            id="file-upload"
            onChange={handleFileUpload}
            mb={3}
          />
        </Button>
      </FormControl>
    </>
  )
}

export default memo(Import)
