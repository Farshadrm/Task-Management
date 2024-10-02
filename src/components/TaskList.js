
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask, editTask } from '../Redux/actions/taskActions';
import TaskForm from './TaskForm';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleComplete = (task) => {
    dispatch(editTask(task.id, { ...task, completed: !task.completed }));
  };

  return (
    <div>
      <TaskForm taskToEdit={taskToEdit} clearEdit={() => setTaskToEdit(null)} />
      <ul className="list-group mt-4">
        {tasks && tasks.map(task => (
          <li key={task.id} className="list-group-item">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleComplete(task)}
          />
          <button
            className="btn btn-warning mx-2"
            onClick={() => handleEdit(task)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
