import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Modal from './components/modal';
import Search from './components/search';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const Toggle = () => setIsModalOen(!isModalOpen);

  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} />
      <Search />
      <Modal isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;
