import styled, { css } from "styled-components";

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 1.125rem;
    font-weight: 700;
    color: ${theme.colors.textPrimary};
  `}
`;
