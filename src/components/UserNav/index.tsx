import { useNavigate } from "react-router-dom"
import Container from "./StyledUserNav"
import { useAuth } from "../../contexts/AuthProvider"

const UserNav = () => {

    const infoButton = [
        { children: "Meus Pets", navi: "" },
        { children: "Mimos", navi: ""},
        { children: "Contatos", navi: ""},
        { children: "Configurações", navi: ""},
        { children: "Sair", navi: "/"}
    ]

    let navigate = useNavigate()

    const { logOut } = useAuth()

    const handleClick = (parm: string) => {

        if (parm !== ""){
            if(parm === "/"){
                logOut()
            }
            navigate(parm)
        }

    }
  
      return (
        <Container>
         <h4>Dashboard</h4>
         <hr />

         { infoButton.map((item, index) => 
             (<>
                <button key={index} onClick={() => handleClick(item.navi)} > {item.children}</button>
                <hr />
             </>)
         )}

        </Container>
      )
    }

    export default UserNav