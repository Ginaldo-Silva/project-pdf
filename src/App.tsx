import { useModal } from "./utilities/ShowModal";
import Modal from "./components/Modal/Modal";

import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  const { showModal, switchModal } = useModal();
  return (
    <>
      {showModal && <Modal />}
      <HomePage />
    </>
  );
}

export default App;