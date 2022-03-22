import { useNavigate } from "react-router-dom";
import {Container, Title} from "./StyledUserNav";
import { useAuth } from "../../contexts/AuthProvider";
import { IoPaw } from "react-icons/io5";

const UserNav = () => {
  const infoButton = [
    { children: "Meus Pets", navi: "pets" },
    { children: "Mimos", navi: "mime" },
    { children: "Contatos", navi: "contact" },
    { children: "Configurações", navi: "config" },
    { children: "Sair", navi: "/" },
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
        <div>
          <button key={index} onClick={() => handleClick(item.navi)}>
            {" "}
            {item.children}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default UserNav;
