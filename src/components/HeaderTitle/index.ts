import styled from "styled-components";

export const HeaderTitle = styled.strong`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
