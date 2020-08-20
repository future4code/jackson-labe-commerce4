import React from 'react'

import {FilterBar, SearchInput, Filters , FilterContainer, LabelValueInput, ValueInput,FilterIcon, IconLabel, FilterIconContainer, PriceFiltersContainer} from '././styleFilterBar'

import filtericon from '../../img/filter.png'


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
            <FilterBar>
                <SearchInput 
                        placeholder="Procure pelo código do seu item! "
                        type="text"
                        onChange={onChangeSearch}/>
                <Filters>
                    <FilterIconContainer>
                <FilterIcon src={filtericon} />
                <IconLabel>Filtre seu produto por preço!</IconLabel>
                </FilterIconContainer>
                <PriceFiltersContainer>
                <FilterContainer>
                    <LabelValueInput>Valor Mínimo</LabelValueInput>
                    <ValueInput 
                        type="number"
                        placeholder="valor min."
                        onChange={onChangeMin}
                        />
                </FilterContainer>
                <FilterContainer>
                    <LabelValueInput>Valor Máximo</LabelValueInput>
                    <ValueInput
                        type="number"
                        placeholder="valor máx."
                        onChange={onChangeMax}
                        />
                </FilterContainer>
                </PriceFiltersContainer>
                </Filters>
                    
            </FilterBar>
        )
}

export default Filter;