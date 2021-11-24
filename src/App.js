import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Modal from './components/modal';
import Search from './components/search';
import SignIn from './components/SignIn';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const Toggle = () => setIsModalOen(!isModalOpen);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header setIsModalOpen={setIsModalOpen} />
          <Search />
          <Modal isModalOpen={isModalOpen} />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
