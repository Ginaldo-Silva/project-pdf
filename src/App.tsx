import { useState } from 'react';

import UploadInput from './components/UploadInput/UploadInput'
import ButtonPrimary from './components/Button/ButtonPrimary';
import './App.css'

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log(isNightMode);
  };

  return (
      <div className='container'>
        <div className='header'>
          <ButtonPrimary
            type="button"
            labelText="NightMode"
            isNightMode={isNightMode}
            onClick={() => toggleNightMode()}
          />
        </div>
        <div className='section'>
          <h1>Hello World</h1>
          <UploadInput
            isNightMode={isNightMode}
            type="file"
            id="fileInput"
            name="fileInput"
          />
          <ButtonPrimary
            type="button"
            labelText="Carregar arquivo"
            isNightMode={isNightMode}
          />
        </div>
        <div className='footer'>
          <p>By Ginaldo Silva.</p>
        </div>
      </div>
  )
}

export default App
