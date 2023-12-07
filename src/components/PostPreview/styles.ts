import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostSection = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 38%;
  height: 200px;
  text-decoration: none;
  border-radius: 10px;
  background: var(--base-post, #112131);
  align-self: center;
  padding: 5%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h4`
  color: var(--base-title, #e7edf4);

  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`;
export const PostContent = styled.p`
  overflow: hidden;
  color: var(--base-text, #afc2d4);
  text-overflow: ellipsis;

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;
