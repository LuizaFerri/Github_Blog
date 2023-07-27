import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  gap:10px;
`


export const InputSearch = styled.input`
  display: flex;
  width: 800px;
  height: 54px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #1c2f41;
  background-color: #071422;
  color: #e7edf4;
`;

export const InfosPublication = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 12px;

  span {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    color: #c4d4e3;
  }

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: #7b96b2;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 6px;
  background-color: #112131;
  color: #e7edf4;
  width: 50px;

  &:hover {
    background-color: #1c2f41;
  }
`;