import { Container, Content } from "./styles";
import hotelPetLogo from "../../assets/svg/hotelPetLogo.svg";
import relaxingDog from "../../assets/svg/relaxingDog.svg";

const HotelInfo = () => {
  return (
    <Container>
      <h2>
        O que é o <img src={hotelPetLogo} alt="HotelPet logo" />?
      </h2>
      {/* <img className='paws' src={paws} alt="paws"/> */}
      <Content>
        <img src={relaxingDog} alt="Relaxing dog" />
        <p>
          O HotelPet é a solução para aqueles donos preocupados que querem
          deixar seu pet em segurança e conforto durante sua ausência. O
          HotelPet está entre os mais bem avaliados no ReclameAqui, te
          garantindo tudo o que seu pet precisa.
        </p>
      </Content>
    </Container>
  );
};

export default HotelInfo;
