import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          {
            PublicRoutes.map(route =>
              <Route
                key={route.name}
                path={route.path}
                element={<route.Element />}
              />)
          }
        </Routes>
      </Header>
    </div>
  );
}

export default App;
