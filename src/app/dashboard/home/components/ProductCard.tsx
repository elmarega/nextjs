import React from 'react';
import Card from '@/app/shared/components/Card';
import { Currency } from '@/app/shared/utils/number';
import { truncateTitle } from '@/app/shared/utils/truncate-title';
import { ContentCard } from '../styles/home-styles';

interface ProductCardProps {
  product: any;
  onEdit: (product: any) => void;
  onDelete: (product: any) => void;
  onView: (product: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete, onView }) => {
  return (
    <Card
      title={truncateTitle(product.title, 30)}
      content={
        <ContentCard>
          <img src={product.image} />
          <strong>{Currency(product.price)}</strong>
          <strong>⭐{product.rating.rate}</strong>
        </ContentCard>
      }
    >
      <button className="primary" onClick={() => onEdit(product)}>
        Editar
      </button>
      <button className="secondary" onClick={() => onView(product)}>
        Visualizar
      </button>
      <button className="delete" onClick={() => onDelete(product)}>
        Excluir
      </button>
    </Card>
  );
};

export default ProductCard;