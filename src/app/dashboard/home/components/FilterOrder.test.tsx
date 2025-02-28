import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterOrder from './FilterOrder';

describe('FilterOrder Component', () => {
  const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
  const onCategoryChange = jest.fn();
  const onSortOrderChange = jest.fn();

  beforeEach(() => {
    render(
      <FilterOrder
        categories={categories}
        onCategoryChange={onCategoryChange}
        onSortOrderChange={onSortOrderChange}
      />
    );
  });

  test('renders category options correctly', () => {
    expect(screen.getByText('Todas as Categorias')).toBeInTheDocument();
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test('calls onCategoryChange when a category is selected', () => {
    fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 'Categoria 1' } });
    expect(onCategoryChange).toHaveBeenCalledWith('Categoria 1');
  });

  test('renders sort order options correctly', () => {
    expect(screen.getByText('Ordenar por Preço')).toBeInTheDocument();
    expect(screen.getByText('Menor para Maior')).toBeInTheDocument();
    expect(screen.getByText('Maior para Menor')).toBeInTheDocument();
  });

  test('calls onSortOrderChange when a sort order is selected', () => {
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 'asc' } });
    expect(onSortOrderChange).toHaveBeenCalledWith('asc');
  });
});