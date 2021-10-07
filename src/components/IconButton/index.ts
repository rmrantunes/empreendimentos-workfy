import styled from "styled-components";

export const IconButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  padding: 0.5rem;
  background: transparent;
  cursor: pointer;

  transition: 0.2s;

  :hover {
    filter: brightness(0.6);
  }
`;
