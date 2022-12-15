import { Game } from "./style";

type props = {
  name: string;
  banner: string;
  match: number;
};

function GameCard(Item: props) {
  return (
    <Game>
      <div>
        <div>
          <p>{Item.match}% match</p>
        </div>
        <img src={Item.banner} alt="alguma coisa" />
      </div>
      <div>
        <h1>{Item.name}</h1>
      </div>
    </Game>
  );
}

export default GameCard;
