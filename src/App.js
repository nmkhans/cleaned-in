import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          {
            PublicRoutes.map(({ name, path, Element }) =>
              <Route
                key={name}
                path={path}
                element={<Element />}
              />)
          }
        </Routes>
      </Header>
    </div>
  );
}

export default App;
