import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalProductView from './ModalProductView';

const mockProductView = {
  title: 'Test Product',
  image: 'test-image.jpg',
  price: 100,
  rating: { rate: 4.5 },
  description: 'This is a test product description.'
};

const mockOnClose = jest.fn();

describe('ModalProductView', () => {
  it('renders the modal when isOpen is true', () => {
    render(
      <ModalProductView
        isOpen={true}
        onClose={mockOnClose}
        productView={mockProductView}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg');
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
    expect(screen.getByText('⭐4.5')).toBeInTheDocument();
    expect(screen.getByText('Descrição')).toBeInTheDocument();
    expect(screen.getByText('This is a test product description.')).toBeInTheDocument();
  });

  it('does not render the modal content when isOpen is false', () => {
    render(
      <ModalProductView
        isOpen={false}
        onClose={mockOnClose}
        productView={mockProductView}
      />
    );

    expect(screen.queryByText('Test Product')).not.toBeVisible();
  });

  it('renders nothing when productView is null', () => {
    render(
      <ModalProductView
        isOpen={true}
        onClose={mockOnClose}
        productView={null}
      />
    );

    expect(screen.queryByText('Test Product')).not.toBeInTheDocument();
  });
});