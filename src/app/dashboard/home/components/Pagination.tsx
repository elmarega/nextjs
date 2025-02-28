import React from 'react';
import { PaginationButton, PaginationContainer } from '../styles/home-styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index}
          onClick={() => onPageChange(index + 1)}
          active={currentPage === index + 1}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;