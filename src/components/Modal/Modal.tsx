import styled from 'styled-components';

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
`

const Modal = () => {
    return (
        <ModalOverlay>
            <h1>Seu conteúdo aqui</h1>
        </ModalOverlay>
    );
};

export default Modal;