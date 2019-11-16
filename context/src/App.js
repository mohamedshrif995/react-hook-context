import React from 'react';
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import ThemeContextProvider from '../src/context/ThemeContext'
import AuthContextProvider from '../src/context/AuthContext'
import ToggleTheme from '../src/components/ToggleTheme'
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />

          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App;
