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
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
interface IFormData {
  email: string
  password: string
}

const LoginForm = () => {
  const { signIn } = useAuth()

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

  const onSubmit: SubmitHandler<IFormData> = (
    data: IFormData
  ) => {
    signIn(data)
  }

  return (
    <Container maxWidth='xs' sx={{ mb: 5 }}>
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
            >
              entrar
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant='contained'>
              Voltar
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <NavLink to='/signup'>
              Primeira vez aqui? Cadastre-se
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default LoginForm
