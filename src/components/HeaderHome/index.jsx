import {
  ButtonNav,
  Container,
  Home,
  DivNav,
  ButtonLogin,
} from "./styles";
import hotelpeticon from "../../assets/svg/hotelpeticon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPaw } from "react-icons/io5";
import { useState } from "react";
import { Grid, IconButton, Menu, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"

const HeaderHome = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate()

  return (
    <Container>
      <img src={hotelpeticon} alt="IconHotelPet" />
      <Grid>
        {matches ? (
          <DivNav>
            <Home>
              <IoPaw />
              <ButtonNav onClick={() => navigate('/')}>Home</ButtonNav>
            </Home>
            <ButtonNav>Sobre</ButtonNav>
            <ButtonNav>Contato</ButtonNav>
            <ButtonLogin onClick={() => navigate('login')}>Login</ButtonLogin>
          </DivNav>
        ) : (
          <Grid>
              <IconButton sx={{
                fontSize: '35px',
                color: 'var(--secundary-1)'
              }} aria-label="menu" onClick={(event) => handleClick(event)}>
                  <AiOutlineMenu/>
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem sx={{
                  color: 'var(--grey-3)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                    <IoPaw />
                    Home
                  </MenuItem>
                <MenuItem sx={{
                  color: 'var(--grey-3)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <IoPaw />
                  Sobre
                </MenuItem>
                <MenuItem sx={{
                  color: 'var(--grey-3)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <IoPaw />
                  Contato
                </MenuItem>
                <MenuItem sx={{
                  color: 'var(--grey-3)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                }}>
                  <IoPaw />
                  Login
                </MenuItem>
              </Menu>
            </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default HeaderHome;
