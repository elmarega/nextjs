import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalSuccess from './ModalSuccess';

const mockOnClose = jest.fn();

describe('ModalSuccess', () => {
  it('renders the modal when isOpen is true', () => {
    render(<ModalSuccess isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Sucesso')).toBeInTheDocument();
    expect(screen.getByText('Produto excluído com sucesso!')).toBeInTheDocument();
    expect(screen.getByText('Fechar')).toBeInTheDocument();
  });

  it('calls onClose when Fechar button is clicked', () => {
    render(<ModalSuccess isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByText('Fechar'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});