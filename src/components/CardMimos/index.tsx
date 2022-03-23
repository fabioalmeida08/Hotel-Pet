import { StyledDivMimos } from "./style"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from "react";
import ConfirmBuy from "../ConfirmBuy/index"
interface CardTypes {
  img: string,
  title: string,
  description: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.none',
  p: 4,
};

const CardMimos = ({img, title, description, }: CardTypes) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <StyledDivMimos>
      <img src={img} alt={title}></img>
      <div className="CardContainer">

        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <button onClick={() => { handleOpen()}

        }>
          Comprar
        </button>
        <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
           <ConfirmBuy service={title}  handle={handleClose}/>
        </Box>
      </Modal>
      </div>
    </StyledDivMimos>

  )
}
export default CardMimos

