import React from 'react';
import styled from 'styled-components';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfData: string[];  // Corrigir o tipo para ser uma array de strings
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        {pdfData.map((pageText, index) => (
          <div key={index}>
            <p>Página {index + 1}:</p>
            <pre>{pageText}</pre>
          </div>
        ))}
      </ModalContent>
    </ModalOverlay>
  );
};

export default PdfModal;