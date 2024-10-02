import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import React from 'react';
import { Provider } from 'react-redux';
import store from "./Redux/store";
import TaskList from './components/TaskList';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element={
          <Provider store={store}>
          <div className="container mt-5">
            <TaskList />
          </div>
        </Provider>
        }>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
