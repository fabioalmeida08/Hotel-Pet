import {
  Container,
  DivNav,
  ButtonLogin,
} from "./styles";
import hotelpeticon from "../../assets/svg/hotelpeticon.svg";
import { useNavigate } from "react-router-dom"

const HeaderHome = () => {

  let navigate = useNavigate()

  return (
    <Container>
      <img onClick={() => navigate('/')} src={hotelpeticon} alt="IconHotelPet" />
          <DivNav>
            <ButtonLogin onClick={() => navigate('/login')}>Login</ButtonLogin>
          </DivNav>
    </Container>
  );
};

export default HeaderHome;
