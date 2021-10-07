import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.rounded.lg};
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export const TitleAndIcons = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
`;

export const Address = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Badges = styled.div`
  > * + * {
    margin-left: 1rem;
  }
`;
