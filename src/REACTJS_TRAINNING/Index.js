import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { StoreProvider } from './store';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

// => ----------- Tự tạo ra event riêng  ---------------

// // Fake comments
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail:`Nội dung comment của lesson ${id}`
//       })
//     )
//   }, 1000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

// --------------- dùng funtion themeProvider để ôm App -------------------
// file ContextProvider
// function themeProvider({Children}) {
//   const [theme, setTheme] = useState('dark')

//   const handleTheme  = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   const value = {
//     theme,
//     handleTheme
//   }

//   return (
//     <themeContext.Provider value={value}>
//       {Children}
//     </themeContext.Provider>
//   )
// }


// root.render(
//   <themeProvider>
//     <App />
//   </themeProvider>
// );
// -----------------------------------------

root.render(
  // <React.StrictMode>
    // <StoreProvider>
    <Router>
      <App /> 
    </Router>
    // </StoreProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
