import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import { Table } from '../../components/table/Table'
import styled from 'styled-components'
import { ListBlock } from '../../components/list/ListBlock'
import { Select } from '../../components/select/Select'
import { memo } from 'react'
const statusList = ['Pending', 'Cancelled', 'Completed']
const typeList = ['Withdrawal', 'Refill']

function Home() {
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
            <FormControl>
              <Button>
                Import
                <Input
                  type="file"
                  accept=".csv"
                  // hidden
                  id="file-upload"
                  // onChange={handleFileChange}
                  mb={3}
                />
              </Button>
            </FormControl>
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
