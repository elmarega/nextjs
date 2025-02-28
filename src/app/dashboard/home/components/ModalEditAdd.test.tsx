import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModalEditAdd from './ModalEditAdd';
import { z } from 'zod';

const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();

const mockEditingProduct = {
  title: 'Test Product',
  description: 'This is a test product description.',
  price: 100,
  category: 'Test Category'
};

describe('ModalEditAdd', () => {
  it('renders the modal with editing product data when isOpen is true and editingProduct is provided', () => {
    render(
      <ModalEditAdd
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        editingProduct={mockEditingProduct}
      />
    );

    expect(screen.getByText('Edição')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Product')).toBeInTheDocument();
    expect(screen.getByDisplayValue('100')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Category')).toBeInTheDocument();
  });

  it('renders the modal with empty form when isOpen is true and editingProduct is not provided', () => {
    render(
      <ModalEditAdd
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        editingProduct={null}
      />
    );

    expect(screen.getByText('Cadastro')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome do Produto')).toHaveValue('');
    expect(screen.getByLabelText('Descrição')).toHaveValue('');
    expect(screen.getByLabelText('Valor')).toHaveValue(null);
    expect(screen.getByLabelText('Categoria')).toHaveValue('');
  });

  it('calls onSubmit and onClose when form is submitted', async () => {
    render(
      <ModalEditAdd
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        editingProduct={null}
      />
    );

    fireEvent.change(screen.getByLabelText('Nome do Produto'), { target: { value: 'New Product' } });
    fireEvent.change(screen.getByLabelText('Descrição'), { target: { value: 'New Description' } });
    fireEvent.change(screen.getByLabelText('Valor'), { target: { value: '200' } });
    fireEvent.change(screen.getByLabelText('Categoria'), { target: { value: 'New Category' } });

    fireEvent.click(screen.getByText('Adicionar'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'New Product',
        description: 'New Description',
        price: 200,
        category: 'New Category'
      });
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  it('does not render the modal when isOpen is false', () => {
    render(
      <ModalEditAdd
        isOpen={false}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        editingProduct={null}
      />
    );

    expect(screen.queryByText('Cadastro')).not.toBeVisible();
  });
});