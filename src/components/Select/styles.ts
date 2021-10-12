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

export const Label = styled.label<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: ${theme.colors.white};
    transition: ${theme.duration.fast};

    :hover {
      filter: brightness(0.98);
    }

    ${selected &&
    css`
      filter: brightness(0.98);
    `}
  `};
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  /* display: none; */
`;
