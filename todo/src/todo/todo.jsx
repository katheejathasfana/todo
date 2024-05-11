import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo } from './todoSlice';

export const Todo = () => {
  const [input, setInput] = useState('');
  const inputref=useRef()
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(()=>{
    inputref.current.focus(),[]})

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addtodo({
        id: Date.now(),
        text: input,
        completed: false
      }));
      setInput('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deletetodo(id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        value={input}
        ref={inputref}
        onChange={handleInput}
        className="border border-gray-300 p-2 rounded-md mr-2"
        placeholder="Add a new todo"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
      <ul className="mt-4">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span
              className={`mr-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
