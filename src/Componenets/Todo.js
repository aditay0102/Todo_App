import React from 'react'
import { useState } from 'react';

export default function Todo({addList}) {
    const [inputText,SetinputText] = useState('');

   

  return (
    <div className="input-container">
        <input type='text' className='task_input' value={inputText} onChange={e=>{SetinputText(e.target.value)}} placeholder='enter your task' />
        <button className='add_btn' onClick={()=>{
            addList(inputText);
            SetinputText('');   

        }}>+</button>
        
    
    </div>
  )
}
