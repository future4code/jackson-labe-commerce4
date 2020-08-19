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

class Filter extends React.Component {

    onChangeMin = (e) => {
        const valorInputMin = e.target.value
        console.log(valorInputMin)
        //devolver valor do input para componente pai (App)
    }
    
    onChangeMax = (e) => {
        const valorInputMax = e.target.value
        console.log(valorInputMax)
        //devolver valor do input para componente pai (App)
    }
    
    onChangeSearch = (e) => {
        const valorSearchText = e.target.value
        console.log(valorSearchText)
        //devolver valor do input para componente pai (App)
    }
    render() {
        return(
            <FilterDiv>
                <h2>Filtros:</h2>
                <FilterBlock>
                    <label>Valor Mínimo</label>
                    <input 
                        type="number"
                        onChange={this.onChangeMin}
                        />
                </FilterBlock>
                <FilterBlock>
                    <label>Valor Máximo</label>
                    <input 
                        type="number"
                        onChange={this.onChangeMax}
                        />
                </FilterBlock>
                <FilterBlock>
                    <label>Buscar produto</label>
                    <input 
                        type="text"
                        onChange={this.onChangeSearch}/>
                </FilterBlock>
            </FilterDiv>
        )
    }
}

export default Filter;