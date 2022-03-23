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
import React, { useState } from "react";
import { Grid, IconButton, Menu, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"

const HeaderHome = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  const [anchorEl, setAnchorEl] = useState <EventTarget & HTMLButtonElement | null > (null);

  const open = Boolean(anchorEl);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
              <ButtonNav  onClick={() => navigate('/')}>Home</ButtonNav>
            </Home>
            <ButtonNav>Sobre</ButtonNav>
            <ButtonNav>Contato</ButtonNav>
            <ButtonLogin onClick={() => navigate('/login')}>Login</ButtonLogin>
          </DivNav>
        ) : (
          <Grid>
              <IconButton sx={{
                fontSize: '35px',
                color: 'var(--secundary-1)'
              }} aria-label="menu" onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(event)}>
                  <AiOutlineMenu/>
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem sx={{
                  color: 'var(--white)',
                  backgroundColor: 'var(--primary-1)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                    <IoPaw />
                    Home
                  </MenuItem>
                <MenuItem sx={{
                  color: 'var(--white)',
                  backgroundColor: 'var(--primary-1)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <IoPaw />
                  Sobre
                </MenuItem>
                <MenuItem sx={{
                  color: 'var(--white)',
                  backgroundColor: 'var(--primary-1)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <IoPaw />
                  Contato
                </MenuItem>
                <MenuItem sx={{
                  color: 'var(--white)',
                  backgroundColor: 'var(--primary-1)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                }}
                onClick={() => navigate('login')}
                >
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
