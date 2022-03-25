import {
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useMediaQuery,
  Avatar,
  Stack,
} from '@mui/material'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from '../../assets/svg/dashboardLogo.svg'
import { useAuth } from '../../contexts/AuthProvider'
import { useNavigate } from "react-router-dom"
import dashmimos from '../../assets/svg/dashboard/dashmimos.svg'
import dashcontato from '../../assets/svg/dashboard/dashcontato.svg'
import dashsair from '../../assets/svg/dashboard/dashsair.svg'
import dashdog from '../../assets/svg/dashboard/dashdog.svg'

const DasboardHeader = () => {
  const { userName, logOut } = useAuth()
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  let navigate = useNavigate()

  const infoButton = [
    { children: "Meus Pets", navi: "pets", icon:`${dashdog}`},
    { children: "Mimos", navi: "mime", icon:`${dashmimos}`},
    { children: "Contatos", navi: "contact", icon: `${dashcontato}` },
    { children: "Sair", navi: "/" , icon:`${dashsair}`},
  ];

  const handleClickNav = (parm: string) =>{
    if (parm !== "") {
      if (parm === "/") {
        logOut();
      } else {
        navigate(`/dashboard/${parm}`);
      }
    }
  };

  const matches = useMediaQuery('(max-width:650px)')
  return (
    <Paper
      sx={{
        marginBottom: '30px',
        marginRight: '0px',
        height: '100px',
        display: 'flex',
        borderRadius: 0,
        alignItems: 'center',
        backgroundColor: 'var(--primary-1)',
        width: '100vw',
      }}
      component='header'
    >
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          img: { width: '90px' },
        }}
      >
        {!matches ? (
            <img src={Logo} alt='' />
        ) : (
          <Stack
            direction='row'
            alignItems='center'
            spacing={2}
          >
            <Typography
              variant='h6'
              sx={{ color: 'white' }}
            >
              Bem vindo, {userName}
            </Typography>
            <Avatar>{userName[0]}</Avatar>
          </Stack>
        )}
        <Grid sx={{ button: { width: 'fit-content' } }}>
          {!matches ? (
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
            >
              <Typography
                variant='h6'
                sx={{ color: 'white' }}
              >
                Bem vindo, {userName}
              </Typography>
              <Avatar>{userName[0]}</Avatar>
            </Stack>
          ) : (
            <Grid>
              <IconButton
                aria-label='menu'
                onClick={handleClick}
                sx={{
                fontSize: '35px',
                color: 'var(--secundary-1)'
              }}
              >
                <AiOutlineMenu />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                
              >
                {infoButton.map((item, index) => (
                    <MenuItem sx={{
                      color: 'var(--white)',
                      backgroundColor: 'var(--primary-1)',
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                    }}
                    onClick={() => handleClickNav(item.navi)}
                    >
                      <img src={item.icon} alt={item.children}/>
                      {item.children}
                    </MenuItem>
                ))}
              </Menu>
            </Grid>
          )}
        </Grid>
      </Container>
    </Paper>
  )
}

export default DasboardHeader
