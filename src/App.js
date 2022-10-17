import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css'

function App() {
  const [todos, setTodos] =  useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);
  
  const nextId = useRef(4);
  const onInsert = useCallback(value => {
    const todo ={
      id:nextId.current,
      text : value,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);   // onInsert는 todos가 바뀔 때마다 실행
  
  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);   // todos 배열이 업데이트 될 때마다 생성

  const onToggle = useCallback( id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
