import styled from "styled-components";

const media = {
  desktop: "@media(min-width:1024px)",
};

export const BoxWrapper = styled.div`
  ${media.desktop} {
    display: flex;
    justify-content: space-around;
  }
`;

export const MainWrapper = styled.main``;

export const GameRecomend = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 1rem;

  > :first-child {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background: #38363b;
    border-radius: 16px;
    padding: 2rem;
    width: 100%;

    > h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
    }

    > h2 {
      font-weight: 400;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
    }

    > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
  }
`;

export const GamesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;

  ${media.desktop} {
    padding-right: 2rem;
    padding-left: 2rem;
    width: 50%;
  }

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }

  > button {
    margin-top: 7px;
    align-self: center;
    width: 90%;
    height: 40px;
    border: 2px solid #acacac;
    border-radius: 6px;
    background-color: #0f0e10;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const FaqSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  background-color: #38363b;
  margin: 1rem;
  height: 100px;
  border-radius: 16px;

  ${media.desktop} {
    width: 100%;
  }

  > h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`;

export const GameQuerieArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }

  ${media.desktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;

    > :last-child {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right: 1rem;
      padding-left: 1rem;
      margin-bottom: 1rem;
      > button {
        width: 45%;
      }
    }
  }
`;
