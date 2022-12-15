import styled from "styled-components";

const media = {
  desktop: "@media(min-width:1024px)",
};

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3c3c43;
  border-radius: 7px;
  width: 45%;

  > :first-child {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      position: absolute;
      color: white;
      margin: 7px;
      width: 90px;
      height: 30px;
      border-radius: 10px;
    }

    img {
      border-radius: 7xp 7px 7px 7px;
      height: 100%;
      width: 100%;
    }
  }

  > :last-child {
    display: flex;
    justify-content: center;
    padding: 7px;
    color: #fff;
    > h1 {
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
