import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductsPage from './page';
import { fetchProducts, fetchCategories } from '@/app/shared/services/products-services';

jest.mock('@/app/shared/services/products-services');

const mockFetchProducts = fetchProducts as jest.MockedFunction<typeof fetchProducts>;
const mockFetchCategories = fetchCategories as jest.MockedFunction<typeof fetchCategories>;

const queryClient = new QueryClient();

describe('ProductsPage', () => {
  beforeEach(() => {
    mockFetchProducts.mockResolvedValue([
      {
        id: 1,
        title: 'Test Product 1',
        description: 'Description 1',
        price: 100,
        category: 'Category 1',
        rating: { rate: 4.5 },
      },
      {
        id: 2,
        title: 'Test Product 2',
        description: 'Description 2',
        price: 200,
        category: 'Category 2',
        rating: { rate: 4.0 },
      },
    ]);

    mockFetchCategories.mockResolvedValue(['Category 1', 'Category 2']);
  });

  it('renders the products page with products and categories', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductsPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Destaques')).toBeInTheDocument();
      expect(screen.getByText('Listagem de produto')).toBeInTheDocument();
      expect(screen.getAllByText('Test Product 1')[0]).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });
  });
});