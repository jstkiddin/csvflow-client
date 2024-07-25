import { FormControl, Input } from '@chakra-ui/react'
import Papa from 'papaparse'
import { memo, useCallback, useEffect, useState } from 'react'
import { useUpload } from '../../app/services/transactions/transactions.service'
import { CSVData } from '../../types/types'
import Dialog from '../../components/dialog/Dialog'
import { ErrorBox } from '../../components/error/ErrorBox'

interface ImportProps {
  isOpen: boolean
  onClose: () => void
}

interface CSVObject {
  TransactionId: string
  Status: string
  Type: string
  ClientName: string
  Amount: string
}

const Import = ({ isOpen, onClose }: ImportProps) => {
  const [data, setData] = useState<CSVData[]>([])
  const [fileName, setFileName] = useState<string>('')

  const { mutate, isPending, error, isSuccess } = useUpload()

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (file) {
        setFileName(file.name.split('.csv')[0])
        Papa.parse<CSVData>(file, {
          header: true,
          skipEmptyLines: true,
          complete: (result: any) => {
            const dataModif = result.data.map(
              (record: Record<string, CSVObject>) => ({
                id: record['TransactionId'],
                status: record['Status'],
                type: record['Type'],
                clientName: record['ClientName'],
                amount: record['Amount'],
              })
            )
            setData(dataModif)
          },
        })
      }
    },
    []
  )

  const startImport = useCallback(() => {
    mutate({ fileName, data })
  }, [])

  useEffect(() => {
    if (isSuccess) {
      onClose()
    }
  }, [isSuccess])

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={startImport}
        disabled={!fileName.length}
        title="Import dataset"
        closeButtonText="Close"
        secondaryAction="Import"
        isLoading={isPending}
      >
        <FormControl>
          <Input
            border="1px dashed"
            type="file"
            accept=".csv"
            // hidden
            id="file-upload"
            onChange={handleFileUpload}
            mb={3}
          />
        </FormControl>
        <ErrorBox inCondition={Boolean(error)} message={error?.message} />
      </Dialog>
    </>
  )
}

export default memo(Import)
