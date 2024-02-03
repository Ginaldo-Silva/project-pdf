import { useState } from "react";

export function useModal() {
    const [showModal, setShowModal] = useState(false);

    function switchModal() {
        setShowModal(!showModal);
        console.log('Modal state:', showModal);
    }
    
    return {
        showModal,
        switchModal,
    };
}