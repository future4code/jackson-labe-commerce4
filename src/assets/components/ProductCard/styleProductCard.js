import styled from 'styled-components'


export const Card = styled.div`
    border: 1px solid #F0F0F0;
    background-color:
    width: 10em;
    padding: 0.5em;
    transition: transform 3s;
    margin: 1em;

&:hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2); 
}

@media (max-width: 600px) {
    width: 30vw;
    }


`
export const CardBottom = styled.div`
display: flex;

`

export const ProductInfoContainer = styled.div`
`

export const ProductTitle = styled.h4`
    font-weight: 600;

`

export const ProductPrice = styled.strong`
    font-size: 1.2em;
    margin-right: 0.4em;
`

export const Image = styled.img`
    width: 100%;

`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-left: 1.4em;
`

export const ButtonAddToCart = styled.button`
    background-color: #5CC03A;
    font-weight: 600;
    padding: 0.4em;
    border:none;
    color: white;
    border-radius: 3px;
    width: 10em;

    Buttontext

    &:hover {
    background-color: #408A27; 
}

    &:active {
    transform: scale(0.99); 
    }

    @media (max-width: 600px) {
    width:4em;
    }
}
`

export const SpanButtonText = styled.span`
    @media (max-width: 600px) {
    display:none;
    }

`

export const BagIcon = styled.img`
    height:1.5em;
    display:none;

    @media (max-width: 600px) {
        display:inline;
    }
`

