import { Provider } from 'react-redux';
import './App.css';
import { AppRouter } from './router/AppRouter';
import store from './Redux/store';

function App() {
  return (
    <>
    <div className='App'>
      <Provider store={store}>
      <AppRouter/>
      </Provider>
      </div>
    </>
  );
}

export default App;
