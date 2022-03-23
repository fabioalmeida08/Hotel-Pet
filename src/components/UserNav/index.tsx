import { useNavigate } from "react-router-dom";
import {Container, Title} from "./StyledUserNav";
import { useAuth } from "../../contexts/AuthProvider";
import { IoPaw } from "react-icons/io5";
import dashmimos from '../../assets/svg/dashboard/dashmimos.svg'
import dashconfig from '../../assets/svg/dashboard/dashconfig.svg'
import dashcontato from '../../assets/svg/dashboard/dashcontato.svg'
import dashsair from '../../assets/svg/dashboard/dashsair.svg'
import dashdog from '../../assets/svg/dashboard/dashdog.svg'

const UserNav = () => {
  const infoButton = [
    { children: "Meus Pets", navi: "pets", icon:`${dashdog}`},
    { children: "Mimos", navi: "mime", icon:`${dashmimos}`},
    { children: "Contatos", navi: "contact", icon: `${dashcontato}` },
    { children: "Configurações", navi: "config", icon:`${dashconfig}` },
    { children: "Sair", navi: "/" , icon:`${dashsair}`},
  ];

  let navigate = useNavigate();

  const { logOut } = useAuth();

  const handleClick = (parm: string) => {
    if (parm !== "") {
      if (parm === "/") {
        logOut();
      } else {
        navigate(`/dashboard/${parm}`);
      }
    }
  };

  return (
    <Container>
      <Title>
        <IoPaw/>
        <h4>Dashboard</h4>
      </Title>
      {infoButton.map((item, index) => (
        <div key={index}>
          <button  onClick={() => handleClick(item.navi)}>
            <img src={item.icon} alt="icon"/>
            {item.children}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default UserNav;
