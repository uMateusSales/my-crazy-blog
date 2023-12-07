import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  background-image: url("/Cover.png");
  min-height: 296px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
`;
export const HeaderTitle = styled.p`
  color: var(--brand-blue, #3294f8);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
