import { Box } from '@mui/material';
import './App.css';
import { Provider } from 'react-redux';
import { persister, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
          
      </PersistGate>
    </Provider>
  );
}

export default App;
