import { Container } from "./stylesNoPets";
import saddog from "../../assets/svg/saddog.svg";

const NoPets = () => {
  return (
    <Container>
      <img src={saddog} alt="Sad dog" />
      <div>
        <h2>Que pena!</h2>
        <p>Ainda não temos nenhum um pet por aqui.</p>
        <p>Aproveite para adicionar seu pet amigo!</p>
      </div>
    </Container>
  );
};

export default NoPets;
