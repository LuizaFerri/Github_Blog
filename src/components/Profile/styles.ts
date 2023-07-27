import styled from "styled-components";

export const ContainerProfile = styled.div`
  width: 864px;
  height: 212px;
  background-color: #0b1b2b;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  margin-top: -100px;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
  p {
    font-weight: 400px;
  }
`;

export const Name = styled.div`
  color: #e7edf4;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: #c4d4e3;
`;

export const ContainerProfileinfos = styled.div`
  display: flex;
  padding: 20px;
  gap: 10px;
`;

export const ContainerProfileinfos2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
