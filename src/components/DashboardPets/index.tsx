import { Container, Footer, Content} from "./stylesDashboardPets";
import CardPet from "../CardPets";
import CardRegisterPet from "../CardRegisterPet";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthProvider/index";
import { toast } from "react-toastify";
import buttonDashboardPets from '../../assets/svg/buttonDashboardPets.svg'
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

  const [isOpenModal, setIsOpenModal] = useState(false)

  const { userPets } = useAuth();
  console.log(userPets);

  const handleOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <Content>
        <CardPet/>
      </Content>
      <Footer>
        <button onClick={handleOpen}>
          <img src={buttonDashboardPets} alt="button"/>
        </button>
      </Footer>
      {
        !!isOpenModal && <CardRegisterPet/>
      }
    </Container>
  );
};

export default DashboardPets;
//   const [petsArr, setPetsArr] = useState<typedPets[]>([])
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [filteredPetsState, setFilteredPetsState] = useState([])

//   // Se não tiver pets, a pagina será diferente

//   

//   useEffect(() => {
//     axios
//       .get(`https://hotelpetapi.herokuapp.com/pets`)
//       .then((response) => {
//         setIsAuthenticated(true);
//         setPetsArr(response.data);
//         toast.success("Opa, deu certo!");
//       })
//       .catch((err) => {
//         setIsAuthenticated(false);
//         toast.error("Erro");
//       });
//   }, []);

//   const filteredPets = petsArr.filter((pet) => {
//     setFilteredPetsState(filteredPets)
//     console.log(pet.tutorId)
//     console.log(userId)
//     return pet.tutorId === userId;
//   });
//   console.log(filteredPets)

//   return (
//     <Container>
//       {
//       filteredPets.map(() => {
//          return <CardPet/>
//       })
//       }

//       {/* <CardPet />
//           <button className="button" onClick={() => handleClick()}>+</button> */}
//     </Container>
//   );
// };

// export default DashboardPets;
