import { StyledCardPet, style } from "./StyledCardPet"
import arrow from '../../assets/svg/Polygon 6.svg'
import editSvg from '../../assets/svg/editar icon.svg'
import paw from '../../assets/svg/paw.svg'
import hotelPetApi from "../../services"
import { Box, Modal } from "@mui/material";
import CardEditPet from "../CardEditPet"
import CardPetsStatus from "../CardPetsStatus";
import ModalPetStatusAdmin from '../ModalPetStatusAdmin'
import { useState } from "react"
import { useAuth } from "../../contexts/AuthProvider"
import dog from '../../assets/pets/dogg.jpg'
import agapornis from '../../assets/pets/agapornis.jpg'
import alien from '../../assets/pets/alien.jpg'
import cat from '../../assets/pets/cat.jpg'
import reptil from '../../assets/pets/reptil.jpg'
import many from '../../assets/pets/many.jpg'

interface petInfo {
  pet: {
    name: string;
    age: number;
    specie: string;
    race: string;
    size: string;
    hospedado: boolean;
    id: number
  },
  admin?: boolean;
}

const CardPet = ({ pet, admin }: petInfo) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [ isHosted, setHosted] = useState(pet.hospedado)
  const { authToken } = useAuth()
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenStatus = () => setOpenStatus(true);
  const handleCloseStatus = () => setOpenStatus(false);

  const onSubmit = () => {
    const hosted = {
      hospedado:true
    }
      if(isHosted){
           hosted.hospedado = false
      }else{
        hosted.hospedado = true
      }

    const newData = { ...pet, ...hosted }

    hotelPetApi.put(`/pets/${pet.id}`, newData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },

    }).then((response) => {

      if (response.status === 200) {

        setHosted(hosted.hospedado)
      }
    })
      .catch((err) => console.log(err.message))
  }
  
  return (
    <StyledCardPet>
      <Modal
        open={openEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardEditPet handleCloseEdit={handleCloseEdit} pet={pet} />
        </Box>
      </Modal>

      {admin && openStatus ?
        <ModalPetStatusAdmin idPet={`${pet.id}`} setShowModal={setOpenStatus} />
        :

        <Modal
          open={openStatus}
          onClose={handleCloseStatus}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardPetsStatus idPet={`${pet.id}`} setOpenStatus={setOpenStatus} />
          </Box>
        </Modal>
      }


      <img className="FotoPet" src={
        pet.specie === 'Cachorro' ?
        dog :
        pet.specie === 'Aves' ? 
        agapornis :
        pet.specie === 'Gato' ?
        cat :
        pet.specie === 'Alien' ?
        alien :
        pet.specie === 'Reptil' ?
        reptil :
        many
      } alt="petImagem"></img>
      <div className="CardContainer">
        <div className="CardHeader">

          <h2>{pet.name}</h2>

          <img className="status" onClick={() => handleOpenStatus()} src={arrow} alt="a"></img>

        </div>
        <section>
          <div>
            <p>Espécie:</p>
            <span> {pet.specie} </span>
          </div>
          <div>
            <p>Raça:</p>
            <span> {pet.race} </span>
          </div>
          <div>
            <p>Idade:</p>
            <span> {`${pet.age} aninhos`} </span>
          </div>
          <div>
            <p>Porte:</p>
            <span> {pet.size} </span>
          </div>

          <div className="div-button">

            <button onClick={() => handleOpenEdit()}>

              <img src={editSvg} alt="edit icon"></img>
              Editar
            </button>
            {admin && 
        <button onClick={() =>  onSubmit()}  
        style={{background:"linear-gradient(180deg, #6D80DF 0%, #3751D8 100%)",
        color:"#FFFFFF",
      }}
        >
          {
            isHosted ? 'Checkout' : 'Hospedar'
          }
          
        </button>  
        }
          </div>
        </section>
      </div>
      <img className="paw" src={paw} alt="patinha">
      </img>
    </StyledCardPet>
  )
}
export default CardPet