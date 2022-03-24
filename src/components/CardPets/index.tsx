import { StyledCardPet, style } from "./StyledCardPet"
import arrow from '../../assets/svg/Polygon 6.svg'
import editSvg from '../../assets/svg/editar icon.svg'
import paw from '../../assets/svg/paw.svg'

import Button from '../Buttons'
import { Dispatch, SetStateAction, useState } from "react";

import { Box, Modal } from "@mui/material";
import CardEditPet from "../CardEditPet"
import CardPetsStatus from "../CardPetsStatus";
import { useAuth } from "../../contexts/AuthProvider"
import ModalPetStatusAdmin from '../ModalPetStatusAdmin'

interface petInfo {
  pet:{
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

const CardPet = ({pet, admin}:petInfo) => {

  const [openEdit, setOpenEdit] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenStatus = () => setOpenStatus(true);
  const handleCloseStatus = () => setOpenStatus(false);

  return(
    <StyledCardPet >
      <Modal
        open={openEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardEditPet handleCloseEdit={handleCloseEdit} pet={pet}/>
        </Box>
      </Modal>

    {admin && openStatus?
  <ModalPetStatusAdmin idPet={`${pet.id}`} setShowModal={setOpenStatus}/>
  :

<Modal
        open={openStatus}
        onClose={handleCloseStatus}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardPetsStatus idPet={`${pet.id}`} setOpenStatus={setOpenStatus}/>
        </Box>
      </Modal>
  }
      

      <img className="FotoPet" src="https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1" alt="petImagem"></img>
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
        <button
        style={{background:"linear-gradient(180deg, #6D80DF 0%, #3751D8 100%)",
        color:"#FFFFFF",
        }}
        >
          {
            pet.hospedado ? 'Checkout' : 'Hospedar'
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