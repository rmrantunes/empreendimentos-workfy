import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

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

export const OptionsContainer = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    max-height: 0px;
    opacity: 0;
    padding: 0.75rem 0;
    width: 100%;
    display: grid;
    background: ${theme.colors.white};

    border-bottom-left-radius: ${theme.rounded.lg};
    border-bottom-right-radius: ${theme.rounded.lg};

    position: absolute;

    transition: ${theme.duration.fast};

    ${isOpen &&
    css`
      max-height: 15rem;
      opacity: 1;
      overflow-y: scroll;
    `}
  `}
`;

export const Option = styled.div<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
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
  display: none;
`;

export const Label = styled.label`
  font-size: 0.875rem;
`;
