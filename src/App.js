import { useState } from 'react';
import useToggle from './hooks';
import MainPage from './pages/MainPage';

function App() {

  const { isDarkMode, toggleDarkMode} = useToggle();

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
