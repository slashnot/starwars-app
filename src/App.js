import AppRoutes from 'AppRoutes';
import AppStateProvider from 'store/AppStateProvider';
import {LoadingProgress} from 'components/ui-components'
import './App.scss';

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <LoadingProgress/>
        <AppRoutes />
      </div>
    </AppStateProvider>
  );
}

export default App;
