import {Provider} from 'react-redux';
import './App.css';
import AlbumList from './components/AlbumList';
import FruitSection from './components/FruitSection';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
       <div className="App">
      <h1>My Redux Project</h1>
      <FruitSection/>

      <h3>Album List</h3>
      <AlbumList/>
    </div>
    </Provider>
   
  );
}

export default App;
