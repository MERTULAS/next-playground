import React, {memo} from 'react'
import TodoItem from './todoItem';

const todoList = memo(({todoList}) => {
    console.log('todo list rendered');
  return (
    <ul>
        {todoList.map(todoItem => {
          return (
            <TodoItem key={todoItem} todoItem={todoItem} />
          )
        })}
    </ul>
  )
});

export default todoList