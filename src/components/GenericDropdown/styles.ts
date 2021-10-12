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
