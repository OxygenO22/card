import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px 0 10px;
`;

export const CardSectionTitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const CardSectionTitle = styled.h1`
  text-align: start;
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  color: #000;
`;

export const CardSectionTextWrapper = styled.div`
  width: 100%;
`;

export const CardSectionText = styled.p`
  text-align: start;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 20px;
  word-spacing: 1px;
  color: #abb3ba;
`;
