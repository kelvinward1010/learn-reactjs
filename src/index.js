import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/context/ThemeContext';
import { StoreProvider } from './store';


//Fake comment

function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {detail: `Noi dung comment ${id}`})
    )
  },2000)
}

emitComment(1)
emitComment(2)
emitComment(3)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      <StoreProvider>
        <App />
      </StoreProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

