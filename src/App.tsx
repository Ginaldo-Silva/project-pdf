import { useState } from 'react';
import { readPdf } from './utilities/pdfService';

import UploadInput from './components/UploadInput/UploadInput';
import ButtonPrimary from './components/Button/ButtonPrimary';
import PdfModal from './components/modal/PdfModal';
import './App.css';

function PdfContent({ pagesText }: { pagesText: string[] }) {
  return (
    <div>
      <h2>Conteúdo do PDF</h2>
      {pagesText.map((pageText, index) => (
        <div key={index}>
          <p>Página {index + 1}:</p>
          <pre>{pageText}</pre>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfData, setPdfData] = useState<string[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log(isNightMode);
  };

  const handleFileChange = async (selectedFile: File) => {
    try {
      const pagesText = await readPdf(selectedFile);

      // Abre o modal antes de atualizar o estado pdfData
      openModal();

      // Aguarde o modal ser aberto antes de atualizar o estado pdfData
      setTimeout(() => {
        setPdfData(pagesText);
      }, 0);
    } catch (error) {
      console.error('Erro ao ler o arquivo PDF:', error);
      // Lide com o erro conforme necessário
    }
  };

  return (
    <>
      <div className='container'>
        <PdfModal
          isOpen={isModalOpen}
          onClose={closeModal}
          pdfData={pdfData}
        />
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
            onFileChange={handleFileChange}
          />
          <ButtonPrimary
            type="button"
            labelText="Carregar arquivo"
            isNightMode={isNightMode}
            onClick={() => openModal()}
          />
        </div>
        <div className='footer'>
          <p>By Ginaldo Silva.</p>
        </div>
      </div>
    </>
  );
}

export default App;