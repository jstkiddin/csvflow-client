import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import { Table } from '../../components/table/Table'
import styled from 'styled-components'
import { ListBlock } from '../../components/list/ListBlock'
import { Select } from '../../components/select/Select'

function Home() {
  return (
    <HomeContainer py="1rem" px="0.5rem">
      <ComponentContainer width="20%">
        <ListBlock />
      </ComponentContainer>
      <ComponentContainer width="80%" flexDirection="column" gap="6rem">
        <ComponentContainer>
          <ActionBlock>
            <Select />
            <Select />
          </ActionBlock>
          <ActionBlock justifyContent="end">
            <FormControl>
              <Input
                type="file"
                id="file-upload"
                // onChange={handleFileChange}
                mb={3}
              />
            </FormControl>
            <Button>Import</Button>
            <Button>Export</Button>
          </ActionBlock>
        </ComponentContainer>
        <Table headers={['one', 'two', 'three']} />
      </ComponentContainer>
    </HomeContainer>
  )
}

export default Home

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
