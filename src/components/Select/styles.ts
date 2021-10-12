import styled, { css } from "styled-components";

export const Selected = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;
    padding: 1rem 0;
    font-size: 1rem;

    background: transparent;
    border-bottom: 1px solid ${theme.colors.grayDark};

    transition: ${theme.duration.fast};

    cursor: pointer;

    :focus-within {
      border-color: ${theme.colors.brandPrimaryLight};
    }
  `}
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  /* display: none; */
`;
