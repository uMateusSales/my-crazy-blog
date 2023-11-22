import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100%;
  height: 1709px;
  background-color: #071422;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0b1b2b;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const HeaderTitle = styled.p`
  color: var(--brand-blue, #3294f8);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
`;
