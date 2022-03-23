import {
  Container,
  Footer,
  Content,
  NoPetsContainer,
  Header,
} from "./stylesDashboardPets";
import CardPet from "../CardPets";
import CardRegisterPet from "../CardRegisterPet";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider/index";
import buttonDashboardPets from "../../assets/svg/buttonDashboardPets.svg";
import dashcat from "../../assets/svg/dashboard/dashcat.svg";
import NoPets from "../NoPets";
interface typedPets {
  age: number;
  hospedado: boolean;
  id: number;
  mimos: Array<object>;
  name: string;
  race: string;
  size: string;
  specie: string;
  status: Array<object>;
  tutorId: number;
}

const DashboardPets = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { userPets } = useAuth();
  console.log(userPets);

  const handleOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  if (userPets.length === 0) {
    return (
      <NoPetsContainer>
        <Header>
          <h2>Meus pets</h2>
          <div></div>
        </Header>
        <NoPets />
        <button onClick={handleOpen}>
          <div>
            <img src={dashcat} alt="img button" />
          </div>
          Adicionar pet
        </button>
        {!!isOpenModal && (
          <CardRegisterPet
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </NoPetsContainer>
    );
  } else {
    return (
      <Container>
        <Header>
          <h2>
            Meus pets
          </h2>
            <div></div>
        </Header>
        <Content>
          {userPets.map((pet, index) => {
            console.log(pet);
            return (
              <CardPet
                name={pet.name}
                size={pet.size}
                age={pet.age}
                race={pet.race}
                specie={pet.specie}
                key={index}
              />
            );
          })}
        </Content>
        <Footer>
          <button onClick={handleOpen}>
            <img src={buttonDashboardPets} alt="button" />
          </button>
        </Footer>
        {!!isOpenModal && (
          <CardRegisterPet
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </Container>
    );
  }
};

export default DashboardPets;
