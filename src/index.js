import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bookshelf } from './components/bookshelf'
import { render } from 'react-dom'
import './styles/styles.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')

);

// // // Import deps
// import React from 'react'
// import { render } from 'react-dom'

// // Import components
// import { Bookshelf } from './components/bookshelf'

// // Import styles
// import './styles/styles.css'

// // Find div container
// const rootElement = document.getElementById('root')

// // Render Bookshelf component in the DOM
// render(<Bookshelf />, rootElement)




