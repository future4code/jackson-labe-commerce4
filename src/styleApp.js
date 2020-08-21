import styled from 'styled-components'

export const ContainerApp = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    height: 60vh;
`

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  height: 6em;
  background-color: #1789FC;
  align-items: center;

  @media (max-width:600px) {
    flex-direction: column;
    height: 40vh;
}

`
export const Magalogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2em;

  @media (max-width:600px) {
  margin-left: 4em;
}
  
`
//Logo Magalu

export const Logo = styled.img`
  height: 1.8em;
`
export const Magalu = styled.img`
  height: 6em;
`

// SHOPPING CAR BUTTON (BOTÃO DO CARRINHO)

export const ShoppingButtonContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3em; 

  @media (max-width: 600px) {
    margin-bottom: 1.5em;
    }
`

export const ShoppingCartButton = styled.img`
  height: 1.8em;
  transition: transform 3s;

  &:active {
    transform: scale(0.9);
}
  `

  
export const ProductGrid = styled.span`
  position:absolute;
  left:0;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;

  @media (max-width: 600px) {
    margin-bottom: 1.5em;
    grid-template-columns: 1fr 1fr;

    }

`

export const LabelShoppingCartButton = styled.label`
  color: white;
  text-align: center;
  font-size: 0.7em;
  font-weight: 800;
  margin-left: 1em;
  margin-top: 1em;

  transition: transform 3s;


  &:active {
    transform: scale(0.9);  
  }
`
