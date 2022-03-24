import {
  Container,
  Stack,
  Typography,
  Grid,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import LoginForm from '../../components/LoginForm'
import Logo from '../../assets/svg/logo.svg'
import Cachorro from '../../assets/svg/cachorroLogo.svg'
import bg_svg from '../../assets/svg/patas_bg.svg'
import { StyledImg } from './StyledBg'
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
            mb: '30px',
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
            mt: '5vh',
            img: { height: 'fitContainer'},
            mb: '30px',
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
                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.21)',
                position: "relative",
              }}
            >
              <Stack sx={{ mt: '2vh'}}>
                <img src={Logo} alt='logo' />
                <Typography
                  variant='h3'
                  alignSelf='end'
                  mr='30px'
                >
                  Login
                </Typography>
                <StyledImg src={bg_svg} style={{width: '500px'}}></StyledImg>
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
                style={{height: "100%"}}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Login