import { useAuth } from "../../contexts/AuthProvider"
import CardPet from "../CardPets"
import StyledGrid from "./StyledGrid"

const AdmPets = () => {
    const {userPets} = useAuth()
    return (
        <StyledGrid>
            <CardPet
             pet={userPets[0]}
             admin
             />
             <CardPet
             pet={userPets[0]}
             admin
             />
             <CardPet
             pet={userPets[0]}
             admin
             />
             <CardPet
             pet={userPets[0]}
             admin
             />
              <CardPet
             pet={userPets[0]}
             admin
             />
              <CardPet
             pet={userPets[0]}
             admin
             />
              <CardPet
             pet={userPets[0]}
             admin
             />
              <CardPet
             pet={userPets[0]}
             admin
             />
              <CardPet
             pet={userPets[0]}
             admin
             />
        </StyledGrid>
    )
}

export default AdmPets