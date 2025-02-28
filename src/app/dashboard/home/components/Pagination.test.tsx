import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

const mockOnPageChange = jest.fn();

describe('Pagination', () => {
  beforeEach(() => {
    render(
      <Pagination
        totalPages={5}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );
  });

  it('renders the correct number of page buttons', () => {
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('calls onPageChange with the correct page number when a page button is clicked', () => {
    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('does not highlight non-current page buttons', () => {
    expect(screen.getByText('2')).not.toHaveClass('active');
  });
});