
import {  useState } from 'react';
import './App.css';
import Todo from './Componenets/Todo';
import TodoList from './Componenets/TodoList';

function App() {
  const[list,SetTodoList] = useState([]);

  let addList = (inputText)=>{
    SetTodoList([...list,inputText])
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...list];
    newListTodo.splice(key,1);
    SetTodoList([...newListTodo]);

  }



  return (
      <dvi className='mainContaier'>
        <Todo addList = {addList} />
        <h1>Todo</h1>
        <hr/>
        {list.map((listItem,i)=>{
          return (
            <TodoList item={listItem} del={deleteListItem} key ={i} index = {i}/>
          )
        })}
      </dvi>
  );
}

export default App;
