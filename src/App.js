import AppRoutes from 'AppRoutes';
import AppStateProvider from 'store/AppStateProvider';
import './App.scss';

function App() {
  return (
    <AppStateProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AppStateProvider>
  );
}

export default App;
