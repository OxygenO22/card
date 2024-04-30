import styled from "styled-components";

export const CardPictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
