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
          <DivNav>
            <ButtonLogin onClick={() => navigate('/login')}>Login</ButtonLogin>
          </DivNav>
    </Container>
  );
};

export default HeaderHome;
