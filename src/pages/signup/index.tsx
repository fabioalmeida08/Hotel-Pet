
import {
  Container,
  Stack,
  Typography,
  Paper,
  Grid,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import RegisterForm from '../../components/RegisterForm'
import Logo from '../../assets/svg/logo.svg'
import Cachorro from '../../assets/svg/gatoLogo.svg'
const Login = () => {
  const matches = useMediaQuery('(max-width:1210px)')

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
              Cadastre-se
            </Typography>
            <RegisterForm />
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
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                height: 'fitContainer',
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
            <Grid
              item
              sx={{
                img: { width: '100px', alignSelf: 'end' },
                bgcolor: '#EFEFEF',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.21)'
              }}
            >
              <Stack sx={{ mt: '2vh' }}>
                <img src={Logo} alt='logo' />
                <Typography
                  variant='h3'
                  alignSelf='start'
                  ml='30px'
                >
                  Cadastre-se
                </Typography>
                <RegisterForm />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Login