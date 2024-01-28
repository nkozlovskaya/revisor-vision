
import { FC, memo } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/UI/Navbar/Navbar';
import AppRouter from './router/AppRouter';

export const App:FC = memo(()=> {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <AppRouter />
    </div>
  );
})

export default App;
