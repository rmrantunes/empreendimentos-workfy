import styled from "styled-components";

export const CardItemsWrapper = styled.div`
  display: grid;
  gap: 2rem;

  width: 35rem;

  @media (max-width: 768px) {
    width: 25rem;
  }
`;

export const AddressHighlight = styled.div`
  font-size: 0.875rem;
`;
