import React from 'react';
import routes from './routes';
import WebNav from './Components/WebNav'
import './styles/App.css'

function App() {
  return (
    <div>
      <WebNav/>
      {routes}
    </div>
  );
}

export default App;