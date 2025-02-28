import React from 'react';
import { Select, FilterContainer } from '../styles/home-styles';

interface FilterProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onSortOrderChange: (sortOrder: string) => void;
}

const FilterOrder: React.FC<FilterProps> = ({ categories, onCategoryChange, onSortOrderChange }) => {
  return (
    <FilterContainer>
      <Select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Todas as Categorias</option>
        {categories.map((cat: string) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>

      <Select onChange={(e) => onSortOrderChange(e.target.value)}>
        <option value="">Ordenar por Preço</option>
        <option value="asc">Menor para Maior</option>
        <option value="desc">Maior para Menor</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterOrder;