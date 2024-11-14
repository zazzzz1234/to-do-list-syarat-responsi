import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updates) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Task List</h1>
      <TaskForm addTodo={addTodo} />
      <TaskList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;