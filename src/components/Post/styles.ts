import styled from "styled-components";

export const ContainerPostId = styled.div`
  width: 864px;
  height: 168px;
  background-color: #0b1b2b;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  margin-top: -100px;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DivInfosUser = styled.div`
  display: flex;
  gap: 32px;
  color: #7b96b2;
  font-size: 16px;
  margin-left: 32px;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const DivLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #3294f8;
    margin: 0 32px;
    margin-top: 32px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
`;

export const TitlePost = styled.h1`
  font-size: 24px;
  color: #e7edf4;
  margin-top: 20px;
  margin-left: 32px;
  margin-bottom: 10px;
`;

export const BodyPost = styled.div`
  width: 864px;
  margin-top: 40px;
  margin-bottom: 40px;

  a {
    color: #3294f8;
  }
`;
