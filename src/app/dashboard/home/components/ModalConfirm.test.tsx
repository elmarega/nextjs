import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalConfirm from './ModalConfirm';

const mockOnClose = jest.fn();
const mockOnConfirm = jest.fn();

describe('ModalConfirm', () => {
  it('renders the modal with the correct product title when isOpen is true', () => {
    render(
      <ModalConfirm
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        productTitle="Test Product"
      />
    );

    expect(screen.getByText('Confirmar Exclusão')).toBeInTheDocument();
    expect(screen.getByText('Tem certeza que deseja excluir o produto Test Product?')).toBeInTheDocument();
    expect(screen.getByText('Confirmar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(
      <ModalConfirm
        isOpen={false}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        productTitle="Test Product"
      />
    );

    expect(screen.queryByText('Confirmar Exclusão')).not.toBeVisible();
  });

  it('calls onConfirm when the Confirmar button is clicked', () => {
    render(
      <ModalConfirm
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        productTitle="Test Product"
      />
    );

    fireEvent.click(screen.getByText('Confirmar'));
    expect(mockOnConfirm).toHaveBeenCalled();
  });

  it('calls onClose when the Cancelar button is clicked', () => {
    render(
      <ModalConfirm
        isOpen={true}
        onClose={mockOnClose}
        onConfirm={mockOnConfirm}
        productTitle="Test Product"
      />
    );

    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});