import React, { useState } from 'react';
import { ListGroup, Badge, Form, Button } from 'react-bootstrap';

const TaskList = ({ todos, updateTodo, deleteTodo }) => {
  const [editingId, setEditingId] = useState(null);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const finishEditing = () => {
    setEditingId(null);
  };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className="d-flex justify-content-between align-items-center"
        >
          {editingId === todo.id ? (
            <Form.Control
              type="text"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, { title: e.target.value })}
              onBlur={finishEditing}
              autoFocus
            />
          ) : (
            <span onClick={() => startEditing(todo.id)}>{todo.title}</span>
          )}
          <div>
            <Badge bg={getPriorityColor(todo.priority)} className="me-2">
              {todo.priority}
            </Badge>
            <Form.Select
              value={todo.status}
              onChange={(e) =>
                updateTodo(todo.id, { status: e.target.value })
              }
              className="d-inline-block me-2"
              style={{ width: 'auto' }}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;