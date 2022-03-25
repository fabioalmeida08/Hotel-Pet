import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthProvider"
import CardPet from "../CardPets"
import DashHeader from "../DashHeader"
import { StyledGrid } from "./StyledGrid"

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
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px 10px',
        }
    } >
        <DashHeader paramn="Todos os Pets" /> 
        <StyledGrid>
            {listPets.map(pet => <CardPet pet={pet} admin/>)}
        </StyledGrid>
    </div>
    )
}

export default AdmPets