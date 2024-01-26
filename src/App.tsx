
import { FC } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

export const App:FC=()=> {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
