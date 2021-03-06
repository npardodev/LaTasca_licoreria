import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';


export const CustomSelectComponent = ({options, value, name, color, actionChange, actionFocus}) => {
    //const classes = useStyle();

    const [selectValue, setSelectValue] = useState(value ?? ''); 

    useEffect(() =>{
        setSelectValue((value ?? ''), value);
    },[value]);       

    const handleFocus = () => {
        if (actionFocus) {
            actionFocus();
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectValue(value);
        if (actionChange) {
            actionChange(value);
        }
    };

    return (
        <Select
            labelId="SelectComp"
            id="SelectComp"
            name={name}
            value={selectValue}    
            onFocus={handleFocus}
            onChange={handleChange} 
        > 
        {options.map((option, index)=>{
            return (
            <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
            );
        })}
      </Select>
    )
}


