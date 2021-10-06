import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 1.75rem;
  `}
`;

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
