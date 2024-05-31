import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, completetodo, deletetodo, edittodo } from './todoSlice';

export const Todo = () => {
  const [input, setInput] = useState('');
  const [edit, setEdit]=useState('')
  const inputref=useRef()
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      if (!todos.some(todo => todo.text === input)) {
      dispatch(addtodo({
        id: Date.now(),
        text: input,
        completed: false
      }
    ));
      setInput('');
    }
    else {
      alert("todo already in todolist")
  }
  }   
  else{
  alert("enter a valid inputs")
  }}

  const handleDelete = (id) => {
    dispatch(deletetodo(id));
  };

  const handleEdit=(id)=>{
    setEdit(id)
    const editTodo=todos.find((todo)=>todo.id==id)
    setInput(editTodo.text)
  }

  const handleSave=()=>{
    if(edit!==''){
      dispatch(edittodo({id:edit ,text:input}))
    }
    setInput('')
    setEdit('')
    }

    const todo=todos.length
    const complete=todos.filter(todo=>todo.completed==true).length
  

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 m-5">

      <input
        type="text"
        value={input}
        ref={inputref}
        onChange={handleInput}
        className="border border-gray-300 p-2 rounded-md mr-2"
        placeholder="Add a new todo"
      />
      {edit ?
       <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Edit
      </button>:

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
      }
      <ul className="mt-4">
        {todos.slice().reverse().map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span
              className={`mr-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
            {todo.text}
            </span>
            {!todo.completed &&(
              <>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500  mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(todo.id)}
              className="text-blue-500 mr-2"
            >
              Edit
            </button>
            <button
              onClick={()=>dispatch(completetodo(todo.id))}
              className="text-green-500 mr-2"
            >
              complete

            </button>
            </>)}
          </li>
           

        ))}
      </ul>
      <p>{todo}/{complete}</p>
    </div>
  );
};

export default Todo;
