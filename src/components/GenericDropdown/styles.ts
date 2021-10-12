import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div<{ isOpen: boolean }>`
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
    z-index: 10;
    box-shadow: ${theme.shadow.default};
    pointer-events: none;

    transition: ${theme.duration.fast};

    ${isOpen &&
    css`
      overflow-y: scroll;
      pointer-events: all;
      max-height: 15rem;
      opacity: 1;
    `}
  `}
`;

export const Button = styled.button<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: ${theme.colors.white};
    transition: ${theme.duration.fast};
    border: none;

    :hover {
      filter: brightness(0.98);
    }

    ${selected &&
    css`
      filter: brightness(0.98);
    `}
  `};
`;
