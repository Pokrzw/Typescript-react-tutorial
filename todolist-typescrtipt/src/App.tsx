import InputField from './components/InputField';
import React, { useState } from 'react';
import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { isDefaultClause } from 'typescript';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo: todo, isDone:false}]);
      setTodo("");
    }
  }
  
  return (
    <div className="App">
    <h1>Taskify</h1>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
