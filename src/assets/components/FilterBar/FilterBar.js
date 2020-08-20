import React from 'react'
import styled from 'styled-components'

const FilterSpan = styled.span`
    width: 20%;
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
        const newMinValue = Number(e.target.value)
        props.setNewMinValue(newMinValue)
    }
    
    const onChangeMax = (e) => {
        const newMaxValue = Number(e.target.value)
        props.setNewMaxValue(newMaxValue)
    }
    
    const onChangeSearch = (e) => {
        const newTextValue = String(e.target.value)
        props.setNewTextValue(newTextValue)
    }

        return(
            <FilterSpan>
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
            </FilterSpan>
        )
}

export default Filter;