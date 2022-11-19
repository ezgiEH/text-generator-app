import React from 'react'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchText } from '../redux/Text/Services'

function Form() {
    const dispatch = useDispatch()
    const [paragraphs, setParagraphs] = useState(4)
    const [style , setStyle] = useState("text")
    
    useEffect(() =>{
        dispatch(fetchText({p: paragraphs, i: style}))
    }, [paragraphs, style, dispatch])
   
    const handleParagraphs = (value) => {
        if(!value){
            setParagraphs(4)
        }else if(value < 0){
            setParagraphs(1)
        }else{ 
            setParagraphs(value)
        }
    }

    const handleStyle = (value) => {
        setStyle(value)
    }

    return (
    <div className='form'>
        <form>
            <label>Paragraphs:</label>
            <input placeholder={paragraphs} onChange={(e) => handleParagraphs(e.target.value)}></input>
            <label>Style:</label>
            <select value={style} onChange={(e) => handleStyle(e.target.value)}>
                <option value="text">Text</option>
                <option value="html">HTML</option>
            </select>
        </form>
    </div>
  )
}

export default Form