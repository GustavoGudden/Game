import styled from "styled-components";

const media = {
  desktop: "@media(min-width:1024px)",
};

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #38363b;
  margin: 1rem;
  border-radius: 16px;

  ${media.desktop} {
    width: 47%;
  }

  > :first-child {
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    border-radius: 16px;
    > h1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
  }

  > :last-child {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #514e55;
    margin-top: 10px;
    height: 48px;
    border-radius: 0px 0px 16px 16px;
    padding-left: 1rem;
    padding-right: 1rem;

    > div {
      gap: 7px;
      display: flex;
      align-items: center;

      > h2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: #ffffff;
      }
    }

    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
  }
`;
