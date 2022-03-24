import {
  useForm,
  SubmitHandler,
  Controller,
} from 'react-hook-form'
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  IconButton,
} from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../contexts/AuthProvider'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-toastify'
interface IFormData {
  email: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [loading, setLoading] = useState(false)

  const [hide, setHide] = useState(false)
  const handlePasswordVisibility = () => {
    setHide(!hide)
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email obrigatório')
      .email('Email invalido'),
    password: yup.string().required('Campo obrigatório'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormData> = async  (
    data: IFormData
  ) => {
    setLoading(true)
    await signIn(data)
    if (localStorage.getItem('@hotelPet:token')) {
      toast.success('Login feito com sucesso!', {position: toast.POSITION.TOP_CENTER})
      setTimeout(()=> {
        navigate('/dashboard')
      },500)
    }else{
      toast.error('Usuário ou senha incorretos.', {position: toast.POSITION.TOP_CENTER})
    }
    setLoading(false)
  }

  return (
    <Container maxWidth='xs'>
      <Box
        component='form'
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='email'
              label='Email'
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='password'
              label='Senha'
              type={!hide ? 'password' : 'text'}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handlePasswordVisibility}
                  >
                    {hide ? (
                      <MdVisibilityOff />
                    ) : (
                      <MdVisibility />
                    )}
                  </IconButton>
                ),
              }}
            />
          )}
        />
        <Grid container spacing={2} sx={{ mt: 2, mb: 5 }}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              disabled={loading}
              sx={{':disabled': {background: '#333333', color: 'white'}}}
            >
             {loading ? 'carregando' : 'entrar'}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant='contained'
            onClick={() => navigate('/')}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <NavLink to='/signup' style={{position: 'relative', zIndex: '1000'}}>
              Primeira vez aqui? Cadastre-se
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default LoginForm
