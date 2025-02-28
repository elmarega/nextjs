import React from 'react';
import Modal from '@/app/shared/components/Modal';
import { Title, ButtonsConfirm } from '../styles/home-styles';

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>
        <h1>Sucesso</h1>
      </Title>
      <p className="text-center">Produto excluído com sucesso!</p>
      <ButtonsConfirm>
        <button className="primary" onClick={onClose}>
          Fechar
        </button>
      </ButtonsConfirm>
    </Modal>
  );
};

export default ModalSuccess;