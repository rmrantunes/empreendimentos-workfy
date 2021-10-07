import styled, { css } from "styled-components";

export const Badge = styled.span`
  ${({ theme }) => css`
    display: inline-block;

    padding: 0.5rem 1.5rem;
    border-radius: ${theme.rounded.full};
    border: 1px solid ${theme.colors.brandPrimaryLight};

    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 0.875rem;
  `}
`;
