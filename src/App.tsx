import './App.scss';
import ClickCatcherProvider from './hooks/useClickCatcher';
import WindowDimensionsProvider from './hooks/useWindowDimensions';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <WindowDimensionsProvider>
      <ClickCatcherProvider>
        <MainLayout/>
      </ClickCatcherProvider>
    </WindowDimensionsProvider>
  );
}

export default App;
