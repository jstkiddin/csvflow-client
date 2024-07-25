import styled from 'styled-components'
import Navbar from '../fetures/navbar/Navbar'
import { LayoutProps } from '../types/types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <Navbar />
      <main>{children}</main>
    </MainLayout>
  )
}

const MainLayout = styled.div`
  height: 100vh;
`
