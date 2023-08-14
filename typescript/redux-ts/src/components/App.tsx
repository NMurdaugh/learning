import { Provider } from 'react-redux';
import { store } from '../state';
import PackagesList from './PackagesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <PackagesList />
      </div>
    </Provider>
  );
};

export default App;
