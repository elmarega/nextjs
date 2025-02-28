import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  title: 'Test Product',
  image: 'test-image.jpg',
  price: 100,
  rating: { rate: 4.5 }
};

const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();
const mockOnView = jest.fn();

describe('ProductCard', () => {
  beforeEach(() => {
    render(
      <ProductCard
        product={mockProduct}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        onView={mockOnView}
      />
    );
  });

  it('renders product title', () => {
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product image', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders product price', () => {
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
  });

  it('renders product rating', () => {
    expect(screen.getByText('⭐4.5')).toBeInTheDocument();
  });

  it('calls onEdit when Editar button is clicked', () => {
    fireEvent.click(screen.getByText('Editar'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockProduct);
  });

  it('calls onView when Visualizar button is clicked', () => {
    fireEvent.click(screen.getByText('Visualizar'));
    expect(mockOnView).toHaveBeenCalledWith(mockProduct);
  });

  it('calls onDelete when Excluir button is clicked', () => {
    fireEvent.click(screen.getByText('Excluir'));
    expect(mockOnDelete).toHaveBeenCalledWith(mockProduct);
  });
});