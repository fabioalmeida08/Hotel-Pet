import { useNavigate } from "react-router-dom"
import Container from "./StyledUserNav"
import { useAuth } from "../../contexts/AuthProvider"

const UserNav = () => {

    const infoButton = [
        { children: "Meus Pets", navi: "pets" },
        { children: "Mimos", navi: "mime"},
        { children: "Contatos", navi: "contact"},
        { children: "Configurações", navi: "config"},
        { children: "Sair", navi: "/"}
    ]

    let navigate = useNavigate()

    const { logOut } = useAuth()

    const handleClick = (parm: string) => {

        if (parm !== ""){
            if(parm === "/"){
                logOut()
            }
            else {
                navigate(`/dashboard/${parm}`)
            }
        }

    }
  
      return (
        <Container>
         <h4>Dashboard</h4>
         { infoButton.map((item, index) => 
             (<div>
                <button key={index} onClick={() => handleClick(item.navi)} > {item.children}</button>
             </div>)
         )}

        </Container>
      ) 
    }

    export default UserNav