import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    border-bottom: 1px solid ${theme.colors.grayDark};

    transition: ${theme.duration.fast};

    :focus-within {
      border-color: ${theme.colors.brandPrimaryLight};
    }
  `}
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;

  padding: 1rem 0;
`;
