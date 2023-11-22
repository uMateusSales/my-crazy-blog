import styled from "styled-components";
export const HeaderContainer = styled.header`
  position: relative;
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

export const ProfileCard = styled.div`
  display: flex;
  position: absolute;
  min-width: 864px;
  min-height: 212px;
  bottom: -220px;
  right: 288px;
  left: 288px;
  padding: 32px;
  border-radius: 10px;
  background: #0b1b2b;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;
export const UserName = styled.p`
  color: var(--base-title, #e7edf4);

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const UserBio = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: var(--base-text, #afc2d4);
`;
