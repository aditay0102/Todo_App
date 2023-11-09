import React from 'react'

function TodoList({item,index,del}) {
  return (
    <li className='list-item'>
        {item}

        <button onClick={()=>{
            del(index);
        }}>delete  </button>
    </li>
  )
}

export default TodoList