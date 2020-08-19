import React from 'react'
import styled from 'styled-components'

const FilterDiv = styled.div`
    width: 300px;
    display: flex;
    margin: 20px;
    flex-direction: column;
    border: solid 1px black;
    padding: 10px;
`

const FilterBlock = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const Filter = (props) => {

    const onChangeMin = (e) => {
        const valorInputMin = e.target.value

        props.onChangeAllFilters(valorInputMin)
    }
    
    const onChangeMax = (e) => {
        const valorInputMax = e.target.value

        props.onChangeAllFilters(valorInputMax)
    }
    
    const onChangeSearch = (e) => {
        const valorSearchText = e.target.value
        
        props.onChangeAllFilters(valorSearchText)
        //devolver valor do input para componente pai (App)
    }

        return(
            <FilterDiv>
                <h2>Filtros:</h2>
                <FilterBlock>
                    <label>Valor Mínimo</label>
                    <input 
                        type="number"
                        onChange={onChangeMin}
                        />
                </FilterBlock>
                <FilterBlock>
                    <label>Valor Máximo</label>
                    <input 
                        type="number"
                        onChange={onChangeMax}
                        />
                </FilterBlock>
                <FilterBlock>
                    <label>Buscar produto</label>
                    <input 
                        type="text"
                        onChange={onChangeSearch}/>
                </FilterBlock>
            </FilterDiv>
        )
}

export default Filter;