import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 1rem;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    opacity: 0.5;
  }
`;
