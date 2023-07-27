import styled from "styled-components";

export const CardLimit = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  justify-items: center;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 416px;
  height: 260px;
  border-radius: 10px;
  background-color: #112131;
  padding: 20px;
`;

export const Body = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #afc2d4;
`;

export const InfosPost = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    width: 283px;
    font-size: 20px;
    line-height: 160%;
    margin-bottom: 10px;
  }
`;
