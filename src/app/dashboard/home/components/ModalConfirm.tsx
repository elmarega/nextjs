import React from 'react';
import Modal from '@/app/shared/components/Modal';
import { Title, ButtonsConfirm } from '../styles/home-styles';

interface ModalConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productTitle: string;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, onClose, onConfirm, productTitle }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>
        <h1>Confirmar Exclusão</h1>
      </Title>
      <p>Tem certeza que deseja excluir o produto {productTitle}?</p>
      <ButtonsConfirm>
        <button className="primary" onClick={onConfirm}>
          Confirmar
        </button>
        <button onClick={onClose}>
          Cancelar
        </button>
      </ButtonsConfirm>
    </Modal>
  );
};

export default ModalConfirm;