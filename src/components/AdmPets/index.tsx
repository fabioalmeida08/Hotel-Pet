import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthProvider"
import CardPet from "../CardPets"
import StyledGrid from "./StyledGrid"

const AdmPets = () => {
    const {authToken} = useAuth()
    const [listPets, setListPets] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
        axios
        .get(`https://hotelpetapi.herokuapp.com/pets`, config)
        .then(resp => setListPets(resp.data))
    })
    return (
        <StyledGrid>
            {listPets.map(pet => <CardPet pet={pet} admin/>)}
        </StyledGrid>
    )
}

export default AdmPets