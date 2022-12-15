import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  > div {
    display: flex;
    height: 38px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 90px;
    gap: 7px;
    border-radius: 50px;
    background-color: #fff;
  }
`;
