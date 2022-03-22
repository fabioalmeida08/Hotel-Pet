import {
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  ListItemIcon,
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

  const matches = useMediaQuery('(max-width:580px)')
  return (
    <Paper
      sx={{
        marginBottom: '30px',
        height: '100px',
        display: 'flex',
        borderRadius: 0,
        alignItems: 'center',
        backgroundColor: 'var(--primary-1)',
        
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
          <>
            <img src={Logo} alt='' />
          </>
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
                <MenuItem>Carrinho</MenuItem>
                <MenuItem>carrinho2</MenuItem>
              </Menu>
            </Grid>
          )}
        </Grid>
      </Container>
    </Paper>
  )
}

export default DasboardHeader
