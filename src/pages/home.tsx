import Header from "../components/header";
import Footer from "../components/footer";
import * as C from "./style";
import GameCard from "../components/gameCard";
import { GameQuerie } from "../components/gameQuerie";
import ButtonCompo from "../components/button";

type Igames = {
  name: string;
  banner: string;
  match: number;
};

function Home() {
  const arrGames: Igames[] = [
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 98,
    },
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 97,
    },
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 88,
    },
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 60,
    },
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 60,
    },
    {
      name: "Apex Legend",
      banner: "https://i.ibb.co/CsT0JJz/Rectangle-73.png",
      match: 60,
    },
  ];

  return (
    <>
      <Header />
      <C.MainWrapper>
        <C.BoxWrapper>
          <C.GameRecomend>
            <div>
              <h1>Card based on the taste</h1>
              <img src="https://i.ibb.co/872fx0x/Group-39.png" alt="Group-39" />
              <h2>miss anything</h2>
              <p>
                You dont t need support, because you are own
                <br />
                support. it will be suprising if you are not in the <br />
                top players of the server.
              </p>
            </div>
            <C.FaqSection>
              <h1>
                Are these good <br />
                recommendations ?
              </h1>

              <div>
                <img
                  src="https://i.ibb.co/mST3MNx/Frame-34311.png"
                  alt="Frame-34311"
                />
                <img
                  src="https://i.ibb.co/124sNY3/Frame-34309.png"
                  alt="Frame-34309"
                />
              </div>
            </C.FaqSection>
          </C.GameRecomend>
          <C.GamesContainer>
            <h1>Fittable game set</h1>
            <div>
              {arrGames.map((item) => {
                return (
                  <GameCard
                    name={item.name}
                    banner={item.banner}
                    match={item.match}
                  ></GameCard>
                );
              })}
            </div>
            {/* <button>show more</button> */}
            <ButtonCompo text="show more" />
          </C.GamesContainer>
        </C.BoxWrapper>

        <C.GameQuerieArea>
          <GameQuerie />
          <GameQuerie />
          <GameQuerie />
          <GameQuerie />
          <GameQuerie />
          <GameQuerie />
          <div>
            <ButtonCompo text="Explore more" />
          </div>
        </C.GameQuerieArea>
      </C.MainWrapper>
      <Footer></Footer>
    </>
  );
}

export default Home;
