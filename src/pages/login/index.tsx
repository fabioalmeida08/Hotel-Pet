import {
  Container,
  Stack,
  Typography,
  Paper,
  Grid,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import LoginForm from '../../components/LoginForm'
import Logo from '../../assets/svg/logo.svg'
import Cachorro from '../../assets/svg/cachorroLogo.svg'
const Login = () => {
  const matches = useMediaQuery('(max-width:1110px)')

  return (
    <>
      {matches ? (
        <Container
          maxWidth='xs'
          sx={{
            mt: '15vh',
            img: { width: '80px', alignSelf: 'start' },
          }}
        >
          <Stack sx={{}}>
            <img src={Logo} alt='logo' />
            <Typography variant='h3' alignSelf='center'>
              Login
            </Typography>
            <LoginForm />
          </Stack>
        </Container>
      ) : (
        <Container
          maxWidth='xl'
          sx={{
            mt: '1vh',
            img: { height: 'fitContainer' },
          }}
        >
          <Grid container justifyContent='center' >
            <Grid
              item
              sx={{
                img: { width: '100px', alignSelf: 'start' },
                bgcolor: '#EFEFEF',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.21)'
              }}
            >
              <Stack sx={{ mt: '2vh' }}>
                <img src={Logo} alt='logo' />
                <Typography
                  variant='h3'
                  alignSelf='end'
                  mr='30px'
                >
                  Login
                </Typography>
                <LoginForm />
              </Stack>
            </Grid>
            <Grid
              item
              sx={{
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                height: 'fitContent',
                bgcolor: '#EFEFEF',
                img:{
                  height: 'fitContainer'
                },
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.21)'
              }}
            >
              <img
                src={Cachorro}
                alt='cachorro segurando uma rosa'
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Login