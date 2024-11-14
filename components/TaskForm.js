import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: newTodo,
        priority: newPriority,
        status: 'To Do',
      });
      setNewTodo('');
      setNewPriority('Medium');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;