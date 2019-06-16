import React from 'react';
import Main from './screens/main'

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div 
    className="App">
      <Provider store={store}>
          <Main />
      </Provider >
    </div>
  );
}

export default App;
