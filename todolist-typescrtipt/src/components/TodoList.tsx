import React from 'react';
import { Todo } from '../model';
import SingleTask from './SingleTask';
import { isDefaultClause } from 'typescript';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList= ({todos, setTodos}:Props) => {
    return ( 
        <div className="TodoList">
            {todos.map(t =>
                <li><SingleTask task = {t}  todos={todos} key = {t.id} setTodos={setTodos}/></li>
                )}
        </div>
     );
}
 
export default TodoList;