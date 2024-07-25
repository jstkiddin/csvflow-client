import { Box, Button } from '@chakra-ui/react'
import { Table } from '../../components/table/Table'
import styled from 'styled-components'
import { ListBlock } from '../../components/list/ListBlock'
import { Select } from '../../components/select/Select'
import { memo, useCallback, useState } from 'react'
import Import from '../../fetures/import/Import'

const statusList = ['Pending', 'Cancelled', 'Completed']
const typeList = ['Withdrawal', 'Refill']

function Home() {
  const [importDialogOpen, setImportDialogOpen] = useState<boolean>(false)

  const handleImportDialogOpen = useCallback(
    () => setImportDialogOpen(!importDialogOpen),
    [importDialogOpen]
  )

  return (
    <HomeContainer py="1rem" px="0.5rem">
      <ComponentContainer width="20%">
        <ListBlock />
      </ComponentContainer>
      <ComponentContainer width="80%" flexDirection="column" gap="6rem">
        <ComponentContainer>
          <ActionBlock>
            <Select optionsList={statusList} placeholder="Status" />
            <Select optionsList={typeList} placeholder="Type" />
          </ActionBlock>
          <ActionBlock justifyContent="end">
            <Import
              isOpen={importDialogOpen}
              onClose={handleImportDialogOpen}
            />
            <Button onClick={handleImportDialogOpen}>Import</Button>
            <Button>Export</Button>
          </ActionBlock>
        </ComponentContainer>
        <Table headers={['Id', 'Status', 'Type', 'Client Name', 'Amount']} />
      </ComponentContainer>
    </HomeContainer>
  )
}

export default memo(Home)

const HomeContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
`
const ComponentContainer = styled(Box)`
  display: flex;
  gap: 1rem;
`
const ActionBlock = styled(Box)`
  display: flex;
  gap: 2rem;
  paddig-right: 1rem;
  width: 50%;
`
