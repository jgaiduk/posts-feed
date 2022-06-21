import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsFeed from './components/PostsFeed';
import { UserPage } from "./components/UserPage";
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostsFeed/>} />
        <Route path={'/user/:userId'} element={<UserPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
