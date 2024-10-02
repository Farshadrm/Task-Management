
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';


const API_URL = 'http://46.100.46.149:8069/api/tasks/';

// Fetch tasks
export const getTasks = () => async (dispatch) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const final = data.results
  dispatch({ type: GET_TASKS, payload: final });
};

// Add a task
export const addTask = (task) => async (dispatch) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  dispatch({ type: ADD_TASK, payload: data });
};

// Edit a task
export const editTask = (id, task) => async (dispatch) => {
  const response = await fetch(`${API_URL}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  dispatch({ type: EDIT_TASK, payload: data });
};

// Delete a task
export const deleteTask = (id) => async (dispatch) => {
  await fetch(`${API_URL}${id}/`, {
    method: 'DELETE',
  });
  dispatch({ type: DELETE_TASK, payload: id });
};
