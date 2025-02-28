import React from 'react';
import Modal from '@/app/shared/components/Modal';
import Card from '@/app/shared/components/Card';
import { ContentCard } from '../styles/home-styles';
import { Currency } from '@/app/shared/utils/number';

interface ModalProductViewProps {
  isOpen: boolean;
  onClose: () => void;
  productView: any;
}

const ModalProductView: React.FC<ModalProductViewProps> = ({ isOpen, onClose, productView }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {productView && (
        <Card
          title={productView.title}
          content={
            <ContentCard>
              <img src={productView.image} />
              <strong>{Currency(productView.price)}</strong>
              <strong>⭐{productView.rating.rate}</strong>
              <h3>Descrição</h3>
              <span>{productView.description}</span>
            </ContentCard>
          }
        ></Card>
      )}
    </Modal>
  );
};

export default ModalProductView;