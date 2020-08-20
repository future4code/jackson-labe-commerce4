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
  justify-content: space-between;
  padding-top: 1em;
  height: 6em;
  background-color: #1789FC;
  align-items: center;
`
export const Magalogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-left: 2em;
  
`

export const Logo = styled.img`
  height: 1.8em;
  /* margin-left: 1em;
  margin-bottom:1.8em; */
`
export const Magalu = styled.img`
  height: 6em;
  
`
export const ShoppingCartContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3em; 
}  
`

export const ShoppingCartButton = styled.img`
  height: 1.8em;
  transition: transform 3s;


  &:active {
    transform: scale(0.9);  
}
  `

export const LabelShoppingCartButton = styled.label`
  color: white;
  font-size: 0.7em;
  font-weight: 800;
  margin-left: 1em;
  margin-top: 1em;

  transition: transform 3s;


  &:active {
    transform: scale(0.9);  

`

