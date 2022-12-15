import { ButtonStyle } from "./style";

type BananaProps = {
  text: string;
};

const ButtonCompo = (Props: BananaProps) => {
  return <ButtonStyle>{Props.text}</ButtonStyle>;
};

export default ButtonCompo;
