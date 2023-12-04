import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0b1b2b;
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
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

export const TopButtons = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(Link)`
  display: flex;
  gap: 8px;
  color: var(--brand-blue, #3294f8);
  align-items: center;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
`;

export const GithubButton = styled(Link)`
  display: flex;
  gap: 8px;
  color: var(--brand-blue, #3294f8);
  align-items: center;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
`;

export const PostTitle = styled.h1`
  color: var(--base-title, #e7edf4);

  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const ContentContainer = styled.section`
  display: flex;
  width: 864px;
  padding: 40px 32px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const PostContent = styled.p`
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
