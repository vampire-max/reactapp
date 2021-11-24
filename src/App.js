import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Modal from './components/modal';
import Search from './components/search';
import SignIn from './components/SignIn';
import { Switch, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const Toggle = () => setIsModalOen(!isModalOpen);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header setIsModalOpen={setIsModalOpen} />
              <Search />
              <Modal isModalOpen={isModalOpen} />
            </>
          }>
          </Route>
          <Route exact path="/signin" element={<SignIn />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
