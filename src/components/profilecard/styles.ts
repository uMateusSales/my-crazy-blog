import styled from "styled-components";

export const ProfileCard = styled.div`
  display: flex;

  position: absolute;

  min-height: 212px;
  bottom: -210px;
  right: 288px;
  left: 230px;
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
  justify-content: space-between;
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

export const ContatosCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;
  gap: 10px;
`;

export const LinkContainer = styled.a`
  background-color: #040f1a;
  color: lightblue;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  padding: 4px;
  border: 2px;
  border-color: aliceblue;
  border-radius: 8px;

  &:hover {
    opacity: 80%;
  }
`;
export const LocationContainer = styled.div`
  background-color: #040f1a;
  color: lightblue;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  padding: 4px;
  border: 2px;
  border-color: aliceblue;
  border-radius: 8px;
`;
