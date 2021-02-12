import React from 'react';
import useFields from './useFields';
import {useHistory} from "react-router-dom";

const NewColorForm = ({addColors}) => {
    const history = useHistory();
    const [formData, handleChange, resetFormData] = useFields({
        color: '',
        hex: ''
    })
    const handleSubmit = e => {
        e.preventDefault();
        console.log({...formData})
        addColors({...formData});
        resetFormData();
        history.push('/colors');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text" 
            name="color"
            value={formData.color} 
            onChange={handleChange}/>
            <input
            id="hex-input"
            type="color" 
            name="hex" 
            value={formData.hex} 
            onChange={handleChange}/>
            <button>Add Color!</button>
        </form>
    )
}
export default NewColorForm;