import './App.css';
import Header from './components/header';
import Search from './components/search';
import google from './images/googlelogo.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="img-wrapper">
        <img alt="Google" height="92" src={google}  width="272" data-iml="1637312839822" data-atf="1" data-frt="0" />
      </div>
      <Search />
    </div>
  );
}

export default App;
