import { useState } from 'react';
import './App.css'; // Import your CSS file
import Todo from './todo/todo'
import Interviw from './Intervw'
import Child from './child'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const addtodo = () => {
    if (input.trim()!==''){
	if (!todos.some(todo=>todo.text===input))
	{
    	const todo = {
      	id: Date.now(),
      	text: input,
      	completed: false
    	};
  
    	setTodos([...todos, todo]);
    	setInput('');
    	}
    }
	
  };

  const deletetodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const edittodo = (id) => {
    const etodo = todos.find((todo) => todo.id === id);
    setInput(etodo.text);
    setEdit(id);
  };

  const updatetodo = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === edit) {
          todo.text = input;
        }
        return todo;
      })
    );
    setInput('');
    setEdit('');
  };

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.filter((todo) => !todo.completed).length;

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        className="border border-gray-300 p-2 rounded-md mr-2"
        placeholder="Add a new todo"
      />
      {edit ? (
        <button
          onClick={updatetodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Update
        </button>
      ) : (
        <button
          onClick={addtodo}
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Add
        </button>
      )}
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span
              className={`mr-2 ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
            {!todo.completed && (
              <div>
                <button
                  onClick={() => deletetodo(todo.id)}
                  className="text-red-500 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => completeTodo(todo.id)}
                  className="text-blue-500 mr-2"
                >
                  Complete
                </button>
                <button
                  onClick={() => edittodo(todo.id)}
                  className="text-green-500"
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-lg font-bold">Statistics:</p>
        <p>Total Todos: {todos.length}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>
    </div>
     <Todo />
    <Interviw/>
    <Child/>
       
    </>
  );
}

export default App;
