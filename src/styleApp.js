import styled from 'styled-components'

export const ContainerApp = styled.div`
    display: flex;
`

export const ProductGrid = styled.span`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;
  margin: 20px;
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  padding-top: 1em;
  height: 6em;
  background-color: #1789FC;
  justify-content: flex-start;
  align-items: center;
`
export const Logo = styled.img`
  height: 1.8em;
  margin-left: 1em;
  margin-bottom:1.8em;
`
export const Magalu = styled.img`
  height: 6em;
  margin-left: 2em;
`
