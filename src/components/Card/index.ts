import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.rounded.lg};
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
  `}
`;
