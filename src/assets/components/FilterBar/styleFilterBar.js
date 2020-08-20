import styled from 'styled-components'

export const FilterBar = styled.span`
    display: flex;
    align-items: center;
    width: 100%;

@media (max-width: 600px) {
    flex-direction: column;
}

`

export const SearchInput = styled.input`

    height: 2em;
    width: 50%;
    border: none;
    padding-left: 0.3em;
    font-weight: 500;
    border-radius: 3px;
    color: #57656E;

    margin-left: 1.5em;

    @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: none;

}

`

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    width:50%;

    @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
}
    
`

export const FilterIconContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;
`

export const FilterIcon  = styled.img`
    height: 1em;
    margin-right: 0.4em;
`

export const IconLabel = styled.label `
    font-size: 0.8em;   
    font-weight:500;
    color: #FFFFFF;  
`

export const PriceFiltersContainer = styled.div`
    display: flex;
` 


export const FilterContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5em;
`

export const LabelValueInput = styled.label`
    font-size: 0.5em;   
    font-weight:500;
    color: #FFFFFF; 
    margin-bottom: 0.2em;
`

export const ValueInput = styled.input`
    height: 2em;
    width: 100%;
    border: none;
    padding-left: 0.3em;
    font-weight: 500;
    border-radius: 3px;
}
`

