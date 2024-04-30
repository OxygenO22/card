import styled from "styled-components";


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px 0 10px;
  gap: 12px;
`;

export const ColoredBtn = styled.button`
  border: none;
  border-radius: 5px;
  background: #4e71fe;
  padding: 6px 20px;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 20px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #a4adcc;
    color: #4e71fe;
  }
`;

export const OutlinedBtn = styled(ColoredBtn)`
  background: #fff;
  border: 2px solid #4e71fe;
  padding: 4px 20px;
  color: #4e71fe;
`;
