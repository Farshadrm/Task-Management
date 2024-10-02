
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../Redux/actions/taskActions';

const TaskForm = ({ taskToEdit, clearEdit }) => {
  const [task, setTask] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask(task.id, task));
      clearEdit();
    } else {
      dispatch(addTask({ ...task, completed: false }));
    }
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control mt-2"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
