import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: 0.625rem 2.5rem;
    background-color: ${theme.colors.brandPrimary};
    color: ${theme.colors.white};
    border-radius: ${theme.rounded.full};
    border: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 1rem;
  `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > * + * {
    margin-left: 0.5rem;
  }

  gap: 0.5rem;
`;
