import {
  Table as CTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

type TableRow = {
  id: string
  columns: string[]
}

type TableProps = {
  headers: string[]
  data?: TableRow[]
  caption?: string
  editable?: boolean
}

export const Table = ({ headers, data, caption, editable }: TableProps) => {
  return (
    <TableContainer>
      <CTable variant="simple" bg="green.600">
        <TableCaption>{caption}</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header: string) => (
              <Th color="white">{header as string}</Th>
            ))}
            <Th color="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row: TableRow) => (
            <Tr key={row.id}>
              {row.columns.map((column: string) => (
                <Td>{column}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </CTable>
    </TableContainer>
  )
}
