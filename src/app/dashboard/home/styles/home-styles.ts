import styled from "styled-components";

export const WrapperHome = styled.div`
  padding: 1rem;
  margin: auto;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  align-items: stretch;
  gap: 20px;
  justify-content: center;
`;

export const BestProducts = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  overflow: auto;
  align-items: stretch;
  gap: 20px;
  padding: 2rem;
  background-color: #ccc;
  border-radius: 8px;
`;

export const Form = styled.form`
  max-width: 400px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    min-width: 269px;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 20px;
`;

export const ContentCard = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  strong {
    margin-top: 1rem;
    align-self: flex-end;
  }

  img {
    margin: auto;
    max-width: 100px;
    max-height: 100px;
    width: 100%;
    height: 100%;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  font-size: 16px;
`;

export const NewProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const ButtonsConfirm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;

interface PaginationButtonProps {
  active: boolean;
}

export const PaginationButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})<PaginationButtonProps>`
  background-color: ${(props) => (props.active ? 'blue' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: 1px solid black;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;